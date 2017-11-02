define(['dojo/_base/declare',
  'dijit/_Widget',
  'dijit/_Templated',
  'dojo/text!Widget/menu_master/menu_master.html',
  "dojo/Evented",
  "dojo/on", "dojo/dom-class", "dojo/query", "dojo/dom-attr", "dojo/dom-style", "dojo/NodeList-fx", "dojo/fx", "dojo/_base/fx", "dojo/store/Memory", "dijit/tree/ObjectStoreModel", "dijit/Tree", "dojo/request", "dojo/NodeList-traverse", "dijit/layout/AccordionContainer", "dijit/layout/ContentPane",  "dijit/TitlePane", "dijit/form/Button",
  "dijit/MenuSeparator"
  ], function (declare, _Widget, _Templated, templateString, Evented, on, domClass, query, domAttr, domStyle, nodeListFx, fx, baseFx,  Memory, ObjectStoreModel, Tree, request) {

    return declare([_Widget, _Templated, Evented], {
      widgetsInTemplate: true,
      templateString: templateString,
      _visible: true,
      postCreate: function () {

        var t = this;

        t._request();

      },
      isVisible: function(visible){
        var t = this;
        t._visible = visible;
        var slideArgs = {node: this.domNode, top: (dojo.marginBox(this.domNode).t).toString(), unit: "px"};
        var widthMenu = parseInt(domStyle.getComputedStyle(this.domNode).width, 10); 

        if(visible){
          slideArgs.left = 0;
        }else{
          slideArgs.left = (dojo.marginBox(this.domNode).l - widthMenu).toString();
        }

        dojo.fx.slideTo(slideArgs).play();
      },
      toggle: function(){
        this.isVisible(!this._visible);
      },
      _request: function(){

        var t = this;

        var target = '/db/gui/menus/r/'+new Date().getTime()+'/'+new Date().getTime()+'/'+new Date().getTime()+'/'+new Date().getTime();

        request.post(target, {
          preventCache: true,
          handleAs: 'json'
        }).then(
        function (response) {

          if(response.length > 0){
            t._create_tree(response);
          }

        },
        function (e) {
          console.error(e);
        }
        );

      },
      _create_tree: function(response){
        var t = this;
        var myStore = new Memory({
          data: response,
          getChildren: function(object){
            return this.query({parent: object.id});
          }
        });

        var myModel = new ObjectStoreModel({
          store: myStore,
          query: {id: 0}
        });


    // Create the Tree.
    var tree = new Tree({
      model: myModel,
      showRoot: false,
      //openOnClick: true,
      onClick: function(item, node, event){
        console.log(item);
this._onExpandoClick({node: node}); // This will expand the node
if(item.nameeventonclick){
  //t.emit('clickitem', item.nameeventonclick);
  t.emit('appname', item.appname);
  console.log(item);
}
if(item.url){
  window.location.href = item.url;
}

},
getIconClass: function(item, opened) {
      // console.log(item);
      if (item.type == "item") {
        return "dijitLeaf";
      } else if (item.launched) {
        return (opened ? "dijitFolderOpened" : "dijitFolderClosed");
      }else if(item.type == "application"){
        return "dijitIconApplication";
      }else if(item.type == "configure"){
        return "dijitIconConfigure";        
      } else {
        return (opened ? "dijitFolderOpened" : "dijitFolderClosed");
      }
    }
  });
    tree.placeAt(t.Test);
    tree.startup();
    t.isVisible(true);
  }





});
  });
