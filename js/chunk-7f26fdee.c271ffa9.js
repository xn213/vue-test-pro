(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f26fdee"],{"47de":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"weather"},[e._m(0),a("h2",[e.weather.basic&&e.weather.basic.admin_area!==e.weather.basic.location?a("span",[e._v(e._s(e.weather.basic.admin_area)+"\n    ")]):e._e(),e.weather.basic?a("span",[e._v(e._s(e.weather.basic.location)+"市")]):e._e(),e._v("\n    实时天气查询\n  ")]),a("hr"),a("div",{staticClass:"weather-search"},[a("label",{attrs:{for:"weather-search"},on:{click:function(t){e.isWeatherShow=!e.isWeatherShow}}},[e._v("输入查询城市名(支持全拼):\n    ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.params.location,expression:"params.location"}],attrs:{id:"weather-search",type:"text"},domProps:{value:e.params.location},on:{change:e.change,input:function(t){t.target.composing||e.$set(e.params,"location",t.target.value)}}})]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isWeatherShow,expression:"isWeatherShow"}],staticClass:"weather-detail-wrap"},["ok"===e.weather.status?a("div",{staticClass:"weather-detail"},[a("p",[e._v("天气: "+e._s(e.weather.now.cond_txt))]),a("p",[a("span",{staticClass:"weather-detail-tmp"},[e._v("\n            温度: "+e._s(e.weather.now.tmp)),a("sup",[e._v("。")])]),a("span",{staticClass:"weather-detail-fl"},[e._v("\n            体感温度: "+e._s(e.weather.now.fl)),a("sup",[e._v("。")])])]),a("p",[e._v("相对湿度: "+e._s(e.weather.now.hum)+"%")]),a("p",[e._v("降水量: "+e._s(e.weather.now.pcpn)+"mm")]),a("p",[e._v("更新: "+e._s(e.weather.update.loc))]),a("p",[e._v("风向: "+e._s(e.weather.now.wind_dir))]),a("p",[e._v("风力: "+e._s(e.weather.now.wind_sc)+"级")]),a("p",[e._v("风速: "+e._s(e.weather.now.wind_spd)+"km/h")]),a("p",[e._v("能见度: "+e._s(e.weather.now.vis)+"公里")])]):e._e(),"unknown location"===e.weather.status?a("div",{staticClass:"weather-detail"},[e._v("\n        查不到这个城市\n      ")]):e._e(),"invalid param"===e.weather.status?a("div",{staticClass:"weather-detail"},[e._v("\n        城市名不合法\n      ")]):e._e()])]),e._m(1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weather-newtab",attrs:{title:"新窗口打开"}},[a("a",{attrs:{href:"https://apip.weatherdt.com/h5.html?id=7f0tSWM9fd",target:"_blank"}},[e._v("\n      本页已缓存, 新窗口打开weather-h5\n    ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("iframe",{attrs:{id:"show-iframe",frameborder:"0",name:"showHere",scrolling:"no",height:"430",src:"target.html"}},[a("div",{attrs:{id:"weather-view-he"}})])}],s=(a("96cf"),a("3b8d")),i=a("f753"),o=a.n(i),c="https://free-api.heweather.net/s6/weather/";function h(e){var t=e.location;return o()({url:"".concat(c,"now"),method:"get",params:{location:t,key:"acc3e8d31740439f9132547841dc489a"}})}function w(e){var t=e.location;return o()({url:"".concat(c,"forecast"),method:"get",params:{location:t,key:"acc3e8d31740439f9132547841dc489a"}})}var l={name:"weather",data:function(){return{params:{location:"杭州"},weather:{status:"",basic:{admin_area:"浙江",location:"杭州"},now:{tmp:"",fl:"",cond_txt:"",hum:"",pcpn:"",vis:""},update:{loc:""},daily_forecast:[]},loading:!0,isWeatherShow:!0}},created:function(){this.getNowWeather(),this.getForecastWeather()},mounted:function(){},methods:{change:function(){""!=this.params.location&&(this.isWeatherShow=!0,this.getNowWeather(this.params),console.log(this.params.location))},getNowWeather:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h(this.params);case 2:t=e.sent,a=t.data.HeWeather6[0],this.weather.basic=a.basic,this.weather.now=a.now,this.weather.update=a.update,this.weather.status=a.status,this.loading=!1,console.log(a,this.weather);case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getForecastWeather:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w(this.params);case 2:t=e.sent,a=t.data.HeWeather6[0],this.weather.daily_forecast=a.daily_forecast,console.log("getForecastWeather: ",t,a);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},u=l,d=(a("fccc"),a("2877")),p=Object(d["a"])(u,r,n,!1,null,"57855c35",null);t["default"]=p.exports},fccc:function(e,t,a){"use strict";var r=a("ff39"),n=a.n(r);n.a},ff39:function(e,t,a){}}]);
//# sourceMappingURL=chunk-7f26fdee.c271ffa9.js.map