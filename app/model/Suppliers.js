Ext.model('Sipen.model.Suppliers', {
    extend: 'Sipen.model.Base',

    entityName: 'Suppliers',
    fields: [
        { name: '_id', type: 'auto' },
        { name: 'supplier_name', type: 'string' },
        { name: 'supplier_company', type: 'string' },
        { name: 'supplier_contact', type: 'string' },
        { name: 'supplier_address', type: 'string' },
    ]
})
