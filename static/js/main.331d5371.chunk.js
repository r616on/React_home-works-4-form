(this["webpackJsonphome-works-2-events-state"]=this["webpackJsonphome-works-2-events-state"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(8),s=n.n(i),d=(n(15),n(16),n(3)),r=(n(17),n(0)),l=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)("#\u041f\u0440\u0438\u0432\u0435\u0442"),l=Object(d.a)(s,2),u=l[0],o=l[1],j=Object(a.useRef)();return Object(a.useEffect)((function(){7===c.length&&c.match(/#[a-f0-9]{6}\b/gi)?(o(function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?"rgb(".concat(parseInt(t[1],16),",").concat(parseInt(t[2],16),",").concat(parseInt(t[3],16),")"):null}(c)),j.current.style.backgroundColor=c):c.length>6&&!c.match(/#[a-f0-9]{6}\b/gi)&&(o("#\u041e\u0448\u0438\u0431\u043a\u0430"),j.current.style.backgroundColor="rgb(240, 104, 26)")}),[c]),Object(r.jsx)("div",{className:"HexToRgb",ref:j,children:Object(r.jsx)("form",{className:"HexToRgb-row",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{className:"HexToRgb-input",id:"name",name:"name",value:c,onChange:function(e){i(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0432\u0435\u0442"}),Object(r.jsx)("label",{className:"HexToRgb-label",htmlFor:"name",children:u})]})})})},u=n(6),o=n(10),j=n(2),b=n(9),m=n(27),h=(n(19),n(20),function(e){var t=e.form,n=e.onChange,a=e.onSubmit;return Object(r.jsxs)("form",{className:"Steps-form",onSubmit:a,children:[Object(r.jsxs)("div",{className:"form-item fild",children:[Object(r.jsx)("label",{className:"lable",htmlFor:"date",children:"\u0414\u0430\u0442\u0430 (\u0414\u0414.\u041c\u041c.\u0413\u0413)"}),Object(r.jsx)("input",{type:"date",id:"date",name:"date",className:"input-date  input-item",value:t.date,onChange:n})]}),Object(r.jsxs)("div",{className:"form-item fild",children:[Object(r.jsx)("label",{className:"lable",htmlFor:"distance",children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043d\u043e \u043a\u043c"}),Object(r.jsx)("input",{type:"number",id:"distance",name:"distance",className:"input-distance  input-item",value:t.distance,onChange:n})]}),Object(r.jsx)("button",{className:"input-button input-item",children:"OK"})]})}),f=(n(21),n(22),function(e){var t=e.date,n=e.distance,a=e.handleDell,c=e.itemId,i=e.handleEdit;return Object(r.jsxs)("div",{className:"output-item",children:[Object(r.jsxs)("div",{className:"item-date",children:[t," "]}),Object(r.jsxs)("div",{className:"item-distance",children:[" ",n]}),Object(r.jsxs)("div",{className:"item-controls",children:[Object(r.jsx)("span",{className:"material-icons edit",onClick:function(){return i(c)},children:"edit"}),Object(r.jsx)("span",{onClick:function(){return a(c)},className:"material-icons clear",children:"clear"})]})]})}),O=function(e){var t=e.items,n=e.handleDell,a=e.handleEdit;return Object(r.jsxs)("div",{className:"output",children:[Object(r.jsxs)("div",{className:"output-title",children:[Object(r.jsx)("span",{className:"output-title-item",children:"\u0414\u0430\u0442\u0430 (\u0414\u0414.\u041c\u041c.\u0413\u0413)"}),Object(r.jsx)("span",{className:"output-title-item",children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043d\u043e \u043a\u043c"}),Object(r.jsx)("span",{className:"output-title-item",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]}),Object(r.jsx)("div",{className:"output-body",children:t.map((function(e){return Object(r.jsx)(f,{itemId:e.id,date:e.dateVie,distance:e.distance,handleDell:n,handleEdit:a},e.id)}))})]})},p=n(26),x=function e(t,n){Object(b.a)(this,e),this.id=Object(m.a)(),this.date=t,this.dateVie=Object(p.a)(new Date(t),"dd.MM.yy"),this.distance=n};var v=function(){var e={date:"",distance:"",distanceEdit:!1},t=Object(a.useState)([new x("2019-07-20",5.7),new x("2019-07-19",14.2),new x("2019-07-18",3.4)]),n=Object(d.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(e),l=Object(d.a)(s,2),b=l[0],m=l[1];return Object(r.jsx)("div",{className:"Steps",children:Object(r.jsxs)("div",{className:"Steps-row",children:[Object(r.jsx)(h,{form:b,onChange:function(e){var t=e.target,n=t.name,a="checkbox"===t.type?t.checked:t.value;m((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},n,a))}))},onSubmit:function(t){if(t.preventDefault(),b.distance){var n=c.findIndex((function(e){return e.date===b.date}));n>-1&&!b.distanceEdit?(i((function(e){return e.map((function(e,t){return t===n?Object(j.a)(Object(j.a)({},e),{},{distance:+e.distance+ +b.distance}):e}))})),m(e)):n>-1&&b.distanceEdit?(i((function(e){return e.map((function(e,t){return t===n?Object(j.a)(Object(j.a)({},e),{},{distance:+b.distance}):e}))})),m(e)):(i((function(e){var t=Object(o.a)(e);return t.push(new x(b.date,b.distance)),t.sort((function(e,t){return new Date(e.date)>new Date(t.date)?1:new Date(e.date)<new Date(t.date)?-1:null})),t})),m(e))}}}),Object(r.jsx)("div",{className:"Steps-output",children:Object(r.jsx)(O,{items:c,handleDell:function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))},handleEdit:function(e){var t=c.findIndex((function(t){return t.id===e}));m({date:c[t].date,distance:c[t].distance,distanceEdit:!0})}})})]})})};var N=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)(v,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),g()}],[[23,1,2]]]);
//# sourceMappingURL=main.331d5371.chunk.js.map