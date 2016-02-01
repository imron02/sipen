Ext.define('Sipen.view.items.TypeItemsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.items-typeitems',

    requires: [
    	'Sipen.model.TypeItems'
    ],

    stores: {
        typeItems: {
            model: 'TypeItems',
            autoLoad: true
        }
    }
});
