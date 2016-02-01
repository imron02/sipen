Ext.define('Sipen.model.User', {
    extend: 'Sipen.model.Base',

    entityName: 'User',

    fields: [
        {name: '_id', type: 'auto'},
    	{name: 'user_email', type: 'string'},
    	{name: 'user_name', type: 'string'},
        {name: 'user_password', type: 'string'},
    	{name: 'user_telp', type: 'string'},
    	{name: 'user_address', type: 'string'},
        {name: 'user_role', type: 'string'}
    ]
});
