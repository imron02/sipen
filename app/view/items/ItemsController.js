Ext.define('Sipen.view.items.ItemsController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.items-items',
	requires: [ 'Sipen.view.items.ItemsForm' ],

	onAdd: function(btn, e, eOpts) {
		this.createDialog(null);
	},

	createDialog: function(record) {
		var me = this,
			view = me.getView();

		me.dialog = view.add({
			xtype: 'items-form',
			viewModel: {
				data: {
    				title: record ? 'Edit ' + record.get('item_name') : 'Add Item'
    			},
    			links: {
    				currentItem: record || Ext.create('Sipen.model.Items', {
                        '_id': 0
                    })
    			}
			}
		});

		me.dialog.show();
	},

	onSave: function(btn, e, eOpts) {
		var me = this,
    		form = me.lookupReference('form'),
            values = form.getValues();

    	if(form.isValid()) {
    		form.submit({
    			clientValidation: true,
    			url: Sipen.util.Util.globalConfig().url+'/items',
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
    		store = me.getStore('items');

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
		var grid = this.lookupReference('itemsGrid');
		return grid.getSelection();
	},

	onDelete: function(button, e, eOpts) {
		var me = this,
			view = me.getView(),
			records = me.getRecordsSelected(),
			store = me.getStore('items');

		Ext.Msg.show({
			title: 'Delete?',
			msg: 'Are you sure to delete?',
			buttons: Ext.Msg.YESNO,
			icon: Ext.Msg.QUESTION,
			fn: function(btn) {
				if(btn = 'yes') {
					store.remove(records);
					store.sync();
				}
			}
		});
	}
});
