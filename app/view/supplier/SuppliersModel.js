Ext.define('Sipen.view.supplier.SuppliersModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.suppliers',

    requires: [
        'Sipen.model.Suppliers'
    ],

    stores: {
        suppliers: {
            model: 'Suppliers',
            autoLoad: true
        }
    }
});
