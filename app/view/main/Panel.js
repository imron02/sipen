
Ext.define("Sipen.view.main.Panel",{
    extend: "Ext.tab.Panel",
    xtype: 'mainpanel',

    id: 'mainpanel',

    activeTab: 0,

    items: [
        {
            xtype: 'panel',
            iconCls: 'fa fa-home',
            closable: false,
            title: 'Home',
            layout: 'fit'
        }
    ]
});
