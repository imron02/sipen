Ext.define('Sipen.model.Items', {
	extend: 'Sipen.model.Base',
	entityName: 'Items',

	fields: [
		{ name: '_id', type: 'auto' },
		{ name: 'item_code', type: 'string' },
		{ name: 'item_name', type: 'string' },
		{ name: 'item_price', type: 'int' },
		{ name: 'type', type: 'auto' },
		{ name: 'item_status', type: 'string' },
		{ name: 'item_description', type: 'string' }
	]
});
