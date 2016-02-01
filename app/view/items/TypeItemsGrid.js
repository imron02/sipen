Ext.define('Sipen.view.items.TypeItemsGrid', {
	extend: 'Ext.grid.Panel',
	xtype: 'type-items-grid',
	plugins: 'gridfilters',

	bind: '{typeItems}',
	reference: 'typeItemsGrid',
	columns: [
		{text: 'No', xtype: 'rownumberer', width: 60},
		{text: 'Type', dataIndex: 'type_name', filter:'string', flex: 1}
	]
})