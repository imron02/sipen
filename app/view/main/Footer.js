
Ext.define("Sipen.view.main.Footer",{
    extend: "Ext.panel.Panel",
    xtype: 'appfooter',

    cls: 'app-footer',
    height: 30,
    layout: 'center',

    items: [{
        xtype: 'component',
        width: 350,
        componentCls: 'app-footer-title',
        html: "Imron Rosdiana - http://imron02.wordpress.com"
    }]
});
