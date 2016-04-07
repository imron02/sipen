Ext.define('Sipen.view.supplier.SuppliersGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'suppliers-grid',
    plugins: 'gridfilters',

    bind: '{suppliers}',
    reference: 'suppliersGrid',

    columns: [
        { text: 'No', xtype: 'rownumberer', width: 60 },
        { text: 'Code', dataIndex: 'supplier_code', width: 100, filter: 'string' },
        { text: 'Company', dataIndex: 'supplier_company', width: 180, filter: 'string' },
        { text: 'Contact', dataIndex: 'supplier_contact', width: 150, filter: 'number' },
        { text: 'Address', dataIndex: 'supplier_address', flex: 1, filter: 'string' },
    ]
});
