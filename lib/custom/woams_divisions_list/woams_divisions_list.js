define(['dojo/_base/declare',
    'dijit/_Widget',
    'dijit/_Templated',
    'dojo/text!woams_divisions_list/woams_divisions_list.php',
    'jspire/form/FilteringSelect'
], function (declare, _Widget, _Templated, templateString) {

    return declare([_Widget, _Templated], {
        widgetsInTemplate: true,
        templateString: templateString,
        _tempValue: 0,
        postCreate: function () {
            var t = this;

 t.FS.on('Change', function (e) {
t.onChange(e);
                });

        },
onChange(evt){

},
        validate: function () {
            return this.FS.validate();
        },
        _getValueAttr: function () {
            return this.FS.get('value');
        },
        reset: function () {
            this.FS.reset();
        },
        _setValueAttr: function (v) {
            this.FS.set('value', String(v));
            this._tempValue = v;
        },
        displayedValue: function () {
            return this.FS.get('displayedValue');
        },
        focus: function () {
            return this.FS.focus();
        }



    });
});