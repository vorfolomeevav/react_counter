(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(6),u=n.n(c),o=n(1),i=n(2),s=n(4),d=n(3),l=(n(12),function(t){Object(s.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.addOne,r=e.add100,c=e.increase,u=e.counter;return a.a.createElement("div",{className:"p-6"},a.a.createElement("h1",{className:"title is-1"},"Count:",u),a.a.createElement("button",{className:"button is-primary mx-2",type:"button",onClick:function(){return n(t.counter)}},"Add 1"),a.a.createElement("button",{className:"button is-primary mx-2",type:"button",onClick:function(){return r(t.counter)}},"Add 100"),a.a.createElement("button",{className:"button is-primary mx-2",type:"button",onClick:function(){return c(t.counter)}},"Increase"))}}]),n}(a.a.Component)),m=function(t){Object(s.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={counter:0},t.addOne=function(e){t.setState((function(t){return{counter:t.counter+1}}),e)},t.add100=function(){t.setState((function(t){return{counter:t.counter+100}}))},t.increase=function(){return t.state.counter%5===0?t.addOne(t.add100):t.addOne()},t}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(l,{addOne:this.addOne,add100:this.add100,increase:this.increase,counter:this.state.counter})}}]),n}(a.a.Component);u.a.render(a.a.createElement(m,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.4edb1d91.chunk.js.map