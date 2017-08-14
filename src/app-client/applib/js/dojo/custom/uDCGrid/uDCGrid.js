/**

 * Handles elements

 * @namespace OpenMonitoringSystem

 */
 define(["dojo/_base/declare", 
  "dojo/on",
  "dojo/window",
  "dojo/dom-class",
  'dojo/has',
  "dojo/date/locale",
  'dgrid/Grid',
  'dgrid/Keyboard',
  'dstore/Memory',
  'dojo/store/Memory',
  'dstore/Trackable',
  'dgrid/Selection',
  'dgrid/Selector',
  'dgrid/extensions/Pagination',
  'dgrid/extensions/DijitRegistry',
  'dgrid/Editor',
  'dgrid/extensions/ColumnReorder',
  'dgrid/extensions/ColumnResizer',
  'dgrid/extensions/ColumnHider',
  'dojo/request',
  "dojo/_base/array",
  "dojo/topic",
  "dojo/Deferred",
  'dstore/Filter',
  "dijit/form/TextBox",
  "dijit/form/CheckBox",
  "dijit/form/HorizontalSlider",
  "dijit/form/VerticalSlider",
  "dijit/form/NumberSpinner",
  "dojox/form/TimeSpinner",
  "dijit/form/CurrencyTextBox",
  "dijit/form/DateTextBox",
  "dijit/form/NumberTextBox",
  "dijit/form/SimpleTextarea",
  "dijit/form/Textarea",
  "dijit/form/TimeTextBox",
  "dijit/form/FilteringSelect",
  "FilteringSelectGlobalStore/FilteringSelectGlobalStore",
  "Widget/json_treeview/json_treeview",
  "dojo/parser",
  "dojo/has!touch?dojo/touch:dojo/mouse"
  ], function(declare, on, win, domClass, has, locale, Grid, Keyboard, dMemory, Memory, Trackable, Selection, Selector, Pagination, DijitRegistry, Editor, ColumnReorder, ColumnResizer, ColumnHider, request, array, topic, Deferred, Filter, TextBox, CheckBox,  HorizontalSlider, VerticalSlider, NumberSpinner, TimeSpinner, CurrencyTextBox, DateTextBox, NumberTextBox, SimpleTextarea, Textarea, TimeTextBox, FilteringSelect, FilteringSelectGlobalStore, json_treeview) {
    /**
     * Micro Data Connector dGrid
     *
     * @module uDCGrid/uDCGrid
     */
     return declare("uDCGrid/uDCGrid", [Grid, Keyboard, Selection, Selector, Pagination, Editor, ColumnReorder, ColumnResizer, ColumnHider, DijitRegistry], {

      allowTextSelection: true,
      deselectOnRefresh: false,
      allowTextSelection: true,
      allowSelectAll: true,
             //   selectionMode: t.Config.selectionMode,
             noDataMessage: "No hay datos para mostrar!",
             loadingMessage: "Cargando...",
             rowsPerPage: 20,
             pageSizeOptions: [20, 40, 80, 160, 320, 500],
             className: 'dgrid-autoheight',
             _waiting_select: false,
             _GridFieldsToFilter: [],
             _GridStore: {},
             idProperty: '',
             refreshMode: 0,
             autoUpdateRow: false,
             Gui: {target: '', fields: []},
             target: 'target.json',
             refreshOnTableChanged: [],
             _array_subscribe: [],
             _last_select: {},
             __affected_table: '',
             initialQuery: {},
             _GridFieldsToFilter: [],
             __rowFingerPrint: '',
             _searchTerm: '',
             _enabledload: false,
             uDCProperties: {},
             dbschema: 'public',
             dbtableview: 'none',

    /**
     * @class uDCGrid
     * @param args {object}
              * @property {string}  hiddenFields - Id del contenedor donde se buscaran los campos que tengan el selectorClass
         * @property {string}  fieldTypes - Id del contenedor donde se buscaran los campos que tengan el selectorClass
         * @property {string}  target - Url donde apunta para obtener o enviar datos 
         * @property {string}  table - Tabla a la cual esta vinculado este uDC
         * @property {integer}  idProperty - Nombre del campo que se usa como referecia.
         * @property {string}  nodeContainer - Id del contenedor donde se buscaran los campos que tengan el selectorClass        
         * @property {string}  selectorClass - Selector CSS para buscar los campos que van a pertenecer a este uDC
         * @property {string}  targetFieldtypes - Url de donde se obtendran los tipos de datos de cada campo
         */
         constructor: function(args){
          dojo.safeMixin(this, args);
          //alert(this.__affected_table);
        },
        postCreate:function (args){
          this.inherited(arguments);

          var t = this; 

          t._last_select = t.initialQuery;

//** Crea el store para los datos **//
this._GridStore = new (declare([dMemory, Trackable]))({ data: null, idProperty: this.__idProperty });

//** Obtiene la estructura de las columnas **//
t.getProperties();

 //**  **//
 t.on('dgrid-datachange', function (event) {

  var data = {};
  data[t.__idProperty] = event.cell.row.id;

  data[event.cell.column.field] = event.value;

  if (t.__rowFingerPrint) {
    try {
      data['__rowFingerPrint'] = t.__rowFingerPrint;
      data['__rowFingerPrintValue'] = event.cell.row.data[t.__rowFingerPrint];
    } catch (e) {
      console.error(e);
    }
  }

  t.Update(data);



});

},
_subscribe_table_changed: function(){

  var t = this;
//** Subscribe a los eventos de cambio de datos en X tablas **//
if (Object.prototype.toString.call(t.refreshOnTableChanged) === '[object Array]') {

  array.forEach(t.refreshOnTableChanged, function(item, i){

    t._array_subscribe.push(topic.subscribe("/event/table/changed/"+item, function(data){
     t.Select(t._last_select);
   }));

  });

}

},
disabled: function(_disable){

  if(_disable){
    domClass.add(this.domNode, "element-disabled");
  }else{
    domClass.remove(this.domNode, "element-disabled");
  }
  return this;
},
Filter: function (searchTerm) {

  var t = this;
  t._searchTerm = searchTerm;

  var setToMemory;

  if (t._searchTerm === "") {
    setToMemory = t._GridStore;
  } else {
    var mainFilter;

    array.forEach(t._GridFieldsToFilter, function (columnName) {

      var filter = new Filter().match(columnName, new RegExp(t._searchTerm + "+", "i"));

      if (mainFilter) {
        mainFilter = new Filter().or(mainFilter, filter);
      } else {
        mainFilter = filter;
      }
    });
    setToMemory = t._GridStore.filter(mainFilter);
  }
//console.log();
  t.set("collection", setToMemory);
},

Select: function (_data, _clear_grid_before) {
  var t = this;
  _clear_grid_before = _clear_grid_before || false;
  if(_clear_grid_before){
    t.Clear();
  }

  if (_data) {

    if(t._enabledload){

      t._enabledload = false;
      t._waiting_select = false;
      t._last_select = _data;
      if (!(t.refreshMode == 2 || t.refreshMode == 3)) {
        return t.request(_data, "r");
      }else{
       console.warn('Select no esta habilitado ', t.refreshMode);
     }

   }else{
    t._waiting_select = _data;
  }

} else {
  console.warn('La tabla requiere datos para hacer un select', _data, t._last_select);
}

deferred = new Deferred();
deferred.resolve("success");
return deferred.promise;

},
request: function (_param, _action) {
  var t = this;
  var _data = {};

  if (_param) {
    _data = _param;
  }

  if (t.target) {

var idProperty = t.__idProperty || new Date().getTime();
var idPropertyValue = _data[idProperty];
var rowFingerPrint = t.__rowFingerPrint || new Date().getTime();
var rowFingerPrintValue = _data.__rowFingerPrintValue;

if(idPropertyValue == undefined){
idPropertyValue =  new Date().getTime();
}

if(rowFingerPrintValue == undefined){
rowFingerPrintValue = new Date().getTime();
}



var url = t.target+'/'+t.dbschema+'/'+t.dbtableview+'/'+_action+'/'+idProperty+'/'+idPropertyValue+'/'+rowFingerPrint+'/'+rowFingerPrintValue;

_data.__rowFingerPrint = null;
_data.__rowFingerPrintValue = null;
_data.__idProperty = null;

    var r = request.post(url, {
      data: _data,
      preventCache: true,
      handleAs: "json"
    }
    ).then(
    function (response) {
      switch (_action) {
        case "u":

        if (response.rowCount > 0) {
          t.save();
          t._notifications({ Urgency: 10, Message: 'Update ' + response.rowCount + ' row(s)', Title: 'Registro actualizado' });
        } else {
          t.revert();
          t.Select(t._last_select);
          t._notifications({ Urgency: 2, Message: response.Error, Title: 'Registro no actualizado' });
        }


        break;
        case "r":
        var myData = {
          identifier: "unique_id", items: []
        };

        array.forEach(response, function (item, i) {
          var item_temp = item;
          item_temp.unique_id = i + 1;
          myData.items.push(item_temp);
        });

        t._grid_setData(myData.items);

        break;
        case "delete_rows":

        if (response.Delete > 0) {
          t._notifications({ Urgency: 10, Message: 'Delete ' + response.Delete + ' row(s)', Title: 'Registro eliminado' });
        } else {
          t._notifications({ Urgency: 2, Message: response.error, Title: 'Registro no eliminado' });
        }

        break;
        default:

        break;
      }


    },
    function (error) {
      console.warn(error);
      switch(error.response.status){
        case 404:
        t._notifications({ Urgency: 2, Message: error.response.url+' no encontrada', Title: 'Error 404' });
        break;
        case 500:
        if(error.response.data){
          switch(_action){
            case 'u':
            t.revert();
            t._notifications({ Urgency: 1, Message: 'Error '+error.response.data.data.code, Title: 'No se pudo actualizar' });
            break;
            default:
            t._notifications({ Urgency: 1, Message: 'Error '+error.response.data.data.code, Title: 'Error en el servidor' });
            break;
          }

        }
        break;

      }
    }



    );

    r.then(function(){

      t._enabledload = true;
      switch(_action){
        case 'u':
        t.Select(t._last_select);
        break;
        case 'select_rows':
        t._enabledload = true;
        if(t._waiting_select){
         t.Select(t._waiting_select);
       }
       break;
     }

   });


  } else {
    t._enabledload = true;
    console.warn('No ha definido un Target = ', t.target);
  }
  return r;
},
_notifications: function (_n) {
 topic.publish("/event/user/notify", _n);
},
Update: function (_data) {
  var t = this;
  if (t.__idProperty && t.__idProperty.length > 0) {

   return t.request(_data, "u");                

 } else {
  console.warn('El idProperty es necesario para actualizaciones de registros');
  t.revert();
}
},
delete_selection: function () {
  return this.selected(null, 'delete_selection');
},

_grid_setData: function (_data) {
  var t = this;
  t._GridStore.setData(_data);
  t.set('collection', t._GridStore);
  t.Filter(t._searchTerm);
  return t;
},
getProperties: function(){
 var t = this;

 if(!t.Gui){
  t.Gui = {};
}

if(!t.Gui.target || t.Gui.target.length < 3){
  t.Gui.target = '/db/gui/tvproperties/r/'+new Date().getTime()+'/'+new Date().getTime()+'/'+new Date().getTime()+'/'+new Date().getTime();
  console.warn('Grid no tiene Gui.target para obtener la estructura, se usa la default');
}

var getCol = request.post(t.Gui.target, {
  data: {tschema_tname: t.dbschema+'.'+t.dbtableview, Fields: JSON.stringify(t.Gui.fields)},
  preventCache: true,
  handleAs: "javascript"
}
).then(
function (response) {

console.log(response);

 var columns = [];

 t.Gui.Properties = response[0];


   if(t.Gui && t.Gui.Properties){

    array.forEach(t.Gui.Properties.columns_properties, function(column, i){

      var c = column;

      if(c.editOn && c.editOn == "dblclick" && has("touch")){
      //  alert('Es touch');
        c.editOn = "click";
      }

      if(c.editor){
        switch(c.editor){
          case 'HorizontalSlider':
          c.editor = HorizontalSlider;
          break;
          case 'VerticalSlider':
          c.editor = VerticalSlider;
          break;
          case 'NumberSpinner':
          c.editor = NumberSpinner;
          break;
          case 'TimeSpinner':
          c.editor = TimeSpinner;
          break;
          case 'CurrencyTextBox':
          c.editor = CurrencyTextBox;
          break;
          case 'checkbox':
          c.editor = CheckBox;
          break;
          case 'DateTextBox':
          c.editor = DateTextBox;
          break;
          case 'NumberTextBox':
          c.editor = NumberTextBox;
          break;
          case 'SimpleTextarea':
          c.editor = SimpleTextarea;
          break;
          case 'Textarea':
          c.editor = Textarea;
          break;
          case 'TimeTextBox':
          c.editor = TimeTextBox;
          break;
          case 'FilteringSelectGlobalStore':
          c.editor = FilteringSelectGlobalStore;
          break;
          case 'FilteringSelect':
          c.editor = FilteringSelect;
          break;
          case 'json_treeview':
          c.editor = json_treeview;
          break;
          default:
          c.editor = 'text';
          break;
        }
      }

      if(array.indexOf(t.Gui.fields, c.field) >= 0){
        columns.push(c);
        //console.log(c);
      }

    });

    t.set('columns', columns);
//console.log('Deberia emitir el noteventos');
on.emit(t.domNode, 'dgrid-set-properties', {properties: t.Gui.Properties});


}else{

  console.warn('No se pudo obtener datos del GUI para la tabla '+t.__affected_table);
}
//console.log(columns);


},
function (error) {
  console.error(error + ' ' + t.target);
}
);

getCol.then(function (results) {

  t._GridFieldsToFilter = [];
  for (var index in t.columns) {
    t._GridFieldsToFilter.push(t.columns[index].field);
  }

  t._enabledload = true; 
  t._subscribe_table_changed();

  t.Select(t.initialQuery);
});        




},
SelectWithInitialQuery: function(){
var t = this;
t.Select(t.initialQuery);
},
Clear: function () {
  this._grid_setData([]);
  return this;
},
uninitialize: function(){
  var t = this;
                      //  console.debug('Llama para matar el uDCGrid');
	//clearInterval(t._IntervalRefresh);
//alert();
array.forEach(t._array_subscribe, function(s, i){
 s.remove();        
});

}



















}); 
});
