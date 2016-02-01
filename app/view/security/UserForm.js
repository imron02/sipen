Ext.define('Sipen.view.security.UserForm', {
    extend: 'Ext.window.Window',
    xtype: 'user-form',

    height: 350,
    width: 500,

    requires: [
        'Sipen.util.Util',
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
                    title: 'User Information',
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
                            fieldLabel: 'Label',
                            bind: '{currentUser._id}'
                        },
                        {
                            fieldLabel: 'Email',
                            name: 'user_email',
                            vtype: 'email',
                            bind: '{currentUser.user_email}'
                        },
                        {
                            fieldLabel: 'Username',
                            name: 'user_name',
                            bind: '{currentUser.user_name}'
                        },
                        {
                            inputType: 'password',
                            fieldLabel: 'Password',
                            name: 'user_password'
                        },
                        {
                            inputType: 'password',
                            fieldLabel: 'Re-Password',
                            name: 're_password'
                        },
                        {
                            fieldLabel: 'Telephone',
                            name: 'user_telp',
                            allowBlank: true,
                            vtype: 'number',
                            bind: '{currentUser.user_telp}'
                        },
                        {
                            xtype: 'textarea',
                            fieldLabel: 'Address',
                            name: 'user_address',
                            allowBlank: true,
                            vtype: false,
                            bind: '{currentUser.user_address}'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Role',
                            name: 'user_role',
                            store: {
                                fields: ['value', 'name'],
                                data: [
                                    {'value': 'admin', 'name': 'Admin'},
                                    {'value': 'user', 'name': 'User'}
                                ]
                            },
                            displayField: 'name',
                            valueField: 'value',
                            bind: '{currentUser.user_role}'
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
