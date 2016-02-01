Ext.define("Sipen.view.menu.Accordion",{
    extend: 'Ext.panel.Panel',
    xtype: 'mainmenu',

    requires: [
        'Sipen.view.menu.AccordionController',
        'Sipen.view.menu.AccordionModel'
    ],

    controller: 'accordion',
    viewModel: {
        type: 'accordion'
    },

    width: 250,
    layout: {
        type: 'accordion'
    },

    collapsible: true,
    hideCollapseTool: false,
    split: true,
    iconCls: 'fa fa-sitemap',
    title: 'Menu'
});
