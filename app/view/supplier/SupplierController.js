Ext.define('Sipen.view.supplier.SupplierController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.suppliers',

    requires: [
        'Sipen.view.supplier.SupplierForm',
        'Sipen.util.Util'
    ],

    onAdd: function (button, e, options) {
        this.createDialog(null);
    },

    createDialog: function (record) {
        var me = this,
            view = me.getView();

        me.dialog = view.add({
            xtype: 'supplier-form',
            viewModel: {
                data: {
                    title: record ? 'Edit '+record.get('supplier_name') : 'Add Supplier'
                },
                links: {
                    currentData: {
                        type: 'Sipen.model.Suppliers',
                        'id': record ? record.id : 0
                    }
                }
            }
        });

        me.dialog.show();
    },

    onSave: function (button, e, eOpts) {
        var me = this,
            form = me.lookupReference('form'),
            values = form.getValues();

        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                url: Sipen.util.Util.globalConfig().url+'/supplier',
                scope: me,
                method: 'POST',
                success: 'onSaveSuccess',
                failure: 'onSaveFailure'
            });
        }
    },

    onSaveSuccess: function (form, action) {
        var me = this;
        me.onCancel();
        me.refresh();

        var json = Sipen.util.Util.decodeJSON(action.response.responseText);
        Sipen.util.Util.showToast(json.data);
    },

    onSaveFailure: function (form, action) {
        Sipen.util.Util.handleFormFailure(action);
    },

    onCancel: function (button, e, eOpts) {
        var me = this;
        Ext.destroy(me.dialog);
    },

    refresh: function (button, e, eOpts) {
        var me = this,
            store = me.getStore('suppliers');

        store.load();
    },

    onEdit: function (button, e, eOpts) {
        var me = this,
            record = me.getRecordsSelected();

        if (record[0]) {
            me.createDialog(record[0]);
        }
    },

    getRecordsSelected: function () {
        var grid = this.lookupReference('suppliersGrid');
        return grid.getSelection();
    },

    onDelete: function (button, e, eOpts) {
        var me = this,
            view = me.getView(),
            record = me.getRecordsSelected(),
            store = me.getStore('suppliers');

        Ext.Msg.show({
            title: 'Delete?',
            msg: 'Are you sure to delete?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                if (btn == 'yes') {
                    store.remove(record);
                    store.sync();
                }
            }
        });
    }
});
