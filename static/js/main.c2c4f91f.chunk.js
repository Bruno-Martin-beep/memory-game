(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(3),i=a.n(c),n=a(15),s=a.n(n),r=(a(22),a(6)),o=a(8),l=a(5),u=(a(23),a.p+"static/media/shinji.024aad69.jpg"),m=a.p+"static/media/misato.71bc5529.jpg",d=a.p+"static/media/penpen.97009186.jpg",j=a.p+"static/media/kaworu.5add9ac3.jpg",b=a.p+"static/media/asuka.b439de1e.jpg",h=a.p+"static/media/rei.69868dcd.png",p=[{active:!1,name:"shinji",urlBg:u,urlChar:null},{active:!1,name:"misato",urlBg:m,urlChar:null},{active:!1,name:"gendo",urlBg:a.p+"static/media/gendo.c250d620.jpg",urlChar:null},{active:!1,name:"rei",urlBg:h,urlChar:null},{active:!1,name:"asuka",urlBg:b,urlChar:null},{active:!1,name:"kaworu",urlBg:j,urlChar:null},{active:!1,name:"ritsuko",urlBg:a.p+"static/media/ritsuko.8130488e.jpg",urlChar:null},{active:!1,name:"ryoji",urlBg:a.p+"static/media/ryoji.4074c5a1.jpg",urlChar:null},{active:!1,name:"pen pen",urlBg:d,urlChar:null}],O=a(14);a(25);O.a.initializeApp({apiKey:"AIzaSyB_C50VPK7_3oWC76pZIB2x-bd5mXo8nvY",authDomain:"memory-game-b80cb.firebaseapp.com",projectId:"memory-game-b80cb",storageBucket:"memory-game-b80cb.appspot.com",messagingSenderId:"327036179749",appId:"1:327036179749:web:9decb4b005bae3a3dcb6cc"});var f=O.a,g=a(4),x=a(16),v=a(1),N=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useRef)(null);return Object(c.useEffect)((function(){g.a.registerPlugin(x.a),g.a.to(".score-child",{y:"0",opacity:1,ease:"power1.out",skewY:-10,duration:1,stagger:{grid:"auto",from:"start",axis:"y",amount:10},scrollTrigger:{scroller:".game",trigger:".scores",start:"top bottom-=10%",end:function(){return"top bottom-=".concat(s.current.getBoundingClientRect().height+window.innerHeight/10)},toggleActions:"play none reaverse reset",scrub:2}})}),[a]),Object(c.useEffect)((function(){f.database().ref("scores").on("value",(function(e){var t=e.val(),a=[];for(var c in t)a.push(t[c]);a.sort((function(e,t){return e.time-t.time})),a.forEach((function(e,t){return e.rank=t+1})),n(a)}))}),[]),Object(v.jsxs)("div",{className:"scores-cont",children:[Object(v.jsx)("h3",{className:"epil score-name",children:"SCORES"}),Object(v.jsxs)("div",{className:"scores",ref:s,children:[Object(v.jsx)("p",{className:"scores-title score-child",children:"RANK"}),Object(v.jsx)("p",{className:"scores-title score-child",children:"TIME"}),Object(v.jsx)("p",{className:"scores-title score-child",children:"NAME"}),Object(v.jsx)("p",{className:"scores-title score-child",children:"ERRORS"}),a.map((function(e){return Object(v.jsxs)(i.a.Fragment,{children:[Object(v.jsxs)("p",{className:"digi scores-item score-child",children:[e.rank,"\xba"]}),Object(v.jsxs)("p",{className:"digi scoreTime scores-item score-child",children:[("0"+Math.floor(e.time/6e4%60)).slice(-2),Object(v.jsx)("span",{className:"digi-nm",children:":"}),("0"+Math.floor(e.time/1e3%60)).slice(-2),Object(v.jsxs)("span",{className:"digi score-mili-sec",children:[Object(v.jsx)("span",{className:"digi-nm",children:":"}),("0"+e.time/10%100).slice(-2)]})]}),Object(v.jsx)("p",{className:"scores-item score-child",children:e.name}),Object(v.jsx)("p",{className:"digi scores-item score-child",children:e.errors})]},e.rank+e.time)}))]})]})},y=a(17),w=a.n(y),k=function(e){var t=e.errors,a=e.time,i=e.setIsFinished,n=e.isFinished,s=e.gameIsActive,r=Object(c.useState)(""),o=Object(l.a)(r,2),u=o[0],m=o[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),b=j[0],h=j[1],p=Object(c.useState)({x:window.innerWidth,y:window.innerHeight}),O=Object(l.a)(p,2),x=O[0],N=O[1];Object(c.useEffect)((function(){var e=function(){return N({x:window.innerWidth,y:window.innerHeight})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);return Object(c.useEffect)((function(){if(n){var e=g.a.timeline();return e.to(".submit-bg",1,{opacity:1,ease:"power1.out",visibility:"inherit",autoAlpha:0,onComplete:h(!0)}).from(".submit-title",1,{y:"140%",ease:"power4.out",skewY:5}).from(".submit-item",1,{y:"50%",opacity:0,ease:"power1.out",skewY:2.5,stagger:{amount:1}}),g.a.from(".cancel",1,{y:"50%",opacity:0,ease:"power1.out",skewY:2.5,delay:1}),function(){return e.kill()}}}),[n]),Object(c.useEffect)((function(){u.length>=3&&u.length<=16?g.a.to(".submit-check",.5,{x:"0",opacity:1,cursor:"pointer"}):g.a.to(".submit-check",.5,{x:"-50%",opacity:0,cursor:"auto"})}),[u]),Object(v.jsxs)("div",{className:"submit-bg",children:[Object(v.jsx)("div",{className:"confetti",children:b&&Object(v.jsx)(w.a,{width:x.x,height:x.y,colors:["#cccccc","#999999","#666666","#333333"],numberOfPieces:50})}),Object(v.jsx)("p",{className:"cancel",onClick:function(){g.a.to(".submit-bg",2,{opacity:0,ease:"power1.out",autoAlpha:0,onComplete:function(){h(!1)}}),s(),i(!1)},children:"CANCEL"}),Object(v.jsxs)("div",{className:"submit-cont",children:[Object(v.jsx)("h2",{className:"submit-margin",children:Object(v.jsx)("a",{className:"submit-title",target:"_blank",href:"https://www.youtube.com/watch?v=oyFQVZ2h0V8",rel:"noreferrer",children:"CONGRATULATIONS!"})}),Object(v.jsxs)("div",{className:"contBar-info submit-margin",children:[Object(v.jsx)("p",{className:"aling-names submit-item",children:"TIME:"}),Object(v.jsxs)("p",{className:"digi mainTime submit-item",children:[("0"+Math.floor(a/6e4%60)).slice(-2),Object(v.jsx)("span",{className:"digi-nm",children:":"}),("0"+Math.floor(a/1e3%60)).slice(-2),Object(v.jsxs)("span",{className:"digi mili-sec",children:[Object(v.jsx)("span",{className:"digi-nm",children:":"}),("0"+a/10%100).slice(-2)]})]}),Object(v.jsx)("p",{className:"aling-names submit-item",children:"ERRORS:"}),Object(v.jsx)("p",{className:"digi mili-sec submit-item errorsInfo",children:t})]}),Object(v.jsxs)("form",{className:"submit-margin submit-form submit-item",onSubmit:function(e){if(e.preventDefault(),0!==u.length&&n){var c=f.database().ref("scores"),r={name:u,time:a,errors:t};c.push(r),g.a.to(".submit-bg",2,{opacity:0,ease:"power1.out",autoAlpha:0,onComplete:function(){h(!1)}}),s(),i(!1)}},children:[Object(v.jsx)("input",{type:"text",placeholder:"Name",minLength:"3",maxLength:"16",className:"submit-input",value:u,onChange:function(e){return m(e.target.value)}}),Object(v.jsx)("input",{type:"submit",value:">",className:"submit-check "})]})]})]})},E=function(e){var t=e.gameIsActive;Object(c.useEffect)((function(){g.a.from("h1 span",2,{y:"140%",ease:"power4.out",delay:.5,skewY:10,stagger:{amount:.4}}),g.a.from(".MG",1,{y:"50%",opacity:0,ease:"power1.out",delay:2,skewY:2.5}),g.a.from(".start-text",1,{y:"50%",opacity:0,ease:"power1.out",delay:2.5,skewY:2.5,autoAlpha:0})}),[]);return Object(v.jsx)("div",{className:"home",children:Object(v.jsxs)("div",{className:"name",children:[Object(v.jsx)("h1",{children:Object(v.jsx)("span",{children:"NEON"})}),Object(v.jsx)("h1",{children:Object(v.jsx)("span",{className:".h1",children:"GENESIS"})}),Object(v.jsx)("h1",{children:Object(v.jsx)("span",{className:".h1",children:"EVANGELION"})}),Object(v.jsx)("h2",{className:"MG",children:"MEMORY GAME"}),Object(v.jsx)("h2",{className:"mont start-text",onClick:function(){g.a.to(".home",.6,{opacity:0,ease:"power1.out",autoAlpha:0}),t()},children:"START"})]})})},S=function(e){var t=e.time,a=e.errors,c=e.handleRestart;return Object(v.jsxs)("div",{className:"contBar-cont",children:[Object(v.jsxs)("div",{className:"contBar-info",children:[Object(v.jsx)("p",{className:"aling-names contbar-item",children:"TIME:"}),Object(v.jsxs)("p",{className:"digi mainTime contbar-item",children:[("0"+Math.floor(t/6e4%60)).slice(-2),Object(v.jsx)("span",{className:"digi-nm",children:":"}),("0"+Math.floor(t/1e3%60)).slice(-2),Object(v.jsxs)("span",{className:"digi mili-sec",children:[Object(v.jsx)("span",{className:"digi-nm",children:":"}),("0"+t/10%100).slice(-2)]})]}),Object(v.jsx)("p",{className:"aling-names contbar-item",children:"ERRORS:"}),Object(v.jsx)("p",{className:"digi mili-sec contbar-item errorsInfo",children:a})]}),Object(v.jsx)("div",{className:"contBar",children:Object(v.jsx)("h3",{className:"contbar-item restart",onClick:c,children:"RESTART"})})]})},C=a.p+"static/media/left.09707b48.png",I=a.p+"static/media/right.6b8dafec.png",T=function(e){var t=e.cardsList,a=e.handleSelect,c=function(e){var t=function(e,t,a){return Math.max(e,Math.min(t,a))},a=e.currentTarget.getBoundingClientRect(),c=(t(a.left,e.clientX,a.right)-a.left)/a.width-.5,i=(t(a.top,e.clientY,a.bottom)-a.top)/a.width-.5;g.a.to(e.currentTarget,{duration:.1,rotationY:30*c,rotationX:-30*i,ease:"power1.inOut",x:10*c,y:10*i,transformOrigin:"center"})},i=function(e){g.a.to(e.currentTarget,{delay:.1,duration:.4,rotationY:0,rotationX:0,x:0,y:0,ease:"power1.inOut"})};return Object(v.jsx)("div",{className:"cardsList",children:t.map((function(e,t){return Object(v.jsxs)("div",{className:"card",onClick:function(t){return a(e)},children:[Object(v.jsxs)("div",{className:"card-img",children:[e.active&&Object(v.jsx)("img",{className:"card-bg",src:e.urlBg,alt:e.name,onMouseOver:c,onMouseMove:c,onMouseLeave:i}),Object(v.jsx)("img",{className:"card-left ".concat("card-left-"+e.id),src:C,alt:"nerv-left"}),Object(v.jsx)("img",{className:"card-right ".concat("card-right-"+e.id),src:I,alt:"nerv-right"})]}),Object(v.jsx)("p",{className:"card-name",children:Object(v.jsx)("span",{className:"card-name-span ".concat("card-name-span-"+e.id),children:e.active&&e.name})})]},t)}))})},M=function(){return Object(v.jsx)("div",{className:"preload-cont",children:p.map((function(e){return Object(v.jsx)("img",{className:"preload-img",src:e.urlBg,alt:e.name},e.name)}))})};var A=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(0),s=Object(l.a)(n,2),u=s[0],m=s[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),b=j[0],h=j[1],O=Object(c.useState)(!1),f=Object(l.a)(O,2),x=f[0],y=f[1],w=Object(c.useState)(!1),C=Object(l.a)(w,2),I=C[0],A=C[1],B=Object(c.useState)(0),R=Object(l.a)(B,2),Y=R[0],L=R[1];Object(c.useEffect)((function(){var e=null;return x&&!I?e=setInterval((function(){L((function(e){return e+10}))}),10):clearInterval(e),function(){clearInterval(e)}}),[x,I]),Object(c.useEffect)((function(){var e=null;0!==a.length&&(e=a.every((function(e){return e.active}))),e&&(y(!1),h(!0))}),[a]);var F=Object(c.useState)(null),G=Object(l.a)(F,2),P=G[0],z=G[1],V=Object(c.useState)(null),X=Object(l.a)(V,2),D=X[0],H=X[1];Object(c.useEffect)((function(){if(null!==P&&null!==D){if(P.name!==D.name){var e=setTimeout((function(){g.a.to(".card-left-"+P.id,.2,{x:"0"}),g.a.to(".card-right-"+P.id,.2,{x:"0"}),g.a.to(".card-name-span-"+P.id,.2,{y:"50%",opacity:0,ease:"power1.out",skewY:0});var e=setTimeout((function(){i((function(e){return[].concat(Object(o.a)(e.slice(0,P.id)),[Object(r.a)(Object(r.a)({},e[P.id]),{},{active:!1})],Object(o.a)(e.slice(P.id+1)))}))}),200);z(null),g.a.to(".card-left-"+D.id,.2,{x:"0"}),g.a.to(".card-right-"+D.id,.2,{x:"0"}),g.a.to(".card-name-span-"+D.id,.2,{y:"50%",opacity:0,ease:"power1.out",skewY:0});var t=setTimeout((function(){i((function(e){return[].concat(Object(o.a)(e.slice(0,D.id)),[Object(r.a)(Object(r.a)({},e[D.id]),{},{active:!1})],Object(o.a)(e.slice(D.id+1)))}))}),200);return H(null),m((function(e){return e+1})),function(){return clearTimeout(e,t)}}),500);return function(){return clearInterval(e)}}z(null),H(null)}}),[P,D]);var K=function(e){var t=e.reduce((function(e,t){return e.concat([t,t])}),[]);return t=(t=t.sort((function(){return Math.random()-.5}))).map((function(e,t){return Object(r.a)(Object(r.a)({},e),{},{id:t})}))};Object(c.useEffect)((function(){y(!0),A(!0),i(K(p))}),[]);var W=function(){g.a.timeline().from(".contbar-item",.6,{y:"50%",opacity:0,ease:"power1.out",skewY:2.5,delay:1,stagger:{amount:1}}).from(".card",.6,{y:"50%",opacity:0,ease:"power1.out",skewY:10,stagger:{grid:"auto",from:"start",amount:1.5}}).from(".score-name",{y:"50%",opacity:0,ease:"power1.out",skewY:2.5,duration:.6})};return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(E,{gameIsActive:W}),Object(v.jsxs)("div",{className:"game",children:[Object(v.jsx)(M,{}),Object(v.jsx)(S,{time:Y,errors:u,handleRestart:function(){g.a.to(".card-left",.2,{x:"0"}),g.a.to(".card-right",.2,{x:"0"}),g.a.to(".card-name-span",.2,{y:"50%",opacity:0,ease:"power1.out",skewY:0});var e=setTimeout((function(){y(!0),A(!0),L(0),m(0),h(!1),i(K(p)),z(null),H(null)}),200);return function(){return clearTimeout(e)}}}),Object(v.jsx)(T,{cardsList:a,handleSelect:function(e){if(!e.active&&(null===P||null===D)&&x)return I&&A(!1),null===P?(i((function(t){return[].concat(Object(o.a)(t.slice(0,e.id)),[Object(r.a)(Object(r.a)({},t[e.id]),{},{active:!0})],Object(o.a)(t.slice(e.id+1)))})),g.a.to(".card-left-"+e.id,.2,{x:"-100%"}),g.a.to(".card-right-"+e.id,.2,{x:"101%"}),g.a.to(".card-name-span-"+e.id,.2,{y:"0",opacity:1,ease:"power1.out",skewY:-10}),z(e)):(i((function(t){return[].concat(Object(o.a)(t.slice(0,e.id)),[Object(r.a)(Object(r.a)({},t[e.id]),{},{active:!0})],Object(o.a)(t.slice(e.id+1)))})),g.a.to(".card-left-"+e.id,.2,{x:"-100%"}),g.a.to(".card-right-"+e.id,.2,{x:"101%"}),g.a.to(".card-name-span-"+e.id,.2,{y:"0",opacity:1,ease:"power1.out",skewY:-10}),H(e))}}),Object(v.jsx)(N,{})]}),Object(v.jsx)(k,{time:Y,errors:u,setIsFinished:h,isFinished:b,gameIsActive:W})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),i(e),n(e),s(e)}))};s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(A,{})}),document.getElementById("root")),B()}},[[30,1,2]]]);
//# sourceMappingURL=main.c2c4f91f.chunk.js.map