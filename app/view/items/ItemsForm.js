Ext.define('Sipen.view.items.ItemsForm', {
	extend: 'Ext.window.Window',
	xtype: 'items-form',

	height: 430,
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
							minValue: 0,
							fieldLabel: 'Price',
							name: 'item_price',
							bind: {
				                value: '{currentItem.item_price}'
				            },
						},
						{
							xtype: 'combo',
						    name: 'type',
							fieldLabel: 'Type',
						    valueField: '_id',
						    displayField: 'type_name',
						    queryMode: 'local',
						    forceSelection: true,
						    bind: {
						    	value: '{currentItem.type_id}',
						    	store: '{typeItems}'
						    }
						},
						{
							xtype: 'radiogroup',
					        fieldLabel: 'Item Status',
							viewModel: {
								formulas: {
									radioValue: {
										bind: '{currentItem.item_status}',
									    get: function(value) {
									    	return {
												item_status: value
									    	};
										},
										set: function(value) {
											this.set('currentItem.item_status', value.item_status);
										}
									}
							    }
						    },
							bind: {
				                value: '{radioValue}'
				            },
					        items: [
					            { boxLabel: 'For sale', name: 'item_status', inputValue: 'for_sale'},
					            { boxLabel: 'Not for sale', name: 'item_status', inputValue: 'not_for_sale'}
					        ]
				        },
						{
							xtype: 'textareafield',
							allowBlank: true,
							name: 'item_description',
							fieldLabel: 'Description',
							grow: true,
							anchor: '100%',
							bind: '{currentItem.item_description}'
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
