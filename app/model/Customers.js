Ext.model('Sipen.model.Customers', {
    extend: 'Sipen.model.Base',

    entityName: 'Customers',
    fields: [
        { name: '_id', type: 'auto' },
        { name: 'customer_name', type: 'string' },
        { name: 'customer_address', type: 'string' }
    ]
})
