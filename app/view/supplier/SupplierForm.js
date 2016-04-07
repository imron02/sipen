Ext.define('Sipen.view.supplier.SupplierForm', {
    extend: 'Ext.window.Window',
    xtype: 'supplier-form',

    height: 350,
    width: 500,

    requires: [
        'Sipen.override.CustomVtypes'
    ],

    layout: {
        type: 'fit'
    },
    bind: {
        title: '{title}'
    },

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
                    title: 'Supplier Information',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%',
                        xtype: 'textfield',
                        msgTarget: 'under',
                        labelWidth: 100,
                        allowBlank: false,
                        vtype: 'alphanum'
                    },
                    items: [
                        {
                            xtype: 'hiddenfield',
                            name: '_id',
                            bind: '{currentData._id}'
                        },
                        {
                            fieldLabel: 'Code Supplier',
                            name: 'supplier_code',
                            bind: '{currentData.supplier_code}'
                        },
                        {
                            fieldLabel: 'Company',
                            name: 'supplier_company',
                            vtype: false,
                            bind: '{currentData.supplier_company}'
                        },
                        {
                            fieldLabel: 'Contact',
                            name: 'supplier_contact',
                            vtype: 'number',
                            bind: '{currentData.supplier_contact}'
                        },
                        {
                            xtype: 'textarea',
                            fieldLabel: 'Address',
                            name: 'supplier_address',
                            allowBlank: true,
                            vtype: false,
                            bind: '{currentData.supplier_address}'
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
