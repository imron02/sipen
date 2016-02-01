Ext.define('Sipen.view.security.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',

    requires: [
        'Sipen.view.security.UserForm'
    ],

    onAdd: function(button, e, options) {
        this.createDialog(null);
    },

    createDialog: function(record) {
        var me = this,
            view = me.getView();

        me.dialog = view.add({
            xtype: 'user-form',
            viewModel: {
                data: {
                    title: record ? 'Edit ' + record.get('user_name') : 'Add User'
                },
                links: {
                    currentUser: record || Ext.create('Sipen.model.User', {
                        '_id': 0
                    })
                }
            }
        });

        me.dialog.show();
    },

    onSave: function(button, e, eOpts) {
        var me = this,
            form = me.lookupReference('form'),
            values = form.getValues();

        if(form.isValid()) {
        	if(values.re_password !== values.user_password) {
        		Ext.Msg.show({
        			title: 'Warning!',
        			message: 'Password and Re-password not same.',
        			icon: Ext.MessageBox.WARNING,
                	buttons: Ext.Msg.OK
        		});
        	} else {
	            form.submit({
	                clientValidation: true,
	                url: Sipen.util.Util.globalConfig().url+'/user',
	                scope: me,
	                method: 'POST',
	                success: 'onSaveSuccess',
	                failure: 'onSaveFailure'
	            });
        	}
        }
    },

    onSaveSuccess: function(form, action) {
        var me = this;
        me.onCancel();
        me.refresh();

        var json = Sipen.util.Util.decodeJSON(action.response.responseText);
        Sipen.util.Util.showToast(json.data);
    },

    onSaveFailure: function(form, action) {
        Sipen.util.Util.handleFormFailure(action);
    },

    refresh: function(button, e, eOpts) {
        var me = this,
            store = me.getStore('users');

        store.load();
    },

    onCancel: function(button, e, eOpts) {
        var me = this;
        Ext.destroy(me.dialog);
    },

    onEdit: function(button, e, eOpts) {
        var me = this,
            records = me.getRecordsSelected();

        if(records[0]) {
            me.createDialog(records[0]);
        }
    },

    getRecordsSelected: function() {
        var grid = this.lookupReference('usersGrid');
        return grid.getSelection();
    },

    onDelete: function(button, e, eOpts) {
        var me = this,
            view = me.getView(),
            records = me.getRecordsSelected(),
            store = me.getStore('users');

        if(store.getCount() <= 1) {
            Ext.Msg.show({
                title: 'Warning!',
                msg: 'You cannot delete all user from the application.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
            return;
        }

        Ext.Msg.show({
            title: 'Delete?',
            msg: 'Are you sure to delete?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if(btn === 'yes') {
                    store.remove(records),
                    store.sync();
                }
            }
        });
    }
    
});
