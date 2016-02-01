Ext.define("Sipen.view.items.TypeItems",{
    extend: "Ext.panel.Panel",
    xtype: 'type-items',

    requires: [
        "Sipen.view.items.TypeItemsController",
        "Sipen.view.items.TypeItemsModel",
        'Sipen.view.items.TypeItemsGrid'
    ],

    controller: "items-typeitems",
    viewModel: {
        type: "items-typeitems"
    },

    frame: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'type-items-grid',
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
                        disabled: '{!typeItemsGrid.selection}'
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
                        disabled: '{!typeItemsGrid.selection}'
                    }
                }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            bind: {
                store: '{typeItems}'
            },
            dock: 'bottom',
            displayInfo: true
        }
    ]
});
