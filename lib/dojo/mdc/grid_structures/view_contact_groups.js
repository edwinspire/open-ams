define("oams/grid_structures/view_contact_groups",['dojo/_base/declare', 'dojo/Evented', 'dojo/date/locale'],function(_1, _2, _3){

  return _1([_2], {
	structure: {description: {r: {field:'description', width: 'auto' , name:'description'},  w: {field:'description', editable: 'true', name:'description'}},
enabled: {r: {field:'enabled', width: 'auto' , dataType: 'boolean', editor: 'dijit/form/CheckBox', editorArgs: {props: 'value: true, disabled: "true"'}, alwaysEditing: true,  name:'enabled'},  w: {field:'enabled', width: 'auto' , editable: 'true', dataType: 'boolean', editor: 'dijit/form/CheckBox', editorArgs: {props: 'value: true'}, alwaysEditing: true, name:'enabled'}},
idcontact: {r: {field:'idcontact', width: 'auto' , name:'idcontact'},  w: {field:'idcontact', editable: 'true', name:'idcontact'}},
idcontactgroup: {r: {field:'idcontactgroup', width: 'auto' , name:'idcontactgroup'},  w: {field:'idcontactgroup', editable: 'true', name:'idcontactgroup'}},
idgroup: {r: {field:'idgroup', width: 'auto' , name:'idgroup'},  w: {field:'idgroup', editable: 'true', name:'idgroup'}},
name: {r: {field:'name', width: 'auto' , name:'name'},  w: {field:'name', editable: 'true', name:'name'}},
note: {r: {field:'note', width: 'auto' , name:'note'},  w: {field:'note', editable: 'true', name:'note'}},
ts: {r: {field:'ts', width: 'auto' , dataType: 'datetime', decorator: function(value)
{
  try {
    if (value) {
      var dt = new Date(value.replace('T', ' '));
return _3.format(dt, { selector: "date", datePattern: "yyyy-MM-dd HH:mm:ss"}); 
    }
  } catch (e) {
    console.error('error decorating date: ' + e.toString());
  }
}, name:'ts'},  w: {field:'ts', editable: 'true', dataType: 'datetime', decorator: function(value)
{
  try {
    if (value) {
      var dt = new Date(value.replace('T', ' '));
return _3.format(dt, { selector: "date", datePattern: "yyyy-MM-dd HH:mm:ss"}); 
    }
  } catch (e) {
    console.error('error decorating date: ' + e.toString());
  }
}, name:'ts'}}}


});


});