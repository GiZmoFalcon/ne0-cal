(this["webpackJsonpneo-calc"]=this["webpackJsonpneo-calc"]||[]).push([[0],[,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_gizmofalcon_Documents_react_projects_neo_calc_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_styles_components_Button_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),_styles_components_Button_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_styles_components_Button_css__WEBPACK_IMPORTED_MODULE_2__),_contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),doSomething=function doSomething(type,name,state){switch(type){case"func":"del"===name?(state.updateGlobalState(Object(_home_gizmofalcon_Documents_react_projects_neo_calc_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state.GlobalState,{expression:state.GlobalState.expression.slice(0,-1)})),console.log("deleting")):"AC"===name&&(state.updateGlobalState(Object(_home_gizmofalcon_Documents_react_projects_neo_calc_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state.GlobalState,{expression:"",history:""})),console.log("Clearing"));break;case"math":var symbols=["/","x","+","-","(",")"];if(""===state.GlobalState.expression||symbols.indexOf(state.GlobalState.expression[state.GlobalState.expression.length-1])+1&&symbols.indexOf(name)+1){console.log("Can't evaluate the expression");break}"X"===name?(state.updateGlobalState(Object(_home_gizmofalcon_Documents_react_projects_neo_calc_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state.GlobalState,{expression:state.GlobalState.expression+"x"})),console.log("multiply")):"%"===name?symbols.indexOf(state.GlobalState.expression[state.GlobalState.expression.length-1])+1?console.log("can't add %"):state.updateGlobalState(Object(_home_gizmofalcon_Documents_react_projects_neo_calc_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state.GlobalState,{expression:state.GlobalState.expression+"/100"})):(state.updateGlobalState(Object(_home_gizmofalcon_Documents_react_projects_neo_calc_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state.GlobalState,{expression:state.GlobalState.expression+name})),console.log("add math fn"));break;case"normal":state.updateGlobalState(Object(_home_gizmofalcon_Documents_react_projects_neo_calc_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state.GlobalState,{expression:state.GlobalState.expression+name})),console.log("add number");break;case"equals":var internalExpression=state.GlobalState.expression.replace("x","*");state.updateGlobalState(Object(_home_gizmofalcon_Documents_react_projects_neo_calc_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state.GlobalState,{history:state.GlobalState.expression,expression:JSON.stringify(eval(internalExpression))})),console.log("evaluating")}},Button=function(e){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_3__.a.Consumer,null,(function(t){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"btn ".concat(e.type),onClick:function(a){doSomething(e.type,e.name,t)}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,e.name))}))};__webpack_exports__.a=Button},function(e,t,a){"use strict";var n=a(0),o=a.n(n).a.createContext();t.a=o},,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),_=a(5),l=a.n(_),r=(a(12),a(13),a(6)),c=(a(14),a(1)),s=(a(16),function(){return o.a.createElement("div",{className:"button-grid"},o.a.createElement(c.a,{name:"AC",type:"func"}),o.a.createElement(c.a,{name:"del",type:"func"}),o.a.createElement(c.a,{name:"%",type:"math"}),o.a.createElement(c.a,{name:"/",type:"math"}),o.a.createElement(c.a,{name:"7",type:"normal"}),o.a.createElement(c.a,{name:"8",type:"normal"}),o.a.createElement(c.a,{name:"9",type:"normal"}),o.a.createElement(c.a,{name:"X",type:"math"}),o.a.createElement(c.a,{name:"4",type:"normal"}),o.a.createElement(c.a,{name:"5",type:"normal"}),o.a.createElement(c.a,{name:"6",type:"normal"}),o.a.createElement(c.a,{name:"-",type:"math"}),o.a.createElement(c.a,{name:"1",type:"normal"}),o.a.createElement(c.a,{name:"2",type:"normal"}),o.a.createElement(c.a,{name:"3",type:"normal"}),o.a.createElement(c.a,{name:"+",type:"math"}),o.a.createElement(c.a,{name:".",type:"normal"}),o.a.createElement(c.a,{name:"0",type:"normal"}),o.a.createElement(c.a,{name:"()",type:"func"}),o.a.createElement(c.a,{name:"=",type:"equals"}))}),i=(a(17),a(2)),m=function(){return o.a.createElement(i.a.Consumer,null,(function(e){return o.a.createElement("div",{className:"current-display"},o.a.createElement("p",null,e.GlobalState.expression||"0"))}))},u=(a(18),function(){return o.a.createElement(i.a.Consumer,null,(function(e){return o.a.createElement("div",{className:"history-display"},o.a.createElement("p",null,e.GlobalState.history))}))}),p=(a(19),function(){return o.a.createElement("div",{className:"display"},o.a.createElement(u,null),o.a.createElement(m,null))}),E=(a(20),function(e){return o.a.createElement(i.a.Consumer,null,(function(e){return console.log(JSON.stringify(e)),o.a.createElement("div",{className:"calculator"},o.a.createElement(p,null),o.a.createElement(s,null))}))});var d=function(e){var t=o.a.useState({expression:"",answer:0,history:""}),a=Object(r.a)(t,2),n=a[0],_=a[1];return o.a.createElement(i.a.Provider,{value:{GlobalState:n,updateGlobalState:_}},o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(E,null))))},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/neo-calc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/neo-calc","/service-worker.js");b?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()}],[[7,1,2]]]);
//# sourceMappingURL=main.ca0b0e62.chunk.js.map