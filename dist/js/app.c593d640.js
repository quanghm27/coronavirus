(function(a){function t(t){for(var n,s,o=t[0],u=t[1],c=t[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(a[n]=u[n]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var a,t=0;t<i.length;t++){for(var e=i[t],n=!0,o=1;o<e.length;o++){var u=e[o];0!==r[u]&&(n=!1)}n&&(i.splice(t--,1),a=s(s.s=e[0]))}return a}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=a,s.c=n,s.d=function(a,t,e){s.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},s.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,t){if(1&t&&(a=s(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var n in a)s.d(e,n,function(t){return a[t]}.bind(null,n));return e},s.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return s.d(t,"a",t),t},s.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},s.p="/coronavirus/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;i.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"034f":function(a,t,e){"use strict";var n=e("85ec"),r=e.n(n);r.a},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[a.emptyData?e("div",[e("p",[a._v("The system could not retrieve any data from the server")])]):e("div",[e("h3",[a._v("Coronavirus (COVID-19) statistics")]),e("h4",[a._v(a._s(a.timestamp))]),e("CountryList",{attrs:{"country-data":a.countryBaseData}})],1)])},i=[],s=(e("d81d"),e("96cf"),e("1da1")),o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"country-list"},a._l(a.countryData,(function(a){return e("Country",{key:a.OBJECTID,attrs:{"country-data":a}})})),1)},u=[],c=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"country-detail"},[e("div",{staticClass:"clash-card"},[e("country-flag",{attrs:{country:a.countryCode,size:"big"}}),e("div",{staticClass:"clash-card__level clash-card__level--archer"}),e("div",{staticClass:"clash-card__unit-name"},[a._v(a._s(a.countryData.Country_Region))]),e("div",{staticClass:"clash-card__unit-description"},[e("dd",[a._v(a._s(a._f("formatNumber")(a.countryData.Confirmed)))]),a._v("Cases ")]),e("div",{staticClass:"clash-card__unit-stats clash-card__unit-stats--archer clearfix"},[e("div",{staticClass:"one-third"},[e("div",{staticClass:"stat active-cases"},[a._v(a._s(a._f("formatNumber")(a.countryData.Active)))]),e("div",{staticClass:"stat-value"},[a._v("Active")])]),e("div",{staticClass:"one-third"},[e("div",{staticClass:"stat death-cases"},[a._v(a._s(a._f("formatNumber")(a.countryData.Deaths)))]),e("div",{staticClass:"stat-value"},[a._v("Deaths")])]),e("div",{staticClass:"one-third"},[e("div",{staticClass:"stat recovered-cases"},[a._v(a._s(a._f("formatNumber")(a.countryData.Recovered)))]),e("div",{staticClass:"stat-value"},[a._v("Recovered")])])])],1)])},l=[],d={Afghanistan:"af","Aland Islands":"ax",Albania:"al",Algeria:"dz","American Samoa":"as",Andorra:"ad",Angola:"ao",Anguilla:"ai","Antigua and Barbuda":"ag",Argentina:"ar",Armenia:"am",Aruba:"aw",Australia:"au",Austria:"at",Azerbaijan:"az",Bahamas:"bs",Bahrain:"bh",Bangladesh:"bd",Barbados:"bb",Belarus:"by",Belgium:"be",Belize:"bz",Benin:"bj",Bermuda:"bm",Bhutan:"bt",Bolivia:"bo","Bosnia and Herzegovina":"ba",Botswana:"bw",Brazil:"br","British Virgin Islands":"vg",Brunei:"bn",Bulgaria:"bg","Burkina Faso":"bf",Burma:"mm",Burundi:"bi",Cambodia:"kh",Cameroon:"cm",Canada:"ca","Canary Islands":"ic","Cape Verde":"cv","Cayman Islands":"ky","Central African Republic":"cf",Chad:"td",Chile:"cl",China:"cn",Colombia:"co",Comoros:"km","Cook Islands":"ck","Costa Rica":"cr",Croatia:"hr",Cuba:"cu",Curacao:"cw",Cyprus:"cy",Czechia:"cz","Democratic Republic of the Congo":"cd",Denmark:"dk",Djibouti:"dj",Dominica:"dm","Dominican Republic":"do","East Timor":"tl",Ecuador:"ec",Egypt:"eg","El Salvador":"sv","Equatorial Guinea":"gq",Eritrea:"er",Estonia:"ee",Ethiopia:"et","European Union":"eu","Falkland Islands (Malvinas)":"fk","Faroe Islands":"fo",Fiji:"fj",Finland:"fi",France:"fr","French Polynesia":"pf","French Southern Territories":"tf","French Guiana":"gf",Gabon:"ga",Gambia:"gm",Georgia:"ge",Germany:"de",Ghana:"gh",Gibraltar:"gi",Granada:"gd",Greece:"gr",Greenland:"gl",Guam:"gu",Guatemala:"gt",Guernsey:"gg",Guinea:"gn","Guinea-Bissau":"gw",Guyana:"gy",Haiti:"ht",Honduras:"hn","Hong Kong":"hk",Hungary:"hu",Iceland:"is",India:"in",Indonesia:"id",Iran:"ir",Iraq:"iq",Ireland:"ie","Isle of Man":"im",Israel:"il",Italy:"it","Ivory Coast":"ci",Jamaica:"jm",Japan:"jp",Jersey:"je",Jordan:"jo",Kazakhstan:"kz",Kenya:"ke",Kiribati:"ki",Kuwait:"kw",Kyrgyzstan:"kg",Laos:"la",Latvia:"lv",Lebanon:"lb",Lesotho:"ls",Liberia:"lr",Libya:"ly",Liechtenstein:"li",Lithuania:"lt",Luxembourg:"lu",Macao:"mo","North Macedonia":"mk",Madagascar:"mg",Malawi:"mw",Malaysia:"my",Maldives:"mv",Mali:"ml",Malta:"mt","Marshall, Islands":"mh",Martinique:"mq",Mauricio:"mu",Mauritania:"mr",Mayotte:"yt",Mexico:"mx",Micronesia:"fm",Moldova:"md",Monaco:"mc",Mongolia:"mn",Montenegro:"me",Montserrat:"ms",Morocco:"ma",Mozambique:"mz",Namibia:"na",Nauru:"nr",Nepal:"np","Netherlands Antilles":"an","New Caledonia":"nc","New Zealand":"nz",Nicaragua:"ni",Niger:"ne",Nigeria:"ng",Niue:"nu","Norfolk, Island":"nf","North Korea":"kp","Northern Mariana Islands":"mp",Norway:"no",Oman:"om",Pakistan:"pk",Palau:"pw",Palestine:"ps",Panama:"pa","Papua New Guinea":"pg",Paraguay:"py",Peru:"pe",Philippines:"ph",Pitcairn:"pn",Poland:"pl",Portugal:"pt","Puerto Rico":"pr",Qatar:"qa","Republic of the Congo":"cg",Romania:"ro",Russia:"ru",Rwanda:"rw","Saint Barthelemy":"bl","Saint Helena":"sh","Saint Kitts and Nevis":"kn","Saint Lucia":"lc","Saint Martin":"mf","Saint Vincent and the Grenadines":"vc",Samoa:"ws","San Marino":"sm","Sao Tome and Principe":"st","Saudi Arabia":"sa",Senegal:"sn",Serbia:"rs",Seychelles:"sc","Sierra Leone":"sl",Singapore:"sg",Slovakia:"sk",Slovenia:"si","Solomon Islands":"sb",Somalia:"so","South Africa":"za","South Georgia and the South Sandwich Islands":"gs","Korea, South":"kr","South Sudan":"ss",Spain:"es","Sri Lanka":"lk",Sudan:"sd",Suriname:"sr",Swaziland:"sz",Sweden:"se",Switzerland:"ch",Syria:"sy","Taiwan*":"tw",Tajikistan:"tj",Tanzania:"tz",Thailand:"th",Netherlands:"nl",Togo:"tg",Tokelau:"tk",Tonga:"to","Trinidad and Tobago":"tt",Tunisia:"tn",Turkey:"tr",Turkmenistan:"tm","Turks and Caicos Islands":"tc",Tuvalu:"tv",Reunion:"re",Uganda:"ug",Ukraine:"ua","United Arab Emirates":"ae","United Kingdom":"gb","United States":"us",Uruguay:"uy",Uzbekistan:"uz",Vanuatu:"vu","Vatican City":"va",Venezuela:"ve",Vietnam:"vn","Virgin Islands of the United States":"vi","Wallis and Futuna":"wf","Western Sahara":"eh",Yemen:"ye",Zambia:"zm",Zimbabwe:"zw","Cruise Ship":"bo"};function m(a){return d[a]}var f={name:"Country",props:{countryData:{type:Object,required:!0}},data:function(){return{countryCode:null}},created:function(){this.countryCode=m(this.countryData.Country_Region)||this.countryData.Country_Region},filters:{formatNumber:function(a){return"".concat(a.toLocaleString("en-US"))}}},h=f,p=(e("759d"),e("2877")),v=Object(p["a"])(h,c,l,!1,null,"3d3d55fb",null),g=v.exports,y={name:"CountryList",components:{Country:g},props:{countryData:{type:Array,required:!0}}},b=y,C=(e("7527"),Object(p["a"])(b,o,u,!1,null,"32eecd88",null)),S=C.exports,_=e("bc3a"),w=e.n(_),k="https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&outSR=102100&resultOffset=0&resultRecordCount=100&cacheHint=true&fbclid=IwAR3WOSOjHOo31y7U4vctHZ_vn_gC-58UrU3vwRuCNpcawt0Lk9MPuQ0bLOc",M={name:"App",components:{CountryList:S},data:function(){return{countryBaseData:[],emptyData:!1,timestamp:""}},created:function(){this.fetchData(),this.getNow()},methods:{fetchData:function(){var a=Object(s["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,w.a.get(k);case 2:t=a.sent,t.data.features?this.countryBaseData=t.data.features.map((function(a){return a.attributes})):this.emptyData=!0;case 4:case"end":return a.stop()}}),a,this)})));function t(){return a.apply(this,arguments)}return t}(),getNow:function(){var a=new Date,t=a.getHours(),e=a.getMinutes(),n=t>=12?"pm":"am";t%=12,t=t||12,e=e<10?"0"+e:e;var r=t+":"+e+" "+n;this.timestamp=a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear()+" "+r}}},j=M,D=(e("034f"),Object(p["a"])(j,r,i,!1,null,null,null)),B=D.exports,I=e("eea2");n["a"].component("CountryFlag",I["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(a){return a(B)}}).$mount("#app")},7527:function(a,t,e){"use strict";var n=e("9e37"),r=e.n(n);r.a},"759d":function(a,t,e){"use strict";var n=e("cc84"),r=e.n(n);r.a},"85ec":function(a,t,e){},"9e37":function(a,t,e){},cc84:function(a,t,e){}});
//# sourceMappingURL=app.c593d640.js.map