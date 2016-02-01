Ext.define('Sipen.view.items.ItemsForm', {
	extend: 'Ext.window.Window',
	xtype: 'items-form',

	height: 250,
	width: 500,

	layout: { type: 'fit' },
	bind: {title: '{title}'},

	modal: true,
	items: [
		{
			xtype: 'form',
			reference: 'form',
			bodyPadding: 20,
			flex: 1,
			modelValidation: true,
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [
				{
					xtype: 'fieldcontainer',
					flex: 1,
					title: 'Item Information',
					layout: 'anchor',
					defaults: {
						anchor: '100%',
						xtype: 'textfield',
						msgTarget: 'under',
						labelWidht: 100,
						allowBlank: false
					},
					items: [
						{
							xtype: 'hiddenfield',
							name: '_id',
							bind: '{currentItem._id}'
						},
						{
							fieldLabel: 'Code',
							name: 'item_code',
							bind: '{currentItem.item_code}'
						},
						{
							fieldLabel: 'Name',
							name: 'item_name',
							bind: '{currentItem.item_name}'
						},
						{
							xtype: 'numberfield',
							minValue: 1,
							fieldLabel: 'Price',
							name: 'item_price',
							bind: '{currentItem.item_price}'
						},
						{
							xtype: 'combo',
						    name: 'type',
							fieldLabel: 'Type',
						    valueField: 'type_name',
						    displayField: 'type_name',
						    queryMode: 'local',
						    forceSelection: true,
						    submitValue: true,
						    bind: {
						    	value: '{currentItem.type_name}',
						    	store: '{typeItems}'
						    }
						}
					]
				}
			],
			dockedItems: [
				{
					xtype: 'toolbar',
					dock: 'bottom',
					ui: 'footer',
					layout: {
						pack: 'end',
						type: 'hbox'
					},
					items: [
						{
							xtype: 'button',
							text: 'Save',
							formBind: true,
							listeners: {
								click: 'onSave'
							}
						},
						{
							xtype: 'button',
							text: 'Cancel',
							listeners: {
								click: 'onCancel'
							}
						}
					]
				}
			]
		}
	]
});
