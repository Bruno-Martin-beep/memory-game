(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(3),i=c.n(a),n=c(15),s=c.n(n),r=(c(21),c(6)),o=c(8),l=c(5),u=(c(22),c.p+"static/media/shinji.024aad69.jpg"),m=c.p+"static/media/misato.71bc5529.jpg",d=c.p+"static/media/penpen.97009186.jpg",j=c.p+"static/media/kaworu.5add9ac3.jpg",b=c.p+"static/media/asuka.b439de1e.jpg",h=c.p+"static/media/rei.69868dcd.png",O=[{active:!1,name:"shinji",urlBg:u,urlChar:null},{active:!1,name:"misato",urlBg:m,urlChar:null},{active:!1,name:"gendo",urlBg:c.p+"static/media/gendo.c250d620.jpg",urlChar:null},{active:!1,name:"rei",urlBg:h,urlChar:null},{active:!1,name:"asuka",urlBg:b,urlChar:null},{active:!1,name:"kaworu",urlBg:j,urlChar:null},{active:!1,name:"ritsuko",urlBg:c.p+"static/media/ritsuko.8130488e.jpg",urlChar:null},{active:!1,name:"ryoji",urlBg:c.p+"static/media/ryoji.4074c5a1.jpg",urlChar:null},{active:!1,name:"pen pen",urlBg:d,urlChar:null}],f=c(14);c(24);f.a.initializeApp({apiKey:"AIzaSyB_C50VPK7_3oWC76pZIB2x-bd5mXo8nvY",authDomain:"memory-game-b80cb.firebaseapp.com",projectId:"memory-game-b80cb",storageBucket:"memory-game-b80cb.appspot.com",messagingSenderId:"327036179749",appId:"1:327036179749:web:9decb4b005bae3a3dcb6cc"});var p=f.a,g=c(1),x=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){p.database().ref("scores").on("value",(function(e){var t=e.val(),c=[];for(var a in t)c.push(t[a]);c.sort((function(e,t){return e.time-t.time})),c.forEach((function(e,t){return e.rank=t+1})),n(c)}))}),[]),Object(g.jsxs)("div",{className:"scores-cont",children:[Object(g.jsx)("h3",{className:"epil score-name",children:"SCORES"}),Object(g.jsxs)("div",{className:"scores",children:[Object(g.jsx)("p",{className:"scores-title score-child",children:"RANK"}),Object(g.jsx)("p",{className:"scores-title score-child",children:"TIME"}),Object(g.jsx)("p",{className:"scores-title score-child",children:"NAME"}),Object(g.jsx)("p",{className:"scores-title score-child",children:"ERRORS"}),c.map((function(e){return Object(g.jsxs)(i.a.Fragment,{children:[Object(g.jsxs)("p",{className:"digi scores-item score-child",children:[e.rank,"\xba"]}),Object(g.jsxs)("p",{className:"digi scoreTime scores-item score-child",children:[("0"+Math.floor(e.time/6e4%60)).slice(-2),Object(g.jsx)("span",{className:"digi-nm",children:":"}),("0"+Math.floor(e.time/1e3%60)).slice(-2),Object(g.jsxs)("span",{className:"digi score-mili-sec",children:[Object(g.jsx)("span",{className:"digi-nm",children:":"}),("0"+e.time/10%100).slice(-2)]})]}),Object(g.jsx)("p",{className:"scores-item score-child",children:e.name}),Object(g.jsx)("p",{className:"digi scores-item score-child",children:e.errors})]},e.rank+e.time)}))]})]})},v=c(4),N=c(16),y=c.n(N),w=function(e){var t=e.errors,c=e.time,i=e.setIsFinished,n=e.isFinished,s=e.gameIsActive,r=Object(a.useState)(""),o=Object(l.a)(r,2),u=o[0],m=o[1],d=Object(a.useState)(!1),j=Object(l.a)(d,2),b=j[0],h=j[1],O=Object(a.useState)({x:window.innerWidth,y:window.innerHeight}),f=Object(l.a)(O,2),x=f[0],N=f[1];Object(a.useEffect)((function(){var e=function(){return N({x:window.innerWidth,y:window.innerHeight})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);return Object(a.useEffect)((function(){if(n){var e=v.a.timeline();return e.to(".submit-bg",1,{opacity:1,ease:"power1.out",visibility:"inherit",autoAlpha:0,onComplete:h(!0)}).from(".submit-title",1,{y:"140%",ease:"power4.out",skewY:5}).from(".submit-item",1,{y:"50%",opacity:0,ease:"power1.out",skewY:2.5,stagger:{amount:1}}),function(){return e.kill()}}}),[n]),Object(a.useEffect)((function(){u.length>=3&&u.length<=16?v.a.to(".submit-check",.5,{x:"0",opacity:1,cursor:"pointer"}):v.a.to(".submit-check",.5,{x:"-50%",opacity:0,cursor:"auto"})}),[u]),Object(g.jsxs)("div",{className:"submit-bg",children:[Object(g.jsx)("div",{className:"confetti",children:b&&Object(g.jsx)(y.a,{width:x.x,height:x.y,colors:["#cccccc","#999999","#666666","#333333"],numberOfPieces:50})}),Object(g.jsxs)("div",{className:"submit-cont",children:[Object(g.jsx)("h2",{className:"submit-margin",children:Object(g.jsx)("span",{className:"submit-title",children:"CONGRATULATIONS!"})}),Object(g.jsxs)("div",{className:"contBar-info submit-margin",children:[Object(g.jsx)("p",{className:"aling-names submit-item",children:"TIME:"}),Object(g.jsxs)("p",{className:"digi mainTime submit-item",children:[("0"+Math.floor(c/6e4%60)).slice(-2),Object(g.jsx)("span",{className:"digi-nm",children:":"}),("0"+Math.floor(c/1e3%60)).slice(-2),Object(g.jsxs)("span",{className:"digi mili-sec",children:[Object(g.jsx)("span",{className:"digi-nm",children:":"}),("0"+c/10%100).slice(-2)]})]}),Object(g.jsx)("p",{className:"aling-names submit-item",children:"ERRORS:"}),Object(g.jsx)("p",{className:"digi mili-sec submit-item errorsInfo",children:t})]}),Object(g.jsxs)("form",{className:"submit-margin submit-form submit-item",onSubmit:function(e){if(e.preventDefault(),0!==u.length&&n){var a=p.database().ref("scores"),r={name:u,time:c,errors:t};a.push(r),v.a.to(".submit-bg",2,{opacity:0,ease:"power1.out",autoAlpha:0,onComplete:function(){h(!1)}}),s(),i(!1)}},children:[Object(g.jsx)("input",{type:"text",placeholder:"Name",minLength:"3",maxLength:"16",className:"submit-input",value:u,onChange:function(e){return m(e.target.value)}}),Object(g.jsx)("input",{type:"submit",value:">",className:"submit-check "})]})]})]})},k=function(e){var t=e.gameIsActive;Object(a.useEffect)((function(){var e=v.a.timeline();return e.from("h1 span",2,{y:"140%",ease:"power4.out",delay:.75,skewY:10,stagger:{amount:.4}}).from(".MG",1,{y:"50%",opacity:0,ease:"power1.out",delay:0,skewY:2.5}).from(".start-text",1,{y:"50%",opacity:0,ease:"power1.out",skewY:2.5,autoAlpha:0}),function(){return e.kill()}}),[]);return Object(g.jsx)("div",{className:"home",children:Object(g.jsxs)("div",{className:"name",children:[Object(g.jsx)("h1",{children:Object(g.jsx)("span",{children:"NEON"})}),Object(g.jsx)("h1",{children:Object(g.jsx)("span",{className:".h1",children:"GENESIS"})}),Object(g.jsx)("h1",{children:Object(g.jsx)("span",{className:".h1",children:"EVANGELION"})}),Object(g.jsx)("h2",{className:"MG",children:"MEMORY GAME"}),Object(g.jsx)("h2",{className:"mont start-text",onClick:function(){v.a.to(".home",1,{opacity:0,ease:"power1.out",autoAlpha:0}),t()},children:"START"})]})})},E=function(e){var t=e.time,c=e.errors,a=e.handleRestart;return Object(g.jsxs)("div",{className:"contBar-cont",children:[Object(g.jsxs)("div",{className:"contBar-info",children:[Object(g.jsx)("p",{className:"aling-names contbar-item",children:"TIME:"}),Object(g.jsxs)("p",{className:"digi mainTime contbar-item",children:[("0"+Math.floor(t/6e4%60)).slice(-2),Object(g.jsx)("span",{className:"digi-nm",children:":"}),("0"+Math.floor(t/1e3%60)).slice(-2),Object(g.jsxs)("span",{className:"digi mili-sec",children:[Object(g.jsx)("span",{className:"digi-nm",children:":"}),("0"+t/10%100).slice(-2)]})]}),Object(g.jsx)("p",{className:"aling-names contbar-item",children:"ERRORS:"}),Object(g.jsx)("p",{className:"digi mili-sec contbar-item errorsInfo",children:c})]}),Object(g.jsx)("div",{className:"contBar",children:Object(g.jsx)("h3",{className:"contBar-buttons contbar-item restart",onClick:a,children:"RESTART"})})]})},S=c.p+"static/media/left.09707b48.png",I=c.p+"static/media/right.6b8dafec.png",C=function(e){var t=e.cardsList,c=e.handleSelect,a=function(e){var t=function(e,t,c){return Math.max(e,Math.min(t,c))},c=e.currentTarget.getBoundingClientRect(),a=(t(c.left,e.clientX,c.right)-c.left)/c.width-.5,i=(t(c.top,e.clientY,c.bottom)-c.top)/c.width-.5;v.a.to(e.currentTarget,{duration:.1,rotationY:30*a,rotationX:-30*i,ease:"power1.inOut",x:10*a,y:10*i,transformOrigin:"center"})},i=function(e){v.a.to(e.currentTarget,{delay:.1,duration:.4,rotationY:0,rotationX:0,x:0,y:0,ease:"power1.inOut"})};return Object(g.jsx)("div",{className:"cardsList",children:t.map((function(e,t){return Object(g.jsxs)("div",{className:"card",onClick:function(t){return c(e)},children:[Object(g.jsxs)("div",{className:"card-img",children:[e.active&&Object(g.jsx)("img",{className:"card-bg",src:e.urlBg,alt:e.name,onMouseOver:a,onMouseMove:a,onMouseLeave:i}),Object(g.jsx)("img",{className:"card-left ".concat("card-left"+e.id),src:S,alt:"nerv-left"}),Object(g.jsx)("img",{className:"card-right ".concat("card-right"+e.id),src:I,alt:"nerv-right"})]}),Object(g.jsx)("p",{className:"card-name",children:e.active&&e.name})]},t)}))})};var M=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)(0),s=Object(l.a)(n,2),u=s[0],m=s[1],d=Object(a.useState)(!1),j=Object(l.a)(d,2),b=j[0],h=j[1],f=Object(a.useState)(!1),p=Object(l.a)(f,2),N=p[0],y=p[1],S=Object(a.useState)(!1),I=Object(l.a)(S,2),M=I[0],T=I[1],B=Object(a.useState)(0),A=Object(l.a)(B,2),R=A[0],Y=A[1];Object(a.useEffect)((function(){var e=null;return N&&!M?e=setInterval((function(){Y((function(e){return e+10}))}),10):clearInterval(e),function(){clearInterval(e)}}),[N,M]),Object(a.useEffect)((function(){var e=null;0!==c.length&&(e=c.every((function(e){return e.active}))),e&&(y(!1),h(!0))}),[c]);var L=Object(a.useState)(null),F=Object(l.a)(L,2),G=F[0],z=F[1],P=Object(a.useState)(null),X=Object(l.a)(P,2),D=X[0],K=X[1];Object(a.useEffect)((function(){if(null!==G&&null!==D){if(G.name!==D.name){var e=setTimeout((function(){v.a.to(".".concat("card-left"+G.id),.2,{x:"0"}),v.a.to(".".concat("card-right"+G.id),.2,{x:"0"});var e=setTimeout((function(){i((function(e){return[].concat(Object(o.a)(e.slice(0,G.id)),[Object(r.a)(Object(r.a)({},e[G.id]),{},{active:!1})],Object(o.a)(e.slice(G.id+1)))}))}),200);z(null),v.a.to(".".concat("card-left"+D.id),.2,{x:"0"}),v.a.to(".".concat("card-right"+D.id),.2,{x:"0"});var t=setTimeout((function(){i((function(e){return[].concat(Object(o.a)(e.slice(0,D.id)),[Object(r.a)(Object(r.a)({},e[D.id]),{},{active:!1})],Object(o.a)(e.slice(D.id+1)))}))}),200);return K(null),m((function(e){return e+1})),function(){return clearTimeout(e,t)}}),500);return function(){return clearInterval(e)}}z(null),K(null)}}),[G,D]);var W=function(e){var t=e.reduce((function(e,t){return e.concat([t,t])}),[]);return t=(t=t.sort((function(){return Math.random()-.5}))).map((function(e,t){return Object(r.a)(Object(r.a)({},e),{},{id:t})}))};Object(a.useEffect)((function(){y(!0),T(!0),i(W(O))}),[]);var H=function(){v.a.timeline().from(".contbar-item",{y:"50%",opacity:0,ease:"power1.out",skewY:2.5,duration:1,delay:1,stagger:{amount:1}}).from(".card",{y:"50%",opacity:0,ease:"power1.out",skewY:10,duration:1,stagger:{grid:"auto",from:"start",amount:1.5}}).from(".score-name",{y:"50%",opacity:0,ease:"power1.out",skewY:2.5,duration:1}).from(".score-child",{y:"50%",opacity:0,ease:"power1.out",skewY:10,duration:1,stagger:{grid:"auto",axis:"y",from:"start",amount:1.5}})};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(k,{gameIsActive:H}),Object(g.jsxs)("div",{className:"game",children:[Object(g.jsx)(E,{time:R,errors:u,handleRestart:function(){v.a.to(".card-left",.2,{x:"0"}),v.a.to(".card-right",.2,{x:"0"});var e=setTimeout((function(){y(!0),T(!0),Y(0),m(0),h(!1),i(W(O)),z(null),K(null)}),200);return function(){return clearTimeout(e)}}}),Object(g.jsx)(C,{cardsList:c,handleSelect:function(e){if(!e.active&&(null===G||null===D)&&N)return M&&T(!1),null===G?(i((function(t){return[].concat(Object(o.a)(t.slice(0,e.id)),[Object(r.a)(Object(r.a)({},t[e.id]),{},{active:!0})],Object(o.a)(t.slice(e.id+1)))})),v.a.to(".".concat("card-left"+e.id),.2,{x:"-100%"}),v.a.to(".".concat("card-right"+e.id),.2,{x:"101%"}),z(e)):(i((function(t){return[].concat(Object(o.a)(t.slice(0,e.id)),[Object(r.a)(Object(r.a)({},t[e.id]),{},{active:!0})],Object(o.a)(t.slice(e.id+1)))})),v.a.to(".".concat("card-left"+e.id),.2,{x:"-100%"}),v.a.to(".".concat("card-right"+e.id),.2,{x:"101%"}),K(e))}}),Object(g.jsx)(x,{})]}),Object(g.jsx)(w,{time:R,errors:u,setIsFinished:h,isFinished:b,gameIsActive:H})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),i(e),n(e),s(e)}))};s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root")),T()}},[[29,1,2]]]);
//# sourceMappingURL=main.a3af8b90.chunk.js.map