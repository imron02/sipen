Ext.define("Sipen.view.security.User",{
    extend: 'Ext.panel.Panel',
    xtype: 'user',

    requires: [
        'Sipen.view.security.UsersGrid',
        'Sipen.view.security.UserModel',
        'Sipen.view.security.UserController'
    ],
    store: 'users',

    frame: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    controller: 'user',
    viewModel: {
        type: 'user'
    },

    items: [
        {
            xtype: 'users-grid',
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
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    },
                    listeners: {
                        click: 'onEdit'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    iconCls: 'fa fa-trash',
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    },
                    listeners: {
                        click: 'onDelete'
                    }
                }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            bind: {
                store: '{users}'
            },
            dock: 'bottom',
            displayInfo: true
        }
    ]
});
