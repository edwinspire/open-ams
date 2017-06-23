require(["dojo/ready", 
  "dojo/cookie",
  "dojo/window",
  "dojo/dom-style",
  "Widget/EventServerIO/EventServerIO",
  "Widget/UserNotifications/UserNotifications",
  "dojo/on",
  "dojo/aspect",
  "dojo/dom-construct", 
  "Widget/app_monitor_general/app_monitor_general", 
  "Widget/app_lista_precios_promo_eco/app_lista_precios_promo_eco", 
  "Widget/app_lista_precios_promo_medi/app_lista_precios_promo_medi", 
  "Widget/app_lista_precios_pnatural/app_lista_precios_pnatural", 
  "Widget/app_lista_precios_eco/app_lista_precios_eco", 
  "Widget/app_lista_precios_medi/app_lista_precios_medi", 
  "Widget/app_secondary_mov_inv_sin_cargar_rm/app_secondary_mov_inv_sin_cargar_eta",
  "Widget/app_secondary_mov_inv_sin_cargar_rm/app_secondary_mov_inv_sin_cargar_rm", 
  "Widget/Geolocations/Geolocations", 
  "Widget/app_account/app_account",
  "Widget/app_tables_views_config/app_tables_views_config",
  //"Widget/app_event_management/app_event_management",
  "Widget/app_event_resumen/app_event_resumen"
  ], function(ready, 
    cookie,
    win,
    domStyle,
    EventServerIO,
    UserNotifications, 
    on,
    aspect,
    domConstruct, 
    app_monitor_general, 
    app_lista_precios_promo_eco, 
    app_lista_precios_promo_medi, 
    app_lista_precios_pnatural, 
    app_lista_precios_eco, 
    app_lista_precios_medi, 
    app_secondary_mov_inv_sin_cargar_eta,
    app_secondary_mov_inv_sin_cargar_rm, 
    app_geolocations, 
    app_account,
    app_tables_views_config,
    //app_event_management,
    app_event_resumen
    ){
    ready(function(){


     // var vs = win.getBox();
     var apps = [];
     apps['app_monitor_general'] = app_monitor_general;
     apps['app_lista_precios_promo_eco'] = app_lista_precios_promo_eco;
     apps['app_lista_precios_promo_medi'] = app_lista_precios_promo_medi;
     apps['app_lista_precios_pnatural'] = app_lista_precios_pnatural;
     apps['app_lista_precios_eco'] = app_lista_precios_eco;
     apps['app_lista_precios_medi'] = app_lista_precios_medi;
     apps['app_geolocations'] = app_geolocations;
     apps['app_account'] = app_account;
     apps['app_tables_views_config'] = app_tables_views_config;
     apps['app_secondary_mov_inv_sin_cargar_eta'] = app_secondary_mov_inv_sin_cargar_eta;
     apps['app_secondary_mov_inv_sin_cargar_rm'] = app_secondary_mov_inv_sin_cargar_rm;
     apps['app_event_resumen'] = app_event_resumen;




     var PageContent = dijit.byId('PageContent');
     var Mainmenu = dijit.byId("MainMenu");

     Mainmenu.on("appname", function(e){
      if(e && apps[e]){
        OpenApp(apps[e]);
      }
    }); 


     on(dojo.byId("ToogleMenu"), "click", function(e){
      Mainmenu.toggle();
    });





     var ESIO = new EventServerIO();
     var NOTIF = new UserNotifications();

     function OpenApp(appClass){
      ResizeContainer();
      PageContent.destroyDescendants();
      var app = new appClass().placeAt(PageContent);
      domStyle.set(app.domNode, "height", '100%');
      Mainmenu.isVisible(false);
    }

    function ResizeContainer(){
      var vs = win.getBox();
      console.debug(vs);
      domStyle.set(PageContent.domNode, "height", (vs.h-30-16)+'px');
      PageContent.resize();
    }

    on(window, 'resize', function(){
      ResizeContainer();        
    });


    aspect.after(window, "resize", function(e) {
      ResizeContainer();        
    });

    ResizeContainer();


  });
  });