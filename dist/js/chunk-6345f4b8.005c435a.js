(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6345f4b8"],{"0da7":function(t,i,s){"use strict";var o=s("3d2e"),n=s.n(o);n.a},"3ca3":function(t,i,s){"use strict";var o=s("6547").charAt,n=s("69f3"),e=s("7dd0"),a="String Iterator",r=n.set,c=n.getterFor(a);e(String,"String",(function(t){r(this,{type:a,string:String(t),index:0})}),(function(){var t,i=c(this),s=i.string,n=i.index;return n>=s.length?{value:void 0,done:!0}:(t=o(s,n),i.index+=t.length,{value:t,done:!1})}))},"3d2e":function(t,i,s){},"4df4":function(t,i,s){"use strict";var o=s("0366"),n=s("7b0b"),e=s("9bdd"),a=s("e95a"),r=s("50c4"),c=s("8418"),d=s("35a1");t.exports=function(t){var i,s,u,l,f,v,h=n(t),m="function"==typeof this?this:Array,C=arguments.length,g=C>1?arguments[1]:void 0,_=void 0!==g,p=d(h),b=0;if(_&&(g=o(g,C>2?arguments[2]:void 0,2)),void 0==p||m==Array&&a(p))for(i=r(h.length),s=new m(i);i>b;b++)v=_?g(h[b],b):h[b],c(s,b,v);else for(l=p.call(h),f=l.next,s=new m;!(u=f.call(l)).done;b++)v=_?e(l,g,[u.value,b],!0):u.value,c(s,b,v);return s.length=b,s}},6547:function(t,i,s){var o=s("a691"),n=s("1d80"),e=function(t){return function(i,s){var e,a,r=String(n(i)),c=o(s),d=r.length;return c<0||c>=d?t?"":void 0:(e=r.charCodeAt(c),e<55296||e>56319||c+1===d||(a=r.charCodeAt(c+1))<56320||a>57343?t?r.charAt(c):e:t?r.slice(c,c+2):a-56320+(e-55296<<10)+65536)}};t.exports={codeAt:e(!1),charAt:e(!0)}},"6cd7":function(t,i,s){"use strict";s.r(i);var o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"goods"},[s("div",{staticClass:"sort"},t._l(t.goods,(function(i,o){return s("div",{key:i.name,staticClass:"sortType",class:{active:t.isActive===i.name},on:{click:function(i){return t.gotoSort(o)}}},[t._v(" "+t._s(i.name)+" "),0!=t.sum(t.sortArray[o])?s("div",{staticClass:"messageAlert"},[t._v(" "+t._s(t.sum(t.sortArray[o]))+" ")]):t._e()])})),0),s("div",{staticClass:"content",attrs:{id:"content"}},[t._l(t.goods,(function(i,o){return s("div",{key:i.name},[s("div",{staticClass:"sortName",attrs:{id:i.name,index:o}},[t._v(" "+t._s(i.name)+" ")]),t._l(i.foods,(function(n,e){return s("div",{key:n.name,staticClass:"foodInfo"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:n.icon}})]),s("div",{staticClass:"else"},[s("div",{staticClass:"foodName"},[t._v(t._s(n.name))]),s("div",{staticClass:"m"},[t._v("主要原料: "+t._s(n.info))]),s("div",{staticClass:"sellCount"},[t._v("月售: "+t._s(n.sellCount))]),s("div",{staticClass:"price"},[s("div",[t._v("¥"+t._s(n.price))]),s("div",{staticClass:"buttonGroup"},[s("transition",{attrs:{name:"slide"}},[0!=t.sortArray[o][e]?s("div",{staticClass:"deletegroup"},[s("div",{staticClass:"cart-button delete-button",on:{click:function(s){return t.deleteCart(n.name,i.name)}}},[t._v(" - ")]),s("div",{staticClass:"cart-number"},[t._v(" "+t._s(t.sortArray[o][e])+" ")])]):t._e()]),s("div",{staticClass:"cart-button",on:{click:function(s){return t.addCart(n.name,i.name)}}},[t._v(" + ")])],1)])])])}))],2)})),s("div",{staticClass:"blank"})],2),t.showCart&&t.totalFood>0?s("div",{staticClass:"cart-detail",on:{touchmove:function(t){t.preventDefault()}}},[s("div",{staticClass:"detail-title"},[s("div",[t._v("已选商品")]),s("div",{on:{click:t.clearCart}},[t._v("清空")])]),s("div",{staticClass:"detail-content"},[t._l(t.sortArray,(function(i,o){return[t._l(i,(function(i,n){return[i>0?s("div",{key:10*o+n,staticClass:"detail-info"},[s("div",{staticClass:"detail-icon"},[s("img",{attrs:{src:t.goods[o].foods[n].icon}})]),s("div",{staticClass:"cart-info"},[s("div",[t._v(t._s(t.goods[o].foods[n].name))]),s("div",{staticClass:"price"},[s("div",{staticStyle:{color:"red"}},[t._v(" ¥"+t._s(t.goods[o].foods[n].price)+" ")]),s("div",{staticClass:"buttonGroup"},[s("div",{staticClass:"cart-button delete-button",on:{click:function(i){return t.deleteCart(t.goods[o].foods[n].name,t.goods[o].name)}}},[t._v(" - ")]),s("div",{staticClass:"detail-number"},[t._v(t._s(i))]),s("div",{staticClass:"cart-button",on:{click:function(i){return t.addCart(t.goods[o].foods[n].name,t.goods[o].name)}}},[t._v(" + ")])])])])]):t._e()]}))]}))],2)]):t._e(),t.showCart&&t.totalFood>0?s("div",{staticClass:"mask",on:{click:function(i){return t.test()},touchstart:function(i){return t.test()}}}):t._e(),s("div",{staticClass:"cart",on:{click:function(i){return t.test()},touchmove:function(t){t.preventDefault()}}},[s("div",{staticClass:"cart-icon"},[s("i",{staticClass:"iconfont icon-gouwuche",staticStyle:{"font-size":"1.5em"}}),0!=t.totalFood?s("div",{staticClass:"messageAlert"},[t._v(t._s(t.totalFood))]):t._e()]),s("div",[0===t.totalFood?s("div",[t._v("未选购商品")]):s("div",{staticClass:"totalPrice"},[t._v("¥"+t._s(t.totalPrice))]),s("div",{staticClass:"deliverPrice"},[t._v("另需配送费¥"+t._s(t.shop.deliveryPrice))])]),s("div",{staticClass:"confirm",class:t.isEnough},[t._v(" "+t._s(t.minPrice)+" ")])])])},n=[],e=(s("4160"),s("a630"),s("c975"),s("b0c0"),s("b64b"),s("3ca3"),s("159b"),s("1725")),a={data:function(){return{isActive:"",observer:"",cartList:{},sortArray:[],showCart:!1,content:"",sortElements:""}},computed:{shop:function(){return e.info},goods:function(){return e.goods},totalFood:function(){var t=this,i=0;return this.sortArray.forEach((function(s){i+=t.sum(s)})),i},totalPrice:function(){var t=this,i=0;return this.sortArray.forEach((function(s,o){s.forEach((function(s,n){i+=t.goods[o].foods[n].price*s}))})),i},minPrice:function(){var t=this.shop.minPrice-this.totalPrice;return 0===this.totalFood?"￥".concat(this.shop.minPrice,"起送"):t>0?"差￥".concat(t,"起送"):"去结算"},isEnough:function(){return{enough:"去结算"===this.minPrice}}},methods:{test:function(){this.showCart=!this.showCart},gotoSort:function(t){this.content.scrollTo(0,0),this.sortElements[t].scrollIntoView(),this.isActive=this.goods[t].name},sum:function(t){var i=0;return t.forEach((function(t){i+=t})),i},initData:function(){var t=this;this.cartList=this.$store.state.cartList[this.$route.params.id]||{},this.goods.forEach((function(i,s){var o=Object.keys(t.cartList).indexOf(i.name),n=[];i.foods.forEach((function(s,e){-1!=o&&-1!=Object.keys(t.cartList[i.name]).indexOf(s.name)?n[e]=t.cartList[i.name][s.name]:n[e]=0})),t.$set(t.sortArray,s,n)}))},addCart:function(t,i){this.$store.commit("cartAddFood",{id:this.$route.params.id,food:t,sort:i}),this.initData()},deleteCart:function(t,i){this.$store.commit("cartDeleteFood",{id:this.$route.params.id,food:t,sort:i}),this.initData()},clearCart:function(){this.$store.commit("clearCart",this.$route.params.id),this.initData()}},beforeMount:function(){this.initData()},mounted:function(){var t=this;this.content=document.getElementById("content"),this.sortElements=document.getElementsByClassName("sortName"),this.observer=new IntersectionObserver((function(i){i.forEach((function(i){if(!0===i.isIntersecting){var s=parseInt(i.target.getAttribute("index"));t.isActive=t.goods[s].name}}))}),{threshold:[0],root:document.getElementById("content"),rootMargin:"0px 0px -99% 0px"}),Array.from(document.getElementsByClassName("sortName")).forEach((function(i){t.observer.observe(i)}))},watch:{totalFood:function(){0===this.totalFood&&(this.showCart=!1)}},beforeDestroy:function(){this.observer.disconnect()}},r=a,c=(s("0da7"),s("2877")),d=Object(c["a"])(r,o,n,!1,null,"5dc8b5a2",null);i["default"]=d.exports},a630:function(t,i,s){var o=s("23e7"),n=s("4df4"),e=s("1c7e"),a=!e((function(t){Array.from(t)}));o({target:"Array",stat:!0,forced:a},{from:n})},b0c0:function(t,i,s){var o=s("83ab"),n=s("9bf2").f,e=Function.prototype,a=e.toString,r=/^\s*function ([^ (]*)/,c="name";o&&!(c in e)&&n(e,c,{configurable:!0,get:function(){try{return a.call(this).match(r)[1]}catch(t){return""}}})},c975:function(t,i,s){"use strict";var o=s("23e7"),n=s("4d64").indexOf,e=s("a640"),a=s("ae40"),r=[].indexOf,c=!!r&&1/[1].indexOf(1,-0)<0,d=e("indexOf"),u=a("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:c||!d||!u},{indexOf:function(t){return c?r.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);