Ext.define('Sipen.view.items.ItemsGrid', {
	extend: 'Ext.grid.Panel',
	xtype: 'items-grid',
	plugins: 'gridfilters',

	bind: '{items}',
	reference: 'itemsGrid',
	columns: [
		{ text: 'No', xtype: 'rownumberer', width: 60 },
		{ text: 'Item', dataIndex: 'item_name', width: 200 },
		{ text: 'Code Item', dataIndex: 'item_code', width: 100 },
		{ text: 'Price', dataIndex: 'item_price', renderer: Ext.util.Format.numberRenderer('0,000'), width: 160 },
		{ text: 'Type', dataIndex: 'type', widht: 100, renderer: 
			function(v) {
				return v[0].type_name;
			}
		},
		{ text: 'Status', dataIndex: 'item_status', renderer: 
			function(v) {
				return v.replace(/_/g , " ");
			},
		width: 100, tdCls: 'x-capitalize' },
		{ text: 'Description', dataIndex: 'item_description', flex: 1 }
	]
});
