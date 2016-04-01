Ext.define('Sipen.model.Base', {
    extend: 'Ext.data.Model',
    
    requires: [
        'Sipen.util.Util'
    ],

    idProperty: '_id',

    fields: [
        { name: '_id', type: 'auto', persist: false}
    ],

    schema: {
        namespace: 'Packt.model',
        urlPrefix: 'http://localhost:3000/',
        proxy: {
            type: 'rest',
            api :{
                read : '{prefix}{entityName:lowercase}',
                create: '{prefix}{entityName:lowercase}',
                update: '{prefix}{entityName:lowercase}',
                destroy: '{prefix}{entityName:lowercase}'
            },
            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            },
            writer: {
                type: 'json',
                writeAllFields: true,
                encode: true,
                rootProperty: 'data',
                allowSingle: false
            },
            listeners: {
                exception: function(proxy, response, operation) {
                    var respon = Sipen.util.Util.decodeJSON(response.responseText);
                    if(!respon.success)
                        Sipen.util.Util.showErrorMsg(respon.message);
                }
            }
        }
    }
});
