Ext.define("Sipen.view.main.Header",{
    extend: "Ext.toolbar.Toolbar",
    xtype: 'appheader',

    ui: 'footer',

    items: [{
        xtype: 'component',
        componentCls: 'app-header-title',
        html: 'Sistem Penjualan'
    }, {
        xtype: 'tbfill'
    }, {
        xtype: 'button',
        iconCls: 'fa fa-sign-out',
        text: 'Logout'
    }]
});
