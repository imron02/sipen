Ext.define('Sipen.view.items.ItemsModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.items-items',

	requires: [ 'Sipen.model.Items' ],

	stores: {
		items: {
			model: 'Items',
			autoLoad: true
		},
		typeItems: {
			model: 'TypeItems',
			autoLoad: true
		}
	}
});