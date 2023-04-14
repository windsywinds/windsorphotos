
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { createClient } from "contentful";




const Prints = () => {
     const storeDiv = useRef(null);
     const scriptRef = useRef(null);
   
     window.localStorage.setItem("show_ecwid_logs","true")
     window.ecwid_script_defer = true;
     window.ecwid_dynamic_widgets = true;
     window.ec = window.ec || Object();
     window.ec.storefront = window.ec.storefront || Object();
     window.ec.enable_catalog_on_one_page = true;
     window._xnext_initialization_scripts = [{
       widgetType: 'ProductBrowser',
       id: 'my-store-86242021',
       arg: ["id=productBrowser", "categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list"]  }
       
     ];
   
     var script = document.createElement('script');
     script.charset = 'utf-8';
     script.type = 'text/javascript';
     script.src = 'https://app.ecwid.com/script.js?86242021';
     script.defer = true;
     script.ref=scriptRef;
   
   useEffect(() => {
       if(!scriptRef.current){
         storeDiv.current.appendChild(script);
       }
       
   });
   
     return (
   
         <div className="">
          <div className="flex flex-wrap border-2 border-slate-800 rounded-md" id="my-store-86242021" ref={storeDiv}></div>
         </div>
    
   
       );
     }
   
   export default (Prints);

