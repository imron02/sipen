Ext.define('Sipen.override.CustomVtypes', {
    override: 'Ext.form.field.VTypes',

    // vtype validation for number only
    number: function(value) {
        return this.numberRe.test(value);
    },

    // Regex
    numberRe: /[0-9]$/i,
    numberText: 'Not a valid input. Must be in the format 0-9'
});
