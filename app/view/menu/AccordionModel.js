Ext.define('Sipen.view.menu.AccordionModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.accordion',

    stores: {
        data: {
            fields: ['menu', 'iconCls', 'node'],
            data: [
                {
                    menu: 'Master Data',
                    iconCls: 'fa fa-user',
                    node: [
                        {text: 'Users', className: 'user', dataFa: 'user'},
                        {text: 'Tipe Item', className: 'type-items', dataFa: 'tag'},
                        {text: 'Items', className: 'items', dataFa: 'database'},
                        {text: 'Supplier', className: 'supplier', dataFa: 'group'},
                    ]
                },
                {
                    menu: 'Transaction',
                    iconCls: 'fa fa-database',
                    node: [
                        {text: 'Data', className: '', dataFa: 'group'}
                    ]
                },
                {
                    menu: 'Report',
                    iconCls: 'fa fa-file-pdf-o',
                    node: [
                        {text: 'Report', className: '', dataFa: 'file-pdf-o'}
                    ]
                }
            ]
        }
    }

});
