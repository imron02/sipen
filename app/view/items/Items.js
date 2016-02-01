Ext.define('Sipen.view.items.Items', {
	extend: 'Ext.panel.Panel',
	xtype: 'items',

	requires: [
		'Sipen.view.items.ItemsController',
		'Sipen.view.items.ItemsModel',
		'Sipen.view.items.ItemsGrid'
	],
	store: 'items',

	controller: "items-items",
	viewModel: {
		type: 'items-items'
	},

	freame: true,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	items: [
		{
			xtype: 'items-grid',
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
					iconCls: 'fa fa-pencil',
					listeners: {
						click: 'onEdit'
					},
					bind: {
						disabled: '{!itemsGrid.selection}'
					}
				},
				{
					xtype: 'button',
					text: 'Delete',
					iconCls: 'fa fa-trash',
					listeners: {
						click: 'onDelete'
					},
					bind: {
						disabled: '{!itemsGrid.selection}'
					}
				}
			]
		},
		{
			xtype: 'pagingtoolbar',
			bind: {
				store: '{items}'
			},
			dock: 'bottom',
			displayInfo: true
		}
	]
});