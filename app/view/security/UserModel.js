Ext.define('Sipen.view.security.UserModel', {
    extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.user',

	requires: [
		'Sipen.model.User'
	],

	stores: {
		users: {
			model: 'User',
			autoLoad: true
		}
	}

});
