(this["webpackJsonpcalculadora-react"]=this["webpackJsonpcalculadora-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),o=s(1),l=s(7),c=s.n(l),r=s(2),b=s(3),n=s(5),i=s(4),u=(s(13),function(t){Object(n.a)(s,t);var e=Object(i.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(b.a)(s,[{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{className:this.props.classe,children:Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:this.props.classebt,onClick:function(){return t.props.M\u00e9todo(t.props.value)},children:this.props.value})})})}}]),s}(o.Component)),d=(s(14),function(t){Object(n.a)(s,t);var e=Object(i.a)(s);function s(){var t;Object(r.a)(this,s);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).M\u00e9todo=function(e){t.props.M\u00e9todo(e)},t}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Buttons",children:[Object(a.jsx)(u,{classe:"bt",classebt:"number","M\xe9todo":this.M\u00e9todo,value:"AC"}),Object(a.jsx)(u,{classe:"bt",classebt:"number",value:"+/-","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"number",value:"%","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"dividir",value:"/","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)("br",{}),Object(a.jsx)(u,{classe:"bt",classebt:"number",value:"9","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"number",value:"8","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"number",value:"7","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"multiplicar",value:"*","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)("br",{}),Object(a.jsx)(u,{classe:"bt",classebt:"number",value:"6","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"number",value:"5","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"number",value:"4","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"subtrair",value:"-","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)("br",{}),Object(a.jsx)(u,{classe:"bt",classebt:"number",value:"3","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"number",value:"2","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"number",value:"1","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"somar",value:"+","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)("br",{}),Object(a.jsx)(u,{classe:"bt",classebt:"zero",value:"0","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"number",value:".","M\xe9todo":this.M\u00e9todo}),Object(a.jsx)(u,{classe:"bt",classebt:"resultado",value:"=","M\xe9todo":this.M\u00e9todo})]})}}]),s}(o.Component)),j=(s(15),function(t){Object(n.a)(s,t);var e=Object(i.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"display",children:this.props.display})})}}]),s}(o.Component)),p=(s(16),function(t){Object(n.a)(s,t);var e=Object(i.a)(s);function s(){var t;return Object(r.a)(this,s),(t=e.call(this)).Set=function(e){if(null===t.state.display&&t.setState({display:"0"}),e>=0||e<=9)if(null===t.state.opera\u00e7\u00e3o){var s=null,a=t.state.first;s="0"===t.state.first?e:a+=e,t.setState({first:s,display:s})}else{var o=null,l=t.state.last;o="0"===t.state.last?e:l+=e,"+"===t.state.opera\u00e7\u00e3o?t.setState({total:Number(t.state.first)+Number(o)}):"-"===t.state.opera\u00e7\u00e3o?t.setState({total:Number(t.state.first)-Number(o)}):"*"===t.state.opera\u00e7\u00e3o?t.setState({total:Number(t.state.first)*Number(o)}):"/"===t.state.opera\u00e7\u00e3o&&t.setState({total:Number(t.state.first)/Number(o)}),t.setState({last:o,display:o})}else"="===e?t.setState({first:t.state.total,last:"0",total:null,display:t.state.total}):"AC"===e?t.setState({first:"0",last:"0",total:null,"opera\xe7\xe3o":null,display:0}):"."===e||"+/-"===e||"%"===e?alert("Fun\xe7\xe3o em desenvolvimento!"):"0"===t.state.last?t.setState({"opera\xe7\xe3o":e,display:e}):t.setState({first:t.state.total,last:"0",total:null,"opera\xe7\xe3o":e,display:e})},t.state={first:"0",last:"0",total:null,"opera\xe7\xe3o":null,display:0},t}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Calculadora",children:[Object(a.jsx)("h1",{children:"Calculadora"}),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{display:this.state.display}),Object(a.jsx)(d,{"M\xe9todo":this.Set,display:this.state.display})]})]})}}]),s}(o.Component));c.a.render(Object(a.jsx)(p,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.ebf95bef.chunk.js.map