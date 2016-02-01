Ext.define('Sipen.view.security.UsersGrid', {
	extend: 'Ext.grid.Panel',
	xtype: 'users-grid',
	plugins: 'gridfilters',

	bind: '{users}',
	reference: 'usersGrid',

	columns: [
		{text: 'No', xtype: 'rownumberer', width: 60},
        {text: 'Email',  dataIndex: 'user_email', width: 180, filter:'string'},
        {text: 'User Name',  dataIndex: 'user_name', tdCls: 'x-capitalize', width: 180, filter:'string'},
        {text: 'Telephone', dataIndex: 'user_telp', width: 150},
        {text: 'Address', dataIndex: 'user_address', flex: 1},
		{text: 'Role', dataIndex: 'user_role', width: 100, tdCls: 'x-capitalize'}
	]
});