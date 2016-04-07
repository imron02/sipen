Ext.define('Sipen.view.supplier.Suppliers', {
	extend: 'Ext.panel.Panel',
	xtype: 'supplier',

	requires: [
		'Sipen.view.supplier.SuppliersGrid',
		'Sipen.view.supplier.SuppliersModel',
		'Sipen.view.supplier.SupplierController',
	],
	store: 'suppliers',

	frame: true,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	controller: 'suppliers',
	viewModel: {
		type: 'suppliers'
	},

	items: [
		{
			xtype: 'suppliers-grid',
			flex: 1
		}
	],

	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'top',
			items: [
				{
					xtype: 'button',
					text: 'Add',
					iconCls: 'fa fa-plus',
					listeners: {
						click: 'onAdd'
					}
				},
				{
					xtype: 'button',
					text: 'Edit',
					iconCls: 'fa fa-edit',
					listeners: {
						click: 'onEdit'
					}
				},
				{
					xtype: 'button',
					text: 'Delete',
					iconCls: 'fa fa-trash',
					listeners: {
						click: 'onDelete'
					}
				}
			]
		},
		{
			xtype: 'pagingtoolbar',
			dock: 'bottom',
			bind: {
				store: '{suppliers}'
			},
			displayInfo: true
		}
	]
});
