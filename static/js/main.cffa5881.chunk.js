(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,a){e.exports=a(266)},260:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},264:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);a(172),a(222);var n=a(0),i=a.n(n),r=a(29),s=a.n(r),o=a(35),l=a.n(o),c=a(106),m=a(45),u=a(46),h=a(49),d=a(47),p=a(50),k=a(9),w=(a(97),a(48)),f=a(102),g=a.n(f);var S=function(e){var t=e.item,a=e.router;return i.a.createElement("div",null,i.a.createElement(k.f,{left:i.a.createElement(g.a,{onClick:function(){return a.navigate("items")}})},"Test"),"undefined"!==typeof t&&i.a.createElement(k.b,null,i.a.createElement(k.c,null,t.name),i.a.createElement(k.a,null,t.cat_name),i.a.createElement(k.a,null,t.id)))},b=(a(260),a(261),a(262),function(e){var t=e.title,a=e.description;return i.a.createElement("div",{className:"BlockName"},i.a.createElement("div",{className:"TitleBlock"},t),i.a.createElement("div",{className:"AboutBlock"},a))}),P=(a(263),{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center"}),v=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.items,e.SetitemCurrentId,e.categories),a=e.router;e.userInfo,Object(k.i)();return i.a.createElement("div",null,i.a.createElement(k.f,{noShadow:!0},"Havcheek"),i.a.createElement(k.a,{className:"Header"},i.a.createElement(k.d,null,i.a.createElement("div",{style:{display:"flex"}},t.map(function(e,t){return i.a.createElement("div",{className:"CatBlock",style:P,onClick:function(){a.navigate("cat",{id:e.id})}},i.a.createElement("div",null),i.a.createElement("span",{className:"CatItemText"},e.name))})))),i.a.createElement(k.a,{className:"Container"},i.a.createElement(b,{title:"Test",description:"Test2"}),"Lorem Ipsum - All the facts - Lipsum generator lipsum.com Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?"))}}]),t}(i.a.Component),E=(a(264),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).addItem=function(e){e.id=a.state.items.length+1,a.setState({items:[].concat(Object(c.a)(a.state.items),[e])})},a.SetitemCurrentId=function(e){return a.setState({currentTaskId:e})},a.go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={items:[{id:1,name:"Burger King",cat_name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d",description:"Show me the Persik, please Show me the Persik, please Show me the Persik, please Show me the Persik, please"},{id:2,name:"Burger King",cat_name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d",description:"Show me the Persik, please Show me the Persik, please Show me the Persik, please Show me the Persik, please"},{id:3,name:"Burger King",cat_name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d",description:"Show me the Persik, please Show me the Persik, please Show me the Persik, please Show me the Persik, please"},{id:4,name:"Burger King",cat_name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d",description:"Show me the Persik, please Show me the Persik, please Show me the Persik, please Show me the Persik, please"},{id:5,name:"Burger King",cat_name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d",description:"Show me the Persik, please Show me the Persik, please Show me the Persik, please Show me the Persik, please"},{id:6,name:"Burger King",cat_name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d",description:"Show me the Persik, please Show me the Persik, please Show me the Persik, please Show me the Persik, please"},{id:7,name:"Burger King",cat_name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d",description:"Show me the Persik, please Show me the Persik, please Show me the Persik, please Show me the Persik, please"},{id:8,name:"Burger King",cat_name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d",description:"Show me the Persik, please Show me the Persik, please Show me the Persik, please Show me the Persik, please"}],categories:[{id:1,name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d"},{id:2,name:"\u0411\u0430\u0440"},{id:3,name:"\u0424\u0430\u0441\u0442\u0444\u0443\u0434"},{id:4,name:"\u0421\u0443\u0448\u0438"}],activePanel:"home",currentTaskId:null,fetchedUser:null,item_id:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppSetViewSettingsFailed":console.log(t.detail.data);break;default:console.log(t.detail.type)}}),l.a.send("VKWebAppGetUserInfo",{}),l.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#19082c"})}},{key:"render",value:function(){var e=this.props,t=e.route,a=e.router,n="add"===t.name?"addView":"itemsView",r=t.name;return i.a.createElement(k.g,{activeView:n},i.a.createElement(k.h,{activePanel:r,id:"itemsView"},i.a.createElement(k.e,{id:"home"},i.a.createElement(v,{router:a,categories:this.state.categories,items:this.state.items,SetitemCurrentId:this.SetitemCurrentId})),i.a.createElement(k.e,{id:"cat"},i.a.createElement(k.f,null,"Test OnClickCat"),"Test"),i.a.createElement(k.e,{id:"item"},i.a.createElement(S,{router:a,item:this.item_id[0]}))))}},{key:"item_id",get:function(){var e=Number(this.props.route.params.id)||this.state.currentTaskId;return this.state.items.filter(function(t){return t.id===e})}}]),t}(i.a.Component)),y=function(e){return i.a.createElement(w.a,{nodeName:""},function(t){var a=t.route;return i.a.createElement(E,Object.assign({route:a},e))})},I=a(39),O=a(104),_=a(105),j=[{name:"home",path:"/home"},{name:"item",path:"/item/:id"},{name:"cat",path:"/cat/:id"}];l.a.send("VKWebAppInit",{});var B=function(){var e=Object(I.b)(j,{defaultRoute:"home"});return e.usePlugin(O.a),e.usePlugin(Object(_.a)({useHash:!0})),e}();B.start(function(){s.a.render(i.a.createElement(w.b,{router:B},i.a.createElement(y,{router:B})),document.getElementById("root"))})}},[[171,1,2]]]);
//# sourceMappingURL=main.cffa5881.chunk.js.map