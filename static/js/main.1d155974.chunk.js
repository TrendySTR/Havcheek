(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(13),r=a.n(i),l=a(18),o=a.n(l),s=a(24),p=a(25),d=a(35),u=a(26),m=a(36),f=a(6),h=(a(106),a(107),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(f.h,{id:t},c.a.createElement(f.i,null,"Havcheek"),n&&c.a.createElement(f.d,{title:"User Data Fetched with VK Connect"},c.a.createElement(f.g,{before:n.photo_200?c.a.createElement(f.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(f.d,{title:"Navigation Example"},c.a.createElement(f.c,null,c.a.createElement(f.b,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))}),b=a(32),E=a.n(b),g=(a(108),a(33)),k=a.n(g),v=a(34),w=a.n(v),V=Object(f.k)(),y=function(e){return c.a.createElement(f.h,{id:e.id},c.a.createElement(f.i,{left:c.a.createElement(f.e,{onClick:e.go,"data-to":"home"},V===f.f?c.a.createElement(k.a,null):c.a.createElement(w.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:E.a,alt:"Persik The Cat"}))},S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppSetViewSettingsFailed":console.log(t.detail.type);break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{}),o.a.supports("VKWebAppSetViewSettings")?o.a.send("VKWebAppSetViewSettings",{action_bar_color:"#00ffff"}):console.log("Unsupported")}},{key:"render",value:function(){return c.a.createElement(f.j,{activePanel:this.state.activePanel},c.a.createElement(h,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(y,{id:"persik",go:this.go}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}),r.a.render(c.a.createElement(S,null),document.getElementById("root"))},32:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},96:function(e,t,a){e.exports=a(109)}},[[96,1,2]]]);
//# sourceMappingURL=main.1d155974.chunk.js.map