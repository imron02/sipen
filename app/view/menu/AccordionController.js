Ext.define('Sipen.view.menu.AccordionController', {
    extend: 'Ext.app.ViewController',
	alias: 'controller.accordion',

    requires: [
        'Sipen.view.menu.Tree',
        'Sipen.view.security.User',
        'Sipen.view.items.TypeItems',
        'Sipen.view.items.Items'
    ],

    renderDynamicMenu: function(view, options) {
        var me = this,
            store = me.getView().getViewModel().getStore('data');

        var dynamicMenus = [];

        store.each(function(records){

            // Create tree panel
            var menu = Ext.create('Sipen.view.menu.Tree');
            for (var i=0; i<Object.keys(records.get('node')).length; i++){
                nodes = {
                    text: records.get('node')[i].text,
                    className: records.get('node')[i].className,
                    dataFa: records.get('node')[i].dataFa,
                    leaf: true
                };
                menu.getRootNode().appendChild(nodes);
            }

            // Create menu accordion
            dynamicMenus.push({
                title: records.get('menu'),
                iconCls: records.get('iconCls'),
                items: menu
            });

        });

        view.add(dynamicMenus);
    },

	onTreePanelItemClick: function(view, record, item, index, eventObj) {

		var me = this,
            mainPanel = Ext.getCmp('mainpanel');

        var newTab = mainPanel.items.findBy(function (tab){
            return tab.title === record.get('text');
        });

        if (!newTab){
            newTab = mainPanel.add({
                xtype: record.get('className'),
                title: record.get('text'),
                iconCls: 'fa fa-'+record.get('dataFa'),
                closable: true
            });
        }

        mainPanel.setActiveTab(newTab);
	},

    init: function(application) {

        this.control({
            "menutree": {
                itemclick: this.onTreePanelItemClick
            },
            "mainmenu": {
                render: this.renderDynamicMenu
            }
        });
    }
    
});
