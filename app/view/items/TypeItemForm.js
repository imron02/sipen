Ext.define('Sipen.view.items.TypeItemForm', {
	extend: 'Ext.window.Window',
	xtype: 'items-typeform',

	height: 170,
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
					title: 'Item Type Information',
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
							bind: '{currentType._id}'
						},
						{
							fieldLabel: 'Type',
							name: 'type_name',
							bind: '{currentType.type_name}'
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