webpackJsonp([1,2],[,,,,,,,,,,,function(t,e,n){"use strict";var a=n(13),r=n.n(a),i=n(95),o=n.n(i),s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:options,n=e.name,a=e.desc,i=e.theme,o=e.textColor,s=e.activities,c=e.file;r()(this,t),this.name=n,this.desc=a,this.theme=i,this.textColor=o,this.activities=s||[],this.file=c}return o()(t,[{key:"addActivity",value:function(t){return t.section=this,this.activities.push(t),this}},{key:"totalPoints",get:function(){return this.activities.reduce(function(t,e){return t+e.points},0)}}]),t}();e.a=s},function(t,e,n){"use strict";var a=n(72),r=n(73),i=n(74);e.a={CustomActivity:a.a,MultiActivity:r.a,TrueFalseActivity:i.a}},,,,,,,,,,function(t,e,n){"use strict";var a=n(13),r=n.n(a),i=function t(e){if(r()(this,t),!e)throw new Error("Activity has no type");this.type=e,this.section=null};e.a=i},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=n(75),r=n(82),i=n(77),o=n(84),s=n(79),c={points:0,playerName:null,playerAvatar:null,sections:{facebook:a.a,snapchat:r.a,instagram:i.a,twitter:o.a,passwordSecurity:s.a},avatars:["http://findicons.com/files/icons/1072/face_avatars/300/d05.png","http://www.puzzelo.com/assets/images/profiles/profile-1.png","http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Frankenstein-icon.png","http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Mask-4-icon.png","http://megaicons.net/static/img/icons_sizes/126/304/512/bioman-avatar-3-blue-icon.png","http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Grim-Reaper-icon.png","http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Voodoo-Doll-icon.png","http://icons.iconarchive.com/icons/hopstarter/brown-monsters/1024/Brown-Monsters-01-icon.png","/static/smwug.png","http://www.avatarsdb.com/avatars/spongebob_squarepants_2.gif","http://m.memegen.com/t7mxfo.jpg"]};e.a=c},,,,,,,,,,,,,,,,function(t,e,n){n(148);var a=n(1)(n(67),n(165),"data-v-7ac50bfb",null);t.exports=a.exports},function(t,e,n){n(147);var a=n(1)(n(68),n(164),"data-v-76572377",null);t.exports=a.exports},,function(t,e,n){"use strict";var a=n(41),r=n.n(a),i=n(166),o=n.n(i),s=n(86);n(40);r.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"index",component:s.a.Index},{path:"/characterSelection",name:"characterSelection",component:s.a.CharacterSelection},{path:"/dashboard",name:"dashboard",component:s.a.Dashboard},{path:"/section/:name",name:"sectionview",component:s.a.SectionViewer,children:[{path:"truefalse/:question",name:"truefalseactivityview",component:s.a.Activities.TrueFalseActivity}]}]})},function(t,e,n){n(139);var a=n(1)(n(61),n(157),null,null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(81);e.default={name:"appa",data:function(){return{password:n.i(a.a)(),generating:!1}},methods:{generate:function(){var t=this,e=0;this.generating=!0;var r=setInterval(function(){t.password=n.i(a.a)(),e++,e>30&&(t.generating=!1,clearInterval(r))},20)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(154),r=n.n(a);e.default={components:{avatar:r.a},data:function(){return{selectedAvatar:null,name:null}},name:"characterSelection",methods:{avatarSelected:function(t){this.selectedAvatar=t,this.$emit("avatarSelected",t)},next:function(){this.$root.data.playerName=this.name,this.$root.data.playerAvatar=this.selectedAvatar,this.$router.push("/dashboard")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(155),r=n.n(a),i=n(71),o=n(21),s=n.n(o);e.default={data:function(){return{sections:this.$root.data.sections,query:"",selectedSearch:null}},components:{"section-renderer":r.a},computed:{shouldSearch:function(){return this.query.length>0}},methods:{search:function(){if(this.shouldSearch)return n.i(i.a)(this.query,this.$root.data.sections)},marked:function(t){return s()(t)}},name:"dashboard"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"index",methods:{next:function(){this.$router.push("/characterSelection")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(21),r=n.n(a),i=n(57),o=n.n(i),s=n(56),c=n.n(s);e.default={components:{truefalse:o.a,multi:c.a},data:function(){return{section:this.$root.data.sections[this.$route.params.name]}},computed:{question:function(){return Number(this.$route.params.question)}},methods:{next:function t(){var e=this.question;isNaN(e)&&(e=-1);var t=(this.section.activities[e],this.section.activities[e?e+1:0]);return t?void("truefalse"===t.type&&this.$router.push("/section/"+this.$route.params.name+"/truefalse/"+(e+1))):this.done()},activityType:function(t){return"custom"===t.type?t.component:t.type},marked:function(t){return r()(t)},done:function(){this.$router.push("/dashboard")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["activity"],data:function(){return{answer:null}},computed:{correct:function(){return this.correctAnswer===this.answer},correctAnswer:function(){return this.activity.answers[this.activity.answer]}},methods:{select:function(t){this.correct=t===this.activity.answer,this.correct&&(this.$root.data.points+=this.activity.points)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["activity"],data:function(){return{correct:null}},methods:{select:function(t){this.correct=t===this.activity.answer,this.correct&&(this.$root.data.points+=this.activity.points)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["url"],computed:{selected:function(){return this.$parent.selectedAvatar===this.url}},methods:{click:function(){this.$emit("clicked",this.url)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["section"],methods:{next:function(){for(var t in this.$root.data.sections)this.$root.data.sections[t]===this.section&&this.$router.push("/section/"+t)}}}},function(t,e,n){"use strict";function a(t,e){return t[0]+t[1]+t[2]+e}function r(t,e){var n=new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),"gi"),r={},i=!0,o=!1,c=void 0;try{for(var l,v=d()(u()(e));!(i=(l=v.next()).done);i=!0){var p=s()(l.value,2),h=p[0],f=p[1],m=r[h]=[],y=!0,w=!1,_=void 0;try{for(var g,b=d()(f.file||[]);!(y=(g=b.next()).done);y=!0){var x=g.value;m.push((a(x,h).match(n)||[]).join("").length)}}catch(t){w=!0,_=t}finally{try{!y&&b.return&&b.return()}finally{if(w)throw _}}}}catch(t){o=!0,c=t}finally{try{!i&&v.return&&v.return()}finally{if(o)throw c}}return r}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1],n=t.split(" "),a={},i=!0,o=!1,c=void 0;try{for(var l,v=d()(u()(e));!(i=(l=v.next()).done);i=!0){var p=s()(l.value,2),h=p[0],f=p[1];a[h]=[];var m=!0,y=!1,w=void 0;try{for(var _,g=d()(f.file||[]);!(m=(_=g.next()).done);m=!0){_.value;a[h].push(0)}}catch(t){y=!0,w=t}finally{try{!m&&g.return&&g.return()}finally{if(y)throw w}}}}catch(t){o=!0,c=t}finally{try{!i&&v.return&&v.return()}finally{if(o)throw c}}var b=!0,x=!1,k=void 0;try{for(var C,S=d()(n);!(b=(C=S.next()).done);b=!0){var A=C.value;if(""!==A&&" "!==A){var $=r(A,e),P=!0,M=!1,I=void 0;try{for(var E,T=function(){var t=s()(E.value,2),e=t[0],n=t[1];a[e]=a[e].map(function(t,e){return t+n[e]})},q=d()(u()($));!(P=(E=q.next()).done);P=!0)T()}catch(t){M=!0,I=t}finally{try{!P&&q.return&&q.return()}finally{if(M)throw I}}}}}catch(t){x=!0,k=t}finally{try{!b&&S.return&&S.return()}finally{if(x)throw k}}var F=!0,N=!1,j=void 0;try{for(var O,R=d()(u()(a));!(F=(O=R.next()).done);F=!0){var W=s()(O.value,2),h=W[0],H=W[1],Y=[],L=!0,V=!1,D=void 0;try{for(var G,z=d()(u()(H));!(L=(G=z.next()).done);L=!0){var B=s()(G.value,2),J=B[0],Q=B[1];0!==Q&&Y.push([Number(J),Q])}}catch(t){V=!0,D=t}finally{try{!L&&z.return&&z.return()}finally{if(V)throw D}}Y=Y.sort(function(t,e){return e[1]-t[1]}),a[h]=Y}}catch(t){N=!0,j=t}finally{try{!F&&R.return&&R.return()}finally{if(N)throw j}}return console.log(a),a}var o=n(96),s=n.n(o),c=n(91),u=n.n(c),l=n(42),d=n.n(l);e.a=i},function(t,e,n){"use strict";var a=n(23),r=n.n(a),i=n(13),o=n.n(i),s=n(25),c=n.n(s),u=n(24),l=n.n(u),d=n(22),v=function(t){function e(t){o()(this,e);var n=c()(this,(e.__proto__||r()(e)).call(this,"custom"));return n.component=t,n}return l()(e,t),e}(d.a);e.a=v},function(t,e,n){"use strict";var a=n(23),r=n.n(a),i=n(13),o=n.n(i),s=n(25),c=n.n(s),u=n(24),l=n.n(u),d=n(22),v=function(t){function e(t,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;o()(this,e);var s=c()(this,(e.__proto__||r()(e)).call(this,"multi"));return s.question=t,s.answers=n,s.answer=a,s.points=i,s}return l()(e,t),e}(d.a);e.a=v},function(t,e,n){"use strict";var a=n(23),r=n.n(a),i=n(13),o=n.n(i),s=n(25),c=n.n(s),u=n(24),l=n.n(u),d=n(22),v=function(t){function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;o()(this,e);var i=c()(this,(e.__proto__||r()(e)).call(this,"truefalse"));return i.question=t,i.answer=n,i.points=a,i}return l()(e,t),e}(d.a);e.a=v},function(t,e,n){"use strict";var a=n(11),r=n(12),i=new a.a({name:"Facebook",desc:"Learn more about staying safe on Facebook",theme:"#3B5998",textColor:"white",file:n(76)});i.addActivity(new r.a.MultiActivity("Who should I friend on Facebook?",["Everybody you see","People you have met in real life","People you have met online through games.etc","Close family and friends"],1)),i.addActivity(new r.a.MultiActivity("What information should i put on my Facebook profile?",["None","Name, Address, Credit card number, National Insurance number and Date of Birth","Name, hometown and age","All the possible information that you can put on it"],2)),i.addActivity(new r.a.MultiActivity("What should you use your Facebook profile for?",["To bully people","To stalk your ex","To find new memes","To talk to friends and families and to see how their lives are going"],3)),e.a=i},function(t,e){t.exports=[["What does my profile look like to the public?","You can simply click [here](https://www.facebook.com/profile.php?viewas=100000686899395) to see what your profile would look like\nto the public.","privacy public safe"],["What is appropriate for me to post?","It depends, you might want some people to see certain posts, and others not to - you can configure your settings when posting messages\nto handle this. Make sure you aren't just posting stuff blindly for the public to see unless you're sure!\n\n![Post specifically](/static/articles/facebook/post-specific.png)","privacy public appropriate apt settings safe"],["How do i change my password?","Top right corner and click the down arrow, then click Settings and go to account settings. these is an option called Password and \nonce clicked it will bring you to a change password page. Enter your current password once and new password twice and it will be changed.","privacy public safe"]]},function(t,e,n){"use strict";var a=n(11),r=n(12),i=new a.a({name:"Instagram",desc:"Learn more about staying safe on Instagram",theme:"url(https://stephencastleberry.files.wordpress.com/2016/05/instagram-background.jpg)",textColor:"white",file:n(78)});i.addActivity(new r.a.MultiActivity("What should you put on your Instagram feed?",["Spam images","Pictures stolen from other people","Activites that you have done and pictures you have taken yourself","Provacative and offensive images"],2)),e.a=i},function(t,e){t.exports=[["How do I change my password on Instagram?",'To change your password on Instagram first go to the top right Options Menu, then go to Change Password, \nthen enter your old password and enter yor new password twice. Tada, you have now changed your password.\n\n<img src="/static/articles/instagram/password-change.png" width="200px"/> '],["How do I change who can follow me on Instagram?",'Go to the options menu and toggle private account\n\n<img src="/static/articles/instagram/private-account.png" width="200px"/> '],["Who should I follow on instagram?","On Instagram you should only age appropriate pages and people who are posting things toat are appropriate for you. You should\n not look at anti-Semetic images for example."]]},function(t,e,n){"use strict";var a=n(11),r=n(12),i=n(149),o=n.n(i),s=new a.a({name:"Password Security",desc:"Learn more about keeping your passwords safe and secure",theme:"#08A65C",textColor:"white",file:n(80)});s.addActivity(new r.a.CustomActivity(o.a)),e.a=s},function(t,e){t.exports=[["What makes a strong password?","A strong password contains atleast:\n    - at least 8 characters\n    - uppercase letters\n    - lowercase letters\n    - numbers\n    - symbols","password security strong secure"]]},function(t,e,n){"use strict";function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Math.floor(Math.random()*t)}function r(t){return t[a(t.length)]}function i(t){for(var e,n,a=t.length;0!==a;)n=Math.floor(Math.random()*a),a-=1,e=t[a],t[a]=t[n],t[n]=e;return t}function o(){for(var t="abcdefghijklmnopqrstuvwxyz",e=t.toUpperCase(),n='!"#$%&()*+,-./',o=8,s=[],c=0;c<o;)c<2?s.push(r(e)):c<4?s.push(r(t)):c<6?s.push(a(10)):s.push(r(n)),c++;return i(s).join("")}e.a=o},function(t,e,n){"use strict";var a=n(11),r=n(12),i=new a.a({name:"Snapchat",desc:"Learn more about staying safe on Snapchat",theme:"#D5DE2A",textColor:"white",file:n(83)});i.addActivity(new r.a.MultiActivity("What should you send on Snapchat?",["Provocative images","Spam to people you don't like","Your daily activities that you think others would find intersting","Offensive images to bully people"],3)),e.a=i},function(t,e){t.exports=[["How do I change my password on snapchat?","Settings ➡️️ Password ➡️️ Enter Current password ➡️️ Enter new password","password Snapchat privacy"],["How do I change who can view my story on Snapchat?",'Go to settings and look at _View my story_. You can choose anyone, your friends or a custom set of people.\n    \n<img src="/static/articles/snapchat/storyoptions.png" width="300">']]},function(t,e,n){"use strict";var a=n(11),r=n(12),i=new a.a({name:"Twitter",desc:"Learn more about staying safe on Twitter",theme:"#1B95E0",textColor:"white",file:n(85)});i.addActivity(new r.a.MultiActivity("What should you post on your Twitter feed?",["Your controversial political views","Every thought that pops into your mind","Your views on current affairs in the world","Your opinion on the hackathon food"],3)),i.addActivity(new r.a.MultiActivity("What should you use twitter for?",["To post offensive pictures and offend as many people as possible","To spread information about issues in the current world","To abuse people and insult them","To start as many arguments as possible"],1)),e.a=i},function(t,e){t.exports=[["How can I change who visits my account?",'Go to _Settings > Privacy and safety > Tweet Privacy_. Select "Protect my tweets" if you want only your followers to see your tweets.\n\n![privacy](/static/articles/twitter/safety.png)',"privacy public safe"],["What is appropriate for me to post?","It depends, you might want some people to see certain posts, and others not to. You can protect your tweets if you want\nonly your followers to see your posts.\n\n![privacy](/static/articles/twitter/safety.png)","privacy public appropriate apt settings safe"]]},function(t,e,n){"use strict";var a=n(152),r=n.n(a),i=n(150),o=n.n(i),s=n(151),c=n.n(s),u=n(153),l=n.n(u),d=n(87);e.a={Index:r.a,Dashboard:c.a,CharacterSelection:o.a,SectionViewer:l.a,Activities:d.a}},function(t,e,n){"use strict";var a=n(57),r=n.n(a),i=n(56);n.n(i);e.a={TrueFalseActivity:r.a}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){n(142);var a=n(1)(n(62),n(159),"data-v-1f6f35c3",null);t.exports=a.exports},function(t,e,n){n(146);var a=n(1)(n(63),n(163),"data-v-66e14718",null);t.exports=a.exports},function(t,e,n){n(141),n(140);var a=n(1)(n(64),n(158),"data-v-1c095622",null);t.exports=a.exports},function(t,e,n){n(144);var a=n(1)(n(65),n(161),"data-v-318b9dad",null);t.exports=a.exports},function(t,e,n){n(138);var a=n(1)(n(66),n(156),null,null);t.exports=a.exports},function(t,e,n){n(143);var a=n(1)(n(69),n(160),"data-v-2c0cff0d",null);t.exports=a.exports},function(t,e,n){n(145);var a=n(1)(n(70),n(162),"data-v-5f9c6d44",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sectionViewer"},[n("div",{staticClass:"document"},[n("div",{staticClass:"hSection"},[n("h1",[n("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.$router.go(-1)}}},[t._v("🔙")]),t._v("  "+t._s(this.section.name)+" "),n("span",{staticClass:"light"},[t._v("| Help Articles")])]),t._v(" "),t._l(this.section.file,function(e){return n("div",{staticClass:"article"},[n("h2",[t._v(t._s(e[0]))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.marked(e[1]))}})])})],2),t._v(" "),n("div",{staticClass:"hSection"},[n("h1",[n("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.$router.go(-1)}}},[t._v("🔙")]),t._v("  "+t._s(this.section.name)+" "),n("span",{staticClass:"light"},[t._v("| Activities")])]),t._v(" "),t._l(this.section.activities,function(e){return n("div",{staticClass:"testQ"},[n(t.activityType(e),{tag:"component",attrs:{activity:e}})],1)})],2)]),t._v(" "),n("router-view",{key:t.$route.params.question,on:{next:t.next}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{attrs:{id:"dashboardView"}},[n("div",{attrs:{id:"navbar"}},[n("div",{staticClass:"circle",attrs:{id:"points",title:"Points"}},[t._v(t._s(this.$root.data.points))]),t._v(" "),n("div",{staticClass:"circle avatar",style:"background-image:url("+this.$root.data.playerAvatar+")",attrs:{title:"Avatar for "+this.$root.data.playerName}},[t._v(" .")]),t._v(" "),t._m(0)]),t._v(" "),n("div",{attrs:{id:"searchbar"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Search for anything here..."},domProps:{value:t._s(t.query)},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.shouldSearch,expression:"!shouldSearch"}],staticClass:"container",attrs:{id:"sections"}},[n("h1",[t._v("Sections")]),t._v(" "),t._l(this.$root.data.sections,function(t){return n("section-renderer",{attrs:{section:t}})})],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldSearch,expression:"shouldSearch"}],staticClass:"container",attrs:{id:"searchResults"}},[n("h1",[n("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.query=""}}},[t._v("🔙")]),t._v(" Search Results")]),t._v(" "),t.selectedSearch?n("div",{attrs:{id:"resultWrapper"}},[n("div",{attrs:{id:"exit"},on:{click:function(e){t.selectedSearch=null}}},[t._v("Exit")]),t._v(" "),n("div",{attrs:{id:"result"}},[n("h1",[t._v(t._s(t.selectedSearch[0]))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.marked(t.selectedSearch[1]))}})])]):t._e(),t._v(" "),t._l(t.search(),function(e,a){return Object.keys(e).length>0?n("div",{staticClass:"resultCategory",style:"background:"+t.sections[a].theme},[n("div",[n("h2",[t._v(t._s(t.sections[a].name))]),t._v(" "),n("ol",t._l(e,function(e){return n("li",{on:{click:function(n){t.selectedSearch=t.sections[a].file[e[0]]}}},[t._v(t._s(t.sections[a].file[e[0]][0]))])}))])]):t._e()})],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"rhs"}},[n("div",{staticClass:"circle",attrs:{id:"points",title:"Points"}},[t._v("⚙️")]),t._v(" "),n("div",{staticClass:"circle",attrs:{id:"points",title:"Points"}},[t._v("🏆")]),t._v(" "),n("div",{staticClass:"circle",attrs:{id:"points",title:"Points"}},[t._v("❔")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"passwordgenerator"}},[n("button",{attrs:{disabled:!!t.generating},on:{click:t.generate}},[t._v("Generate")]),t._v(" "),n("span",{attrs:{id:"password"}},[t._v(t._s(t.password))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar",class:this.selected?"selected":"notSelected",style:"background-image:url("+t.url+")",on:{click:t.click}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"indexview"}},[n("img",{staticClass:"image",attrs:{src:"/static/cdlogo.png"}}),t._v(" "),n("h1",[t._v("E-Safety")]),t._v(" "),n("p",{staticClass:"font"},[t._v("Learn how to be safe online")]),t._v(" "),n("img",{staticClass:"playbutton",attrs:{src:"/static/bcv2.png"},on:{click:t.next}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",style:"background:"+t.section.theme+"; color:"+t.section.textColor,on:{click:t.next}},[n("div",{staticClass:"title"},[t._v(t._s(t.section.name))]),t._v(" "),n("p",[t._v(t._s(t.section.desc))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"characterSelectionView"}},[n("h1",[t._v("Character Selection")]),t._v(" "),n("h2",[t._v("Avatars")]),t._v(" "),n("div",{attrs:{id:"avatars"}},t._l(this.$root.data.avatars,function(e){return n("avatar",{attrs:{url:e},on:{clicked:t.avatarSelected}})})),t._v(" "),n("h2",[t._v("Character Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Character Name"},domProps:{value:t._s(t.name)},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("br"),n("br"),t._v(" "),t.name&&t.selectedAvatar?n("div",{staticClass:"button",on:{click:t.next}},[t._v("Continue")]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"activity truefalse"},[n("div",{staticClass:"title"},[t._v(t._s(t.activity.question))]),t._v(" "),null===t.correct?n("div",{staticClass:"t"},[n("div",{staticClass:"button",on:{click:function(e){t.select(!0)}}},[t._v("Yes")]),t._v(" "),n("div",{staticClass:"button",on:{click:function(e){t.select(!1)}}},[t._v("No")])]):t._e(),t._v(" "),null!==t.correct?n("div",{class:"out "+t.correct},[t._v(t._s(t.correct?"Correct, it was "+t.activity.answer:"Incorrect, the answer was "+t.activity.answer)+"!")]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"activity truefalse"},[n("div",{staticClass:"title"},[t._v(t._s(t.activity.question))]),t._v(" "),null===t.answer?n("div",{staticClass:"t"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],on:{input:function(e){t.select()},change:function(e){t.answer=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},t._l(t.activity.answers,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])}))]):t._e(),t._v(" "),null!==t.answer?n("div",{class:"out "+t.correct},[t._v(t._s(t.correct?"Correct":"Incorrect, the answer was: "+t.correctAnswer)+"!")]):t._e()])},staticRenderFns:[]}},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(41),r=n.n(a),i=n(60),o=n.n(i),s=n(59),c=n(40),u=n(21),l=n.n(u);window.dataStore=c.a,r.a.filter("marked",function(t){return l()(t)}),new r.a({el:"#app",router:s.a,template:"<App/>",components:{App:o.a},data:function(){return{data:c.a}}})}],[168]);
//# sourceMappingURL=app.5ea5f703e07572fdfbb5.js.map