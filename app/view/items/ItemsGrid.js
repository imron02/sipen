Ext.define('Sipen.view.items.ItemsGrid', {
	extend: 'Ext.grid.Panel',
	xtype: 'items-grid',
	plugins: 'gridfilters',

	bind: '{items}',
	reference: 'itemsGrid',
	columns: [
		{ text: 'No', xtype: 'rownumberer', width: 60 },
		{ text: 'Item', dataIndex: 'item_name', width: 100 },
		{ text: 'Code Item', dataIndex: 'item_code', width: 100 },
		{ text: 'Price', dataIndex: 'item_price', renderer: Ext.util.Format.numberRenderer('0,000'), width: 100 },
		{ text: 'Type', dataIndex: 'type_name', flex: 1 }
	]
});
