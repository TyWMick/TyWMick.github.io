(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"/a9y":function(e,t,n){"use strict";var r=n("/HRN"),l=n("WaGi"),i=n("ZDA2"),a=n("/+P4"),o=n("N9n2"),d=n("KI45");t.__esModule=!0,t.default=void 0;var u=d(n("q1tI")),s=d(n("8Kt/")),c={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"},f=function(e){function t(){return r(this,t),i(this,a(t).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||c[e]||"An unexpected error has occurred";return u.default.createElement("div",{style:p.error},u.default.createElement(s.default,null,u.default.createElement("title",null,e,": ",t)),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?u.default.createElement("h1",{style:p.h1},e):null,u.default.createElement("div",{style:p.desc},u.default.createElement("h2",{style:p.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),t}(u.default.Component);t.default=f,f.displayName="ErrorPage";var p={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("/a9y")}])},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}}},[["04ac",0,2,1]]]);