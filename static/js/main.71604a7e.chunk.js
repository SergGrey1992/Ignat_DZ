(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={message:"Message_message__2KLlW",wrapperLogo:"Message_wrapperLogo__GtBAb",logo:"Message_logo__8ngb-",messages:"Message_messages__3hb2d",wrapperName:"Message_wrapperName__19cII",name:"Message_name__1DAvd",time:"Message_time__1jM2-",wrapperTime:"Message_wrapperTime__3DBRY",wrapper:"Message_wrapper__57nVU"}},,,,,function(e,a,t){e.exports={wrapperMenu:"Routes_wrapperMenu__1ZbU4"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3LRDN",errorInput:"SuperInputText_errorInput___UsDv",error:"SuperInputText_error__SfqBX"}},,,,,function(e,a,t){e.exports={someClass:"Greeting_someClass__1MdEE",error:"Greeting_error__gizcg"}},function(e,a,t){e.exports={default:"SuperButton_default__2lfhw",red:"SuperButton_red__1pkgx"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2h0M4",spanClassName:"SuperCheckbox_spanClassName__15Dnp"}},function(e,a,t){e.exports={wrapperHW6:"HW6_wrapperHW6__1oYWk",wrapper:"HW6_wrapper__1OUUC"}},,,,function(e,a,t){e.exports={App:"App_App__Z9SW_"}},,function(e,a,t){e.exports={blue:"HW4_blue__3Cwl_",column:"HW4_column__88A-D"}},function(e,a,t){e.exports={className:"SuperEditableSpan_className__2Z6V0"}},,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),o=(t(34),t(24)),u=t.n(o),s=t(7),i=t(10),m=t.n(i);var p=function(){return r.a.createElement("div",{className:"".concat(m.a.wrapperMenu,"  ")},r.a.createElement(s.b,{className:m.a.hidden_a,to:"/pre-junior"},"pre-junior"),r.a.createElement(s.b,{className:m.a.hidden_a,to:"/junior"},"junior"),r.a.createElement(s.b,{className:m.a.hidden_a,to:"/junior-plus"},"junior-plus"))},E=t(1),d=t(5),f=t.n(d);var h=function(e){return r.a.createElement("div",{className:f.a.message},r.a.createElement("div",{className:f.a.wrapperLogo},r.a.createElement("div",{className:f.a.logo},r.a.createElement("img",{src:e.avatar,alt:""}))),r.a.createElement("div",{className:f.a.wrapper},r.a.createElement("div",{className:f.a.wrapperName},r.a.createElement("div",{className:f.a.name},e.name)),r.a.createElement("div",{className:f.a.wrapperMessage},r.a.createElement("div",{className:f.a.messages},e.message)),r.a.createElement("div",{className:f.a.wrapperTime},r.a.createElement("div",{className:f.a.time},e.time))))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="\u0421\u0435\u0440\u0435\u0433\u0430",g="NPM START \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",b="22:00";var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(h,{avatar:_,name:v,message:g,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},N=t(2);var k=function(e){return r.a.createElement("div",null,"".concat(e.affair.name," ").concat(e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var w=function(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},j=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(j),a=Object(N.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(N.a)(c,2),u=o[0],s=o[1],i=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(w,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(28),S=t(17),y=t.n(S),M=t(6),T=t(12),A=t.n(T),I=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),u=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(A.a.error," ").concat(o||""),i=c?A.a.errorInput:A.a.superInput;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:i},u)),c&&r.a.createElement("span",{className:s},c))},W=t(18),F=t.n(W),B=function(e){var a=e.red,t=(e.className,Object(M.a)(e,["red","className"])),n=a?F.a.default:F.a.red;return r.a.createElement("button",Object.assign({className:n},t))},U=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?y.a.error:y.a.someClass;return r.a.createElement("div",null,r.a.createElement(I,{value:a,onChange:t,className:o}),r.a.createElement("span",null,l),r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{onClick:n},"add")),r.a.createElement("span",null,c))},H=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(N.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(!1),i=Object(N.a)(s,2),m=i[0],p=i[1],E=a.length;return r.a.createElement(U,{name:o,setNameCallback:function(e){e.currentTarget.value.length<1?p(!0):p(!1),u(e.currentTarget.value)},addUser:function(){t(o),alert("Hello  !  ".concat(o," "))},error:m,totalUsers:E})},P=t(42);var D=function(){var e=Object(n.useState)([]),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(H,{users:t,addUserCallback:function(e){var a={_id:Object(P.a)(),name:e};l([a].concat(Object(x.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=t(26),L=t.n(J),R=t(19),G=t.n(R),K=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(G.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:G.a.spanClassName},l))};var Z=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),s=Object(N.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:L.a.column},r.a.createElement(I,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(B,{red:!0,onClick:o},"delete "),r.a.createElement(K,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(K,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var X=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(O,null),r.a.createElement(D,null),r.a.createElement(Z,null))};var Y=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};function q(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Junior"))}function V(){return r.a.createElement("div",null,r.a.createElement("h1",null,"JuniorPlus"))}var z="/pre-junior",$="/junior",Q="/junior-plus";var ee=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:"/pre-junior"})}}),r.a.createElement(E.b,{path:z,exact:!0,render:function(){return r.a.createElement(X,null)}}),r.a.createElement(E.b,{path:$,exact:!0,render:function(){return r.a.createElement(q,null)}}),r.a.createElement(E.b,{path:Q,exact:!0,render:function(){return r.a.createElement(V,null)}}),r.a.createElement(E.b,{render:function(){return r.a.createElement(Y,null)}})))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(p,null),r.a.createElement(ee,null)))},te=t(27),ne=t.n(te),re=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(M.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(N.a)(o,2),s=u[0],i=u[1],m=l||{},p=m.children,E=m.onDoubleClick,d=(m.className,Object(M.a)(m,["children","onDoubleClick","className"])),f="".concat(ne.a.className);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(I,Object.assign({autoFocus:!0,onBlur:function(e){i(!s),a&&a(e)},onEnter:function(){i(!s),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!s),E&&E(e)},className:f},d),p||c.value))};function le(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ce(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}le("test",{x:"A",y:1});ce("test",{x:"",y:0});var oe=t(20),ue=t.n(oe);var se=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:ue.a.wrapperHW6},r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:ue.a.wrapper},r.a.createElement(re,{value:t,onChangeText:l,spanProps:{children:t?void 0:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 (\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u043a\u043b\u0438\u043a)"}})),r.a.createElement(B,{onClick:function(){le("editable-span-value",t)}},"save"),r.a.createElement(B,{onClick:function(){null!==t&&l(ce("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ie=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ae,null),r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.71604a7e.chunk.js.map