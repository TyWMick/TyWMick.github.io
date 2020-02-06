(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"14x4":function(e,a,l){"use strict";l.r(a);var n=l("9Jkg"),t=l.n(n),r=l("q1tI"),i=l.n(r),u=l("8Kt/"),s=l.n(u),c=l("9+7C"),o=l("7vrA"),d=l("QojX"),b=l("zUrK"),m=l("wx14"),p=l("zLVn"),h=l("TSYQ"),f=l.n(h),g=l("vUet"),y=l("dbZe"),N=i.a.forwardRef((function(e,a){var l=e.bsPrefix,n=e.variant,t=e.size,r=e.active,u=e.className,s=e.block,c=e.type,o=e.as,d=Object(p.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(g.a)(l,"btn"),h=f()(u,b,r&&"active",b+"-"+n,s&&b+"-block",t&&b+"-"+t);if(d.href)return i.a.createElement(y.a,Object(m.a)({},d,{as:o,ref:a,className:f()(h,d.disabled&&"disabled")}));a&&(d.ref=a),o||(d.type=c);var N=o||"button";return i.a.createElement(N,Object(m.a)({},d,{className:h}))}));N.displayName="Button",N.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var v=N,w=l("6xyR"),C=l("+ryr"),E=l("AYxD"),O=i.a.createElement;a.default=function(){var e=Object(r.useState)(0),a=e[0],l=e[1],n=Object(r.useState)(0),u=n[0],m=n[1],p=Object(r.useState)(0),h=p[0],f=p[1],g=Object(r.useState)(0),y=g[0],N=g[1],T=Object(r.useState)(0),x=T[0],I=T[1],D=Object(r.useState)(0),P=D[0],k=D[1],S=Object(r.useState)(0),j=S[0],L=S[1],R=Object(r.useState)(0),q=R[0],V=R[1],F=Object(r.useState)(0),G=F[0],A=F[1],U=Object(r.useState)(0),$=U[0],Y=U[1],Q=Object(r.useState)(0),J=Q[0],K=Q[1],M=Object(r.useState)(null),_=M[0],H=M[1],z=Object(r.useState)(null),W=z[0],X=z[1];return O(i.a.Fragment,null,O(s.a,null,O("title",null,"Cash register \u2013 Ty Mick")),O(o.a,null,O("h1",{className:"mb-4"},"Cash register function"),O(d.a,{className:"mb-4",onSubmit:function(e){e.preventDefault(),H("checkCashRegister("+a+", "+u+', [["PENNY", '+h+'], ["NICKEL", '+y+'], ["DIME", '+x+'], ["QUARTER", '+P+'], ["DOLLAR", '+j+'], ["FIVE", '+q+'], ["TEN", '+G+'], ["TWENTY", '+$+'], ["ONE HUNDRED", '+J+"]])"),X(t()(function(e,a,l){var n=a-e,t=l.reduce((function(e,a){return e+a[1]}),0);if(n==t)return{status:"CLOSED",change:l};var r=function(e,a){var t=l.filter((function(a){return a[0]==e}))[0][1],r=Math.min(t,Math.floor(n/a)*a);(r=Math.round(100*r)/100)>0&&(i.push([e,r]),n-=r,n=Math.round(100*n)/100)},i=[];return r("ONE HUNDRED",100),r("TWENTY",20),r("TEN",10),r("FIVE",5),r("ONE",1),r("QUARTER",.25),r("DIME",.1),r("NICKEL",.05),r("PENNY",.01),0==n?{status:"OPEN",change:i}:{status:"INSUFFICIENT_FUNDS",change:[]}}(a,u,[["PENNY",h],["NICKEL",y],["DIME",x],["QUARTER",P],["DOLLAR",j],["FIVE",j],["TEN",G],["TWENTY",$],["ONE HUNDRED",J]])))}},O(d.a.Row,null,O(d.a.Group,{controlId:"price",className:"col-sm"},O(d.a.Label,{className:"lead"},"Purchase price (",O("code",null,"price"),")"),O(b.a,null,O(b.a.Prepend,null,O(b.a.Text,{id:"dsPrice"},"$")),O(d.a.Control,{type:"number",step:"0.01",min:"0",value:a,onChange:function(e){l(e.target.value)},"aria-describedby":"dsPrice",required:!0}))),O(d.a.Group,{controlId:"cash",className:"col-sm"},O(d.a.Label,{className:"lead"},"Payment amount (",O("code",null,"cash"),")"),O(b.a,null,O(b.a.Prepend,null,O(b.a.Text,{id:"dsCash"},"$")),O(d.a.Control,{type:"number",step:"0.01",min:"0",value:u,onChange:function(e){m(e.target.value)},"aria-describedby":"dsCash",required:!0})))),O(d.a.Row,null,O("div",{id:"cid",className:"col lead"},"Cash in drawer (",O("code",null,"cid"),")")),O(d.a.Row,null,O(d.a.Group,{controlId:"penny",className:"col-sm-6 col-md-4 col-lg-3"},O(d.a.Label,null,"Value in pennies"),O(b.a,null,O(b.a.Prepend,null,O(b.a.Text,{id:"dsPenny"},"$")),O(d.a.Control,{type:"number",step:"0.01",min:"0",value:h,onChange:function(e){f(e.target.value)},"aria-labelledby":"cid","aria-describedby":"dsPenny",required:!0}))),O(d.a.Group,{controlId:"nickel",className:"col-sm-6 col-md-4 col-lg-3"},O(d.a.Label,null,"Value in nickels"),O(b.a,null,O(b.a.Prepend,null,O(b.a.Text,{id:"dsNickel"},"$")),O(d.a.Control,{type:"number",step:"0.05",min:"0",value:y,onChange:function(e){N(e.target.value)},"aria-labelledby":"cid","aria-describedby":"dsNickel",required:!0}))),O(d.a.Group,{controlId:"dime",className:"col-sm-6 col-md-4 col-lg-3"},O(d.a.Label,null,"Value in dimes"),O(b.a,null,O(b.a.Prepend,null,O(b.a.Text,{id:"dsDime"},"$")),O(d.a.Control,{type:"number",step:"0.1",min:"0",value:x,onChange:function(e){I(e.target.value)},"aria-labelledby":"cid","aria-describedby":"dsDime",required:!0}))),O(d.a.Group,{controlId:"quarter",className:"col-sm-6 col-md-4 col-lg-3"},O(d.a.Label,null,"Value in quarters"),O(b.a,null,O(b.a.Prepend,null,O(b.a.Text,{id:"dsQuarter"},"$")),O(d.a.Control,{type:"number",step:"0.25",min:"0",value:P,onChange:function(e){k(e.target.value)},"aria-labelledby":"cid","aria-describedby":"dsQuarter",required:!0}))),O(d.a.Group,{controlId:"dollar",className:"col-sm-6 col-md-4 col-lg-3"},O(d.a.Label,null,"Value in one-dollar bills"),O(b.a,null,O(b.a.Prepend,null,O(b.a.Text,{id:"dsDollar"},"$")),O(d.a.Control,{type:"number",step:"1",min:"0",value:j,onChange:function(e){L(e.target.value)},"aria-labelledby":"cid","aria-describedby":"dsDollar",required:!0}))),O(d.a.Group,{controlId:"five",className:"col-sm-6 col-md-4 col-lg-3"},O(d.a.Label,null,"Value in five-dollar bills"),O(b.a,null,O(b.a.Prepend,null,O(b.a.Text,{id:"dsFive"},"$")),O(d.a.Control,{type:"number",step:"5",min:"0",value:q,onChange:function(e){V(e.target.value)},"aria-labelledby":"cid","aria-describedby":"dsFive",required:!0}))),O(d.a.Group,{controlId:"ten",className:"col-sm-6 col-md-4 col-lg-3"},O(d.a.Label,null,"Value in ten-dollar bills"),O(b.a,null,O(b.a.Prepend,null,O(b.a.Text,{id:"dsTen"},"$")),O(d.a.Control,{type:"number",step:"10",min:"0",value:G,onChange:function(e){A(e.target.value)},"aria-labelledby":"cid","aria-describedby":"dsTen",required:!0}))),O(d.a.Group,{controlId:"twenty",className:"col-sm-6 col-md-4 col-lg-3"},O(d.a.Label,null,"Value in twenty-dollar bills"),O(b.a,null,O(b.a.Prepend,null,O(b.a.Text,{id:"dsTwenty"},"$")),O(d.a.Control,{type:"number",step:"20",min:"0",value:$,onChange:function(e){Y(e.target.value)},"aria-labelledby":"cid","aria-describedby":"dsTwenty",required:!0}))),O(d.a.Group,{controlId:"hundred",className:"col-sm-6 col-md-4 col-lg-3"},O(d.a.Label,null,"Value in hundred-dollar bills"),O(b.a,null,O(b.a.Prepend,null,O(b.a.Text,{id:"dsHundred"},"$")),O(d.a.Control,{type:"number",step:"100",min:"0",value:J,onChange:function(e){K(e.target.value)},"aria-labelledby":"cid","aria-describedby":"dsHundred",required:!0})))),O(v,{variant:"primary",type:"submit"},"Check the cash register")),O("div",{className:"mx-2 mx-sm-4 mx-lg-5 mb-4"},O("div",{className:"d-flex align-items-center mb-3"},O("h5",{className:"mb-0 mr-3"},"Function\xa0call:"),O(w.a,{className:"mb-0"},_?O(C.a,{language:"javascript",style:E.githubGist,className:"text-wrap px-2 py-1 m-0"},_):O("pre",{className:"px-2 py-1 m-0"},"\xa0"))),O("div",{className:"d-flex align-items-center"},O("h5",{className:"mb-0 mr-3"},"Returns:"),O(w.a,{className:"mb-0"},W?O(C.a,{language:"json",style:E.githubGist,className:"text-wrap px-2 py-1 m-0"},W):O("pre",{className:"px-2 py-1 m-0"},"\xa0")))),O("div",{className:"mb-2"},O(c.a,{id:"24cdeb02eb5f4e3e2cd14f91f5bbe5cb"})),O("p",null,"I created this function as a requirement for"," ",O("a",{href:"https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures"},"my freeCodeCamp JavaScript Algorithms and Data Structures Certification"),". Output isn't terribly human-readable, but, well, human-readable wasn't part of the requirements. I suppose cash registers don't really speak English, though, so I guess that's okay. Here are the requirements I built to:"),O("ul",null,O("li",null,"Design a cash register drawer function"," ",O("code",null,"checkCashRegister()")," that accepts purchase price as the first argument (",O("code",null,"price"),"), payment as the second argument (",O("code",null,"cash"),"), and cash-in-drawer (",O("code",null,"cid"),") as the third argument."),O("li",null,O("code",null,"cid")," is a 2D array listing available currency."),O("li",null,"The ",O("code",null,"checkCashRegister()")," function should always return an object with a ",O("code",null,"status")," key and a ",O("code",null,"change")," ","key."),O("li",null,"Return"," ",O("code",null,'{status: "INSUFFICIENT_FUNDS", change: []}')," if cash-in-drawer is less than the change due, or if you cannot return the exact change."),O("li",null,"Return ",O("code",null,'{status: "CLOSED", change: [...]}')," with cash-in-drawer as the value for the key ",O("code",null,"change")," if it is equal to the change due."),O("li",null,"Otherwise, return"," ",O("code",null,'{status: "OPEN", change: [...]}'),", with the change due in coins and bills, sorted in highest to lowest order, as the value of the ",O("code",null,"change")," key."))))}},"9Jkg":function(e,a,l){e.exports=l("oh+g")},Qg85:function(e,a,l){"use strict";a.a=function(){for(var e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var l=arguments.length,n=new Array(l),t=0;t<l;t++)n[t]=arguments[t];e.apply(this,n),a.apply(this,n)}}),null)}},YLpn:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/cash-register",function(){return l("14x4")}])},dbZe:function(e,a,l){"use strict";var n=l("wx14"),t=l("zLVn"),r=l("q1tI"),i=l.n(r),u=l("Qg85");function s(e){return!e||"#"===e.trim()}var c=i.a.forwardRef((function(e,a){var l=e.as,r=void 0===l?"a":l,c=e.disabled,o=e.onKeyDown,d=Object(t.a)(e,["as","disabled","onKeyDown"]),b=function(e){var a=d.href,l=d.onClick;(c||s(a))&&e.preventDefault(),c?e.stopPropagation():l&&l(e)};return s(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),c&&(d.tabIndex=-1,d["aria-disabled"]=!0),i.a.createElement(r,Object(n.a)({ref:a},d,{onClick:b,onKeyDown:Object(u.a)((function(e){" "===e.key&&(e.preventDefault(),b(e))}),o)}))}));c.displayName="SafeAnchor",a.a=c},"oh+g":function(e,a,l){var n=l("WEpk"),t=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return t.stringify.apply(t,arguments)}}},[["YLpn",0,2,1,28,29]]]);