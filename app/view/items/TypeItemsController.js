Ext.define('Sipen.view.items.TypeItemsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.items-typeitems',
    
    requires: [ 'Sipen.view.items.TypeItemForm' ],

    onAdd: function(button, e, options) {
    	this.createDialog(null);
    },

    createDialog: function(record) {
    	var me = this,
    		view = me.getView();

    	me.dialog = view.add({
    		xtype: 'items-typeform',
    		viewModel: {
    			data: {
    				title: record ? 'Edit' + record.get('type_name') : 'Add Type'
    			},
    			links: {
    				currentType: record || Ext.create('Sipen.model.TypeItems', {
                        '_id': 0
                    })
    			}
    		}
    	});

    	me.dialog.show();
    },

    onSave: function(button, e, eOpts) {
    	var me = this,
    		form = me.lookupReference('form');

    	if(form.isValid()) {
    		form.submit({
    			clientValidation: true,
    			url: Sipen.util.Util.globalConfig().url+'/typeitems',
    			scope: me,
    			method: 'POST',
    			success: 'onSaveSuccess',
    			failure: 'onSaveFailure'
    		})
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

    onCancel: function(button, e, eOpts) {
    	var me = this;
    	Ext.destroy(me.dialog);
    },

    refresh: function(button, e, eOpts) {
    	var me = this;
    		store = me.getStore('typeItems');

    	store.load();
    },

    onEdit: function(button, e, eOpts) {
    	var me = this,
    		records = me.getRecordsSelected();

    	if(records[0]) {
    		me.createDialog(records[0]);
    	}
    },

    getRecordsSelected: function() {
    	var grid = this.lookupReference('typeItemsGrid');
    	return grid.getSelection();
    },

    onDelete: function(button, e, eOpts) {
    	var me = this,
    		view = me.getView(),
    		records = me.getRecordsSelected(),
    		store = me.getStore('typeItems');

    	Ext.Msg.show({
    		title: 'Delete?',
    		msg: 'Are you sure to delete?',
    		buttons: Ext.Msg.YESNO,
    		icon: Ext.Msg.QUESTION,
    		fn: function(btn) {
    			if(btn == 'yes') {
    				store.remove(records);
    				store.sync();
    			}
    		}
    	})
    }
});
