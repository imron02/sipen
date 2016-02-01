/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Sipen.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Sipen.view.main.Header',
        'Sipen.view.main.Footer',
        'Sipen.view.main.Panel',
        'Sipen.view.menu.Accordion'
    ],

    layout: {
        type: 'border'
    },

    items: [
        {
            region: 'north',
            xtype: 'appheader'
        }, 
        {
            region: 'west',
            xtype: 'mainmenu'
        }, 
        {
            region: 'center',
            xtype: 'mainpanel'
        }, 
        {
            region: 'south',
            xtype: 'appfooter'
        }
    ]
});
