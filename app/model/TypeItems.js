Ext.define('Sipen.model.TypeItems', {
    extend: 'Sipen.model.Base',
	entityName: 'TypeItems',
	
    fields: [
    	{name: '_id', type: 'auto'},
        { name: 'type_name', type: 'string' }
    ]
});
