var cv=Object.defineProperty;var uv=(r,e,t)=>e in r?cv(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var gl=(r,e,t)=>(uv(r,typeof e!="symbol"?e+"":e,t),t);function fr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function mg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var fi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ho={duration:.5,overwrite:!1,delay:0},Hd,Tn,Yt,Ti=1e8,Bt=1/Ti,ph=Math.PI*2,hv=ph/4,dv=0,gg=Math.sqrt,fv=Math.cos,pv=Math.sin,Sn=function(e){return typeof e=="string"},Qt=function(e){return typeof e=="function"},wr=function(e){return typeof e=="number"},Vd=function(e){return typeof e>"u"},er=function(e){return typeof e=="object"},Kn=function(e){return e!==!1},Gd=function(){return typeof window<"u"},_l=function(e){return Qt(e)||Sn(e)},_g=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,mh=/(?:-?\.?\d|\.)+/gi,vg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Eo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,su=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xg=/[+-]=-?[.\d]+/,yg=/[^,'"\[\]\s]+/gi,mv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jt,zi,gh,Wd,pi={},Mc={},Eg,Sg=function(e){return(Mc=Vo(e,pi))&&ni},Xd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$a=function(e,t){return!t&&console.warn(e)},Mg=function(e,t){return e&&(pi[e]=t)&&Mc&&(Mc[e]=t)||pi},ja=function(){return 0},gv={suppressEvents:!0,isStart:!0,kill:!1},sc={suppressEvents:!0,kill:!1},_v={suppressEvents:!0},qd={},is=[],_h={},bg,ai={},ou={},kf=30,oc=[],Yd="",$d=function(e){var t=e[0],n,i;if(er(t)||Qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=oc.length;i--&&!oc[i].targetTest(t););n=oc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new $g(e[i],n)))||e.splice(i,1);return e},Fs=function(e){return e._gsap||$d(wi(e))[0]._gsap},Tg=function(e,t,n){return(n=e[t])&&Qt(n)?e[t]():Vd(n)&&e.getAttribute&&e.getAttribute(t)||n},Zn=function(e,t){return(e=e.split(",")).forEach(t)||e},nn=function(e){return Math.round(e*1e5)/1e5||0},cn=function(e){return Math.round(e*1e7)/1e7||0},Ro=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},vv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},bc=function(){var e=is.length,t=is.slice(0),n,i;for(_h={},is.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wg=function(e,t,n,i){is.length&&!Tn&&bc(),e.render(t,n,i||Tn&&t<0&&(e._initted||e._startAt)),is.length&&!Tn&&bc()},Ag=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yg).length<2?t:Sn(e)?e.trim():e},Dg=function(e){return e},mi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Vo=function(e,t){for(var n in t)e[n]=t[n];return e},zf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=er(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Tc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},La=function(e){var t=e.parent||jt,n=e.keyframes?xv(In(e.keyframes)):mi;if(Kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},yv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Cg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Xc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},as=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ns=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ev=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vh=function(e,t,n,i){return e._startAt&&(Tn?e._startAt.revert(sc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Sv=function r(e){return!e||e._ts&&r(e.parent)},Hf=function(e){return e._repeat?Go(e._tTime,e=e.duration()+e._rDelay)*e:0},Go=function(e,t){var n=Math.floor(e=cn(e/t));return e&&n===e?n-1:n},wc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},qc=function(e){return e._end=cn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Bt)||0))},Yc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=cn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),qc(e),n._dirty||Ns(n,e)),e},Rg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=wc(e.rawTime(),t),(!t._dur||hl(0,t.totalDuration(),n)-t._tTime>Bt)&&t.render(n,!0)),Ns(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Bt}},Gi=function(e,t,n,i){return t.parent&&as(t),t._start=cn((wr(n)?n:n||e!==jt?vi(e,n,t):e._time)+t._delay),t._end=cn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Cg(e,t,"_first","_last",e._sort?"_start":0),xh(t)||(e._recent=t),i||Rg(e,t),e._ts<0&&Yc(e,e._tTime),e},Pg=function(e,t){return(pi.ScrollTrigger||Xd("scrollTrigger",t))&&pi.ScrollTrigger.create(t,e)},Lg=function(e,t,n,i,s){if(Kd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&bg!==ci.frame)return is.push(e),e._lazy=[s,i],1},Mv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},xh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Mv(e)&&!(!e._initted&&xh(e))||(e._ts<0||e._dp._ts<0)&&!xh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=hl(0,e._tDur,t),u=Go(l,a),e._yoyo&&u&1&&(o=1-o),u!==Go(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Tn||i||e._zTime===Bt||!t&&e._zTime){if(!e._initted&&Lg(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Bt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&vh(e,t,n,!0),e._onUpdate&&!n&&hi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&hi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&as(e,1),!n&&!Tn&&(hi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Tv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Wo=function(e,t,n,i){var s=e._repeat,o=cn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:cn(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Yc(e,e._tTime=e._tDur*a),e.parent&&qc(e),n||Ns(e.parent,e),e},Vf=function(e){return e instanceof Gn?Ns(e):Wo(e,e._dur)},wv={_start:0,endTime:ja,totalDuration:ja},vi=function r(e,t,n){var i=e.labels,s=e._recent||wv,o=e.duration()>=Ti?s.endTime(!1):e._dur,a,l,c;return Sn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(In(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ia=function(e,t,n){var i=wr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;o.immediateRender=Kn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ln(t[0],o,t[s+1])},hs=function(e,t){return e||e===0?t(e):t},hl=function(e,t,n){return n<e?e:n>t?t:n},Pn=function(e,t){return!Sn(e)||!(t=mv.exec(e))?"":t[1]},Av=function(e,t,n){return hs(n,function(i){return hl(e,t,i)})},yh=[].slice,Ig=function(e,t){return e&&er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&er(e[0]))&&!e.nodeType&&e!==zi},Dv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Sn(i)&&!t||Ig(i,1)?(s=n).push.apply(s,wi(i)):n.push(i)})||n},wi=function(e,t,n){return Yt&&!t&&Yt.selector?Yt.selector(e):Sn(e)&&!n&&(gh||!Xo())?yh.call((t||Wd).querySelectorAll(e),0):In(e)?Dv(e,n):Ig(e)?yh.call(e,0):e?[e]:[]},Eh=function(e){return e=wi(e)[0]||$a("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wi(t,n.querySelectorAll?n:n===e?$a("Invalid scope")||Wd.createElement("div"):e)}},Fg=function(e){return e.sort(function(){return .5-Math.random()})},Ng=function(e){if(Qt(e))return e;var t=er(e)?e:{each:e},n=Us(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Sn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||t).length,m=o[g],p,M,b,E,C,P,T,R,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Ti])[1],!S){for(T=-Ti;T<(T=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],p=l?Math.min(S,g)*u-.5:i%S,M=S===Ti?0:l?g*h/S-.5:i/S|0,T=0,R=Ti,P=0;P<g;P++)b=P%S-p,E=M-(P/S|0),m[P]=C=c?Math.abs(c==="y"?E:b):gg(b*b+E*E),C>T&&(T=C),C<R&&(R=C);i==="random"&&Fg(m),m.max=T-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Pn(t.amount||t.each)||0,n=n&&g<0?Xg(n):n}return g=(m[d]-m.min)/m.max||0,cn(m.b+(n?n(g):g)*m.v)+m.u}},Sh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=cn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(wr(n)?0:Pn(n))}},Ug=function(e,t){var n=In(e),i,s;return!n&&er(e)&&(i=n=e.radius||Ti,e.values?(e=wi(e.values),(s=!wr(e[0]))&&(i*=i)):e=Sh(e.increment)),hs(t,n?Qt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ti,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||wr(o)?u:u+Pn(o)}:Sh(e))},Og=function(e,t,n,i){return hs(In(e)?!t:n===!0?!!(n=0):!i,function(){return In(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Cv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Rv=function(e,t){return function(n){return e(parseFloat(n))+(t||Pn(n))}},Pv=function(e,t,n){return kg(e,t,0,1,n)},Bg=function(e,t,n){return hs(n,function(i){return e[~~t(i)]})},Lv=function r(e,t,n){var i=t-e;return In(e)?Bg(e,r(0,e.length),t):hs(n,function(s){return(i+(s-e)%i)%i+e})},Iv=function r(e,t,n){var i=t-e,s=i*2;return In(e)?Bg(e,r(0,e.length-1),t):hs(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ka=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?yg:mh),n+=e.substr(t,i-t)+Og(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},kg=function(e,t,n,i,s){var o=t-e,a=i-n;return hs(s,function(l){return n+((l-e)/o*a||0)})},Fv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=Sn(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=Vo(In(e)?[]:{},e));if(!u){for(l in t)jd.call(a,e,l,"get",t[l]);s=function(_){return Qd(_,a)||(o?e.p:e)}}}return hs(n,s)},Gf=function(e,t,n){var i=e.labels,s=Ti,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},hi=function(e,t,n){var i=e.vars,s=i[t],o=Yt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&is.length&&bc(),a&&(Yt=a),u=l?s.apply(c,l):s.call(c),Yt=o,u},Sa=function(e){return as(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Tn),e.progress()<1&&hi(e,"onInterrupt"),e},So,zg=[],Hg=function(e){if(e)if(e=!e.name&&e.default||e,Gd()||e.headless){var t=e.name,n=Qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ja,render:Qd,add:jd,kill:Kv,modifier:jv,rawVars:0},o={targetTest:0,get:0,getSetter:Jd,aliases:{},register:0};if(Xo(),e!==i){if(ai[t])return;mi(i,mi(Tc(e,s),o)),Vo(i.prototype,Vo(s,Tc(e,o))),ai[i.prop=t]=i,e.targetTest&&(oc.push(i),qd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Mg(t,i),e.register&&e.register(ni,i,Jn)}else zg.push(e)},Ot=255,Ma={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},au=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ot+.5|0},Vg=function(e,t,n){var i=e?wr(e)?[e>>16,e>>8&Ot,e&Ot]:0:Ma.black,s,o,a,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ma[e])i=Ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ot,i&Ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ot,e&Ot]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(mh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=au(l+1/3,s,o),i[1]=au(l,s,o),i[2]=au(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(vg),n&&i.length<4&&(i[3]=1),i}else i=e.match(mh)||Ma.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Ot,o=i[1]/Ot,a=i[2]/Ot,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Gg=function(e){var t=[],n=[],i=-1;return e.split(rs).forEach(function(s){var o=s.match(Eo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Wf=function(e,t,n){var i="",s=(e+i).match(rs),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Vg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Gg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(rs,"1").split(Eo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(rs),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},rs=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ma)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Nv=/hsl[a]?\(/,Wg=function(e){var t=e.join(" "),n;if(rs.lastIndex=0,rs.test(t))return n=Nv.test(t),e[1]=Wf(e[1],n),e[0]=Wf(e[0],n,Gg(e[1])),!0},Za,ci=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,_=function g(m){var p=r()-i,M=m===!0,b,E,C,P;if((p>e||p<0)&&(n+=p-t),i+=p,C=i-n,b=C-o,(b>0||M)&&(P=++h.frame,d=C-h.time*1e3,h.time=C=C/1e3,o+=b+(b>=s?4:s-b),E=1),M||(l=c(g)),E)for(f=0;f<a.length;f++)a[f](C,d,P,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Eg&&(!gh&&Gd()&&(zi=gh=window,Wd=zi.document||{},pi.gsap=ni,(zi.gsapVersions||(zi.gsapVersions=[])).push(ni.version),Sg(Mc||zi.GreenSockGlobals||!zi.gsap&&zi||{}),zg.forEach(Hg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Za=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Za=0,c=ja},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var b=p?function(E,C,P,T){m(E,C,P,T),h.remove(b)}:m;return h.remove(m),a[M?"unshift":"push"](b),Xo(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h}(),Xo=function(){return!Za&&ci.wake()},St={},Uv=/^[\d.\-M][\d.\-,\s]/,Ov=/["']/g,Bv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Ov,"").trim():+c,i=l.substr(a+1).trim();return t},kv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},zv=function(e){var t=(e+"").split("("),n=St[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Bv(t[1])]:kv(e).split(",").map(Ag)):St._CE&&Uv.test(e)?St._CE("",e):n},Xg=function(e){return function(t){return 1-e(1-t)}},qg=function r(e,t){for(var n=e._first,i;n;)n instanceof Gn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Us=function(e,t){return e&&(Qt(e)?e:St[e]||zv(e))||t},qs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Zn(e,function(a){St[a]=pi[a]=s,St[o=a.toLowerCase()]=n;for(var l in s)St[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=St[a+"."+l]=s[l]}),s},Yg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},lu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/ph*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*pv((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Yg(a);return s=ph/s,l.config=function(c,u){return r(e,c,u)},l},cu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Yg(n);return i.config=function(s){return r(e,s)},i};Zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;qs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});St.Linear.easeNone=St.none=St.Linear.easeIn;qs("Elastic",lu("in"),lu("out"),lu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};qs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);qs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});qs("Circ",function(r){return-(gg(1-r*r)-1)});qs("Sine",function(r){return r===1?1:-fv(r*hv)+1});qs("Back",cu("in"),cu("out"),cu());St.SteppedEase=St.steps=pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Bt;return function(a){return((i*hl(0,o,a)|0)+s)*n}}};Ho.ease=St["quad.out"];Zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Yd+=r+","+r+"Params,"});var $g=function(e,t){this.id=dv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Tg,this.set=t?t.getSetter:Jd},Ja=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wo(this,+t.duration,1,1),this.data=t.data,Yt&&(this._ctx=Yt,Yt.data.push(this)),Za||ci.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Wo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Yc(this,n),!s._dp||s.parent||Rg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Go(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?wc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Bt?0:this._rts,this.totalTime(hl(-Math.abs(this._delay),this._tDur,s),i!==!1),qc(this),Ev(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bt&&(this._tTime-=Bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Gi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=_v);var i=Tn;return Tn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Tn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Vf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Vf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(vi(this,n),Kn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kn(i)),this._dur||(this._zTime=-Bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Bt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Qt(n)?n:Dg,a=function(){var c=i.then;i.then=null,Qt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Sa(this)},r}();mi(Ja.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Bt,_prom:0,_ps:!1,_rts:1});var Gn=function(r){mg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Kn(n.sortChildren),jt&&Gi(n.parent||jt,fr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Pg(fr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ia(0,arguments,this),this},t.from=function(i,s,o){return Ia(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ia(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,La(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ln(i,s,vi(this,o),1),this},t.call=function(i,s,o){return Gi(this,ln.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ln(i,o,vi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,La(o).immediateRender=Kn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,La(a).immediateRender=Kn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:cn(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,M,b,E,C,P,T;if(this!==jt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,E=this._start,b=this._ts,p=!b,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(P=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=cn(u%m),u===l?(g=this._repeat,d=c):(C=cn(u/m),g=~~C,g&&g===C&&(d=c,g--),d>c&&(d=c)),C=Go(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),P&&g&1&&(d=c-d,T=1),g!==C&&!this._lock){var R=P&&C&1,S=R===(P&&g&1);if(g<C&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(T?0:cn(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;qg(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Tv(this,cn(a),cn(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!g&&(hi(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-Bt);break}}f=_}else{f=this._last;for(var y=i<0?i:d;f;){if(_=f._prev,(f._act||y<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,o||Tn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=y?-Bt:Bt);break}}f=_}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-Bt)._zTime=d>=a?1:-1,this._ts))return this._start=E,qc(this),this.render(i,s,o);this._onUpdate&&!s&&hi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(E===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&as(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(hi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(wr(s)||(s=vi(this,s,i)),!(i instanceof Ja)){if(In(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Sn(i))return this.addLabel(i,s);if(Qt(i))i=ln.delayedCall(0,i);else return this}return this!==i?Gi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ln?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Sn(i)?this.removeLabel(i):Qt(i)?this.killTweensOf(i):(i.parent===this&&Xc(this,i),i===this._recent&&(this._recent=this._last),Ns(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=cn(ci.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=vi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=ln.delayedCall(0,s||ja,o);return a.data="isPause",this._hasPause=1,Gi(this,a,vi(this,i))},t.removePause=function(i){var s=this._first;for(i=vi(this,i);s;)s._start===i&&s.data==="isPause"&&as(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Kr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=wi(i),l=this._first,c=wr(s),u;l;)l instanceof ln?vv(l._targets,a)&&(c?(!Kr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=vi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=ln.to(o,mi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Bt,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Wo(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,mi({startAt:{time:vi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Gf(this,vi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Gf(this,vi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Bt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ns(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ns(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ti,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Gi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Wo(o,o===jt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(jt._ts&&(wg(jt,wc(i,jt)),bg=ci.frame),ci.frame>=kf){kf+=fi.autoSleep||120;var s=jt._first;if((!s||!s._ts)&&fi.autoSleep&&ci._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ci.sleep()}}},e}(Ja);mi(Gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Hv=function(e,t,n,i,s,o,a){var l=new Jn(this._pt,e,t,0,1,e_,null,s),c=0,u=0,h,d,f,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ka(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),d=n.match(su)||[];h=su.exec(i);)_=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Ro(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=su.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(xg.test(i)||p)&&(l.e=0),this._pt=l,l},jd=function(e,t,n,i,s,o,a,l,c,u){Qt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Qt(h)?c?e[t.indexOf("set")||!Qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Qt(h)?c?qv:Jg:Zd,_;if(Sn(i)&&(~i.indexOf("random(")&&(i=Ka(i)),i.charAt(1)==="="&&(_=Ro(d,i)+(Pn(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Mh)return!isNaN(d*i)&&i!==""?(_=new Jn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?$v:Qg,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Xd(t,i),Hv.call(this,e,t,d,i,f,l||fi.stringFilter,c))},Vv=function(e,t,n,i,s){if(Qt(e)&&(e=Fa(e,s,t,n,i)),!er(e)||e.style&&e.nodeType||In(e)||_g(e))return Sn(e)?Fa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Fa(e[a],s,t,n,i);return o},jg=function(e,t,n,i,s,o){var a,l,c,u;if(ai[e]&&(a=new ai[e]).init(s,a.rawVars?t[e]:Vv(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Jn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==So))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Kr,Mh,Kd=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!Hd,E=e.timeline,C,P,T,R,S,y,I,B,z,H,Z,W,j;if(E&&(!d||!s)&&(s="none"),e._ease=Us(s,Ho.ease),e._yEase=h?Xg(Us(h===!0?s:h,Ho.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!E&&!!i.runBackwards,!E||d&&!i.stagger){if(B=m[0]?Fs(m[0]).harness:0,W=B&&i[B.prop],C=Tc(i,qd),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?sc:gv),g._lazy=0),o){if(as(e._startAt=ln.set(m,mi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return hi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Tn||!a&&!f)&&e._startAt.revert(sc),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),T=mi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Kn(l),immediateRender:a,stagger:0,parent:p},C),W&&(T[B.prop]=W),as(e._startAt=ln.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Tn?e._startAt.revert(sc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Bt,Bt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Kn(l)||l&&!_,P=0;P<m.length;P++){if(S=m[P],I=S._gsap||$d(m)[P]._gsap,e._ptLookup[P]=H={},_h[I.id]&&is.length&&bc(),Z=M===m?P:M.indexOf(S),B&&(z=new B).init(S,W||C,e,Z,M)!==!1&&(e._pt=R=new Jn(e._pt,S,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(q){H[q]=R}),z.priority&&(y=1)),!B||W)for(T in C)ai[T]&&(z=jg(T,C,e,Z,S,M))?z.priority&&(y=1):H[T]=R=jd.call(e,S,T,"get",C[T],Z,M,0,i.stringFilter);e._op&&e._op[P]&&e.kill(S,e._op[P]),b&&e._pt&&(Kr=e,jt.killTweensOf(S,H,e.globalTime(t)),j=!e.parent,Kr=0),e._pt&&l&&(_h[I.id]=1)}y&&t_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,d&&t<=0&&E.render(Ti,!0,!0)},Gv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Mh=1,e.vars[t]="+=0",Kd(e,a),Mh=0,l?$a(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=nn(n)+Pn(h.e)),h.b&&(h.b=u.s+Pn(h.b))},Wv=function(e,t){var n=e[0]?Fs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Vo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Xv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(In(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Fa=function(e,t,n,i,s){return Qt(e)?e.call(t,n,i,s):Sn(e)&&~e.indexOf("random(")?Ka(e):e},Kg=Yd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zg={};Zn(Kg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Zg[r]=1});var ln=function(r){mg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:La(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||jt,b=(In(n)||_g(n)?wr(n[0]):"length"in i)?[n]:wi(n),E,C,P,T,R,S,y,I;if(a._targets=b.length?$d(b):$a("GSAP target "+n+" not found. https://gsap.com",!fi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||_l(c)||_l(u)){if(i=a.vars,E=a.timeline=new Gn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:b}),E.kill(),E.parent=E._dp=fr(a),E._start=0,d||_l(c)||_l(u)){if(T=b.length,y=d&&Ng(d),er(d))for(R in d)~Kg.indexOf(R)&&(I||(I={}),I[R]=d[R]);for(C=0;C<T;C++)P=Tc(i,Zg),P.stagger=0,p&&(P.yoyoEase=p),I&&Vo(P,I),S=b[C],P.duration=+Fa(c,fr(a),C,S,b),P.delay=(+Fa(u,fr(a),C,S,b)||0)-a._delay,!d&&T===1&&P.delay&&(a._delay=u=P.delay,a._start+=u,P.delay=0),E.to(S,P,y?y(C,S,b):0),E._ease=St.none;E.duration()?c=u=0:a.timeline=0}else if(_){La(mi(E.vars.defaults,{ease:"none"})),E._ease=Us(_.ease||i.ease||"none");var B=0,z,H,Z;if(In(_))_.forEach(function(W){return E.to(b,W,">")}),E.duration();else{P={};for(R in _)R==="ease"||R==="easeEach"||Xv(R,_[R],P,_.easeEach);for(R in P)for(z=P[R].sort(function(W,j){return W.t-j.t}),B=0,C=0;C<z.length;C++)H=z[C],Z={ease:H.e,duration:(H.t-(C?z[C-1].t:0))/100*c},Z[R]=H.v,E.to(b,Z,B),B+=Z.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return f===!0&&!Hd&&(Kr=fr(a),jt.killTweensOf(b),Kr=0),Gi(M,fr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===cn(M._time)&&Kn(h)&&Sv(fr(a))&&M.data!=="nested")&&(a._tTime=-Bt,a.render(Math.max(0,-u)||0)),m&&Pg(fr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Bt&&!u?l:i<Bt?0:i,d,f,_,g,m,p,M,b,E;if(!c)bv(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(d=cn(h%g),h===l?(_=this._repeat,d=c):(m=cn(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(E=this._yEase,d=c-d),m=Go(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(b&&this._yEase&&qg(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(cn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Lg(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(E||this._ease)(d/c),this._from&&(this.ratio=M=1-M),d&&!a&&!s&&!_&&(hi(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;b&&b.render(i<0?i:b._dur*b._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&vh(this,i,s,o),hi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&hi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&vh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&as(this,1),!s&&!(u&&!a)&&(h||a||p)&&(hi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Za||ci.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Kd(this,c),u=this._ease(c/this._dur),Gv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Yc(this,0),this.parent||Cg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Sa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Tn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Kr&&Kr.vars.overwrite!==!0)._first||Sa(this),this.parent&&o!==this.timeline.totalDuration()&&Wo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?wi(i):a,c=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!s||s==="all")&&yv(a,l))return s==="all"&&(this._pt=0),Sa(this);for(h=this._op=this._op||[],s!=="all"&&(Sn(s)&&(g={},Zn(s,function(M){return g[M]=1}),s=g),s=Wv(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,_=d,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Xc(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&Sa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ia(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ia(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return jt.killTweensOf(i,s,o)},e}(Ja);mi(ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zn("staggerTo,staggerFrom,staggerFromTo",function(r){ln[r]=function(){var e=new Gn,t=yh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Zd=function(e,t,n){return e[t]=n},Jg=function(e,t,n){return e[t](n)},qv=function(e,t,n,i){return e[t](i.fp,n)},Yv=function(e,t,n){return e.setAttribute(t,n)},Jd=function(e,t){return Qt(e[t])?Jg:Vd(e[t])&&e.setAttribute?Yv:Zd},Qg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},$v=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},e_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Qd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jv=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Kv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Xc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Zv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},t_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Jn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Qg,this.d=l||this,this.set=c||Zd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Zv,this.m=n,this.mt=s,this.tween=i},r}();Zn(Yd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return qd[r]=1});pi.TweenMax=pi.TweenLite=ln;pi.TimelineLite=pi.TimelineMax=Gn;jt=new Gn({sortChildren:!1,defaults:Ho,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fi.stringFilter=Wg;var Os=[],ac={},Jv=[],Xf=0,Qv=0,uu=function(e){return(ac[e]||Jv).map(function(t){return t()})},bh=function(){var e=Date.now(),t=[];e-Xf>2&&(uu("matchMediaInit"),Os.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=zi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),uu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Xf=e,uu("matchMedia"))},n_=function(){function r(t,n){this.selector=n&&Eh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Qv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Qt(n)&&(s=i,i=n,n=Qt);var o=this,a=function(){var c=Yt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Eh(s)),Yt=o,h=i.apply(o,arguments),Qt(h)&&o._r.push(h),Yt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Qt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Yt;Yt=null,n(this),Yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ln&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ln)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Os.length;o--;)Os[o].id===this.id&&Os.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),ex=function(){function r(t){this.contexts=[],this.scope=t,Yt&&Yt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){er(n)||(n={matches:n});var o=new n_(0,s||this.scope),a=o.conditions={},l,c,u;Yt&&!o.selector&&(o.selector=Yt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=zi.matchMedia(n[c]),l&&(Os.indexOf(o)<0&&Os.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(bh):l.addEventListener("change",bh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ac={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Hg(i)})},timeline:function(e){return new Gn(e)},getTweensOf:function(e,t){return jt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Sn(e)&&(e=wi(e)[0]);var s=Fs(e||{}).get,o=n?Dg:Ag;return n==="native"&&(n=""),e&&(t?o((ai[t]&&ai[t].get||s)(e,t,n,i)):function(a,l,c){return o((ai[a]&&ai[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=wi(e),e.length>1){var i=e.map(function(u){return ni.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=ai[t],a=Fs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;So._pt=0,h.init(e,n?u+n:u,So,0,[e]),h.render(1,h),So._pt&&Qd(1,So)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=ni.to(e,mi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Us(e.ease,Ho.ease)),zf(Ho,e||{})},config:function(e){return zf(fi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ai[a]&&!pi[a]&&$a(t+" effect requires "+a+" plugin.")}),ou[t]=function(a,l,c){return n(wi(a),mi(l||{},s),c)},o&&(Gn.prototype[t]=function(a,l,c){return this.add(ou[t](a,er(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){St[e]=Us(t)},parseEase:function(e,t){return arguments.length?Us(e,t):St},getById:function(e){return jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gn(e),i,s;for(n.smoothChildTiming=Kn(e.smoothChildTiming),jt.remove(n),n._dp=0,n._time=n._tTime=jt._time,i=jt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof ln&&i.vars.onComplete===i._targets[0]))&&Gi(n,i,i._start-i._delay),i=s;return Gi(jt,n,0),n},context:function(e,t){return e?new n_(e,t):Yt},matchMedia:function(e){return new ex(e)},matchMediaRefresh:function(){return Os.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||bh()},addEventListener:function(e,t){var n=ac[e]||(ac[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ac[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Lv,wrapYoyo:Iv,distribute:Ng,random:Og,snap:Ug,normalize:Pv,getUnit:Pn,clamp:Av,splitColor:Vg,toArray:wi,selector:Eh,mapRange:kg,pipe:Cv,unitize:Rv,interpolate:Fv,shuffle:Fg},install:Sg,effects:ou,ticker:ci,updateRoot:Gn.updateRoot,plugins:ai,globalTimeline:jt,core:{PropTween:Jn,globals:Mg,Tween:ln,Timeline:Gn,Animation:Ja,getCache:Fs,_removeLinkedListItem:Xc,reverting:function(){return Tn},context:function(e){return e&&Yt&&(Yt.data.push(e),e._ctx=Yt),Yt},suppressOverwrites:function(e){return Hd=e}}};Zn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ac[r]=ln[r]});ci.add(Gn.updateRoot);So=Ac.to({},{duration:0});var tx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},nx=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=tx(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},hu=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Sn(s)&&(l={},Zn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}nx(a,s)}}}},ni=Ac.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},hu("roundProps",Sh),hu("modifiers"),hu("snap",Ug))||Ac;ln.version=Gn.version=ni.version="3.12.7";Eg=1;Gd()&&Xo();St.Power0;St.Power1;St.Power2;St.Power3;St.Power4;St.Linear;St.Quad;St.Cubic;St.Quart;St.Quint;St.Strong;St.Elastic;St.Back;St.SteppedEase;St.Bounce;St.Sine;St.Expo;St.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qf,Zr,Po,ef,Rs,Yf,tf,ix=function(){return typeof window<"u"},Ar={},Ms=180/Math.PI,Lo=Math.PI/180,js=Math.atan2,$f=1e8,nf=/([A-Z])/g,rx=/(left|right|width|margin|padding|x)/i,sx=/[\s,\(]\S/,Wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Th=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ox=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ax=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},i_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},r_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cx=function(e,t,n){return e.style[t]=n},ux=function(e,t,n){return e.style.setProperty(t,n)},hx=function(e,t,n){return e._gsap[t]=n},dx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},fx=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},px=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Kt="transform",Qn=Kt+"Origin",mx=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Ar&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=gr(i,a)}):this.tfm[e]=o.x?o[e]:gr(i,e),e===Qn&&(this.tfm.zOrigin=o.zOrigin);else return Wi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Kt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qn,t,"")),e=Kt}(s||t)&&this.props.push(e,t,s[e])},s_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(nf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=tf(),(!s||!s.isStart)&&!n[Kt]&&(s_(n),i.zOrigin&&n[Qn]&&(n[Qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},o_=function(e,t){var n={target:e,props:[],revert:gx,save:mx};return e._gsap||ni.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},a_,wh=function(e,t){var n=Zr.createElementNS?Zr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Zr.createElement(e);return n&&n.style?n:Zr.createElement(e)},ji=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(nf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,qo(t)||t,1)||""},jf="O,Moz,ms,Ms,Webkit".split(","),qo=function(e,t,n){var i=t||Rs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(jf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?jf[o]:"")+e},Ah=function(){ix()&&window.document&&(qf=window,Zr=qf.document,Po=Zr.documentElement,Rs=wh("div")||{style:{}},wh("div"),Kt=qo(Kt),Qn=Kt+"Origin",Rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",a_=!!qo("perspective"),tf=ni.core.reverting,ef=1)},Kf=function(e){var t=e.ownerSVGElement,n=wh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Po.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Po.removeChild(n),s},Zf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},l_=function(e){var t,n;try{t=e.getBBox()}catch{t=Kf(e),n=1}return t&&(t.width||t.height)||n||(t=Kf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Zf(e,["x","cx","x1"])||0,y:+Zf(e,["y","cy","y1"])||0,width:0,height:0}:t},c_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&l_(e))},Hs=function(e,t){if(t){var n=e.style,i;t in Ar&&t!==Qn&&(t=Kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(nf,"-$1").toLowerCase())):n.removeAttribute(t)}},Jr=function(e,t,n,i,s,o){var a=new Jn(e._pt,t,n,0,1,o?r_:i_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Jf={deg:1,rad:1,turn:1},_x={grid:1,flex:1},ls=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Rs.style,l=rx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!s||Jf[i]||Jf[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&c_(e),(f||o==="%")&&(Ar[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],nn(f?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(d?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Zr||!g.appendChild)&&(g=Zr.body),m=g._gsap,m&&f&&m.width&&l&&m.time===ci.time&&!m.uncache)return nn(s/m.width*h);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,_=e[u],M?e.style[t]=M:Hs(e,t)}else(f||o==="%")&&!_x[ji(g,"display")]&&(a.position=ji(e,"position")),g===e&&(a.position="static"),g.appendChild(Rs),_=Rs[u],g.removeChild(Rs),a.position="absolute";return l&&f&&(m=Fs(g),m.time=ci.time,m.width=g[u]),nn(d?_*s/h:_&&s?h/_*s:0)},gr=function(e,t,n,i){var s;return ef||Ah(),t in Wi&&t!=="transform"&&(t=Wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ar[t]&&t!=="transform"?(s=el(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Cc(ji(e,Qn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Dc[t]&&Dc[t](e,t,n)||ji(e,t)||Tg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ls(e,t,s,n)+n:s},vx=function(e,t,n,i){if(!n||n==="none"){var s=qo(t,e,1),o=s&&ji(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ji(e,"borderTopColor"))}var a=new Jn(this._pt,e.style,t,0,1,e_),l=0,c=0,u,h,d,f,_,g,m,p,M,b,E,C;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=ji(e,t)||i,g?e.style[t]=g:Hs(e,t)),u=[n,i],Wg(u),n=u[0],i=u[1],d=n.match(Eo)||[],C=i.match(Eo)||[],C.length){for(;h=Eo.exec(i);)m=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,E=g.substr((f+"").length),m.charAt(1)==="="&&(m=Ro(f,m)+E),p=parseFloat(m),b=m.substr((p+"").length),l=Eo.lastIndex-b.length,b||(b=b||fi.units[t]||E,l===i.length&&(i+=b,a.e+=b)),E!==b&&(f=ls(e,t,g,b)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?r_:i_;return xg.test(i)&&(a.e=0),this._pt=a,a},Qf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Qf[n]||n,t[1]=Qf[i]||i,t.join(" ")},yx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ar[a]&&(l=1,a=a==="transformOrigin"?Qn:Kt),Hs(n,a);l&&(Hs(n,Kt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",el(n,1),o.uncache=1,s_(i)))}},Dc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Jn(e._pt,t,n,0,0,yx);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Qa=[1,0,0,1,0,0],u_={},h_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ep=function(e){var t=ji(e,Kt);return h_(t)?Qa:t.substr(7).match(vg).map(nn)},rf=function(e,t){var n=e._gsap||Fs(e),i=e.style,s=ep(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Qa:s):(s===Qa&&!e.offsetParent&&e!==Po&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Po.appendChild(e)),s=ep(e),l?i.display=l:Hs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Po.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Dh=function(e,t,n,i,s,o){var a=e._gsap,l=s||rf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],b=t.split(" "),E=parseFloat(b[0])||0,C=parseFloat(b[1])||0,P,T,R,S;n?l!==Qa&&(T=f*m-_*g)&&(R=E*(m/T)+C*(-g/T)+(g*M-m*p)/T,S=E*(-_/T)+C*(f/T)-(f*M-_*p)/T,E=R,C=S):(P=l_(e),E=P.x+(~b[0].indexOf("%")?E/100*P.width:E),C=P.y+(~(b[1]||b[0]).indexOf("%")?C/100*P.height:C)),i||i!==!1&&a.smooth?(p=E-c,M=C-u,a.xOffset=h+(p*f+M*g)-p,a.yOffset=d+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=C,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Qn]="0px 0px",o&&(Jr(o,a,"xOrigin",c,E),Jr(o,a,"yOrigin",u,C),Jr(o,a,"xOffset",h,a.xOffset),Jr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",E+" "+C)},el=function(e,t){var n=e._gsap||new $g(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ji(e,Qn)||"0",u,h,d,f,_,g,m,p,M,b,E,C,P,T,R,S,y,I,B,z,H,Z,W,j,q,V,O,_e,ye,Ue,ne,se;return u=h=d=g=m=p=M=b=E=0,f=_=1,n.svg=!!(e.getCTM&&c_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Kt]!=="none"?l[Kt]:"")),i.scale=i.rotate=i.translate="none"),T=rf(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Dh(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,T)),C=n.xOrigin||0,P=n.yOrigin||0,T!==Qa&&(I=T[0],B=T[1],z=T[2],H=T[3],u=Z=T[4],h=W=T[5],T.length===6?(f=Math.sqrt(I*I+B*B),_=Math.sqrt(H*H+z*z),g=I||B?js(B,I)*Ms:0,M=z||H?js(z,H)*Ms+g:0,M&&(_*=Math.abs(Math.cos(M*Lo))),n.svg&&(u-=C-(C*I+P*z),h-=P-(C*B+P*H))):(se=T[6],Ue=T[7],O=T[8],_e=T[9],ye=T[10],ne=T[11],u=T[12],h=T[13],d=T[14],R=js(se,ye),m=R*Ms,R&&(S=Math.cos(-R),y=Math.sin(-R),j=Z*S+O*y,q=W*S+_e*y,V=se*S+ye*y,O=Z*-y+O*S,_e=W*-y+_e*S,ye=se*-y+ye*S,ne=Ue*-y+ne*S,Z=j,W=q,se=V),R=js(-z,ye),p=R*Ms,R&&(S=Math.cos(-R),y=Math.sin(-R),j=I*S-O*y,q=B*S-_e*y,V=z*S-ye*y,ne=H*y+ne*S,I=j,B=q,z=V),R=js(B,I),g=R*Ms,R&&(S=Math.cos(R),y=Math.sin(R),j=I*S+B*y,q=Z*S+W*y,B=B*S-I*y,W=W*S-Z*y,I=j,Z=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=nn(Math.sqrt(I*I+B*B+z*z)),_=nn(Math.sqrt(W*W+se*se)),R=js(Z,W),M=Math.abs(R)>2e-4?R*Ms:0,E=ne?1/(ne<0?-ne:ne):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!h_(ji(e,Kt)),j&&e.setAttribute("transform",j))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=nn(f),n.scaleY=nn(_),n.rotation=nn(g)+a,n.rotationX=nn(m)+a,n.rotationY=nn(p)+a,n.skewX=M+a,n.skewY=b+a,n.transformPerspective=E+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Qn]=Cc(c)),n.xOffset=n.yOffset=0,n.force3D=fi.force3D,n.renderTransform=n.svg?Sx:a_?d_:Ex,n.uncache=0,n},Cc=function(e){return(e=e.split(" "))[0]+" "+e[1]},du=function(e,t,n){var i=Pn(t);return nn(parseFloat(t)+parseFloat(ls(e,"x",n+"px",i)))+i},Ex=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,d_(e,t)},ps="0deg",la="0px",ms=") ",d_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,b=n.zOrigin,E="",C=p==="auto"&&e&&e!==1||p===!0;if(b&&(h!==ps||u!==ps)){var P=parseFloat(u)*Lo,T=Math.sin(P),R=Math.cos(P),S;P=parseFloat(h)*Lo,S=Math.cos(P),o=du(M,o,T*S*-b),a=du(M,a,-Math.sin(P)*-b),l=du(M,l,R*S*-b+b)}m!==la&&(E+="perspective("+m+ms),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(C||o!==la||a!==la||l!==la)&&(E+=l!==la||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ms),c!==ps&&(E+="rotate("+c+ms),u!==ps&&(E+="rotateY("+u+ms),h!==ps&&(E+="rotateX("+h+ms),(d!==ps||f!==ps)&&(E+="skew("+d+", "+f+ms),(_!==1||g!==1)&&(E+="scale("+_+", "+g+ms),M.style[Kt]=E||"translate(0, 0)"},Sx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,b=parseFloat(o),E=parseFloat(a),C,P,T,R,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Lo,c*=Lo,C=Math.cos(l)*h,P=Math.sin(l)*h,T=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=Lo,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,R*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),C*=S,P*=S)),C=nn(C),P=nn(P),T=nn(T),R=nn(R)):(C=h,R=d,P=T=0),(b&&!~(o+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(b=ls(f,"x",o,"px"),E=ls(f,"y",a,"px")),(_||g||m||p)&&(b=nn(b+_-(_*C+g*T)+m),E=nn(E+g-(_*P+g*R)+p)),(i||s)&&(S=f.getBBox(),b=nn(b+i/100*S.width),E=nn(E+s/100*S.height)),S="matrix("+C+","+P+","+T+","+R+","+b+","+E+")",f.setAttribute("transform",S),M&&(f.style[Kt]=S)},Mx=function(e,t,n,i,s){var o=360,a=Sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ms:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*$f)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*$f)%o-~~(c/o)*o)),e._pt=d=new Jn(e._pt,t,n,i,c,ox),d.e=u,d.u="deg",e._props.push(n),d},tp=function(e,t){for(var n in t)e[n]=t[n];return e},bx=function(e,t,n){var i=tp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Kt]=t,a=el(n,1),Hs(n,Kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Kt],o[Kt]=t,a=el(n,1),o[Kt]=c);for(l in Ar)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=Pn(c),_=Pn(u),h=f!==_?ls(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Jn(e._pt,a,l,h,d-h,Th),e._pt.u=_||0,e._props.push(l));tp(a,i)};Zn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Dc[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return gr(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,h)}});var f_={name:"css",register:Ah,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,_,g,m,p,M,b,E,C,P,T,R;ef||Ah(),this.styles=this.styles||o_(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ai[g]&&jg(g,t,n,i,e,s)))){if(f=typeof u,_=Dc[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ka(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",rs.lastIndex=0,rs.test(c)||(m=Pn(c),p=Pn(u)),p?m!==p&&(c=ls(e,g,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],Sn(c)&&~c.indexOf("random(")&&(c=Ka(c)),Pn(c+"")||c==="auto"||(c+=fi.units[g]||Pn(gr(e,g))||""),(c+"").charAt(1)==="="&&(c=gr(e,g))):c=gr(e,g),d=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in Wi&&(g==="autoAlpha"&&(d===1&&gr(e,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,a.visibility),Jr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Wi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in Ar,b){if(this.styles.save(g),E||(C=e._gsap,C.renderTransform&&!t.parseTransform||el(e,t.parseTransform),P=t.smoothOrigin!==!1&&C.smooth,E=this._pt=new Jn(this._pt,a,Kt,0,1,C.renderTransform,C,0,-1),E.dep=1),g==="scale")this._pt=new Jn(this._pt,C,"scaleY",C.scaleY,(M?Ro(C.scaleY,M+h):h)-C.scaleY||0,Th),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Qn,0,a[Qn]),u=xx(u),C.svg?Dh(e,u,0,P,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&Jr(this,C,"zOrigin",C.zOrigin,p),Jr(this,a,g,Cc(c),Cc(u)));continue}else if(g==="svgOrigin"){Dh(e,u,1,P,0,this);continue}else if(g in u_){Mx(this,C,g,d,M?Ro(d,M+u):u);continue}else if(g==="smoothOrigin"){Jr(this,C,"smooth",C.smooth,u);continue}else if(g==="force3D"){C[g]=u;continue}else if(g==="transform"){bx(this,u,e);continue}}else g in a||(g=qo(g)||g);if(b||(h||h===0)&&(d||d===0)&&!sx.test(u)&&g in a)m=(c+"").substr((d+"").length),h||(h=0),p=Pn(u)||(g in fi.units?fi.units[g]:m),m!==p&&(d=ls(e,g,c,p)),this._pt=new Jn(this._pt,b?C:a,g,d,(M?Ro(d,M+h):h)-d,!b&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?lx:Th),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=ax);else if(g in a)vx.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,s);else if(g!=="parseTransform"){Xd(g,u);continue}b||(g in a?R.push(g,0,a[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),o.push(g)}}T&&t_(this)},render:function(e,t){if(t.tween._time||!tf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gr,aliases:Wi,getSetter:function(e,t,n){var i=Wi[t];return i&&i.indexOf(",")<0&&(t=i),t in Ar&&t!==Qn&&(e._gsap.x||gr(e,"x"))?n&&Yf===n?t==="scale"?dx:hx:(Yf=n||{})&&(t==="scale"?fx:px):e.style&&!Vd(e.style[t])?cx:~t.indexOf("-")?ux:Jd(e,t)},core:{_removeProperty:Hs,_getMatrix:rf}};ni.utils.checkPrefix=qo;ni.core.getStyleSaver=o_;(function(r,e,t,n){var i=Zn(r+","+e+","+t,function(s){Ar[s]=1});Zn(e,function(s){fi.units[s]="deg",u_[s]=1}),Wi[i[13]]=r+","+e,Zn(n,function(s){var o=s.split(":");Wi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){fi.units[r]="px"});ni.registerPlugin(f_);var le=ni.registerPlugin(f_)||ni;le.core.Tween;/*!
 * strings: 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Tx=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function p_(r){var e=r.nodeType,t="";if(e===1||e===9||e===11){if(typeof r.textContent=="string")return r.textContent;for(r=r.firstChild;r;r=r.nextSibling)t+=p_(r)}else if(e===3||e===4)return r.nodeValue;return t}/*!
 * SplitText: 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mo,Ch,m_,ca,g_,$c,wx=/(?:\r|\n|\t\t)/g,Ax=/(?:\s\s+)/g,Dx=String.fromCharCode(160),__=function(e){Mo=document,Ch=window,ca=ca||e||Ch.gsap||console.warn("Please gsap.registerPlugin(SplitText)"),ca&&($c=ca.utils.toArray,g_=ca.core.context||function(){},m_=1)},v_=function(e){return Ch.getComputedStyle(e)},sf=function(e){return e.position==="absolute"||e.absolute===!0},Cx=function(e,t){for(var n=t.length,i;--n>-1;)if(i=t[n],e.substr(0,i.length)===i)return i.length},Rx=" style='position:relative;display:inline-block;'",np=function(e,t){e===void 0&&(e="");var n=~e.indexOf("++"),i=1;return n&&(e=e.split("++").join("")),function(){return"<"+t+Rx+(e?" class='"+e+(n?i++:"")+"'>":">")}},x_=function r(e,t,n){var i=e.nodeType;if(i===1||i===9||i===11)for(e=e.firstChild;e;e=e.nextSibling)r(e,t,n);else(i===3||i===4)&&(e.nodeValue=e.nodeValue.split(t).join(n))},fu=function(e,t){for(var n=t.length;--n>-1;)e.push(t[n])},ip=function(e,t,n){for(var i;e&&e!==t;){if(i=e._next||e.nextSibling,i)return i.textContent.charAt(0)===n;e=e.parentNode||e._parent}},Px=function r(e){var t=$c(e.childNodes),n=t.length,i,s;for(i=0;i<n;i++)s=t[i],s._isSplit?r(s):i&&s.previousSibling&&s.previousSibling.nodeType===3?(s.previousSibling.nodeValue+=s.nodeType===3?s.nodeValue:s.firstChild.nodeValue,e.removeChild(s)):s.nodeType!==3&&(e.insertBefore(s.firstChild,s),e.removeChild(s))},ki=function(e,t){return parseFloat(t[e])||0},Lx=function(e,t,n,i,s,o,a){var l=v_(e),c=ki("paddingLeft",l),u=-999,h=ki("borderBottomWidth",l)+ki("borderTopWidth",l),d=ki("borderLeftWidth",l)+ki("borderRightWidth",l),f=ki("paddingTop",l)+ki("paddingBottom",l),_=ki("paddingLeft",l)+ki("paddingRight",l),g=ki("fontSize",l)*(t.lineThreshold||.2),m=l.textAlign,p=[],M=[],b=[],E=t.wordDelimiter||" ",C=t.tag?t.tag:t.span?"span":"div",P=t.type||t.split||"chars,words,lines",T=s&&~P.indexOf("lines")?[]:null,R=~P.indexOf("words"),S=~P.indexOf("chars"),y=sf(t),I=t.linesClass,B=~(I||"").indexOf("++"),z=[],H=l.display==="flex",Z=e.style.display,W,j,q,V,O,_e,ye,Ue,ne,se,me,pe;for(B&&(I=I.split("++").join("")),H&&(e.style.display="block"),j=e.getElementsByTagName("*"),q=j.length,O=[],W=0;W<q;W++)O[W]=j[W];if(T||y)for(W=0;W<q;W++)V=O[W],_e=V.parentNode===e,(_e||y||S&&!R)&&(pe=V.offsetTop,T&&_e&&Math.abs(pe-u)>g&&(V.nodeName!=="BR"||W===0)&&(ye=[],T.push(ye),u=pe),y&&(V._x=V.offsetLeft,V._y=pe,V._w=V.offsetWidth,V._h=V.offsetHeight),T&&((V._isSplit&&_e||!S&&_e||R&&_e||!R&&V.parentNode.parentNode===e&&!V.parentNode._isSplit)&&(ye.push(V),V._x-=c,ip(V,e,E)&&(V._wordEnd=!0)),V.nodeName==="BR"&&(V.nextSibling&&V.nextSibling.nodeName==="BR"||W===0)&&T.push([])));for(W=0;W<q;W++){if(V=O[W],_e=V.parentNode===e,V.nodeName==="BR"){T||y?(V.parentNode&&V.parentNode.removeChild(V),O.splice(W--,1),q--):R||e.appendChild(V);continue}if(y&&(ne=V.style,!R&&!_e&&(V._x+=V.parentNode._x,V._y+=V.parentNode._y),ne.left=V._x+"px",ne.top=V._y+"px",ne.position="absolute",ne.display="block",ne.width=V._w+1+"px",ne.height=V._h+"px"),!R&&S)if(V._isSplit)for(V._next=j=V.nextSibling,V.parentNode.appendChild(V);j&&j.nodeType===3&&j.textContent===" ";)V._next=j.nextSibling,V.parentNode.appendChild(j),j=j.nextSibling;else V.parentNode._isSplit?(V._parent=V.parentNode,!V.previousSibling&&V.firstChild&&(V.firstChild._isFirst=!0),V.nextSibling&&V.nextSibling.textContent===" "&&!V.nextSibling.nextSibling&&z.push(V.nextSibling),V._next=V.nextSibling&&V.nextSibling._isFirst?null:V.nextSibling,V.parentNode.removeChild(V),O.splice(W--,1),q--):_e||(pe=!V.nextSibling&&ip(V.parentNode,e,E),V.parentNode._parent&&V.parentNode._parent.appendChild(V),pe&&V.parentNode.appendChild(Mo.createTextNode(" ")),C==="span"&&(V.style.display="inline"),p.push(V));else V.parentNode._isSplit&&!V._isSplit&&V.innerHTML!==""?M.push(V):S&&!V._isSplit&&(C==="span"&&(V.style.display="inline"),p.push(V))}for(W=z.length;--W>-1;)z[W].parentNode.removeChild(z[W]);if(T){for(y&&(se=Mo.createElement(C),e.appendChild(se),me=se.offsetWidth+"px",pe=se.offsetParent===e?0:e.offsetLeft,e.removeChild(se)),ne=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(Ue=E===" "&&(!y||!R&&!S),W=0;W<T.length;W++){for(ye=T[W],se=Mo.createElement(C),se.style.cssText="display:block;text-align:"+m+";position:"+(y?"absolute;":"relative;"),I&&(se.className=I+(B?W+1:"")),b.push(se),q=ye.length,j=0;j<q;j++)ye[j].nodeName!=="BR"&&(V=ye[j],se.appendChild(V),Ue&&V._wordEnd&&se.appendChild(Mo.createTextNode(" ")),y&&(j===0&&(se.style.top=V._y+"px",se.style.left=c+pe+"px"),V.style.top="0px",pe&&(V.style.left=V._x-pe+"px")));q===0?se.innerHTML="&nbsp;":!R&&!S&&(Px(se),x_(se,String.fromCharCode(160)," ")),y&&(se.style.width=me,se.style.height=V._h+"px"),e.appendChild(se)}e.style.cssText=ne}y&&(a>e.clientHeight&&(e.style.height=a-f+"px",e.clientHeight<a&&(e.style.height=a+h+"px")),o>e.clientWidth&&(e.style.width=o-_+"px",e.clientWidth<o&&(e.style.width=o+d+"px"))),H&&(Z?e.style.display=Z:e.style.removeProperty("display")),fu(n,p),R&&fu(i,M),fu(s,b)},Ix=function(e,t,n,i){var s=t.tag?t.tag:t.span?"span":"div",o=t.type||t.split||"chars,words,lines",a=~o.indexOf("chars"),l=sf(t),c=t.wordDelimiter||" ",u=function(y){return y===c||y===Dx&&c===" "},h=c!==" "?"":l?"&#173; ":" ",d="</"+s+">",f=1,_=t.specialChars?typeof t.specialChars=="function"?t.specialChars:Cx:null,g,m,p,M,b,E,C,P,T=Mo.createElement("div"),R=e.parentNode;for(R.insertBefore(T,e),T.textContent=e.nodeValue,R.removeChild(e),e=T,g=p_(e),C=g.indexOf("<")!==-1,t.reduceWhiteSpace!==!1&&(g=g.replace(Ax," ").replace(wx,"")),C&&(g=g.split("<").join("{{LT}}")),b=g.length,m=(g.charAt(0)===" "?h:"")+n(),p=0;p<b;p++)if(E=g.charAt(p),_&&(P=_(g.substr(p),t.specialChars)))E=g.substr(p,P||1),m+=a&&E!==" "?i()+E+"</"+s+">":E,p+=P-1;else if(u(E)&&!u(g.charAt(p-1))&&p){for(m+=f?d:"",f=0;u(g.charAt(p+1));)m+=h,p++;p===b-1?m+=h:g.charAt(p+1)!==")"&&(m+=h+n(),f=1)}else E==="{"&&g.substr(p,6)==="{{LT}}"?(m+=a?i()+"{{LT}}</"+s+">":"{{LT}}",p+=5):E.charCodeAt(0)>=55296&&E.charCodeAt(0)<=56319||g.charCodeAt(p+1)>=65024&&g.charCodeAt(p+1)<=65039?(M=((g.substr(p,12).split(Tx)||[])[1]||"").length||2,m+=a&&E!==" "?i()+g.substr(p,M)+"</"+s+">":g.substr(p,M),p+=M-1):m+=a&&E!==" "?i()+E+"</"+s+">":E;e.outerHTML=m+(f?d:""),C&&x_(R,"{{LT}}","<")},Fx=function r(e,t,n,i){var s=$c(e.childNodes),o=s.length,a=sf(t),l,c;if(e.nodeType!==3||o>1){for(t.absolute=!1,l=0;l<o;l++)c=s[l],c._next=c._isFirst=c._parent=c._wordEnd=null,(c.nodeType!==3||/\S+/.test(c.nodeValue))&&(a&&c.nodeType!==3&&v_(c).display==="inline"&&(c.style.display="inline-block",c.style.position="relative"),c._isSplit=!0,r(c,t,n,i));t.absolute=a,e._isSplit=!0;return}Ix(e,t,n,i)},jc=function(){function r(t,n){m_||__(),this.elements=$c(t),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=n||{},g_(this),this.split(n)}var e=r.prototype;return e.split=function(n){this.isSplit&&this.revert(),this.vars=n=n||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var i=this.elements.length,s=n.tag?n.tag:n.span?"span":"div",o=np(n.wordsClass,s),a=np(n.charsClass,s),l,c,u;--i>-1;)u=this.elements[i],this._originals[i]={html:u.innerHTML,style:u.getAttribute("style")},l=u.clientHeight,c=u.clientWidth,Fx(u,n,o,a),Lx(u,n,this.chars,this.words,this.lines,c,l);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},e.revert=function(){var n=this._originals;if(!n)throw"revert() call wasn't scoped properly.";return this.elements.forEach(function(i,s){i.innerHTML=n[s].html,i.setAttribute("style",n[s].style||"")}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},r.create=function(n,i){return new r(n,i)},r}();jc.version="3.12.7";jc.register=__;function rp(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Nx(r,e,t){return e&&rp(r.prototype,e),t&&rp(r,t),r}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mn,lc,ui,Qr,es,Io,y_,bs,Na,E_,yr,Li,S_,M_=function(){return Mn||typeof window<"u"&&(Mn=window.gsap)&&Mn.registerPlugin&&Mn},b_=1,bo=[],vt=[],Ki=[],Ua=Date.now,Rh=function(e,t){return t},Ux=function(){var e=Na.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,vt),i.push.apply(i,Ki),vt=n,Ki=i,Rh=function(o,a){return t[o](a)}},ss=function(e,t){return~Ki.indexOf(e)&&Ki[Ki.indexOf(e)+1][t]},Oa=function(e){return!!~E_.indexOf(e)},On=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Nn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},vl="scrollLeft",xl="scrollTop",Ph=function(){return yr&&yr.isPressed||vt.cache++},Rc=function(e,t){var n=function i(s){if(s||s===0){b_&&(ui.history.scrollRestoration="manual");var o=yr&&yr.isPressed;s=i.v=Math.round(s)||(yr&&yr.iOS?1:0),e(s),i.cacheID=vt.cache,o&&Rh("ss",s)}else(t||vt.cache!==i.cacheID||Rh("ref"))&&(i.cacheID=vt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Wn={s:vl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Rc(function(r){return arguments.length?ui.scrollTo(r,fn.sc()):ui.pageXOffset||Qr[vl]||es[vl]||Io[vl]||0})},fn={s:xl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Wn,sc:Rc(function(r){return arguments.length?ui.scrollTo(Wn.sc(),r):ui.pageYOffset||Qr[xl]||es[xl]||Io[xl]||0})},$n=function(e,t){return(t&&t._ctx&&t._ctx.selector||Mn.utils.toArray)(e)[0]||(typeof e=="string"&&Mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},cs=function(e,t){var n=t.s,i=t.sc;Oa(e)&&(e=Qr.scrollingElement||es);var s=vt.indexOf(e),o=i===fn.sc?1:2;!~s&&(s=vt.push(e)-1),vt[s+o]||On(e,"scroll",Ph);var a=vt[s+o],l=a||(vt[s+o]=Rc(ss(e,n),!0)||(Oa(e)?i:Rc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Mn.getProperty(e,"scrollBehavior")==="smooth"),l},Lh=function(e,t,n){var i=e,s=e,o=Ua(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Ua();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(_){var g=a,m=s,p=Ua();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:d}},ua=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},sp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},T_=function(){Na=Mn.core.globals().ScrollTrigger,Na&&Na.core&&Ux()},w_=function(e){return Mn=e||M_(),!lc&&Mn&&typeof document<"u"&&document.body&&(ui=window,Qr=document,es=Qr.documentElement,Io=Qr.body,E_=[ui,Qr,es,Io],Mn.utils.clamp,S_=Mn.core.context||function(){},bs="onpointerenter"in Io?"pointer":"mouse",y_=sn.isTouch=ui.matchMedia&&ui.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ui||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Li=sn.eventTypes=("ontouchstart"in es?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in es?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return b_=0},500),T_(),lc=1),lc};Wn.op=fn;vt.cache=0;var sn=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){lc||w_(Mn)||console.warn("Please gsap.registerPlugin(Observer)"),Na||T_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,b=n.onPress,E=n.onRelease,C=n.onRight,P=n.onLeft,T=n.onUp,R=n.onDown,S=n.onChangeX,y=n.onChangeY,I=n.onChange,B=n.onToggleX,z=n.onToggleY,H=n.onHover,Z=n.onHoverEnd,W=n.onMove,j=n.ignoreCheck,q=n.isNormalizer,V=n.onGestureStart,O=n.onGestureEnd,_e=n.onWheel,ye=n.onEnable,Ue=n.onDisable,ne=n.onClick,se=n.scrollSpeed,me=n.capture,pe=n.allowClicks,Le=n.lockAxis,ze=n.onLockAxis;this.target=a=$n(a)||es,this.vars=n,f&&(f=Mn.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,se=se||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ui.getComputedStyle(Io).lineHeight)||22);var Ze,st,je,Xe,G,Dt,Je,ee=this,Fe=0,xt=0,He=n.passive||!u&&n.passive!==!1,N=cs(a,Wn),A=cs(a,fn),te=N(),fe=A(),he=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Li[0]==="pointerdown",ce=Oa(a),we=a.ownerDocument||Qr,Ee=[0,0,0],be=[0,0,0],ot=0,ve=function(){return ot=Ua()},Se=function(Ge,ct){return(ee.event=Ge)&&f&&~f.indexOf(Ge.target)||ct&&he&&Ge.pointerType!=="touch"||j&&j(Ge,ct)},Oe=function(){ee._vx.reset(),ee._vy.reset(),st.pause(),h&&h(ee)},Ne=function(){var Ge=ee.deltaX=sp(Ee),ct=ee.deltaY=sp(be),De=Math.abs(Ge)>=i,nt=Math.abs(ct)>=i;I&&(De||nt)&&I(ee,Ge,ct,Ee,be),De&&(C&&ee.deltaX>0&&C(ee),P&&ee.deltaX<0&&P(ee),S&&S(ee),B&&ee.deltaX<0!=Fe<0&&B(ee),Fe=ee.deltaX,Ee[0]=Ee[1]=Ee[2]=0),nt&&(R&&ee.deltaY>0&&R(ee),T&&ee.deltaY<0&&T(ee),y&&y(ee),z&&ee.deltaY<0!=xt<0&&z(ee),xt=ee.deltaY,be[0]=be[1]=be[2]=0),(Xe||je)&&(W&&W(ee),je&&(m&&je===1&&m(ee),M&&M(ee),je=0),Xe=!1),Dt&&!(Dt=!1)&&ze&&ze(ee),G&&(_e(ee),G=!1),Ze=0},Ie=function(Ge,ct,De){Ee[De]+=Ge,be[De]+=ct,ee._vx.update(Ge),ee._vy.update(ct),c?Ze||(Ze=requestAnimationFrame(Ne)):Ne()},Qe=function(Ge,ct){Le&&!Je&&(ee.axis=Je=Math.abs(Ge)>Math.abs(ct)?"x":"y",Dt=!0),Je!=="y"&&(Ee[2]+=Ge,ee._vx.update(Ge,!0)),Je!=="x"&&(be[2]+=ct,ee._vy.update(ct,!0)),c?Ze||(Ze=requestAnimationFrame(Ne)):Ne()},Ve=function(Ge){if(!Se(Ge,1)){Ge=ua(Ge,u);var ct=Ge.clientX,De=Ge.clientY,nt=ct-ee.x,We=De-ee.y,tt=ee.isDragging;ee.x=ct,ee.y=De,(tt||(nt||We)&&(Math.abs(ee.startX-ct)>=s||Math.abs(ee.startY-De)>=s))&&(je=tt?2:1,tt||(ee.isDragging=!0),Qe(nt,We))}},Ke=ee.onPress=function(Pe){Se(Pe,1)||Pe&&Pe.button||(ee.axis=Je=null,st.pause(),ee.isPressed=!0,Pe=ua(Pe),Fe=xt=0,ee.startX=ee.x=Pe.clientX,ee.startY=ee.y=Pe.clientY,ee._vx.reset(),ee._vy.reset(),On(q?a:we,Li[1],Ve,He,!0),ee.deltaX=ee.deltaY=0,b&&b(ee))},k=ee.onRelease=function(Pe){if(!Se(Pe,1)){Nn(q?a:we,Li[1],Ve,!0);var Ge=!isNaN(ee.y-ee.startY),ct=ee.isDragging,De=ct&&(Math.abs(ee.x-ee.startX)>3||Math.abs(ee.y-ee.startY)>3),nt=ua(Pe);!De&&Ge&&(ee._vx.reset(),ee._vy.reset(),u&&pe&&Mn.delayedCall(.08,function(){if(Ua()-ot>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(we.createEvent){var We=we.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,ui,1,nt.screenX,nt.screenY,nt.clientX,nt.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(We)}}})),ee.isDragging=ee.isGesturing=ee.isPressed=!1,h&&ct&&!q&&st.restart(!0),je&&Ne(),p&&ct&&p(ee),E&&E(ee,De)}},ie=function(Ge){return Ge.touches&&Ge.touches.length>1&&(ee.isGesturing=!0)&&V(Ge,ee.isDragging)},re=function(){return(ee.isGesturing=!1)||O(ee)},de=function(Ge){if(!Se(Ge)){var ct=N(),De=A();Ie((ct-te)*se,(De-fe)*se,1),te=ct,fe=De,h&&st.restart(!0)}},Me=function(Ge){if(!Se(Ge)){Ge=ua(Ge,u),_e&&(G=!0);var ct=(Ge.deltaMode===1?l:Ge.deltaMode===2?ui.innerHeight:1)*_;Ie(Ge.deltaX*ct,Ge.deltaY*ct,0),h&&!q&&st.restart(!0)}},Ae=function(Ge){if(!Se(Ge)){var ct=Ge.clientX,De=Ge.clientY,nt=ct-ee.x,We=De-ee.y;ee.x=ct,ee.y=De,Xe=!0,h&&st.restart(!0),(nt||We)&&Qe(nt,We)}},et=function(Ge){ee.event=Ge,H(ee)},Mt=function(Ge){ee.event=Ge,Z(ee)},Wt=function(Ge){return Se(Ge)||ua(Ge,u)&&ne(ee)};st=ee._dc=Mn.delayedCall(d||.25,Oe).pause(),ee.deltaX=ee.deltaY=0,ee._vx=Lh(0,50,!0),ee._vy=Lh(0,50,!0),ee.scrollX=N,ee.scrollY=A,ee.isDragging=ee.isGesturing=ee.isPressed=!1,S_(this),ee.enable=function(Pe){return ee.isEnabled||(On(ce?we:a,"scroll",Ph),o.indexOf("scroll")>=0&&On(ce?we:a,"scroll",de,He,me),o.indexOf("wheel")>=0&&On(a,"wheel",Me,He,me),(o.indexOf("touch")>=0&&y_||o.indexOf("pointer")>=0)&&(On(a,Li[0],Ke,He,me),On(we,Li[2],k),On(we,Li[3],k),pe&&On(a,"click",ve,!0,!0),ne&&On(a,"click",Wt),V&&On(we,"gesturestart",ie),O&&On(we,"gestureend",re),H&&On(a,bs+"enter",et),Z&&On(a,bs+"leave",Mt),W&&On(a,bs+"move",Ae)),ee.isEnabled=!0,ee.isDragging=ee.isGesturing=ee.isPressed=Xe=je=!1,ee._vx.reset(),ee._vy.reset(),te=N(),fe=A(),Pe&&Pe.type&&Ke(Pe),ye&&ye(ee)),ee},ee.disable=function(){ee.isEnabled&&(bo.filter(function(Pe){return Pe!==ee&&Oa(Pe.target)}).length||Nn(ce?we:a,"scroll",Ph),ee.isPressed&&(ee._vx.reset(),ee._vy.reset(),Nn(q?a:we,Li[1],Ve,!0)),Nn(ce?we:a,"scroll",de,me),Nn(a,"wheel",Me,me),Nn(a,Li[0],Ke,me),Nn(we,Li[2],k),Nn(we,Li[3],k),Nn(a,"click",ve,!0),Nn(a,"click",Wt),Nn(we,"gesturestart",ie),Nn(we,"gestureend",re),Nn(a,bs+"enter",et),Nn(a,bs+"leave",Mt),Nn(a,bs+"move",Ae),ee.isEnabled=ee.isPressed=ee.isDragging=!1,Ue&&Ue(ee))},ee.kill=ee.revert=function(){ee.disable();var Pe=bo.indexOf(ee);Pe>=0&&bo.splice(Pe,1),yr===ee&&(yr=0)},bo.push(ee),q&&Oa(a)&&(yr=ee),ee.enable(g)},Nx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();sn.version="3.12.7";sn.create=function(r){return new sn(r)};sn.register=w_;sn.getAll=function(){return bo.slice()};sn.getById=function(r){return bo.filter(function(e){return e.vars.id===r})[0]};M_()&&Mn.registerPlugin(sn);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ke,_o,_t,Ht,li,Rt,of,Pc,tl,Ba,ba,yl,Cn,Kc,Ih,zn,op,ap,vo,A_,pu,D_,kn,Fh,C_,R_,zr,Nh,af,Fo,lf,Lc,Uh,mu,El=1,Rn=Date.now,gu=Rn(),Ai=0,Ta=0,lp=function(e,t,n){var i=oi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},cp=function(e,t){return t&&(!oi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ox=function r(){return Ta&&requestAnimationFrame(r)},up=function(){return Kc=1},hp=function(){return Kc=0},Hi=function(e){return e},wa=function(e){return Math.round(e*1e5)/1e5||0},P_=function(){return typeof window<"u"},L_=function(){return ke||P_()&&(ke=window.gsap)&&ke.registerPlugin&&ke},Vs=function(e){return!!~of.indexOf(e)},I_=function(e){return(e==="Height"?lf:_t["inner"+e])||li["client"+e]||Rt["client"+e]},F_=function(e){return ss(e,"getBoundingClientRect")||(Vs(e)?function(){return fc.width=_t.innerWidth,fc.height=lf,fc}:function(){return _r(e)})},Bx=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=ss(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?I_(s):e["client"+s])||0}},kx=function(e,t){return!t||~Ki.indexOf(e)?F_(e):function(){return fc}},Xi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=ss(e,n))?o()-F_(e)()[s]:Vs(e)?(li[n]||Rt[n])-I_(i):e[n]-e["offset"+i])},Sl=function(e,t){for(var n=0;n<vo.length;n+=3)(!t||~t.indexOf(vo[n+1]))&&e(vo[n],vo[n+1],vo[n+2])},oi=function(e){return typeof e=="string"},Ln=function(e){return typeof e=="function"},Aa=function(e){return typeof e=="number"},Ts=function(e){return typeof e=="object"},ha=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},_u=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ks=Math.abs,N_="left",U_="top",cf="right",uf="bottom",Bs="width",ks="height",ka="Right",za="Left",Ha="Top",Va="Bottom",an="padding",Si="margin",Yo="Width",hf="Height",dn="px",Mi=function(e){return _t.getComputedStyle(e)},zx=function(e){var t=Mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},dp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_r=function(e,t){var n=t&&Mi(e)[Ih]!=="matrix(1, 0, 0, 1, 0, 0)"&&ke.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ic=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},O_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Hx=function(e){return function(t){return ke.utils.snap(O_(e),t)}},df=function(e){var t=ke.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Vx=function(e){return function(t,n){return df(O_(e))(t,n.direction)}},Ml=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},xn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},vn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},bl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},fp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Tl={toggleActions:"play",anticipatePin:0},Fc={top:0,left:0,center:.5,bottom:1,right:1},cc=function(e,t){if(oi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Fc?Fc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},wl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,_=Ht.createElement("div"),g=Vs(n)||ss(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?Rt:n,M=e.indexOf("start")!==-1,b=M?c:u,E="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(E+=(i===fn?cf:uf)+":"+(o+parseFloat(d))+"px;"),a&&(E+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=E,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],uc(_,0,i,M),_},uc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Yo]=1,s["border"+a+Yo]=0,s[n.p]=t+"px",ke.set(e,s)},gt=[],Oh={},nl,pp=function(){return Rn()-Ai>34&&(nl||(nl=requestAnimationFrame(Mr)))},Zs=function(){(!kn||!kn.isPressed||kn.startX>Rt.clientWidth)&&(vt.cache++,kn?nl||(nl=requestAnimationFrame(Mr)):Mr(),Ai||Ws("scrollStart"),Ai=Rn())},vu=function(){R_=_t.innerWidth,C_=_t.innerHeight},Da=function(e){vt.cache++,(e===!0||!Cn&&!D_&&!Ht.fullscreenElement&&!Ht.webkitFullscreenElement&&(!Fh||R_!==_t.innerWidth||Math.abs(_t.innerHeight-C_)>_t.innerHeight*.25))&&Pc.restart(!0)},Gs={},Gx=[],B_=function r(){return vn(lt,"scrollEnd",r)||Ps(!0)},Ws=function(e){return Gs[e]&&Gs[e].map(function(t){return t()})||Gx},si=[],k_=function(e){for(var t=0;t<si.length;t+=5)(!e||si[t+4]&&si[t+4].query===e)&&(si[t].style.cssText=si[t+1],si[t].getBBox&&si[t].setAttribute("transform",si[t+2]||""),si[t+3].uncache=1)},ff=function(e,t){var n;for(zn=0;zn<gt.length;zn++)n=gt[zn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Lc=!0,t&&k_(t),t||Ws("revert")},z_=function(e,t){vt.cache++,(t||!Hn)&&vt.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),oi(e)&&(_t.history.scrollRestoration=af=e)},Hn,zs=0,mp,Wx=function(){if(mp!==zs){var e=mp=zs;requestAnimationFrame(function(){return e===zs&&Ps(!0)})}},H_=function(){Rt.appendChild(Fo),lf=!kn&&Fo.offsetHeight||_t.innerHeight,Rt.removeChild(Fo)},gp=function(e){return tl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ps=function(e,t){if(li=Ht.documentElement,Rt=Ht.body,of=[_t,Ht,li,Rt],Ai&&!e&&!Lc){xn(lt,"scrollEnd",B_);return}H_(),Hn=lt.isRefreshing=!0,vt.forEach(function(i){return Ln(i)&&++i.cacheID&&(i.rec=i())});var n=Ws("refreshInit");A_&&lt.sort(),t||ff(),vt.forEach(function(i){Ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),gt.slice(0).forEach(function(i){return i.refresh()}),Lc=!1,gt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Uh=1,gp(!0),gt.forEach(function(i){var s=Xi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),gp(!1),Uh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),vt.forEach(function(i){Ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),z_(af,1),Pc.pause(),zs++,Hn=2,Mr(2),gt.forEach(function(i){return Ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Hn=lt.isRefreshing=!1,Ws("refresh")},Bh=0,hc=1,Ga,Mr=function(e){if(e===2||!Hn&&!Lc){lt.isUpdating=!0,Ga&&Ga.update(0);var t=gt.length,n=Rn(),i=n-gu>=50,s=t&&gt[0].scroll();if(hc=Bh>s?-1:1,Hn||(Bh=s),i&&(Ai&&!Kc&&n-Ai>200&&(Ai=0,Ws("scrollEnd")),ba=gu,gu=n),hc<0){for(zn=t;zn-- >0;)gt[zn]&&gt[zn].update(0,i);hc=1}else for(zn=0;zn<t;zn++)gt[zn]&&gt[zn].update(0,i);lt.isUpdating=!1}nl=0},kh=[N_,U_,uf,cf,Si+Va,Si+ka,Si+Ha,Si+za,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],dc=kh.concat([Bs,ks,"boxSizing","max"+Yo,"max"+hf,"position",Si,an,an+Ha,an+ka,an+Va,an+za]),Xx=function(e,t,n){No(n);var i=e._gsap;if(i.spacerIsNative)No(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=kh.length,o=t.style,a=e.style,l;s--;)l=kh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[uf]=a[cf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Bs]=Ic(e,Wn)+dn,o[ks]=Ic(e,fn)+dn,o[an]=a[Si]=a[U_]=a[N_]="0",No(i),a[Bs]=a["max"+Yo]=n[Bs],a[ks]=a["max"+hf]=n[ks],a[an]=n[an],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},qx=/([A-Z])/g,No=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ke.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(qx,"-$1").toLowerCase())}},Al=function(e){for(var t=dc.length,n=e.style,i=[],s=0;s<t;s++)i.push(dc[s],n[dc[s]]);return i.t=e,i},Yx=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},fc={left:0,top:0},_p=function(e,t,n,i,s,o,a,l,c,u,h,d,f,_){Ln(e)&&(e=e(l)),oi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?cc("0"+e.substr(3),n):0));var g=f?f.time():0,m,p,M;if(f&&f.seek(0),isNaN(e)||(e=+e),Aa(e))f&&(e=ke.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&uc(a,n,i,!0);else{Ln(t)&&(t=t(l));var b=(e||"0").split(" "),E,C,P,T;M=$n(t,l)||Rt,E=_r(M)||{},(!E||!E.left&&!E.top)&&Mi(M).display==="none"&&(T=M.style.display,M.style.display="block",E=_r(M),T?M.style.display=T:M.style.removeProperty("display")),C=cc(b[0],E[i.d]),P=cc(b[1]||"0",n),e=E[i.p]-c[i.p]-u+C+s-P,a&&uc(a,P,i,n-P<20||a._isStart&&P>20),n-=n-P}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var R=e+n,S=o._isStart;m="scroll"+i.d2,uc(o,R,i,S&&R>20||!S&&(h?Math.max(Rt[m],li[m]):o.parentNode[m])<=R+1),h&&(c=_r(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+dn))}return f&&M&&(m=_r(M),f.seek(d),p=_r(M),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(g),f?e:Math.round(e)},$x=/(webkit|moz|length|cssText|inset)/i,vp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Rt){e._stOrig=s.cssText,a=Mi(e);for(o in a)!+o&&!$x.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ke.core.getCache(e).uncache=1,t.appendChild(e)}},V_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Dl=function(e,t,n){var i={};i[t.p]="+="+n,ke.set(e,i)},xp=function(e,t){var n=cs(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,_={};c=c||n();var g=V_(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){vt.cache++,o.tween&&Mr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=ke.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},xn(e,"wheel",n.wheelHandler),lt.isTouch&&xn(e,"touchmove",n.wheelHandler),s},lt=function(){function r(t,n){_o||r.register(ke)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Nh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ta){this.update=this.refresh=this.kill=Hi;return}n=dp(oi(n)||Aa(n)||n.nodeType?{trigger:n}:n,Tl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,b=s.once,E=s.snap,C=s.pinReparent,P=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Wn:fn,I=!h&&h!==0,B=$n(n.scroller||_t),z=ke.core.getCache(B),H=Vs(B),Z=("pinType"in n?n.pinType:ss(B,"pinType")||H&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],j=I&&n.toggleActions.split(" "),q="markers"in n?n.markers:Tl.markers,V=H?0:parseFloat(Mi(B)["border"+y.p2+Yo])||0,O=this,_e=n.onRefreshInit&&function(){return n.onRefreshInit(O)},ye=Bx(B,H,y),Ue=kx(B,H),ne=0,se=0,me=0,pe=cs(B,y),Le,ze,Ze,st,je,Xe,G,Dt,Je,ee,Fe,xt,He,N,A,te,fe,he,ce,we,Ee,be,ot,ve,Se,Oe,Ne,Ie,Qe,Ve,Ke,k,ie,re,de,Me,Ae,et,Mt;if(O._startClamp=O._endClamp=!1,O._dir=y,m*=45,O.scroller=B,O.scroll=T?T.time.bind(T):pe,st=pe(),O.vars=n,i=i||n.animation,"refreshPriority"in n&&(A_=1,n.refreshPriority===-9999&&(Ga=O)),z.tweenScroll=z.tweenScroll||{top:xp(B,fn),left:xp(B,Wn)},O.tweenTo=Le=z.tweenScroll[y.p],O.scrubDuration=function(De){ie=Aa(De)&&De,ie?k?k.duration(De):k=ke.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return p&&p(O)}}):(k&&k.progress(1).kill(),k=0)},i&&(i.vars.lazy=!1,i._initted&&!O.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),O.animation=i.pause(),i.scrollTrigger=O,O.scrubDuration(h),Ve=0,l||(l=i.vars.id)),E&&((!Ts(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in Rt.style&&ke.set(H?[Rt,li]:B,{scrollBehavior:"auto"}),vt.forEach(function(De){return Ln(De)&&De.target===(H?Ht.scrollingElement||li:B)&&(De.smooth=!1)}),Ze=Ln(E.snapTo)?E.snapTo:E.snapTo==="labels"?Hx(i):E.snapTo==="labelsDirectional"?Vx(i):E.directional!==!1?function(De,nt){return df(E.snapTo)(De,Rn()-se<500?0:nt.direction)}:ke.utils.snap(E.snapTo),re=E.duration||{min:.1,max:2},re=Ts(re)?Ba(re.min,re.max):Ba(re,re),de=ke.delayedCall(E.delay||ie/2||.1,function(){var De=pe(),nt=Rn()-se<500,We=Le.tween;if((nt||Math.abs(O.getVelocity())<10)&&!We&&!Kc&&ne!==De){var tt=(De-Xe)/N,Xt=i&&!I?i.totalProgress():tt,dt=nt?0:(Xt-Ke)/(Rn()-ba)*1e3||0,Ft=ke.utils.clamp(-tt,1-tt,Ks(dt/2)*dt/.185),en=tt+(E.inertia===!1?0:Ft),Pt,Ct,bt=E,Fn=bt.onStart,Tt=bt.onInterrupt,Zt=bt.onComplete;if(Pt=Ze(en,O),Aa(Pt)||(Pt=en),Ct=Math.max(0,Math.round(Xe+Pt*N)),De<=G&&De>=Xe&&Ct!==De){if(We&&!We._initted&&We.data<=Ks(Ct-De))return;E.inertia===!1&&(Ft=Pt-tt),Le(Ct,{duration:re(Ks(Math.max(Ks(en-Xt),Ks(Pt-Xt))*.185/dt/.05||0)),ease:E.ease||"power3",data:Ks(Ct-De),onInterrupt:function(){return de.restart(!0)&&Tt&&Tt(O)},onComplete:function(){O.update(),ne=pe(),i&&!I&&(k?k.resetTo("totalProgress",Pt,i._tTime/i._tDur):i.progress(Pt)),Ve=Ke=i&&!I?i.totalProgress():O.progress,M&&M(O),Zt&&Zt(O)}},De,Ft*N,Ct-De-Ft*N),Fn&&Fn(O,Le.tween)}}else O.isActive&&ne!==De&&de.restart(!0)}).pause()),l&&(Oh[l]=O),d=O.trigger=$n(d||f!==!0&&f),Mt=d&&d._gsap&&d._gsap.stRevert,Mt&&(Mt=Mt(O)),f=f===!0?d:$n(f),oi(a)&&(a={targets:d,className:a}),f&&(_===!1||_===Si||(_=!_&&f.parentNode&&f.parentNode.style&&Mi(f.parentNode).display==="flex"?!1:an),O.pin=f,ze=ke.core.getCache(f),ze.spacer?A=ze.pinState:(P&&(P=$n(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),ze.spacerIsNative=!!P,P&&(ze.spacerState=Al(P))),ze.spacer=he=P||Ht.createElement("div"),he.classList.add("pin-spacer"),l&&he.classList.add("pin-spacer-"+l),ze.pinState=A=Al(f)),n.force3D!==!1&&ke.set(f,{force3D:!0}),O.spacer=he=ze.spacer,Qe=Mi(f),ve=Qe[_+y.os2],we=ke.getProperty(f),Ee=ke.quickSetter(f,y.a,dn),xu(f,he,Qe),fe=Al(f)),q){xt=Ts(q)?dp(q,fp):fp,ee=wl("scroller-start",l,B,y,xt,0),Fe=wl("scroller-end",l,B,y,xt,0,ee),ce=ee["offset"+y.op.d2];var Wt=$n(ss(B,"content")||B);Dt=this.markerStart=wl("start",l,Wt,y,xt,ce,0,T),Je=this.markerEnd=wl("end",l,Wt,y,xt,ce,0,T),T&&(et=ke.quickSetter([Dt,Je],y.a,dn)),!Z&&!(Ki.length&&ss(B,"fixedMarkers")===!0)&&(zx(H?Rt:B),ke.set([ee,Fe],{force3D:!0}),Oe=ke.quickSetter(ee,y.a,dn),Ie=ke.quickSetter(Fe,y.a,dn))}if(T){var Pe=T.vars.onUpdate,Ge=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){O.update(0,0,1),Pe&&Pe.apply(T,Ge||[])})}if(O.previous=function(){return gt[gt.indexOf(O)-1]},O.next=function(){return gt[gt.indexOf(O)+1]},O.revert=function(De,nt){if(!nt)return O.kill(!0);var We=De!==!1||!O.enabled,tt=Cn;We!==O.isReverted&&(We&&(Me=Math.max(pe(),O.scroll.rec||0),me=O.progress,Ae=i&&i.progress()),Dt&&[Dt,Je,ee,Fe].forEach(function(Xt){return Xt.style.display=We?"none":"block"}),We&&(Cn=O,O.update(We)),f&&(!C||!O.isActive)&&(We?Xx(f,he,A):xu(f,he,Mi(f),Se)),We||O.update(We),Cn=tt,O.isReverted=We)},O.refresh=function(De,nt,We,tt){if(!((Cn||!O.enabled)&&!nt)){if(f&&De&&Ai){xn(r,"scrollEnd",B_);return}!Hn&&_e&&_e(O),Cn=O,Le.tween&&!We&&(Le.tween.kill(),Le.tween=0),k&&k.pause(),g&&i&&i.revert({kill:!1}).invalidate(),O.isReverted||O.revert(!0,!0),O._subPinOffset=!1;var Xt=ye(),dt=Ue(),Ft=T?T.duration():Xi(B,y),en=N<=.01,Pt=0,Ct=tt||0,bt=Ts(We)?We.end:n.end,Fn=n.endTrigger||d,Tt=Ts(We)?We.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Zt=O.pinnedContainer=n.pinnedContainer&&$n(n.pinnedContainer,O),x=d&&Math.max(0,gt.indexOf(O))||0,D=x,v,w,U,L,F,X,Y,J,Q,ae,ue,oe,xe;for(q&&Ts(We)&&(oe=ke.getProperty(ee,y.p),xe=ke.getProperty(Fe,y.p));D-- >0;)X=gt[D],X.end||X.refresh(0,1)||(Cn=O),Y=X.pin,Y&&(Y===d||Y===f||Y===Zt)&&!X.isReverted&&(ae||(ae=[]),ae.unshift(X),X.revert(!0,!0)),X!==gt[D]&&(x--,D--);for(Ln(Tt)&&(Tt=Tt(O)),Tt=lp(Tt,"start",O),Xe=_p(Tt,d,Xt,y,pe(),Dt,ee,O,dt,V,Z,Ft,T,O._startClamp&&"_startClamp")||(f?-.001:0),Ln(bt)&&(bt=bt(O)),oi(bt)&&!bt.indexOf("+=")&&(~bt.indexOf(" ")?bt=(oi(Tt)?Tt.split(" ")[0]:"")+bt:(Pt=cc(bt.substr(2),Xt),bt=oi(Tt)?Tt:(T?ke.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Xe):Xe)+Pt,Fn=d)),bt=lp(bt,"end",O),G=Math.max(Xe,_p(bt||(Fn?"100% 0":Ft),Fn,Xt,y,pe()+Pt,Je,Fe,O,dt,V,Z,Ft,T,O._endClamp&&"_endClamp"))||-.001,Pt=0,D=x;D--;)X=gt[D],Y=X.pin,Y&&X.start-X._pinPush<=Xe&&!T&&X.end>0&&(v=X.end-(O._startClamp?Math.max(0,X.start):X.start),(Y===d&&X.start-X._pinPush<Xe||Y===Zt)&&isNaN(Tt)&&(Pt+=v*(1-X.progress)),Y===f&&(Ct+=v));if(Xe+=Pt,G+=Pt,O._startClamp&&(O._startClamp+=Pt),O._endClamp&&!Hn&&(O._endClamp=G||-.001,G=Math.min(G,Xi(B,y))),N=G-Xe||(Xe-=.01)&&.001,en&&(me=ke.utils.clamp(0,1,ke.utils.normalize(Xe,G,Me))),O._pinPush=Ct,Dt&&Pt&&(v={},v[y.a]="+="+Pt,Zt&&(v[y.p]="-="+pe()),ke.set([Dt,Je],v)),f&&!(Uh&&O.end>=Xi(B,y)))v=Mi(f),L=y===fn,U=pe(),be=parseFloat(we(y.a))+Ct,!Ft&&G>1&&(ue=(H?Ht.scrollingElement||li:B).style,ue={style:ue,value:ue["overflow"+y.a.toUpperCase()]},H&&Mi(Rt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ue.style["overflow"+y.a.toUpperCase()]="scroll")),xu(f,he,v),fe=Al(f),w=_r(f,!0),J=Z&&cs(B,L?Wn:fn)(),_?(Se=[_+y.os2,N+Ct+dn],Se.t=he,D=_===an?Ic(f,y)+N+Ct:0,D&&(Se.push(y.d,D+dn),he.style.flexBasis!=="auto"&&(he.style.flexBasis=D+dn)),No(Se),Zt&&gt.forEach(function(ge){ge.pin===Zt&&ge.vars.pinSpacing!==!1&&(ge._subPinOffset=!0)}),Z&&pe(Me)):(D=Ic(f,y),D&&he.style.flexBasis!=="auto"&&(he.style.flexBasis=D+dn)),Z&&(F={top:w.top+(L?U-Xe:J)+dn,left:w.left+(L?J:U-Xe)+dn,boxSizing:"border-box",position:"fixed"},F[Bs]=F["max"+Yo]=Math.ceil(w.width)+dn,F[ks]=F["max"+hf]=Math.ceil(w.height)+dn,F[Si]=F[Si+Ha]=F[Si+ka]=F[Si+Va]=F[Si+za]="0",F[an]=v[an],F[an+Ha]=v[an+Ha],F[an+ka]=v[an+ka],F[an+Va]=v[an+Va],F[an+za]=v[an+za],te=Yx(A,F,C),Hn&&pe(0)),i?(Q=i._initted,pu(1),i.render(i.duration(),!0,!0),ot=we(y.a)-be+N+Ct,Ne=Math.abs(N-ot)>1,Z&&Ne&&te.splice(te.length-2,2),i.render(0,!0,!0),Q||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),pu(0)):ot=N,ue&&(ue.value?ue.style["overflow"+y.a.toUpperCase()]=ue.value:ue.style.removeProperty("overflow-"+y.a));else if(d&&pe()&&!T)for(w=d.parentNode;w&&w!==Rt;)w._pinOffset&&(Xe-=w._pinOffset,G-=w._pinOffset),w=w.parentNode;ae&&ae.forEach(function(ge){return ge.revert(!1,!0)}),O.start=Xe,O.end=G,st=je=Hn?Me:pe(),!T&&!Hn&&(st<Me&&pe(Me),O.scroll.rec=0),O.revert(!1,!0),se=Rn(),de&&(ne=-1,de.restart(!0)),Cn=0,i&&I&&(i._initted||Ae)&&i.progress()!==Ae&&i.progress(Ae||0,!0).render(i.time(),!0,!0),(en||me!==O.progress||T||g||i&&!i._initted)&&(i&&!I&&i.totalProgress(T&&Xe<-.001&&!me?ke.utils.normalize(Xe,G,0):me,!0),O.progress=en||(st-Xe)/N===me?0:me),f&&_&&(he._pinOffset=Math.round(O.progress*ot)),k&&k.invalidate(),isNaN(oe)||(oe-=ke.getProperty(ee,y.p),xe-=ke.getProperty(Fe,y.p),Dl(ee,y,oe),Dl(Dt,y,oe-(tt||0)),Dl(Fe,y,xe),Dl(Je,y,xe-(tt||0))),en&&!Hn&&O.update(),u&&!Hn&&!He&&(He=!0,u(O),He=!1)}},O.getVelocity=function(){return(pe()-je)/(Rn()-ba)*1e3||0},O.endAnimation=function(){ha(O.callbackAnimation),i&&(k?k.progress(1):i.paused()?I||ha(i,O.direction<0,1):ha(i,i.reversed()))},O.labelToScroll=function(De){return i&&i.labels&&(Xe||O.refresh()||Xe)+i.labels[De]/i.duration()*N||0},O.getTrailing=function(De){var nt=gt.indexOf(O),We=O.direction>0?gt.slice(0,nt).reverse():gt.slice(nt+1);return(oi(De)?We.filter(function(tt){return tt.vars.preventOverlaps===De}):We).filter(function(tt){return O.direction>0?tt.end<=Xe:tt.start>=G})},O.update=function(De,nt,We){if(!(T&&!We&&!De)){var tt=Hn===!0?Me:O.scroll(),Xt=De?0:(tt-Xe)/N,dt=Xt<0?0:Xt>1?1:Xt||0,Ft=O.progress,en,Pt,Ct,bt,Fn,Tt,Zt,x;if(nt&&(je=st,st=T?pe():tt,E&&(Ke=Ve,Ve=i&&!I?i.totalProgress():dt)),m&&f&&!Cn&&!El&&Ai&&(!dt&&Xe<tt+(tt-je)/(Rn()-ba)*m?dt=1e-4:dt===1&&G>tt+(tt-je)/(Rn()-ba)*m&&(dt=.9999)),dt!==Ft&&O.enabled){if(en=O.isActive=!!dt&&dt<1,Pt=!!Ft&&Ft<1,Tt=en!==Pt,Fn=Tt||!!dt!=!!Ft,O.direction=dt>Ft?1:-1,O.progress=dt,Fn&&!Cn&&(Ct=dt&&!Ft?0:dt===1?1:Ft===1?2:3,I&&(bt=!Tt&&j[Ct+1]!=="none"&&j[Ct+1]||j[Ct],x=i&&(bt==="complete"||bt==="reset"||bt in i))),S&&(Tt||x)&&(x||h||!i)&&(Ln(S)?S(O):O.getTrailing(S).forEach(function(U){return U.endAnimation()})),I||(k&&!Cn&&!El?(k._dp._time-k._start!==k._time&&k.render(k._dp._time-k._start),k.resetTo?k.resetTo("totalProgress",dt,i._tTime/i._tDur):(k.vars.totalProgress=dt,k.invalidate().restart())):i&&i.totalProgress(dt,!!(Cn&&(se||De)))),f){if(De&&_&&(he.style[_+y.os2]=ve),!Z)Ee(wa(be+ot*dt));else if(Fn){if(Zt=!De&&dt>Ft&&G+1>tt&&tt+1>=Xi(B,y),C)if(!De&&(en||Zt)){var D=_r(f,!0),v=tt-Xe;vp(f,Rt,D.top+(y===fn?v:0)+dn,D.left+(y===fn?0:v)+dn)}else vp(f,he);No(en||Zt?te:fe),Ne&&dt<1&&en||Ee(be+(dt===1&&!Zt?ot:0))}}E&&!Le.tween&&!Cn&&!El&&de.restart(!0),a&&(Tt||b&&dt&&(dt<1||!mu))&&tl(a.targets).forEach(function(U){return U.classList[en||b?"add":"remove"](a.className)}),o&&!I&&!De&&o(O),Fn&&!Cn?(I&&(x&&(bt==="complete"?i.pause().totalProgress(1):bt==="reset"?i.restart(!0).pause():bt==="restart"?i.restart(!0):i[bt]()),o&&o(O)),(Tt||!mu)&&(c&&Tt&&_u(O,c),W[Ct]&&_u(O,W[Ct]),b&&(dt===1?O.kill(!1,1):W[Ct]=0),Tt||(Ct=dt===1?1:3,W[Ct]&&_u(O,W[Ct]))),R&&!en&&Math.abs(O.getVelocity())>(Aa(R)?R:2500)&&(ha(O.callbackAnimation),k?k.progress(1):ha(i,bt==="reverse"?1:!dt,1))):I&&o&&!Cn&&o(O)}if(Ie){var w=T?tt/T.duration()*(T._caScrollDist||0):tt;Oe(w+(ee._isFlipped?1:0)),Ie(w)}et&&et(-tt/T.duration()*(T._caScrollDist||0))}},O.enable=function(De,nt){O.enabled||(O.enabled=!0,xn(B,"resize",Da),H||xn(B,"scroll",Zs),_e&&xn(r,"refreshInit",_e),De!==!1&&(O.progress=me=0,st=je=ne=pe()),nt!==!1&&O.refresh())},O.getTween=function(De){return De&&Le?Le.tween:k},O.setPositions=function(De,nt,We,tt){if(T){var Xt=T.scrollTrigger,dt=T.duration(),Ft=Xt.end-Xt.start;De=Xt.start+Ft*De/dt,nt=Xt.start+Ft*nt/dt}O.refresh(!1,!1,{start:cp(De,We&&!!O._startClamp),end:cp(nt,We&&!!O._endClamp)},tt),O.update()},O.adjustPinSpacing=function(De){if(Se&&De){var nt=Se.indexOf(y.d)+1;Se[nt]=parseFloat(Se[nt])+De+dn,Se[1]=parseFloat(Se[1])+De+dn,No(Se)}},O.disable=function(De,nt){if(O.enabled&&(De!==!1&&O.revert(!0,!0),O.enabled=O.isActive=!1,nt||k&&k.pause(),Me=0,ze&&(ze.uncache=1),_e&&vn(r,"refreshInit",_e),de&&(de.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!H)){for(var We=gt.length;We--;)if(gt[We].scroller===B&&gt[We]!==O)return;vn(B,"resize",Da),H||vn(B,"scroll",Zs)}},O.kill=function(De,nt){O.disable(De,nt),k&&!nt&&k.kill(),l&&delete Oh[l];var We=gt.indexOf(O);We>=0&&gt.splice(We,1),We===zn&&hc>0&&zn--,We=0,gt.forEach(function(tt){return tt.scroller===O.scroller&&(We=1)}),We||Hn||(O.scroll.rec=0),i&&(i.scrollTrigger=null,De&&i.revert({kill:!1}),nt||i.kill()),Dt&&[Dt,Je,ee,Fe].forEach(function(tt){return tt.parentNode&&tt.parentNode.removeChild(tt)}),Ga===O&&(Ga=0),f&&(ze&&(ze.uncache=1),We=0,gt.forEach(function(tt){return tt.pin===f&&We++}),We||(ze.spacer=0)),n.onKill&&n.onKill(O)},gt.push(O),O.enable(!1,!1),Mt&&Mt(O),i&&i.add&&!N){var ct=O.update;O.update=function(){O.update=ct,vt.cache++,Xe||G||O.refresh()},ke.delayedCall(.01,O.update),N=.01,Xe=G=0}else O.refresh();f&&Wx()},r.register=function(n){return _o||(ke=n||L_(),P_()&&window.document&&r.enable(),_o=Ta),_o},r.defaults=function(n){if(n)for(var i in n)Tl[i]=n[i];return Tl},r.disable=function(n,i){Ta=0,gt.forEach(function(o){return o[i?"kill":"disable"](n)}),vn(_t,"wheel",Zs),vn(Ht,"scroll",Zs),clearInterval(yl),vn(Ht,"touchcancel",Hi),vn(Rt,"touchstart",Hi),Ml(vn,Ht,"pointerdown,touchstart,mousedown",up),Ml(vn,Ht,"pointerup,touchend,mouseup",hp),Pc.kill(),Sl(vn);for(var s=0;s<vt.length;s+=3)bl(vn,vt[s],vt[s+1]),bl(vn,vt[s],vt[s+2])},r.enable=function(){if(_t=window,Ht=document,li=Ht.documentElement,Rt=Ht.body,ke&&(tl=ke.utils.toArray,Ba=ke.utils.clamp,Nh=ke.core.context||Hi,pu=ke.core.suppressOverwrites||Hi,af=_t.history.scrollRestoration||"auto",Bh=_t.pageYOffset||0,ke.core.globals("ScrollTrigger",r),Rt)){Ta=1,Fo=document.createElement("div"),Fo.style.height="100vh",Fo.style.position="absolute",H_(),Ox(),sn.register(ke),r.isTouch=sn.isTouch,zr=sn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Fh=sn.isTouch===1,xn(_t,"wheel",Zs),of=[_t,Ht,li,Rt],ke.matchMedia?(r.matchMedia=function(c){var u=ke.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},ke.addEventListener("matchMediaInit",function(){return ff()}),ke.addEventListener("matchMediaRevert",function(){return k_()}),ke.addEventListener("matchMedia",function(){Ps(0,1),Ws("matchMedia")}),ke.matchMedia().add("(orientation: portrait)",function(){return vu(),vu})):console.warn("Requires GSAP 3.11.0 or later"),vu(),xn(Ht,"scroll",Zs);var n=Rt.hasAttribute("style"),i=Rt.style,s=i.borderTopStyle,o=ke.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=_r(Rt),fn.m=Math.round(a.top+fn.sc())||0,Wn.m=Math.round(a.left+Wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Rt.setAttribute("style",""),Rt.removeAttribute("style")),yl=setInterval(pp,250),ke.delayedCall(.5,function(){return El=0}),xn(Ht,"touchcancel",Hi),xn(Rt,"touchstart",Hi),Ml(xn,Ht,"pointerdown,touchstart,mousedown",up),Ml(xn,Ht,"pointerup,touchend,mouseup",hp),Ih=ke.utils.checkPrefix("transform"),dc.push(Ih),_o=Rn(),Pc=ke.delayedCall(.2,Ps).pause(),vo=[Ht,"visibilitychange",function(){var c=_t.innerWidth,u=_t.innerHeight;Ht.hidden?(op=c,ap=u):(op!==c||ap!==u)&&Da()},Ht,"DOMContentLoaded",Ps,_t,"load",Ps,_t,"resize",Da],Sl(xn),gt.forEach(function(c){return c.enable(0,1)}),l=0;l<vt.length;l+=3)bl(vn,vt[l],vt[l+1]),bl(vn,vt[l],vt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(mu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(yl)||(yl=i)&&setInterval(pp,i),"ignoreMobileResize"in n&&(Fh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Sl(vn)||Sl(xn,n.autoRefreshEvents||"none"),D_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=$n(n),o=vt.indexOf(s),a=Vs(s);~o&&vt.splice(o,a?6:2),i&&(a?Ki.unshift(_t,i,Rt,i,li,i):Ki.unshift(s,i))},r.clearMatchMedia=function(n){gt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(oi(n)?$n(n):n).getBoundingClientRect(),a=o[s?Bs:ks]*i||0;return s?o.right-a>0&&o.left+a<_t.innerWidth:o.bottom-a>0&&o.top+a<_t.innerHeight},r.positionInViewport=function(n,i,s){oi(n)&&(n=$n(n));var o=n.getBoundingClientRect(),a=o[s?Bs:ks],l=i==null?a/2:i in Fc?Fc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/_t.innerWidth:(o.top+l)/_t.innerHeight},r.killAll=function(n){if(gt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Gs.killAll||[];Gs={},i.forEach(function(s){return s()})}},r}();lt.version="3.12.7";lt.saveStyles=function(r){return r?tl(r).forEach(function(e){if(e&&e.style){var t=si.indexOf(e);t>=0&&si.splice(t,5),si.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ke.core.getCache(e),Nh())}}):si};lt.revert=function(r,e){return ff(!r,e)};lt.create=function(r,e){return new lt(r,e)};lt.refresh=function(r){return r?Da(!0):(_o||lt.register())&&Ps(!0)};lt.update=function(r){return++vt.cache&&Mr(r===!0?2:0)};lt.clearScrollMemory=z_;lt.maxScroll=function(r,e){return Xi(r,e?Wn:fn)};lt.getScrollFunc=function(r,e){return cs($n(r),e?Wn:fn)};lt.getById=function(r){return Oh[r]};lt.getAll=function(){return gt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};lt.isScrolling=function(){return!!Ai};lt.snapDirectional=df;lt.addEventListener=function(r,e){var t=Gs[r]||(Gs[r]=[]);~t.indexOf(e)||t.push(e)};lt.removeEventListener=function(r,e){var t=Gs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};lt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=ke.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Ln(s)&&(s=s(),xn(lt,"refresh",function(){return s=e.batchMax()})),tl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(lt.create(c))}),t};var yp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},yu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(sn.isTouch?" pinch-zoom":""):"none",e===li&&r(Rt,t)},Cl={auto:1,scroll:1},jx=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ke.core.getCache(s),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Rt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Cl[(l=Mi(s)).overflowY]||Cl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Vs(s)&&(Cl[(l=Mi(s)).overflowY]||Cl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},G_=function(e,t,n,i){return sn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&jx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&xn(Ht,sn.eventTypes[0],Sp,!1,!0)},onDisable:function(){return vn(Ht,sn.eventTypes[0],Sp,!0)}})},Kx=/(input|label|select|textarea)/i,Ep,Sp=function(e){var t=Kx.test(e.target.tagName);(t||Ep)&&(e._gsapAllow=!0,Ep=t)},Zx=function(e){Ts(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=$n(e.target)||li,u=ke.core.globals().ScrollSmoother,h=u&&u.get(),d=zr&&(e.content&&$n(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=cs(c,fn),_=cs(c,Wn),g=1,m=(sn.isTouch&&_t.visualViewport?_t.visualViewport.scale*_t.visualViewport.width:_t.outerWidth)/_t.innerWidth,p=0,M=Ln(i)?function(){return i(a)}:function(){return i||2.8},b,E,C=G_(c,e.type,!0,s),P=function(){return E=!1},T=Hi,R=Hi,S=function(){l=Xi(c,fn),R=Ba(zr?1:0,l),n&&(T=Ba(0,Xi(c,Wn))),b=zs},y=function(){d._gsap.y=wa(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},I=function(){if(E){requestAnimationFrame(P);var q=wa(a.deltaY/2),V=R(f.v-q);if(d&&V!==f.v+f.offset){f.offset=V-f.v;var O=wa((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+O+", 0, 1)",d._gsap.y=O+"px",f.cacheID=vt.cache,Mr()}return!0}f.offset&&y(),E=!0},B,z,H,Z,W=function(){S(),B.isActive()&&B.vars.scrollY>l&&(f()>l?B.progress(1)&&f(l):B.resetTo("scrollY",l))};return d&&ke.set(d,{y:"+=0"}),e.ignoreCheck=function(j){return zr&&j.type==="touchmove"&&I()||g>1.05&&j.type!=="touchstart"||a.isGesturing||j.touches&&j.touches.length>1},e.onPress=function(){E=!1;var j=g;g=wa((_t.visualViewport&&_t.visualViewport.scale||1)/m),B.pause(),j!==g&&yu(c,g>1.01?!0:n?!1:"x"),z=_(),H=f(),S(),b=zs},e.onRelease=e.onGestureStart=function(j,q){if(f.offset&&y(),!q)Z.restart(!0);else{vt.cache++;var V=M(),O,_e;n&&(O=_(),_e=O+V*.05*-j.velocityX/.227,V*=yp(_,O,_e,Xi(c,Wn)),B.vars.scrollX=T(_e)),O=f(),_e=O+V*.05*-j.velocityY/.227,V*=yp(f,O,_e,Xi(c,fn)),B.vars.scrollY=R(_e),B.invalidate().duration(V).play(.01),(zr&&B.vars.scrollY>=l||O>=l-1)&&ke.to({},{onUpdate:W,duration:V})}o&&o(j)},e.onWheel=function(){B._ts&&B.pause(),Rn()-p>1e3&&(b=0,p=Rn())},e.onChange=function(j,q,V,O,_e){if(zs!==b&&S(),q&&n&&_(T(O[2]===q?z+(j.startX-j.x):_()+q-O[1])),V){f.offset&&y();var ye=_e[2]===V,Ue=ye?H+j.startY-j.y:f()+V-_e[1],ne=R(Ue);ye&&Ue!==ne&&(H+=ne-Ue),f(ne)}(V||q)&&Mr()},e.onEnable=function(){yu(c,n?!1:"x"),lt.addEventListener("refresh",W),xn(_t,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){yu(c,!0),vn(_t,"resize",W),lt.removeEventListener("refresh",W),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new sn(e),a.iOS=zr,zr&&!f()&&f(1),zr&&ke.ticker.add(Hi),Z=a._dc,B=ke.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:V_(f,f(),function(){return B.pause()})},onUpdate:Mr,onComplete:Z.vars.onComplete}),a};lt.sort=function(r){if(Ln(r))return gt.sort(r);var e=_t.pageYOffset||0;return lt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+_t.innerHeight}),gt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};lt.observe=function(r){return new sn(r)};lt.normalizeScroll=function(r){if(typeof r>"u")return kn;if(r===!0&&kn)return kn.enable();if(r===!1){kn&&kn.kill(),kn=r;return}var e=r instanceof sn?r:Zx(r);return kn&&kn.target===e.target&&kn.kill(),Vs(e.target)&&(kn=e),e};lt.core={_getVelocityProp:Lh,_inputObserver:G_,_scrollers:vt,_proxies:Ki,bridge:{ss:function(){Ai||Ws("scrollStart"),Ai=Rn()},ref:function(){return Cn}}};L_()&&ke.registerPlugin(lt);class Jx{constructor(){gl(this,"entries",{});gl(this,"observer");gl(this,"onElementObserved",e=>{e.forEach(t=>{const n=t.target.dataset.intersectId;n&&this.entries[n]&&(t.isIntersecting?this.entries[n].methodIn(t):this.entries[n].methodOut(t))})});this.observer=new IntersectionObserver(this.onElementObserved,{threshold:0})}observe(e,t,n,i){this.entries[e]={el:t,methodIn:n,methodOut:i},this.observer.observe(t)}unobserve(e,t){this.observer.unobserve(t),delete this.entries[e]}}new Jx;function Mp(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,typeof(i=function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(n.key))=="symbol"?i:String(i),n)}var i}function pf(r,e,t){return e&&Mp(r.prototype,e),t&&Mp(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function qi(){return qi=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},qi.apply(this,arguments)}function Zc(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,il(r,e)}function zh(r){return zh=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},zh(r)}function il(r,e){return il=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},il(r,e)}function Qx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Hh(r,e,t){return Hh=Qx()?Reflect.construct.bind():function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&il(a,s.prototype),a},Hh.apply(null,arguments)}function Vh(r){var e=typeof Map=="function"?new Map:void 0;return Vh=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return Hh(t,arguments,zh(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),il(n,t)},Vh(r)}function ey(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var Yr,ty=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(Yr||(Yr={}));var bp=Yr.off,Ls=function(){function r(t){this.t=void 0,this.t=t}r.getLevel=function(){return bp},r.setLevel=function(t){return bp=Yr[t]};var e=r.prototype;return e.error=function(){this.i(console.error,Yr.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,Yr.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,Yr.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,Yr.debug,[].slice.call(arguments))},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r}();function Js(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Tp(r){return r&&r.sensitive?"":"i"}var Zi={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},Is=new(function(){function r(){this.o=Zi,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var i=this.getContainer()||this.h.before;i?this.l(t,i):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return i.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},r}()),ny=function(){function r(){this.p=void 0,this.m=[],this.P=-1}var e=r.prototype;return e.init=function(t,n){this.p="barba";var i={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(i);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,i,s){var o=i??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var i=n||this.P,s=this.get(i);s.data=qi({},s.data,t),this.set(i,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var i=n||this.P,s=qi({},this.get(i),t);this.set(i,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",i=t,s=Zi.prefix+"-"+Zi.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},pf(r,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),r}(),W_=new ny,Nc=function(r,e){try{var t=function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=Is.toElement(n.html);i.namespace=Is.getNamespace(s),i.container=Is.getContainer(s),i.url=n.url,i.html=n.html,W_.update({ns:i.namespace});var o=Is.toDocument(n.html);document.title=o.title}})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},X_=function r(e,t,n){return e instanceof RegExp?function(i,s){if(!s)return i;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(i.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(i.source);return i}(e,t):Array.isArray(e)?function(i,s,o){var a=i.map(function(l){return r(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),Tp(o))}(e,t,n):function(i,s,o){return function(a,l,c){c===void 0&&(c={});for(var u=c.strict,h=u!==void 0&&u,d=c.start,f=d===void 0||d,_=c.end,g=_===void 0||_,m=c.encode,p=m===void 0?function(W){return W}:m,M=c.delimiter,b=M===void 0?"/#?":M,E=c.endsWith,C="[".concat(Js(E===void 0?"":E),"]|$"),P="[".concat(Js(b),"]"),T=f?"^":"",R=0,S=a;R<S.length;R++){var y=S[R];if(typeof y=="string")T+=Js(p(y));else{var I=Js(p(y.prefix)),B=Js(p(y.suffix));if(y.pattern)if(l&&l.push(y),I||B)if(y.modifier==="+"||y.modifier==="*"){var z=y.modifier==="*"?"?":"";T+="(?:".concat(I,"((?:").concat(y.pattern,")(?:").concat(B).concat(I,"(?:").concat(y.pattern,"))*)").concat(B,")").concat(z)}else T+="(?:".concat(I,"(").concat(y.pattern,")").concat(B,")").concat(y.modifier);else T+=y.modifier==="+"||y.modifier==="*"?"((?:".concat(y.pattern,")").concat(y.modifier,")"):"(".concat(y.pattern,")").concat(y.modifier);else T+="(?:".concat(I).concat(B,")").concat(y.modifier)}}if(g)h||(T+="".concat(P,"?")),T+=c.endsWith?"(?=".concat(C,")"):"$";else{var H=a[a.length-1],Z=typeof H=="string"?P.indexOf(H[H.length-1])>-1:H===void 0;h||(T+="(?:".concat(P,"(?=").concat(C,"))?")),Z||(T+="(?=".concat(P,"|").concat(C,")"))}return new RegExp(T,Tp(c))}(function(a,l){l===void 0&&(l={});for(var c=function(B){for(var z=[],H=0;H<B.length;){var Z=B[H];if(Z!=="*"&&Z!=="+"&&Z!=="?")if(Z!=="\\")if(Z!=="{")if(Z!=="}")if(Z!==":")if(Z!=="(")z.push({type:"CHAR",index:H,value:B[H++]});else{var W=1,j="";if(B[V=H+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(V));for(;V<B.length;)if(B[V]!=="\\"){if(B[V]===")"){if(--W==0){V++;break}}else if(B[V]==="("&&(W++,B[V+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(V));j+=B[V++]}else j+=B[V++]+B[V++];if(W)throw new TypeError("Unbalanced pattern at ".concat(H));if(!j)throw new TypeError("Missing pattern at ".concat(H));z.push({type:"PATTERN",index:H,value:j}),H=V}else{for(var q="",V=H+1;V<B.length;){var O=B.charCodeAt(V);if(!(O>=48&&O<=57||O>=65&&O<=90||O>=97&&O<=122||O===95))break;q+=B[V++]}if(!q)throw new TypeError("Missing parameter name at ".concat(H));z.push({type:"NAME",index:H,value:q}),H=V}else z.push({type:"CLOSE",index:H,value:B[H++]});else z.push({type:"OPEN",index:H,value:B[H++]});else z.push({type:"ESCAPED_CHAR",index:H++,value:B[H++]});else z.push({type:"MODIFIER",index:H,value:B[H++]})}return z.push({type:"END",index:H,value:""}),z}(a),u=l.prefixes,h=u===void 0?"./":u,d="[^".concat(Js(l.delimiter||"/#?"),"]+?"),f=[],_=0,g=0,m="",p=function(B){if(g<c.length&&c[g].type===B)return c[g++].value},M=function(B){var z=p(B);if(z!==void 0)return z;var H=c[g],Z=H.index;throw new TypeError("Unexpected ".concat(H.type," at ").concat(Z,", expected ").concat(B))},b=function(){for(var B,z="";B=p("CHAR")||p("ESCAPED_CHAR");)z+=B;return z};g<c.length;){var E=p("CHAR"),C=p("NAME"),P=p("PATTERN");if(C||P)h.indexOf(R=E||"")===-1&&(m+=R,R=""),m&&(f.push(m),m=""),f.push({name:C||_++,prefix:R,suffix:"",pattern:P||d,modifier:p("MODIFIER")||""});else{var T=E||p("ESCAPED_CHAR");if(T)m+=T;else if(m&&(f.push(m),m=""),p("OPEN")){var R=b(),S=p("NAME")||"",y=p("PATTERN")||"",I=b();M("CLOSE"),f.push({name:S||(y?_++:""),pattern:S&&!y?d:y,prefix:R,suffix:I,modifier:p("MODIFIER")||""})}else M("END")}}return f}(i,o),s,o)}(e,t,n)},iy={__proto__:null,update:Nc,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:X_},q_=function(){return window.location.origin},rl=function(r){return r===void 0&&(r=window.location.href),$r(r).port},$r=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(q_(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=Y_(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},Y_=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},Gh=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},ry={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(r,e){return e===void 0&&(e=document.baseURI),new URL(r,e).href},getOrigin:q_,getPort:rl,getPath:function(r){return r===void 0&&(r=window.location.href),$r(r).path},getQuery:function(r,e){return e===void 0&&(e=!1),e?JSON.stringify($r(r).query):$r(r).query},getHash:function(r){return $r(r).hash},parse:$r,parseQuery:Y_,clean:Gh};function sy(r,e,t,n,i){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==r?a.responseURL:r;s({html:a.responseText,url:qi({href:l},$r(l))}),n.update(r,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(r,c),o(c),n.update(r,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(r,l),o(l),n.update(r,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(r,l),o(l),n.update(r,{status:"rejected"})},a.open("GET",r),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),i.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function oy(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function To(r,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,i=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=r.apply(e,[].slice.call(t));n||(oy(a)?a.then(s,o):s(a))});return i}}var Hr=new(function(r){function e(){var n;return(n=r.call(this)||this).logger=new Ls("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}Zc(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){var i=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return To(a.fn,a.ctx).apply(void 0,[].slice.call(i,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e}(ty)),$_=function(){function r(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return X_(n)})}}return r.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=$r(e).path;return this.O.some(function(n){return n.exec(t)!==null})},r}(),ay=function(r){function e(n){var i;return(i=r.call(this,n)||this).T=new Map,i}Zc(e,r);var t=e.prototype;return t.set=function(n,i,s,o,a){return this.T.set(n,{action:s,request:i,status:o,target:a??n}),{action:s,request:i,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,i){var s=qi({},this.T.get(n),i);return this.T.set(n,s),s},e}($_),ly=function(){function r(){this.A=new Map}var e=r.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},r}(),cy=function(){return!window.history.pushState},uy=function(r){return!r.el||!r.href},hy=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},dy=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},fy=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},py=function(r){var e=r.el;return e.port!==void 0&&rl()!==rl(e.href)},my=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},gy=function(r){return r.el.hasAttribute(Zi.prefix+"-"+Zi.prevent)},_y=function(r){return!!r.el.closest("["+Zi.prefix+"-"+Zi.prevent+'="all"]')},vy=function(r){var e=r.href;return Gh(e)===Gh()&&rl(e)===rl()},xy=function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}Zc(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",cy),this.add("exists",uy),this.add("newTab",hy),this.add("blank",dy),this.add("corsDomain",fy),this.add("corsPort",py),this.add("download",my),this.add("preventSelf",gy),this.add("preventAll",_y),this.add("sameUrl",vy,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e}($_),Eu=function(r){function e(t,n){var i;return n===void 0&&(n="Barba error"),(i=r.call.apply(r,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(ey(i),e),i.name="BarbaError",i}return Zc(e,r),e}(Vh(Error)),yy=function(){function r(t){t===void 0&&(t=[]),this.logger=new Ls("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(d){return d.name&&d.name==="self"}:function(d){return!d.name||d.name!=="self"});var o=new Map,a=s.find(function(d){var f=!0,_={};return n.self&&d.name==="self"?(o.set(d,_),!0):(i.j.reverse().forEach(function(g){f&&(f=i.M(d,g,t,_),d.from&&d.to&&(f=i.M(d,g,t,_,"from")&&i.M(d,g,t,_,"to")),d.from&&!d.to&&(f=i.M(d,g,t,_,"from")),!d.from&&d.to&&(f=i.M(d,g,t,_,"to")))}),o.set(d,_),f)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,h=[a];Object.keys(l).length>0&&h.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(h))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,i,s,o){var a=!0,l=!1,c=t,u=n.name,h=u,d=u,f=u,_=o?c[o]:c,g=o==="to"?i.next:i.current;if(o?_&&_[u]:_[u]){switch(n.type){case"strings":default:var m=Array.isArray(_[h])?_[h]:[_[h]];g[h]&&m.indexOf(g[h])!==-1&&(l=!0),m.indexOf(g[h])===-1&&(a=!1);break;case"object":var p=Array.isArray(_[d])?_[d]:[_[d]];g[d]?(g[d].name&&p.indexOf(g[d].name)!==-1&&(l=!0),p.indexOf(g[d].name)===-1&&(a=!1)):a=!1;break;case"function":_[f](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var i=0;return this.j.forEach(function(s,o){i+=n.S(t,s.name,o+1)}),t.priority=i,t},r}();function da(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var Ey=function(){function r(t){t===void 0&&(t=[]),this.logger=new Ls("@barba/core"),this.store=void 0,this.C=!1,this.store=new yy(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.C=!1},o=this,a=i||{};o.C=!0;var l=da(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(d){l.C=!1},l=this,c=i||{},u=c.sync===!0||!1;l.C=!0;var h=da(function(){function d(){return Promise.resolve(l.L("before",n,c)).then(function(){function _(m){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var g=function(){if(u)return da(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(b){if(l.H(b))throw new Eu(b,"Transition error [sync]")});var m=function(b){return da(function(){var E=function(){if(p!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,p)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})}();if(E&&E.then)return E.then(function(){})},function(E){if(l.H(E))throw new Eu(E,"Transition error [before/after/enter]")})},p=!1,M=da(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),Nc(s,n)]).then(function(b){return b[0]})).then(function(b){return p=b,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(b){if(l.H(b))throw new Eu(b,"Transition error [before/after/leave]")});return M&&M.then?M.then(m):m()}();return g&&g.then?g.then(_):_()})}var f=function(){if(u)return Promise.resolve(Nc(s,n)).then(function(){})}();return f&&f.then?f.then(d):d()},function(d){throw l.C=!1,d.name&&d.name==="BarbaError"?(l.logger.debug(d.label),l.logger.error(d.error),d):(l.logger.debug("Transition error [page]"),l.logger.error(d),d)});return Promise.resolve(h&&h.then?h.then(a):a())}catch(d){return Promise.reject(d)}},e.once=function(t,n){try{return Promise.resolve(Hr.do("once",t,n)).then(function(){return n.once?To(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(Hr.do("leave",t,n)).then(function(){return n.leave?To(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(Hr.do("enter",t,n)).then(function(){return n.enter?To(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return Is.addContainer(t.next.container,n),Hr.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return Is.removeContainer(t.current.container),Hr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,i){try{return Promise.resolve(Hr.do(t,n,i)).then(function(){return i[t]?To(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},pf(r,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r}(),Sy=function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){Hr[n](t._(n))}))}return r.prototype._=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?To(s[e],s)(n):Promise.resolve()}},r}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var My={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Ys=new(function(){function r(){this.version="2.10.0",this.schemaPage=My,this.Logger=Ls,this.logger=new Ls("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=Hr,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=Is,this.helpers=iy,this.history=W_,this.request=sy,this.url=ry,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?Zi:l,u=n.requestError,h=n.timeout,d=h===void 0?2e3:h,f=n.cacheIgnore,_=f!==void 0&&f,g=n.cacheFirstPage,m=g!==void 0&&g,p=n.prefetchIgnore,M=p!==void 0&&p,b=n.preventRunning,E=b!==void 0&&b,C=n.prevent,P=C===void 0?null:C,T=n.debug,R=n.logLevel;if(Ls.setLevel((T!==void 0&&T)===!0?"debug":R===void 0?"off":R),this.logger.info(this.version),Object.keys(c).forEach(function(I){Zi[I]&&(Zi[I]=c[I])}),this.B=u,this.timeout=d,this.cacheIgnore=_,this.cacheFirstPage=m,this.prefetchIgnore=M,this.preventRunning=E,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var S=this.data.current;if(!S.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new ay(_),this.headers=new ly,this.prevent=new xy(M),this.transitions=new Ey(s),this.views=new Sy(a),P!==null){if(typeof P!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",P)}this.history.init(S.url.href,S.namespace),m&&this.cache.set(S.url.href,Promise.resolve({html:S.html,url:S.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(I){return I.init()});var y=this.data;y.trigger="barba",y.next=y.current,y.current=qi({},this.schemaPage),this.hooks.do("ready",y),this.once(y),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,i??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}}();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i,s){try{var o,a=function(){var h=l.data;return Promise.resolve(l.hooks.do("page",h)).then(function(){var d=function(f,_){try{var g=(m=l.transitions.get(h,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:h,page:o,transition:m,wrapper:l.q})).then(function(){l.I()}))}catch{return _()}var m;return g&&g.then?g.then(void 0,_):g}(0,function(){Ls.getLevel()===0&&l.force(h.next.url.href)});if(d&&d.then)return d.then(function(){})})},l=this;if(l.data.next.url=qi({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=i,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(h){h.url.href!==t&&l.history.add(h.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=function(){if(l.transitions.shouldWait)return Promise.resolve(Nc(o,l.data)).then(function(){})}();return Promise.resolve(u&&u.then?u.then(a):a())}catch(h){return Promise.reject(h)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),i=n[0],s=n[1],o=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(t,o,i,s)===!1||o==="click"&&this.force(i),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){n.logger.error(i)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,i=this.W(t);if(i){var s=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){this.F=t;var n=this.W(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.X=function(t){this.F&&!this.W(this.F)||this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:qi({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:qi({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},pf(r,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),r}());function j_(r,e,t){return Math.max(r,Math.min(e,t))}class by{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.duration=0,this.currentTime=0}advance(e){var t;if(!this.isRunning)return;let n=!1;if(this.duration&&this.easing){this.currentTime+=e;const i=j_(0,this.currentTime/this.duration,1);n=i>=1;const s=n?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=function(s,o,a,l){return function(u,h,d){return(1-d)*u+d*h}(s,o,1-Math.exp(-a*l))}(this.value,this.to,60*this.lerp,e),Math.round(this.value)===this.to&&(this.value=this.to,n=!0)):(this.value=this.to,n=!0);n&&this.stop(),(t=this.onUpdate)===null||t===void 0||t.call(this,this.value,n)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:i,easing:s,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class Ty{constructor({wrapper:e,content:t,autoResize:n=!0,debounce:i=250}={}){this.width=0,this.height=0,this.scrollWidth=0,this.scrollHeight=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):this.wrapper instanceof HTMLElement&&(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):this.wrapper instanceof HTMLElement&&(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},this.wrapper=e,this.content=t,n&&(this.debouncedResize=function(o,a){let l;return function(){let c=arguments,u=this;clearTimeout(l),l=setTimeout(function(){o.apply(u,c)},a)}}(this.resize,i),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)===null||e===void 0||e.disconnect(),(t=this.contentResizeObserver)===null||t===void 0||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class K_{constructor(){this.events={}}emit(e,...t){let n=this.events[e]||[];for(let i=0,s=n.length;i<s;i++)n[i](...t)}on(e,t){var n;return!((n=this.events[e])===null||n===void 0)&&n.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])===null||i===void 0?void 0:i.filter(s=>t!==s)}}off(e,t){var n;this.events[e]=(n=this.events[e])===null||n===void 0?void 0:n.filter(i=>t!==i)}destroy(){this.events={}}}const wp=100/6;class wy{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=1}){this.lastDelta={x:0,y:0},this.windowWidth=0,this.windowHeight=0,this.onTouchStart=i=>{const{clientX:s,clientY:o}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=s,this.touchStart.y=o,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})},this.onTouchMove=i=>{var s,o,a,l;const{clientX:c,clientY:u}=i.targetTouches?i.targetTouches[0]:i,h=-(c-((o=(s=this.touchStart)===null||s===void 0?void 0:s.x)!==null&&o!==void 0?o:0))*this.touchMultiplier,d=-(u-((l=(a=this.touchStart)===null||a===void 0?void 0:a.y)!==null&&l!==void 0?l:0))*this.touchMultiplier;this.touchStart.x=c,this.touchStart.y=u,this.lastDelta={x:h,y:d},this.emitter.emit("scroll",{deltaX:h,deltaY:d,event:i})},this.onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})},this.onWheel=i=>{let{deltaX:s,deltaY:o,deltaMode:a}=i;s*=a===1?wp:a===2?this.windowWidth:1,o*=a===1?wp:a===2?this.windowHeight:1,s*=this.wheelMultiplier,o*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:s,deltaY:o,event:i})},this.onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight},this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.touchStart={x:null,y:null},this.emitter=new K_,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel),this.element.removeEventListener("touchstart",this.onTouchStart),this.element.removeEventListener("touchmove",this.onTouchMove),this.element.removeEventListener("touchend",this.onTouchEnd)}}class Ay{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:n=e,eventsTarget:i=n,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:c,easing:u=C=>Math.min(1,1.001-Math.pow(2,-10*C)),lerp:h=.1,infinite:d=!1,orientation:f="vertical",gestureOrientation:_="vertical",touchMultiplier:g=1,wheelMultiplier:m=1,autoResize:p=!0,prevent:M,virtualScroll:b,__experimental__naiveDimensions:E=!1}={}){this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.onPointerDown=C=>{C.button===1&&this.reset()},this.onVirtualScroll=C=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(C)===!1)return;const{deltaX:P,deltaY:T,event:R}=C;if(this.emitter.emit("virtual-scroll",{deltaX:P,deltaY:T,event:R}),R.ctrlKey)return;const S=R.type.includes("touch"),y=R.type.includes("wheel");if(this.isTouching=R.type==="touchstart"||R.type==="touchmove",this.options.syncTouch&&S&&R.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const I=P===0&&T===0,B=this.options.gestureOrientation==="vertical"&&T===0||this.options.gestureOrientation==="horizontal"&&P===0;if(I||B)return;let z=R.composedPath();z=z.slice(0,z.indexOf(this.rootElement));const H=this.options.prevent;if(z.find(q=>{var V,O,_e,ye,Ue;return q instanceof Element&&(typeof H=="function"&&(H==null?void 0:H(q))||((V=q.hasAttribute)===null||V===void 0?void 0:V.call(q,"data-lenis-prevent"))||S&&((O=q.hasAttribute)===null||O===void 0?void 0:O.call(q,"data-lenis-prevent-touch"))||y&&((_e=q.hasAttribute)===null||_e===void 0?void 0:_e.call(q,"data-lenis-prevent-wheel"))||((ye=q.classList)===null||ye===void 0?void 0:ye.contains("lenis"))&&!(!((Ue=q.classList)===null||Ue===void 0)&&Ue.contains("lenis-stopped")))}))return;if(this.isStopped||this.isLocked)return void R.preventDefault();if(!(this.options.syncTouch&&S||this.options.smoothWheel&&y))return this.isScrolling="native",void this.animate.stop();R.preventDefault();let Z=T;this.options.gestureOrientation==="both"?Z=Math.abs(T)>Math.abs(P)?T:P:this.options.gestureOrientation==="horizontal"&&(Z=P);const W=S&&this.options.syncTouch,j=S&&R.type==="touchend"&&Math.abs(Z)>5;j&&(Z=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+Z,Object.assign({programmatic:!1},W?{lerp:j?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(clearTimeout(this.__resetVelocityTimeout),delete this.__resetVelocityTimeout,this.__preventNextNativeScrollEvent)delete this.__preventNextNativeScrollEvent;else if(this.isScrolling===!1||this.isScrolling==="native"){const C=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-C,this.direction=Math.sign(this.animatedScroll-C),this.isScrolling="native",this.emit(),this.velocity!==0&&(this.__resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}},window.lenisVersion="1.1.6",e&&e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:n,eventsTarget:i,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:c,easing:u,lerp:h,infinite:d,gestureOrientation:_,orientation:f,touchMultiplier:g,wheelMultiplier:m,autoResize:p,prevent:M,virtualScroll:b,__experimental__naiveDimensions:E},this.animate=new by,this.emitter=new K_,this.dimensions=new Ty({wrapper:e,content:t,autoResize:p}),this.updateClassName(),this.userData={},this.time=0,this.velocity=this.lastVelocity=0,this.isLocked=!1,this.isStopped=!1,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new wy(i,{touchMultiplier:g,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=this.options.lerp,onStart:l,onComplete:c,force:u=!1,programmatic:h=!0,userData:d={}}={}){if(!this.isStopped&&!this.isLocked||u){if(typeof e=="string"&&["top","left","start"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let f;if(typeof e=="string"?f=document.querySelector(e):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(f=e),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?g.left:g.top}const _=f.getBoundingClientRect();e=(this.isHorizontal?_.left:_.top)+this.animatedScroll}}if(typeof e=="number"&&(e+=t,e=Math.round(e),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):e=j_(0,e,this.limit),e!==this.targetScroll)){if(this.userData=d,n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),void(this.userData={});h||(this.targetScroll=e),this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(f,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),h&&(this.targetScroll=f),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this.__preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextNativeScrollEvent})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(t,n){return(t%n+n)%n}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.updateClassName())}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.updateClassName())}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Ji{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ji.nextNameID=Ji.nextNameID||0,this.$name.id=`lil-gui-name-${++Ji.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Dy extends Ji{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Wh(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Cy={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Wh,toHexString:Wh},sl={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Ry={isPrimitive:!1,match:Array.isArray,fromHexString(r,e,t=1){const n=sl.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return sl.toHexString(i)}},Py={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=sl.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return sl.toHexString(i)}},Ly=[Cy,sl,Ry,Py];function Iy(r){return Ly.find(e=>e.match(r))}class Fy extends Ji{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Iy(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Wh(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Su extends Ji{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ny extends Ji{constructor(e,t,n,i,s,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let p=parseFloat(this.$input.value);isNaN(p)||(this._stepExplicit&&(p=this._snap(p)),this.setValue(this._clamp(p)))},t=p=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+p),this.$input.value=this.getValue())},n=p=>{p.code==="Enter"&&this.$input.blur(),p.code==="ArrowUp"&&(p.preventDefault(),t(this._step*this._arrowKeyMultiplier(p))),p.code==="ArrowDown"&&(p.preventDefault(),t(this._step*this._arrowKeyMultiplier(p)*-1))},i=p=>{this._inputFocused&&(p.preventDefault(),t(this._step*this._normalizeMouseWheel(p)))};let s=!1,o,a,l,c,u;const h=5,d=p=>{o=p.clientX,a=l=p.clientY,s=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",_)},f=p=>{if(s){const M=p.clientX-o,b=p.clientY-a;Math.abs(b)>h?(p.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>h&&_()}if(!s){const M=p.clientY-l;u-=M*this._step*this._arrowKeyMultiplier(p),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}l=p.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",_)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,M,b,E,C)=>(p-M)/(b-M)*(C-E)+E,t=p=>{const M=this.$slider.getBoundingClientRect();let b=e(p,M.left,M.right,this._min,this._max);this._snapClampSetValue(b)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=p=>{if(o){const M=p.touches[0].clientX-a,b=p.touches[0].clientY-l;Math.abs(M)>Math.abs(b)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),_=400;let g;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const b=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(f,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Uy extends Ji{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Oy extends Ji{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const By=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function ky(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Ap=!1;class mf{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Ap&&o&&(ky(By),Ap=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,s){if(Object(n)===n)return new Uy(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new Ny(this,e,t,n,i,s);case"boolean":return new Dy(this,e,t);case"string":return new Oy(this,e,t);case"function":return new Su(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new Fy(this,e,t,n)}addFolder(e){return new mf({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Su||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Su)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gf="171",Uo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zy=0,Dp=1,Hy=2,Z_=1,Vy=2,dr=3,Dr=0,ei=1,Fi=2,br=0,Oo=1,Cp=2,Rp=3,Pp=4,Gy=5,Ds=100,Wy=101,Xy=102,qy=103,Yy=104,$y=200,jy=201,Ky=202,Zy=203,Xh=204,qh=205,Jy=206,Qy=207,eE=208,tE=209,nE=210,iE=211,rE=212,sE=213,oE=214,Yh=0,$h=1,jh=2,$o=3,Kh=4,Zh=5,Jh=6,Qh=7,J_=0,aE=1,lE=2,os=0,cE=1,uE=2,hE=3,dE=4,fE=5,pE=6,mE=7,Lp="attached",gE="detached",Q_=300,jo=301,Ko=302,Uc=303,ed=304,Jc=306,Zo=1e3,Yi=1001,Oc=1002,qn=1003,e0=1004,Ca=1005,un=1006,pc=1007,$i=1008,Cr=1009,t0=1010,n0=1011,ol=1012,_f=1013,Xs=1014,bn=1015,jn=1016,vf=1017,xf=1018,Jo=1020,i0=35902,r0=1021,s0=1022,di=1023,o0=1024,a0=1025,Bo=1026,Qo=1027,Qc=1028,yf=1029,l0=1030,Ef=1031,Sf=1033,mc=33776,gc=33777,_c=33778,vc=33779,td=35840,nd=35841,id=35842,rd=35843,sd=36196,od=37492,ad=37496,ld=37808,cd=37809,ud=37810,hd=37811,dd=37812,fd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,xd=37819,yd=37820,Ed=37821,xc=36492,Sd=36494,Md=36495,c0=36283,bd=36284,Td=36285,wd=36286,al=2300,ll=2301,Mu=2302,Ip=2400,Fp=2401,Np=2402,_E=2500,vE=0,u0=1,Ad=2,xE=3200,yE=3201,h0=0,EE=1,vr="",rn="srgb",pn="srgb-linear",Bc="linear",Nt="srgb",Qs=7680,Up=519,SE=512,ME=513,bE=514,d0=515,TE=516,wE=517,AE=518,DE=519,Dd=35044,Op="300 es",Er=2e3,kc=2001;class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bp=1234567;const Wa=Math.PI/180,ea=180/Math.PI;function Oi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function pt(r,e,t){return Math.max(e,Math.min(t,r))}function Mf(r,e){return(r%e+e)%e}function CE(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function RE(r,e,t){return r!==e?(t-r)/(e-r):0}function Xa(r,e,t){return(1-t)*r+t*e}function PE(r,e,t,n){return Xa(r,e,1-Math.exp(-t*n))}function LE(r,e=1){return e-Math.abs(Mf(r,e*2)-e)}function IE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function FE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function NE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function UE(r,e){return r+Math.random()*(e-r)}function OE(r){return r*(.5-Math.random())}function BE(r){r!==void 0&&(Bp=r);let e=Bp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kE(r){return r*Wa}function zE(r){return r*ea}function HE(r){return(r&r-1)===0&&r!==0}function VE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function GE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function WE(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ni(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const f0={DEG2RAD:Wa,RAD2DEG:ea,generateUUID:Oi,clamp:pt,euclideanModulo:Mf,mapLinear:CE,inverseLerp:RE,lerp:Xa,damp:PE,pingpong:LE,smoothstep:IE,smootherstep:FE,randInt:NE,randFloat:UE,randFloatSpread:OE,seededRandom:BE,degToRad:kE,radToDeg:zE,isPowerOfTwo:HE,ceilPowerOfTwo:VE,floorPowerOfTwo:GE,setQuaternionFromProperEuler:WE,normalize:Lt,denormalize:Ni};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,i,s,o,a,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],b=i[4],E=i[7],C=i[2],P=i[5],T=i[8];return s[0]=o*g+a*M+l*C,s[3]=o*m+a*b+l*P,s[6]=o*p+a*E+l*T,s[1]=c*g+u*M+h*C,s[4]=c*m+u*b+h*P,s[7]=c*p+u*E+h*T,s[2]=d*g+f*M+_*C,s[5]=d*m+f*b+_*P,s[8]=d*p+f*E+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bu.makeScale(e,t)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,t){return this.premultiply(bu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new ut;function p0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function XE(){const r=cl("canvas");return r.style.display="block",r}const kp={};function xo(r){r in kp||(kp[r]=!0,console.warn(r))}function qE(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function YE(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $E(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hp=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jE(){const r={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Nt&&(i.r=Tr(i.r),i.g=Tr(i.g),i.b=Tr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Nt&&(i.r=ko(i.r),i.g=ko(i.g),i.b=ko(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vr?Bc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[pn]:{primaries:e,whitePoint:n,transfer:Bc,toXYZ:zp,fromXYZ:Hp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:n,transfer:Nt,toXYZ:zp,fromXYZ:Hp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),r}const Et=jE();function Tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ko(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let eo;class KE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{eo===void 0&&(eo=cl("canvas")),eo.width=e.width,eo.height=e.height;const n=eo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=eo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Tr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tr(t[n]/255)*255):t[n]=Tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZE=0;class m0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Tu(i[o].image)):s.push(Tu(i[o]))}else s=Tu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?KE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JE=0;class En extends $s{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,n=Yi,i=Yi,s=un,o=$i,a=di,l=Cr,c=En.DEFAULT_ANISOTROPY,u=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=Oi(),this.name="",this.source=new m0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zo:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zo:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Q_;En.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,i=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(f+1)/2,C=(p+1)/2,P=(u+d)/4,T=(h+g)/4,R=(_+m)/4;return b>E&&b>C?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=P/n,s=T/n):E>C?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=P/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=R/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QE extends $s{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new En(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new m0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends QE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class g0 extends En{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eS extends En{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=1-a;const p=l*d+c*f+u*_+h*g,M=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),P=Math.atan2(C,p*M);m=Math.sin(m*P)/C,a=Math.sin(a*P)/C}const E=a*M;if(l=l*m+d*E,c=c*m+f*E,u=u*m+_*E,h=h*m+g*E,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-a*f,e[t+2]=c*_+u*f+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wu=new K,Vp=new tr;class Rr{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Di):Di.fromBufferAttribute(s,o),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rl.copy(n.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Pl.subVectors(this.max,fa),to.subVectors(e.a,fa),no.subVectors(e.b,fa),io.subVectors(e.c,fa),Lr.subVectors(no,to),Ir.subVectors(io,no),gs.subVectors(to,io);let t=[0,-Lr.z,Lr.y,0,-Ir.z,Ir.y,0,-gs.z,gs.y,Lr.z,0,-Lr.x,Ir.z,0,-Ir.x,gs.z,0,-gs.x,-Lr.y,Lr.x,0,-Ir.y,Ir.x,0,-gs.y,gs.x,0];return!Au(t,to,no,io,Pl)||(t=[1,0,0,0,1,0,0,0,1],!Au(t,to,no,io,Pl))?!1:(Ll.crossVectors(Lr,Ir),t=[Ll.x,Ll.y,Ll.z],Au(t,to,no,io,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const or=[new K,new K,new K,new K,new K,new K,new K,new K],Di=new K,Rl=new Rr,to=new K,no=new K,io=new K,Lr=new K,Ir=new K,gs=new K,fa=new K,Pl=new K,Ll=new K,_s=new K;function Au(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_s.fromArray(r,s);const a=i.x*Math.abs(_s.x)+i.y*Math.abs(_s.y)+i.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),u=n.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tS=new Rr,pa=new K,Du=new K;class rr{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const t=pa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(pa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(Du)),this.expandByPoint(pa.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ar=new K,Cu=new K,Il=new K,Fr=new K,Ru=new K,Fl=new K,Pu=new K;class dl{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Cu.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(Cu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Il),a=Fr.dot(this.direction),l=-Fr.dot(Il),c=Fr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Cu).addScaledVector(Il,d),f}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const n=ar.dot(this.direction),i=ar.dot(ar)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,n,i,s){Ru.subVectors(t,e),Fl.subVectors(n,e),Pu.crossVectors(Ru,Fl);let o=this.direction.dot(Pu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fr.subVectors(this.origin,e);const l=a*this.direction.dot(Fl.crossVectors(Fr,Fl));if(l<0)return null;const c=a*this.direction.dot(Ru.cross(Fr));if(c<0||l+c>o)return null;const u=-a*Fr.dot(Pu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,_,g,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ro.setFromMatrixColumn(e,0).length(),s=1/ro.setFromMatrixColumn(e,1).length(),o=1/ro.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nS,e,iS)}lookAt(e,t,n){const i=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Nr.crossVectors(n,ii),Nr.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Nr.crossVectors(n,ii)),Nr.normalize(),Nl.crossVectors(ii,Nr),i[0]=Nr.x,i[4]=Nl.x,i[8]=ii.x,i[1]=Nr.y,i[5]=Nl.y,i[9]=ii.y,i[2]=Nr.z,i[6]=Nl.z,i[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],b=n[7],E=n[11],C=n[15],P=i[0],T=i[4],R=i[8],S=i[12],y=i[1],I=i[5],B=i[9],z=i[13],H=i[2],Z=i[6],W=i[10],j=i[14],q=i[3],V=i[7],O=i[11],_e=i[15];return s[0]=o*P+a*y+l*H+c*q,s[4]=o*T+a*I+l*Z+c*V,s[8]=o*R+a*B+l*W+c*O,s[12]=o*S+a*z+l*j+c*_e,s[1]=u*P+h*y+d*H+f*q,s[5]=u*T+h*I+d*Z+f*V,s[9]=u*R+h*B+d*W+f*O,s[13]=u*S+h*z+d*j+f*_e,s[2]=_*P+g*y+m*H+p*q,s[6]=_*T+g*I+m*Z+p*V,s[10]=_*R+g*B+m*W+p*O,s[14]=_*S+g*z+m*j+p*_e,s[3]=M*P+b*y+E*H+C*q,s[7]=M*T+b*I+E*Z+C*V,s[11]=M*R+b*B+E*W+C*O,s[15]=M*S+b*z+E*j+C*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+g*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=h*m*c-g*d*c+g*l*f-a*m*f-h*l*p+a*d*p,b=_*d*c-u*m*c-_*l*f+o*m*f+u*l*p-o*d*p,E=u*g*c-_*h*c+_*a*f-o*g*f-u*a*p+o*h*p,C=_*h*l-u*g*l-_*a*d+o*g*d+u*a*m-o*h*m,P=t*M+n*b+i*E+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return e[0]=M*T,e[1]=(g*d*s-h*m*s-g*i*f+n*m*f+h*i*p-n*d*p)*T,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=b*T,e[5]=(u*m*s-_*d*s+_*i*f-t*m*f-u*i*p+t*d*p)*T,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*T,e[8]=E*T,e[9]=(_*h*s-u*g*s-_*n*f+t*g*f+u*n*p-t*h*p)*T,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*T,e[12]=C*T,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,_=s*h,g=o*u,m=o*h,p=a*h,M=l*c,b=l*u,E=l*h,C=n.x,P=n.y,T=n.z;return i[0]=(1-(g+p))*C,i[1]=(f+E)*C,i[2]=(_-b)*C,i[3]=0,i[4]=(f-E)*P,i[5]=(1-(d+p))*P,i[6]=(m+M)*P,i[7]=0,i[8]=(_+b)*T,i[9]=(m-M)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ro.set(i[0],i[1],i[2]).length();const o=ro.set(i[4],i[5],i[6]).length(),a=ro.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ci.copy(this);const c=1/s,u=1/o,h=1/a;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=h,Ci.elements[9]*=h,Ci.elements[10]*=h,t.setFromRotationMatrix(Ci),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Er){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===Er)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===kc)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Er){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let _,g;if(a===Er)_=(o+s)*h,g=-2*h;else if(a===kc)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ro=new K,Ci=new ht,nS=new K(0,0,0),iS=new K(1,1,1),Nr=new K,Nl=new K,ii=new K,Gp=new ht,Wp=new tr;class nr{constructor(e=0,t=0,n=0,i=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class _0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rS=0;const Xp=new K,so=new tr,lr=new ht,Ul=new K,ma=new K,sS=new K,oS=new tr,qp=new K(1,0,0),Yp=new K(0,1,0),$p=new K(0,0,1),jp={type:"added"},aS={type:"removed"},oo={type:"childadded",child:null},Lu={type:"childremoved",child:null};class $t extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new K,t=new nr,n=new tr,i=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new ut}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(qp,e)}rotateY(e){return this.rotateOnAxis(Yp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,t){return Xp.copy(e).applyQuaternion(this.quaternion),this.position.add(Xp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qp,e)}translateY(e){return this.translateOnAxis(Yp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ul.copy(e):Ul.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(ma,Ul,this.up):lr.lookAt(Ul,ma,this.up),this.quaternion.setFromRotationMatrix(lr),i&&(lr.extractRotation(i.matrixWorld),so.setFromRotationMatrix(lr),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jp),oo.child=e,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aS),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jp),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,sS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,oS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}$t.DEFAULT_UP=new K(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new K,cr=new K,Iu=new K,ur=new K,ao=new K,lo=new K,Kp=new K,Fu=new K,Nu=new K,Uu=new K,Ou=new At,Bu=new At,ku=new At;class Ui{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ri.subVectors(e,t),i.cross(Ri);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ri.subVectors(i,t),cr.subVectors(n,t),Iu.subVectors(e,t);const o=Ri.dot(Ri),a=Ri.dot(cr),l=Ri.dot(Iu),c=cr.dot(cr),u=cr.dot(Iu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ur.x),l.addScaledVector(o,ur.y),l.addScaledVector(a,ur.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ou.setScalar(0),Bu.setScalar(0),ku.setScalar(0),Ou.fromBufferAttribute(e,t),Bu.fromBufferAttribute(e,n),ku.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ou,s.x),o.addScaledVector(Bu,s.y),o.addScaledVector(ku,s.z),o}static isFrontFacing(e,t,n,i){return Ri.subVectors(n,t),cr.subVectors(e,t),Ri.cross(cr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ri.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ui.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ao.subVectors(i,n),lo.subVectors(s,n),Fu.subVectors(e,n);const l=ao.dot(Fu),c=lo.dot(Fu);if(l<=0&&c<=0)return t.copy(n);Nu.subVectors(e,i);const u=ao.dot(Nu),h=lo.dot(Nu);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ao,o);Uu.subVectors(e,s);const f=ao.dot(Uu),_=lo.dot(Uu);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(lo,a);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return Kp.subVectors(s,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(Kp,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(ao,o).addScaledVector(lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const v0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function zu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Et.workingColorSpace){if(e=Mf(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zu(o,s,e+1/3),this.g=zu(o,s,e),this.b=zu(o,s,e-1/3)}return Et.toWorkingColorSpace(this,i),this}setStyle(e,t=rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const n=v0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return Et.fromWorkingColorSpace(Dn.copy(this),e),Math.round(pt(Dn.r*255,0,255))*65536+Math.round(pt(Dn.g*255,0,255))*256+Math.round(pt(Dn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,i=Dn.g,s=Dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=rn){Et.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,i=Dn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(Ol);const n=Xa(Ur.h,Ol.h,t),i=Xa(Ur.s,Ol.s,t),s=Xa(Ur.l,Ol.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new rt;rt.NAMES=v0;let lS=0;class Qi extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Oo,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=qh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oo&&(n.blending=this.blending),this.side!==Dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xh&&(n.blendSrc=this.blendSrc),this.blendDst!==qh&&(n.blendDst=this.blendDst),this.blendEquation!==Ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$o&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ts extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=J_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xr=cS();function cS(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function uS(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=pt(r,-65504,65504),xr.floatView[0]=r;const e=xr.uint32View[0],t=e>>23&511;return xr.baseTable[t]+((e&8388607)>>xr.shiftTable[t])}function hS(r){const e=r>>10;return xr.uint32View[0]=xr.mantissaTable[xr.offsetTable[e]+(r&1023)]+xr.exponentTable[e],xr.floatView[0]}const Ao={toHalfFloat:uS,fromHalfFloat:hS},on=new K,Bl=new it;class wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dd,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bl.fromBufferAttribute(this,t),Bl.applyMatrix3(e),this.setXY(t,Bl.x,Bl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dd&&(e.usage=this.usage),e}}class x0 extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class y0 extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ti extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dS=0;const _i=new ht,Hu=new $t,co=new K,ri=new Rr,ga=new Rr,_n=new K;class gi extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?y0:x0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ut().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ti(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(ri.min,ga.min),ri.expandByPoint(_n),_n.addVectors(ri.max,ga.max),ri.expandByPoint(_n)):(ri.expandByPoint(ga.min),ri.expandByPoint(ga.max))}ri.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)_n.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_n.fromBufferAttribute(a,c),l&&(co.fromBufferAttribute(e,c),_n.add(co)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new K,l[R]=new K;const c=new K,u=new K,h=new K,d=new it,f=new it,_=new it,g=new K,m=new K;function p(R,S,y){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,S),_.fromBufferAttribute(s,y),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const I=1/(f.x*_.y-_.x*f.y);isFinite(I)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(I),a[R].add(g),a[S].add(g),a[y].add(g),l[R].add(m),l[S].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,S=M.length;R<S;++R){const y=M[R],I=y.start,B=y.count;for(let z=I,H=I+B;z<H;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new K,E=new K,C=new K,P=new K;function T(R){C.fromBufferAttribute(i,R),P.copy(C);const S=a[R];b.copy(S),b.sub(C.multiplyScalar(C.dot(S))).normalize(),E.crossVectors(P,S);const I=E.dot(l[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,I)}for(let R=0,S=M.length;R<S;++R){const y=M[R],I=y.start,B=y.count;for(let z=I,H=I+B;z<H;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new K,s=new K,o=new K,a=new K,l=new K,c=new K,u=new K,h=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new wn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zp=new ht,vs=new dl,kl=new rr,Jp=new K,zl=new K,Hl=new K,Vl=new K,Vu=new K,Gl=new K,Qp=new K,Wl=new K;class Xn extends $t{constructor(e=new gi,t=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Gl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Vu.fromBufferAttribute(h,e),o?Gl.addScaledVector(Vu,u):Gl.addScaledVector(Vu.sub(t),u))}t.add(Gl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kl.copy(n.boundingSphere),kl.applyMatrix4(s),vs.copy(e.ray).recast(e.near),!(kl.containsPoint(vs.origin)===!1&&(vs.intersectSphere(kl,Jp)===null||vs.origin.distanceToSquared(Jp)>(e.far-e.near)**2))&&(Zp.copy(s).invert(),vs.copy(e.ray).applyMatrix4(Zp),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=M,C=b;E<C;E+=3){const P=a.getX(E),T=a.getX(E+1),R=a.getX(E+2);i=Xl(this,p,e,n,c,u,h,P,T,R),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=a.getX(m),b=a.getX(m+1),E=a.getX(m+2);i=Xl(this,o,e,n,c,u,h,M,b,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=M,C=b;E<C;E+=3){const P=E,T=E+1,R=E+2;i=Xl(this,p,e,n,c,u,h,P,T,R),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=m,b=m+1,E=m+2;i=Xl(this,o,e,n,c,u,h,M,b,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function fS(r,e,t,n,i,s,o,a){let l;if(e.side===ei?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Dr,a),l===null)return null;Wl.copy(a),Wl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Wl);return c<t.near||c>t.far?null:{distance:c,point:Wl.clone(),object:r}}function Xl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,zl),r.getVertexPosition(l,Hl),r.getVertexPosition(c,Vl);const u=fS(r,e,t,n,zl,Hl,Vl,Qp);if(u){const h=new K;Ui.getBarycoord(Qp,zl,Hl,Vl,h),i&&(u.uv=Ui.getInterpolatedAttribute(i,a,l,c,h,new it)),s&&(u.uv1=Ui.getInterpolatedAttribute(s,a,l,c,h,new it)),o&&(u.normal=Ui.getInterpolatedAttribute(o,a,l,c,h,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new K,materialIndex:0};Ui.getNormal(zl,Hl,Vl,d.normal),u.face=d,u.barycoord=h}return u}class fl extends gi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ti(c,3)),this.setAttribute("normal",new ti(u,3)),this.setAttribute("uv",new ti(h,2));function _(g,m,p,M,b,E,C,P,T,R,S){const y=E/T,I=C/R,B=E/2,z=C/2,H=P/2,Z=T+1,W=R+1;let j=0,q=0;const V=new K;for(let O=0;O<W;O++){const _e=O*I-z;for(let ye=0;ye<Z;ye++){const Ue=ye*y-B;V[g]=Ue*M,V[m]=_e*b,V[p]=H,c.push(V.x,V.y,V.z),V[g]=0,V[m]=0,V[p]=P>0?1:-1,u.push(V.x,V.y,V.z),h.push(ye/T),h.push(1-O/R),j+=1}}for(let O=0;O<R;O++)for(let _e=0;_e<T;_e++){const ye=d+_e+Z*O,Ue=d+_e+Z*(O+1),ne=d+(_e+1)+Z*(O+1),se=d+(_e+1)+Z*O;l.push(ye,Ue,se),l.push(Ue,ne,se),q+=6}a.addGroup(f,q,S),f+=q,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ta(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bn(r){const e={};for(let t=0;t<r.length;t++){const n=ta(r[t]);for(const i in n)e[i]=n[i]}return e}function pS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function E0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const S0={clone:ta,merge:Bn};var mS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mS,this.fragmentShader=gS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=pS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class M0 extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Er}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Or=new K,em=new it,tm=new it;class Vn extends M0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,em,tm),t.subVectors(tm,em)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const uo=-90,ho=1;class _S extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vn(uo,ho,e,t);i.layers=this.layers,this.add(i);const s=new Vn(uo,ho,e,t);s.layers=this.layers,this.add(s);const o=new Vn(uo,ho,e,t);o.layers=this.layers,this.add(o);const a=new Vn(uo,ho,e,t);a.layers=this.layers,this.add(a);const l=new Vn(uo,ho,e,t);l.layers=this.layers,this.add(l);const c=new Vn(uo,ho,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Er)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class b0 extends En{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:jo,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vS extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new b0(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fl(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ei,blending:br});s.uniforms.tEquirect.value=t;const o=new Xn(i,s),a=t.minFilter;return t.minFilter===$i&&(t.minFilter=un),new _S(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class xS extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dd,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Un=new K;class bf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const nm=new K,im=new At,rm=new At,ES=new K,sm=new ht,ql=new K,Gu=new rr,om=new ht,Wu=new dl;class SS extends Xn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lp,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ql),this.boundingBox.expandByPoint(ql)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ql),this.boundingSphere.expandByPoint(ql)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gu.copy(this.boundingSphere),Gu.applyMatrix4(i),e.ray.intersectsSphere(Gu)!==!1&&(om.copy(i).invert(),Wu.copy(e.ray).applyMatrix4(om),!(this.boundingBox!==null&&Wu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;im.fromBufferAttribute(i.attributes.skinIndex,e),rm.fromBufferAttribute(i.attributes.skinWeight,e),nm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=rm.getComponent(s);if(o!==0){const a=im.getComponent(s);sm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ES.copy(nm).applyMatrix4(sm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class T0 extends $t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tf extends En{constructor(e=null,t=1,n=1,i,s,o,a,l,c=qn,u=qn,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const am=new ht,MS=new ht;class wf{constructor(e=[],t=[]){this.uuid=Oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ht;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:MS;am.multiplyMatrices(a,t[s]),am.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new wf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Tf(t,e,e,di,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new T0),this.bones.push(o),this.boneInverses.push(new ht().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Cd extends wn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fo=new ht,lm=new ht,Yl=[],cm=new Rr,bS=new ht,_a=new Xn,va=new rr;class TS extends Xn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fo),cm.copy(e.boundingBox).applyMatrix4(fo),this.boundingBox.union(cm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fo),va.copy(e.boundingSphere).applyMatrix4(fo),this.boundingSphere.union(va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(n),e.ray.intersectsSphere(va)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fo),lm.multiplyMatrices(n,fo),_a.matrixWorld=lm,_a.raycast(e,Yl);for(let o=0,a=Yl.length;o<a;o++){const l=Yl[o];l.instanceId=s,l.object=this,t.push(l)}Yl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tf(new Float32Array(i*this.count),i,this.count,Qc,bn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Xu=new K,wS=new K,AS=new ut;class Vr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xu.subVectors(n,t).cross(wS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||AS.getNormalMatrix(e),i=this.coplanarPoint(Xu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new rr,$l=new K;class Af{constructor(e=new Vr,t=new Vr,n=new Vr,i=new Vr,s=new Vr,o=new Vr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Er){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],M=i[13],b=i[14],E=i[15];if(n[0].setComponents(l-s,d-c,m-f,E-p).normalize(),n[1].setComponents(l+s,d+c,m+f,E+p).normalize(),n[2].setComponents(l+o,d+u,m+_,E+M).normalize(),n[3].setComponents(l-o,d-u,m-_,E-M).normalize(),n[4].setComponents(l-a,d-h,m-g,E-b).normalize(),t===Er)n[5].setComponents(l+a,d+h,m+g,E+b).normalize();else if(t===kc)n[5].setComponents(a,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($l.x=i.normal.x>0?e.max.x:e.min.x,$l.y=i.normal.y>0?e.max.y:e.min.y,$l.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class w0 extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zc=new K,Hc=new K,um=new ht,xa=new dl,jl=new rr,qu=new K,hm=new K;class Df extends $t{constructor(e=new gi,t=new w0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)zc.fromBufferAttribute(t,i-1),Hc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=zc.distanceTo(Hc);e.setAttribute("lineDistance",new ti(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(i),jl.radius+=s,e.ray.intersectsSphere(jl)===!1)return;um.copy(i).invert(),xa.copy(e.ray).applyMatrix4(um);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){const p=u.getX(g),M=u.getX(g+1),b=Kl(this,e,xa,l,p,M);b&&t.push(b)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(f),p=Kl(this,e,xa,l,g,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){const p=Kl(this,e,xa,l,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=Kl(this,e,xa,l,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kl(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(zc.fromBufferAttribute(o,i),Hc.fromBufferAttribute(o,s),t.distanceSqToSegment(zc,Hc,qu,hm)>n)return;qu.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(qu);if(!(l<e.near||l>e.far))return{distance:l,point:hm.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const dm=new K,fm=new K;class DS extends Df{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)dm.fromBufferAttribute(t,i),fm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+dm.distanceTo(fm);e.setAttribute("lineDistance",new ti(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class CS extends Df{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class A0 extends Qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pm=new ht,Rd=new dl,Zl=new rr,Jl=new K;class RS extends $t{constructor(e=new gi,t=new A0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(i),Zl.radius+=s,e.ray.intersectsSphere(Zl)===!1)return;pm.copy(i).invert(),Rd.copy(e.ray).applyMatrix4(pm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);Jl.fromBufferAttribute(h,m),mm(Jl,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=d,g=f;_<g;_++)Jl.fromBufferAttribute(h,_),mm(Jl,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function mm(r,e,t,n,i,s,o){const a=Rd.distanceSqToPoint(r);if(a<t){const l=new K;Rd.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Sr extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}class D0 extends En{constructor(e,t,n,i,s,o,a,l,c,u=Bo){if(u!==Bo&&u!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bo&&(n=Xs),n===void 0&&u===Qo&&(n=Jo),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class eu extends gi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let b=0;b<c;b++){const E=b*h-s;_.push(E,-M,0),g.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const b=M+c*p,E=M+c*(p+1),C=M+1+c*(p+1),P=M+1+c*p;f.push(b,E,P),f.push(E,C,P)}this.setIndex(f),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cf extends gi{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new K,d=new K,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const M=[],b=p/n;let E=0;p===0&&o===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const P=C/t;h.x=-e*Math.cos(i+P*s)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(i+P*s)*Math.sin(o+b*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(P+E,1-b),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const b=u[p][M+1],E=u[p][M],C=u[p+1][M],P=u[p+1][M+1];(p!==0||o>0)&&f.push(b,E,P),(p!==n-1||l<Math.PI)&&f.push(E,C,P)}this.setIndex(f),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rf extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=h0,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bi extends Rf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class PS extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LS extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ql(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function IS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function FS(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function gm(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function C0(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class pl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class NS extends pl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ip,endingEnd:Ip}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fp:s=e,a=2*t-n;break;case Np:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fp:o=e,l=2*n-t;break;case Np:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,M=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,b=(-1-f)*m+(1.5+f)*g+.5*_,E=f*m-f*g;for(let C=0;C!==a;++C)s[C]=p*o[u+C]+M*o[c+C]+b*o[l+C]+E*o[h+C];return s}}class US extends pl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class OS extends pl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class sr{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ql(t,this.TimeBufferType),this.values=Ql(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ql(e.times,Array),values:Ql(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new OS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new US(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new NS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case al:t=this.InterpolantFactoryMethodDiscrete;break;case ll:t=this.InterpolantFactoryMethodLinear;break;case Mu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return al;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return Mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&IS(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}sr.prototype.TimeBufferType=Float32Array;sr.prototype.ValueBufferType=Float32Array;sr.prototype.DefaultInterpolation=ll;class sa extends sr{constructor(e,t,n){super(e,t,n)}}sa.prototype.ValueTypeName="bool";sa.prototype.ValueBufferType=Array;sa.prototype.DefaultInterpolation=al;sa.prototype.InterpolantFactoryMethodLinear=void 0;sa.prototype.InterpolantFactoryMethodSmooth=void 0;class R0 extends sr{}R0.prototype.ValueTypeName="color";class na extends sr{}na.prototype.ValueTypeName="number";class BS extends pl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)tr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ia extends sr{InterpolantFactoryMethodLinear(e){return new BS(this.times,this.values,this.getValueSize(),e)}}ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;class oa extends sr{constructor(e,t,n){super(e,t,n)}}oa.prototype.ValueTypeName="string";oa.prototype.ValueBufferType=Array;oa.prototype.DefaultInterpolation=al;oa.prototype.InterpolantFactoryMethodLinear=void 0;oa.prototype.InterpolantFactoryMethodSmooth=void 0;class ra extends sr{}ra.prototype.ValueTypeName="vector";class kS{constructor(e="",t=-1,n=[],i=_E){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Oi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(HS(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(sr.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=FS(l);l=gm(l,1,u),c=gm(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new na(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,_,g){if(f.length!==0){const m=[],p=[];C0(f,m,p,_),m.length!==0&&g.push(new h(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let M=0;M!==d[_].morphTargets.length;++M){const b=d[_];m.push(b.time),p.push(b.morphTarget===g?1:0)}i.push(new na(".morphTargetInfluence["+g+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(ra,f+".position",d,"pos",i),n(ia,f+".quaternion",d,"rot",i),n(ra,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zS(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return na;case"vector":case"vector2":case"vector3":case"vector4":return ra;case"color":return R0;case"quaternion":return ia;case"bool":case"boolean":return sa;case"string":return oa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function HS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zS(r.type);if(r.times===void 0){const t=[],n=[];C0(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ns={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class VS{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const GS=new VS;class ds{constructor(e){this.manager=e!==void 0?e:GS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const hr={};class WS extends Error{constructor(e,t){super(e),this.response=t}}class ul extends ds{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ns.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(hr[e]!==void 0){hr[e].push({onLoad:t,onProgress:n,onError:i});return}hr[e]=[],hr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=hr[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:b,value:E})=>{if(b)p.close();else{g+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let P=0,T=u.length;P<T;P++){const R=u[P];R.onProgress&&R.onProgress(C)}p.enqueue(E),M()}},b=>{p.error(b)})}}});return new Response(m)}else throw new WS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{ns.add(e,c);const u=hr[e];delete hr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=hr[e];if(u===void 0)throw this.manager.itemError(e),c;delete hr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class XS extends ds{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ns.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=cl("img");function l(){u(),ns.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class P0 extends ds{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Tf,a=new ul(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Yi,o.wrapT=c.wrapT!==void 0?c.wrapT:Yi,o.magFilter=c.magFilter!==void 0?c.magFilter:un,o.minFilter=c.minFilter!==void 0?c.minFilter:un,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=$i),c.mipmapCount===1&&(o.minFilter=un),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class qS extends ds{constructor(e){super(e)}load(e,t,n,i){const s=new En,o=new XS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Pf extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Yu=new ht,_m=new K,vm=new K;class Lf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Af,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_m.setFromMatrixPosition(e.matrixWorld),t.position.copy(_m),vm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vm),t.updateMatrixWorld(),Yu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class YS extends Lf{constructor(){super(new Vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ea*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $S extends Pf{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new YS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xm=new ht,ya=new K,$u=new K;class jS extends Lf{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ya.setFromMatrixPosition(e.matrixWorld),n.position.copy(ya),$u.copy(n.position),$u.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($u),n.updateMatrixWorld(),i.makeTranslation(-ya.x,-ya.y,-ya.z),xm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xm)}}class L0 extends Pf{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tu extends M0{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class KS extends Lf{constructor(){super(new tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ZS extends Pf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new KS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class JS extends ds{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ns.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ns.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ns.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ns.add(e,l),s.manager.itemStart(e)}}class QS extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class eM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ym(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ym();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ym(){return performance.now()}const If="\\[\\]\\.:\\/",tM=new RegExp("["+If+"]","g"),Ff="[^"+If+"]",nM="[^"+If.replace("\\.","")+"]",iM=/((?:WC+[\/:])*)/.source.replace("WC",Ff),rM=/(WCOD+)?/.source.replace("WCOD",nM),sM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ff),oM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ff),aM=new RegExp("^"+iM+rM+sM+oM+"$"),lM=["material","materials","bones","map"];class cM{constructor(e,t,n){const i=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class It{constructor(e,t,n){this.path=t,this.parsedPath=n||It.parseTrackName(t),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new It.Composite(e,t,n):new It(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tM,"")}static parseTrackName(e){const t=aM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);lM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=It.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=cM;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Em{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uM extends Xn{constructor(e,t,n){const i=new Cf(t,4,2),s=new ts({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class hM extends $s{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Sm(r,e,t,n){const i=dM(n);switch(t){case r0:return r*e;case o0:return r*e;case a0:return r*e*2;case Qc:return r*e/i.components*i.byteLength;case yf:return r*e/i.components*i.byteLength;case l0:return r*e*2/i.components*i.byteLength;case Ef:return r*e*2/i.components*i.byteLength;case s0:return r*e*3/i.components*i.byteLength;case di:return r*e*4/i.components*i.byteLength;case Sf:return r*e*4/i.components*i.byteLength;case mc:case gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _c:case vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nd:case rd:return Math.max(r,16)*Math.max(e,8)/4;case td:case id:return Math.max(r,8)*Math.max(e,8)/2;case sd:case od:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ad:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ud:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case hd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case dd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case fd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case pd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case md:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case gd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case _d:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case vd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case xd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xc:case Sd:case Md:return Math.ceil(r/4)*Math.ceil(e/4)*16;case c0:case bd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Td:case wd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dM(r){switch(r){case Cr:case t0:return{byteLength:1,components:1};case ol:case n0:case jn:return{byteLength:2,components:1};case vf:case xf:return{byteLength:2,components:4};case Xs:case _f:case bn:return{byteLength:4,components:1};case i0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function fM(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var pM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,MM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WM="gl_FragColor = linearToOutputTexel( gl_FragColor );",XM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$M=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ib=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ob=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,db=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_b=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ub=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ET=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ST=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:pM,alphahash_pars_fragment:mM,alphamap_fragment:gM,alphamap_pars_fragment:_M,alphatest_fragment:vM,alphatest_pars_fragment:xM,aomap_fragment:yM,aomap_pars_fragment:EM,batching_pars_vertex:SM,batching_vertex:MM,begin_vertex:bM,beginnormal_vertex:TM,bsdfs:wM,iridescence_fragment:AM,bumpmap_pars_fragment:DM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:RM,clipping_planes_pars_vertex:PM,clipping_planes_vertex:LM,color_fragment:IM,color_pars_fragment:FM,color_pars_vertex:NM,color_vertex:UM,common:OM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:kM,displacementmap_pars_vertex:zM,displacementmap_vertex:HM,emissivemap_fragment:VM,emissivemap_pars_fragment:GM,colorspace_fragment:WM,colorspace_pars_fragment:XM,envmap_fragment:qM,envmap_common_pars_fragment:YM,envmap_pars_fragment:$M,envmap_pars_vertex:jM,envmap_physical_pars_fragment:ob,envmap_vertex:KM,fog_vertex:ZM,fog_pars_vertex:JM,fog_fragment:QM,fog_pars_fragment:eb,gradientmap_pars_fragment:tb,lightmap_pars_fragment:nb,lights_lambert_fragment:ib,lights_lambert_pars_fragment:rb,lights_pars_begin:sb,lights_toon_fragment:ab,lights_toon_pars_fragment:lb,lights_phong_fragment:cb,lights_phong_pars_fragment:ub,lights_physical_fragment:hb,lights_physical_pars_fragment:db,lights_fragment_begin:fb,lights_fragment_maps:pb,lights_fragment_end:mb,logdepthbuf_fragment:gb,logdepthbuf_pars_fragment:_b,logdepthbuf_pars_vertex:vb,logdepthbuf_vertex:xb,map_fragment:yb,map_pars_fragment:Eb,map_particle_fragment:Sb,map_particle_pars_fragment:Mb,metalnessmap_fragment:bb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:wb,morphcolor_vertex:Ab,morphnormal_vertex:Db,morphtarget_pars_vertex:Cb,morphtarget_vertex:Rb,normal_fragment_begin:Pb,normal_fragment_maps:Lb,normal_pars_fragment:Ib,normal_pars_vertex:Fb,normal_vertex:Nb,normalmap_pars_fragment:Ub,clearcoat_normal_fragment_begin:Ob,clearcoat_normal_fragment_maps:Bb,clearcoat_pars_fragment:kb,iridescence_pars_fragment:zb,opaque_fragment:Hb,packing:Vb,premultiplied_alpha_fragment:Gb,project_vertex:Wb,dithering_fragment:Xb,dithering_pars_fragment:qb,roughnessmap_fragment:Yb,roughnessmap_pars_fragment:$b,shadowmap_pars_fragment:jb,shadowmap_pars_vertex:Kb,shadowmap_vertex:Zb,shadowmask_pars_fragment:Jb,skinbase_vertex:Qb,skinning_pars_vertex:eT,skinning_vertex:tT,skinnormal_vertex:nT,specularmap_fragment:iT,specularmap_pars_fragment:rT,tonemapping_fragment:sT,tonemapping_pars_fragment:oT,transmission_fragment:aT,transmission_pars_fragment:lT,uv_pars_fragment:cT,uv_pars_vertex:uT,uv_vertex:hT,worldpos_vertex:dT,background_vert:fT,background_frag:pT,backgroundCube_vert:mT,backgroundCube_frag:gT,cube_vert:_T,cube_frag:vT,depth_vert:xT,depth_frag:yT,distanceRGBA_vert:ET,distanceRGBA_frag:ST,equirect_vert:MT,equirect_frag:bT,linedashed_vert:TT,linedashed_frag:wT,meshbasic_vert:AT,meshbasic_frag:DT,meshlambert_vert:CT,meshlambert_frag:RT,meshmatcap_vert:PT,meshmatcap_frag:LT,meshnormal_vert:IT,meshnormal_frag:FT,meshphong_vert:NT,meshphong_frag:UT,meshphysical_vert:OT,meshphysical_frag:BT,meshtoon_vert:kT,meshtoon_frag:zT,points_vert:HT,points_frag:VT,shadow_vert:GT,shadow_frag:WT,sprite_vert:XT,sprite_frag:qT},Re={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Vi={basic:{uniforms:Bn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Bn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new rt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Bn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Bn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Bn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new rt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Bn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Bn([Re.points,Re.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Bn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Bn([Re.common,Re.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Bn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Bn([Re.sprite,Re.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Bn([Re.common,Re.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Bn([Re.lights,Re.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Vi.physical={uniforms:Bn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const ec={r:0,b:0,g:0},ys=new nr,YT=new ht;function $T(r,e,t,n,i,s,o){const a=new rt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function g(b){let E=!1;const C=_(b);C===null?p(a,l):C&&C.isColor&&(p(C,1),E=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,E){const C=_(E);C&&(C.isCubeTexture||C.mapping===Jc)?(u===void 0&&(u=new Xn(new fl(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:ta(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ys.copy(E.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(YT.makeRotationFromEuler(ys)),u.material.toneMapped=Et.getTransfer(C.colorSpace)!==Nt,(h!==C||d!==C.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,f=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Xn(new eu(2,2),new ir({name:"BackgroundMaterial",uniforms:ta(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Et.getTransfer(C.colorSpace)!==Nt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=C,d=C.version,f=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,E){b.getRGB(ec,E0(r)),n.buffers.color.setClear(ec.r,ec.g,ec.b,E,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:m,dispose:M}}function jT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(y,I,B,z,H){let Z=!1;const W=h(z,B,I);s!==W&&(s=W,c(s.object)),Z=f(y,z,B,H),Z&&_(y,z,B,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(y,I,B,z),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,I,B){const z=B.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let Z=H[I.id];Z===void 0&&(Z={},H[I.id]=Z);let W=Z[z];return W===void 0&&(W=d(l()),Z[z]=W),W}function d(y){const I=[],B=[],z=[];for(let H=0;H<t;H++)I[H]=0,B[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:z,object:y,attributes:{},index:null}}function f(y,I,B,z){const H=s.attributes,Z=I.attributes;let W=0;const j=B.getAttributes();for(const q in j)if(j[q].location>=0){const O=H[q];let _e=Z[q];if(_e===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),O===void 0||O.attribute!==_e||_e&&O.data!==_e.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function _(y,I,B,z){const H={},Z=I.attributes;let W=0;const j=B.getAttributes();for(const q in j)if(j[q].location>=0){let O=Z[q];O===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(O=y.instanceColor));const _e={};_e.attribute=O,O&&O.data&&(_e.data=O.data),H[q]=_e,W++}s.attributes=H,s.attributesNum=W,s.index=z}function g(){const y=s.newAttributes;for(let I=0,B=y.length;I<B;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){const B=s.newAttributes,z=s.enabledAttributes,H=s.attributeDivisors;B[y]=1,z[y]===0&&(r.enableVertexAttribArray(y),z[y]=1),H[y]!==I&&(r.vertexAttribDivisor(y,I),H[y]=I)}function M(){const y=s.newAttributes,I=s.enabledAttributes;for(let B=0,z=I.length;B<z;B++)I[B]!==y[B]&&(r.disableVertexAttribArray(B),I[B]=0)}function b(y,I,B,z,H,Z,W){W===!0?r.vertexAttribIPointer(y,I,B,H,Z):r.vertexAttribPointer(y,I,B,z,H,Z)}function E(y,I,B,z){g();const H=z.attributes,Z=B.getAttributes(),W=I.defaultAttributeValues;for(const j in Z){const q=Z[j];if(q.location>=0){let V=H[j];if(V===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(V=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(V=y.instanceColor)),V!==void 0){const O=V.normalized,_e=V.itemSize,ye=e.get(V);if(ye===void 0)continue;const Ue=ye.buffer,ne=ye.type,se=ye.bytesPerElement,me=ne===r.INT||ne===r.UNSIGNED_INT||V.gpuType===_f;if(V.isInterleavedBufferAttribute){const pe=V.data,Le=pe.stride,ze=V.offset;if(pe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<q.locationSize;Ze++)p(q.location+Ze,pe.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ze=0;Ze<q.locationSize;Ze++)m(q.location+Ze);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Ze=0;Ze<q.locationSize;Ze++)b(q.location+Ze,_e/q.locationSize,ne,O,Le*se,(ze+_e/q.locationSize*Ze)*se,me)}else{if(V.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)p(q.location+pe,V.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let pe=0;pe<q.locationSize;pe++)m(q.location+pe);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let pe=0;pe<q.locationSize;pe++)b(q.location+pe,_e/q.locationSize,ne,O,_e*se,_e/q.locationSize*pe*se,me)}}else if(W!==void 0){const O=W[j];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(q.location,O);break;case 3:r.vertexAttrib3fv(q.location,O);break;case 4:r.vertexAttrib4fv(q.location,O);break;default:r.vertexAttrib1fv(q.location,O)}}}}M()}function C(){R();for(const y in n){const I=n[y];for(const B in I){const z=I[B];for(const H in z)u(z[H].object),delete z[H];delete I[B]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;const I=n[y.id];for(const B in I){const z=I[B];for(const H in z)u(z[H].object),delete z[H];delete I[B]}delete n[y.id]}function T(y){for(const I in n){const B=n[I];if(B[y.id]===void 0)continue;const z=B[y.id];for(const H in z)u(z[H].object),delete z[H];delete B[y.id]}}function R(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function KT(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ZT(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==di&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Cr&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==bn&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:C,maxSamples:P}}function JT(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Vr,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,b=M*4;let E=p.clippingState||null;l.value=E,E=u(_,d,b,f);for(let C=0;C!==b;++C)E[C]=t[C];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,E=f;b!==g;++b,E+=4)o.copy(h[b]).applyMatrix4(M,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function QT(r){let e=new WeakMap;function t(o,a){return a===Uc?o.mapping=jo:a===ed&&(o.mapping=Ko),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uc||a===ed)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vS(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Do=4,Mm=[.125,.215,.35,.446,.526,.582],Cs=20,ju=new tu,bm=new rt;let Ku=null,Zu=0,Ju=0,Qu=!1;const ws=(1+Math.sqrt(5))/2,po=1/ws,Tm=[new K(-ws,po,0),new K(ws,po,0),new K(-po,0,ws),new K(po,0,ws),new K(0,ws,-po),new K(0,ws,po),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Zu,Ju),this._renderer.xr.enabled=Qu,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jo||e.mapping===Ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:jn,format:di,colorSpace:pn,depthBuffer:!1},i=Am(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ew(s)),this._blurMaterial=tw(s,e,t)}return i}_compileMaterial(e){const t=new Xn(this._lodPlanes[0],e);this._renderer.compile(t,ju)}_sceneToCubeUV(e,t,n,i){const a=new Vn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(bm),u.toneMapping=os,u.autoClear=!1;const f=new ts({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),_=new Xn(new fl,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(bm),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const b=this._cubeSize;tc(i,M*b,p>2?b:0,b,b),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===jo||e.mapping===Ko;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Xn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;tc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ju)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tm[(i-s-1)%Tm.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xn(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Cs-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Cs;m>Cs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);const p=[];let M=0;for(let T=0;T<Cs;++T){const R=T/g,S=Math.exp(-R*R/2);p.push(S),T===0?M+=S:T<m&&(M+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-n;const E=this._sizeLods[i],C=3*E*(i>b-Do?i-b+Do:0),P=4*(this._cubeSize-E);tc(t,C,P,3*E,2*E),l.setRenderTarget(t),l.render(h,ju)}}function ew(r){const e=[],t=[],n=[];let i=r;const s=r-Do+1+Mm.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Do?l=Mm[o-r+Do-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),b=new Float32Array(m*_*f),E=new Float32Array(p*_*f);for(let P=0;P<f;P++){const T=P%3*2/3-1,R=P>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(S,g*_*P),b.set(d,m*_*P);const y=[P,P,P,P,P,P];E.set(y,p*_*P)}const C=new gi;C.setAttribute("position",new wn(M,g)),C.setAttribute("uv",new wn(b,m)),C.setAttribute("faceIndex",new wn(E,p)),e.push(C),i>Do&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Am(r,e,t){const n=new us(r,e,t);return n.texture.mapping=Jc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function tw(r,e,t){const n=new Float32Array(Cs),i=new K(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Dm(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Cm(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Nf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nw(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uc||l===ed,u=l===jo||l===Ko;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new wm(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new wm(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function iw(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&xo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rw(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let b=0,E=M.length;b<E;b+=3){const C=M[b+0],P=M[b+1],T=M[b+2];d.push(C,P,P,T,T,C)}}else if(_!==void 0){const M=_.array;g=_.version;for(let b=0,E=M.length/3-1;b<E;b+=3){const C=b+0,P=b+1,T=b+2;d.push(C,P,P,T,T,C)}}else return;const m=new(p0(d)?y0:x0)(d,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function sw(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=f[M]*g[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ow(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function aw(r,e,t){const n=new WeakMap,i=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let C=a.attributes.position.count*E,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*P*4*h),R=new g0(T,C,P,h);R.type=bn,R.needsUpdate=!0;const S=E*4;for(let I=0;I<h;I++){const B=p[I],z=M[I],H=b[I],Z=C*P*4*I;for(let W=0;W<B.count;W++){const j=W*S;_===!0&&(i.fromBufferAttribute(B,W),T[Z+j+0]=i.x,T[Z+j+1]=i.y,T[Z+j+2]=i.z,T[Z+j+3]=0),g===!0&&(i.fromBufferAttribute(z,W),T[Z+j+4]=i.x,T[Z+j+5]=i.y,T[Z+j+6]=i.z,T[Z+j+7]=0),m===!0&&(i.fromBufferAttribute(H,W),T[Z+j+8]=i.x,T[Z+j+9]=i.y,T[Z+j+10]=i.z,T[Z+j+11]=H.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new it(C,P)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function lw(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const F0=new En,Rm=new D0(1,1),N0=new g0,U0=new eS,O0=new b0,Pm=[],Lm=[],Im=new Float32Array(16),Fm=new Float32Array(9),Nm=new Float32Array(4);function aa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Pm[i];if(s===void 0&&(s=new Float32Array(i),Pm[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function mn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function gn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function nu(r,e){let t=Lm[e];t===void 0&&(t=new Int32Array(e),Lm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function uw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;r.uniform2fv(this.addr,e),gn(t,e)}}function hw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;r.uniform3fv(this.addr,e),gn(t,e)}}function dw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;r.uniform4fv(this.addr,e),gn(t,e)}}function fw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Nm.set(n),r.uniformMatrix2fv(this.addr,!1,Nm),gn(t,n)}}function pw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Fm.set(n),r.uniformMatrix3fv(this.addr,!1,Fm),gn(t,n)}}function mw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Im.set(n),r.uniformMatrix4fv(this.addr,!1,Im),gn(t,n)}}function gw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function _w(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;r.uniform2iv(this.addr,e),gn(t,e)}}function vw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;r.uniform3iv(this.addr,e),gn(t,e)}}function xw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;r.uniform4iv(this.addr,e),gn(t,e)}}function yw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ew(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;r.uniform2uiv(this.addr,e),gn(t,e)}}function Sw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;r.uniform3uiv(this.addr,e),gn(t,e)}}function Mw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;r.uniform4uiv(this.addr,e),gn(t,e)}}function bw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Rm.compareFunction=d0,s=Rm):s=F0,t.setTexture2D(e||s,i)}function Tw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||U0,i)}function ww(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||O0,i)}function Aw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||N0,i)}function Dw(r){switch(r){case 5126:return cw;case 35664:return uw;case 35665:return hw;case 35666:return dw;case 35674:return fw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return gw;case 35667:case 35671:return _w;case 35668:case 35672:return vw;case 35669:case 35673:return xw;case 5125:return yw;case 36294:return Ew;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Aw}}function Cw(r,e){r.uniform1fv(this.addr,e)}function Rw(r,e){const t=aa(e,this.size,2);r.uniform2fv(this.addr,t)}function Pw(r,e){const t=aa(e,this.size,3);r.uniform3fv(this.addr,t)}function Lw(r,e){const t=aa(e,this.size,4);r.uniform4fv(this.addr,t)}function Iw(r,e){const t=aa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Fw(r,e){const t=aa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Nw(r,e){const t=aa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Uw(r,e){r.uniform1iv(this.addr,e)}function Ow(r,e){r.uniform2iv(this.addr,e)}function Bw(r,e){r.uniform3iv(this.addr,e)}function kw(r,e){r.uniform4iv(this.addr,e)}function zw(r,e){r.uniform1uiv(this.addr,e)}function Hw(r,e){r.uniform2uiv(this.addr,e)}function Vw(r,e){r.uniform3uiv(this.addr,e)}function Gw(r,e){r.uniform4uiv(this.addr,e)}function Ww(r,e,t){const n=this.cache,i=e.length,s=nu(t,i);mn(n,s)||(r.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||F0,s[o])}function Xw(r,e,t){const n=this.cache,i=e.length,s=nu(t,i);mn(n,s)||(r.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||U0,s[o])}function qw(r,e,t){const n=this.cache,i=e.length,s=nu(t,i);mn(n,s)||(r.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||O0,s[o])}function Yw(r,e,t){const n=this.cache,i=e.length,s=nu(t,i);mn(n,s)||(r.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||N0,s[o])}function $w(r){switch(r){case 5126:return Cw;case 35664:return Rw;case 35665:return Pw;case 35666:return Lw;case 35674:return Iw;case 35675:return Fw;case 35676:return Nw;case 5124:case 35670:return Uw;case 35667:case 35671:return Ow;case 35668:case 35672:return Bw;case 35669:case 35673:return kw;case 5125:return zw;case 36294:return Hw;case 36295:return Vw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return Xw;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return Yw}}class jw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dw(t.type)}}class Kw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$w(t.type)}}class Zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function Um(r,e){r.seq.push(e),r.map[e.id]=e}function Jw(r,e,t){const n=r.name,i=n.length;for(eh.lastIndex=0;;){const s=eh.exec(n),o=eh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Um(t,c===void 0?new jw(a,r,e):new Kw(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Zw(a),Um(t,h)),t=h}}}class yc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Jw(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Om(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Qw=37297;let eA=0;function tA(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Bm=new ut;function nA(r){Et._getMatrix(Bm,Et.workingColorSpace,r);const e=`mat3( ${Bm.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(r)){case Bc:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function km(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+tA(r.getShaderSource(e),o)}else return i}function iA(r,e){const t=nA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rA(r,e){let t;switch(e){case cE:t="Linear";break;case uE:t="Reinhard";break;case hE:t="Cineon";break;case dE:t="ACESFilmic";break;case pE:t="AgX";break;case mE:t="Neutral";break;case fE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new K;function sA(){Et.getLuminanceCoefficients(nc);const r=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function aA(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lA(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ra(r){return r!==""}function zm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(r){return r.replace(cA,hA)}const uA=new Map;function hA(r,e){let t=ft[e];if(t===void 0){const n=uA.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pd(t)}const dA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(r){return r.replace(dA,fA)}function fA(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Z_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Vy?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function mA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case jo:case Ko:e="ENVMAP_TYPE_CUBE";break;case Jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ko:e="ENVMAP_MODE_REFRACTION";break}return e}function _A(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case J_:e="ENVMAP_BLENDING_MULTIPLY";break;case aE:e="ENVMAP_BLENDING_MIX";break;case lE:e="ENVMAP_BLENDING_ADD";break}return e}function vA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xA(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pA(t),c=mA(t),u=gA(t),h=_A(t),d=vA(t),f=oA(t),_=aA(s),g=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ra).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ra).join(`
`),p.length>0&&(p+=`
`)):(m=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),p=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?ft.tonemapping_pars_fragment:"",t.toneMapping!==os?rA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,iA("linearToOutputTexel",t.outputColorSpace),sA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=Pd(o),o=zm(o,t),o=Hm(o,t),a=Pd(a),a=zm(a,t),a=Hm(a,t),o=Vm(o),a=Vm(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+m+o,E=M+p+a,C=Om(i,i.VERTEX_SHADER,b),P=Om(i,i.FRAGMENT_SHADER,E);i.attachShader(g,C),i.attachShader(g,P),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(I){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(C).trim(),H=i.getShaderInfoLog(P).trim();let Z=!0,W=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,P);else{const j=km(i,C,"vertex"),q=km(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+j+`
`+q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||H==="")&&(W=!1);W&&(I.diagnostics={runnable:Z,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(C),i.deleteShader(P),R=new yc(i,g),S=lA(i,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Qw)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=P,this}let yA=0;class EA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new SA(e),t.set(e,n)),n}}class SA{constructor(e){this.id=yA++,this.code=e,this.usedTimes=0}}function MA(r,e,t,n,i,s,o){const a=new _0,l=new EA,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,I,B,z){const H=B.fog,Z=z.geometry,W=S.isMeshStandardMaterial?B.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),q=j&&j.mapping===Jc?j.image.height:null,V=_[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const O=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_e=O!==void 0?O.length:0;let ye=0;Z.morphAttributes.position!==void 0&&(ye=1),Z.morphAttributes.normal!==void 0&&(ye=2),Z.morphAttributes.color!==void 0&&(ye=3);let Ue,ne,se,me;if(V){const Pe=Vi[V];Ue=Pe.vertexShader,ne=Pe.fragmentShader}else Ue=S.vertexShader,ne=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const pe=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),ze=z.isInstancedMesh===!0,Ze=z.isBatchedMesh===!0,st=!!S.map,je=!!S.matcap,Xe=!!j,G=!!S.aoMap,Dt=!!S.lightMap,Je=!!S.bumpMap,ee=!!S.normalMap,Fe=!!S.displacementMap,xt=!!S.emissiveMap,He=!!S.metalnessMap,N=!!S.roughnessMap,A=S.anisotropy>0,te=S.clearcoat>0,fe=S.dispersion>0,he=S.iridescence>0,ce=S.sheen>0,we=S.transmission>0,Ee=A&&!!S.anisotropyMap,be=te&&!!S.clearcoatMap,ot=te&&!!S.clearcoatNormalMap,ve=te&&!!S.clearcoatRoughnessMap,Se=he&&!!S.iridescenceMap,Oe=he&&!!S.iridescenceThicknessMap,Ne=ce&&!!S.sheenColorMap,Ie=ce&&!!S.sheenRoughnessMap,Qe=!!S.specularMap,Ve=!!S.specularColorMap,Ke=!!S.specularIntensityMap,k=we&&!!S.transmissionMap,ie=we&&!!S.thicknessMap,re=!!S.gradientMap,de=!!S.alphaMap,Me=S.alphaTest>0,Ae=!!S.alphaHash,et=!!S.extensions;let Mt=os;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Mt=r.toneMapping);const Wt={shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:Ue,fragmentShader:ne,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ze,batchingColor:Ze&&z._colorsTexture!==null,instancing:ze,instancingColor:ze&&z.instanceColor!==null,instancingMorph:ze&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:pn,alphaToCoverage:!!S.alphaToCoverage,map:st,matcap:je,envMap:Xe,envMapMode:Xe&&j.mapping,envMapCubeUVHeight:q,aoMap:G,lightMap:Dt,bumpMap:Je,normalMap:ee,displacementMap:d&&Fe,emissiveMap:xt,normalMapObjectSpace:ee&&S.normalMapType===EE,normalMapTangentSpace:ee&&S.normalMapType===h0,metalnessMap:He,roughnessMap:N,anisotropy:A,anisotropyMap:Ee,clearcoat:te,clearcoatMap:be,clearcoatNormalMap:ot,clearcoatRoughnessMap:ve,dispersion:fe,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Oe,sheen:ce,sheenColorMap:Ne,sheenRoughnessMap:Ie,specularMap:Qe,specularColorMap:Ve,specularIntensityMap:Ke,transmission:we,transmissionMap:k,thicknessMap:ie,gradientMap:re,opaque:S.transparent===!1&&S.blending===Oo&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:Me,alphaHash:Ae,combine:S.combine,mapUv:st&&g(S.map.channel),aoMapUv:G&&g(S.aoMap.channel),lightMapUv:Dt&&g(S.lightMap.channel),bumpMapUv:Je&&g(S.bumpMap.channel),normalMapUv:ee&&g(S.normalMap.channel),displacementMapUv:Fe&&g(S.displacementMap.channel),emissiveMapUv:xt&&g(S.emissiveMap.channel),metalnessMapUv:He&&g(S.metalnessMap.channel),roughnessMapUv:N&&g(S.roughnessMap.channel),anisotropyMapUv:Ee&&g(S.anisotropyMap.channel),clearcoatMapUv:be&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&g(S.sheenRoughnessMap.channel),specularMapUv:Qe&&g(S.specularMap.channel),specularColorMapUv:Ve&&g(S.specularColorMap.channel),specularIntensityMapUv:Ke&&g(S.specularIntensityMap.channel),transmissionMapUv:k&&g(S.transmissionMap.channel),thicknessMapUv:ie&&g(S.thicknessMap.channel),alphaMapUv:de&&g(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ee||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(st||de),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Le,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ye,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Mt,decodeVideoTexture:st&&S.map.isVideoTexture===!0&&Et.getTransfer(S.map.colorSpace)===Nt,decodeVideoTextureEmissive:xt&&S.emissiveMap.isVideoTexture===!0&&Et.getTransfer(S.emissiveMap.colorSpace)===Nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fi,flipSided:S.side===ei,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:et&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&S.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(M(y,S),b(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function E(S){const y=_[S.type];let I;if(y){const B=Vi[y];I=S0.clone(B.uniforms)}else I=S.uniforms;return I}function C(S,y){let I;for(let B=0,z=u.length;B<z;B++){const H=u[B];if(H.cacheKey===y){I=H,++I.usedTimes;break}}return I===void 0&&(I=new xA(r,y,S,s),u.push(I)),I}function P(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:C,releaseProgram:P,releaseShaderCache:T,programs:u,dispose:R}}function bA(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function TA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Wm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,d,f,_,g,m){const p=o(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,_,g,m){const p=o(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||TA),n.length>1&&n.sort(d||Wm),i.length>1&&i.sort(d||Wm)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function wA(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Xm,r.set(n,[o])):i>=s.length?(o=new Xm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function AA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new rt};break;case"SpotLight":t={position:new K,direction:new K,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function DA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let CA=0;function RA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function PA(r){const e=new AA,t=DA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const i=new K,s=new ht,o=new ht;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,M=0,b=0,E=0,C=0,P=0,T=0;c.sort(RA);for(let S=0,y=c.length;S<y;S++){const I=c[S],B=I.color,z=I.intensity,H=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*z,h+=B.g*z,d+=B.b*z;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],z);T++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,q=t.get(I);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=W,f++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(z),W.distance=H,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[g]=W;const j=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,j.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[g]=j.matrix,I.castShadow){const q=t.get(I);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=Z,E++}g++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(B).multiplyScalar(z),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const j=I.shadow,q=t.get(I);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=I.shadow.matrix,b++}n.point[_]=W,_++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(z),W.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==b||R.numSpotShadows!==E||R.numSpotMaps!==C||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+C-P,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=T,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=b,R.numSpotShadows=E,R.numSpotMaps=C,R.numLightProbes=T,n.version=CA++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const b=c[p];if(b.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),h++}else if(b.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function qm(r){const e=new PA(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function LA(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new qm(r),e.set(i,[a])):s>=o.length?(a=new qm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const IA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NA(r,e,t){let n=new Af;const i=new it,s=new it,o=new At,a=new PS({depthPacking:yE}),l=new LS,c={},u=t.maxTextureSize,h={[Dr]:ei,[ei]:Dr,[Fi]:Fi},d=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:IA,fragmentShader:FA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new gi;_.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Xn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z_;let p=this.type;this.render=function(P,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const S=r.getRenderTarget(),y=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),B=r.state;B.setBlending(br),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=p!==dr&&this.type===dr,H=p===dr&&this.type!==dr;for(let Z=0,W=P.length;Z<W;Z++){const j=P[Z],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const V=q.getFrameExtents();if(i.multiply(V),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/V.x),i.x=s.x*V.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/V.y),i.y=s.y*V.y,q.mapSize.y=s.y)),q.map===null||z===!0||H===!0){const _e=this.type!==dr?{minFilter:qn,magFilter:qn}:{};q.map!==null&&q.map.dispose(),q.map=new us(i.x,i.y,_e),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const O=q.getViewportCount();for(let _e=0;_e<O;_e++){const ye=q.getViewport(_e);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),B.viewport(o),q.updateMatrices(j,_e),n=q.getFrustum(),E(T,R,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===dr&&M(q,R),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,y,I)};function M(P,T){const R=e.update(g);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new us(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(T,null,R,d,g,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(T,null,R,f,g,null)}function b(P,T,R,S){let y=null;const I=R.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)y=I;else if(y=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=y.uuid,z=T.uuid;let H=c[B];H===void 0&&(H={},c[B]=H);let Z=H[z];Z===void 0&&(Z=y.clone(),H[z]=Z,T.addEventListener("dispose",C)),y=Z}if(y.visible=T.visible,y.wireframe=T.wireframe,S===dr?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=r.properties.get(y);B.light=R}return y}function E(P,T,R,S,y){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===dr)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,P.matrixWorld);const z=e.update(P),H=P.material;if(Array.isArray(H)){const Z=z.groups;for(let W=0,j=Z.length;W<j;W++){const q=Z[W],V=H[q.materialIndex];if(V&&V.visible){const O=b(P,V,S,y);P.onBeforeShadow(r,P,T,R,z,O,q),r.renderBufferDirect(R,null,z,O,P,q),P.onAfterShadow(r,P,T,R,z,O,q)}}}else if(H.visible){const Z=b(P,H,S,y);P.onBeforeShadow(r,P,T,R,z,Z,null),r.renderBufferDirect(R,null,z,Z,P,null),P.onAfterShadow(r,P,T,R,z,Z,null)}}const B=P.children;for(let z=0,H=B.length;z<H;z++)E(B[z],T,R,S,y)}function C(P){P.target.removeEventListener("dispose",C);for(const R in c){const S=c[R],y=P.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const UA={[Yh]:$h,[jh]:Jh,[Kh]:Qh,[$o]:Zh,[$h]:Yh,[Jh]:jh,[Qh]:Kh,[Zh]:$o};function OA(r,e){function t(){let k=!1;const ie=new At;let re=null;const de=new At(0,0,0,0);return{setMask:function(Me){re!==Me&&!k&&(r.colorMask(Me,Me,Me,Me),re=Me)},setLocked:function(Me){k=Me},setClear:function(Me,Ae,et,Mt,Wt){Wt===!0&&(Me*=Mt,Ae*=Mt,et*=Mt),ie.set(Me,Ae,et,Mt),de.equals(ie)===!1&&(r.clearColor(Me,Ae,et,Mt),de.copy(ie))},reset:function(){k=!1,re=null,de.set(-1,0,0,0)}}}function n(){let k=!1,ie=!1,re=null,de=null,Me=null;return{setReversed:function(Ae){if(ie!==Ae){const et=e.get("EXT_clip_control");ie?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const Mt=Me;Me=null,this.setClear(Mt)}ie=Ae},getReversed:function(){return ie},setTest:function(Ae){Ae?pe(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(Ae){re!==Ae&&!k&&(r.depthMask(Ae),re=Ae)},setFunc:function(Ae){if(ie&&(Ae=UA[Ae]),de!==Ae){switch(Ae){case Yh:r.depthFunc(r.NEVER);break;case $h:r.depthFunc(r.ALWAYS);break;case jh:r.depthFunc(r.LESS);break;case $o:r.depthFunc(r.LEQUAL);break;case Kh:r.depthFunc(r.EQUAL);break;case Zh:r.depthFunc(r.GEQUAL);break;case Jh:r.depthFunc(r.GREATER);break;case Qh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=Ae}},setLocked:function(Ae){k=Ae},setClear:function(Ae){Me!==Ae&&(ie&&(Ae=1-Ae),r.clearDepth(Ae),Me=Ae)},reset:function(){k=!1,re=null,de=null,Me=null,ie=!1}}}function i(){let k=!1,ie=null,re=null,de=null,Me=null,Ae=null,et=null,Mt=null,Wt=null;return{setTest:function(Pe){k||(Pe?pe(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(Pe){ie!==Pe&&!k&&(r.stencilMask(Pe),ie=Pe)},setFunc:function(Pe,Ge,ct){(re!==Pe||de!==Ge||Me!==ct)&&(r.stencilFunc(Pe,Ge,ct),re=Pe,de=Ge,Me=ct)},setOp:function(Pe,Ge,ct){(Ae!==Pe||et!==Ge||Mt!==ct)&&(r.stencilOp(Pe,Ge,ct),Ae=Pe,et=Ge,Mt=ct)},setLocked:function(Pe){k=Pe},setClear:function(Pe){Wt!==Pe&&(r.clearStencil(Pe),Wt=Pe)},reset:function(){k=!1,ie=null,re=null,de=null,Me=null,Ae=null,et=null,Mt=null,Wt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,b=null,E=null,C=null,P=null,T=new rt(0,0,0),R=0,S=!1,y=null,I=null,B=null,z=null,H=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=j>=2);let V=null,O={};const _e=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),Ue=new At().fromArray(_e),ne=new At().fromArray(ye);function se(k,ie,re,de){const Me=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(k,Ae),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<re;et++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(ie+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return Ae}const me={};me[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(r.DEPTH_TEST),o.setFunc($o),Je(!1),ee(Dp),pe(r.CULL_FACE),G(br);function pe(k){u[k]!==!0&&(r.enable(k),u[k]=!0)}function Le(k){u[k]!==!1&&(r.disable(k),u[k]=!1)}function ze(k,ie){return h[k]!==ie?(r.bindFramebuffer(k,ie),h[k]=ie,k===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ie),k===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ze(k,ie){let re=f,de=!1;if(k){re=d.get(ie),re===void 0&&(re=[],d.set(ie,re));const Me=k.textures;if(re.length!==Me.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,et=Me.length;Ae<et;Ae++)re[Ae]=r.COLOR_ATTACHMENT0+Ae;re.length=Me.length,de=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,de=!0);de&&r.drawBuffers(re)}function st(k){return _!==k?(r.useProgram(k),_=k,!0):!1}const je={[Ds]:r.FUNC_ADD,[Wy]:r.FUNC_SUBTRACT,[Xy]:r.FUNC_REVERSE_SUBTRACT};je[qy]=r.MIN,je[Yy]=r.MAX;const Xe={[$y]:r.ZERO,[jy]:r.ONE,[Ky]:r.SRC_COLOR,[Xh]:r.SRC_ALPHA,[nE]:r.SRC_ALPHA_SATURATE,[eE]:r.DST_COLOR,[Jy]:r.DST_ALPHA,[Zy]:r.ONE_MINUS_SRC_COLOR,[qh]:r.ONE_MINUS_SRC_ALPHA,[tE]:r.ONE_MINUS_DST_COLOR,[Qy]:r.ONE_MINUS_DST_ALPHA,[iE]:r.CONSTANT_COLOR,[rE]:r.ONE_MINUS_CONSTANT_COLOR,[sE]:r.CONSTANT_ALPHA,[oE]:r.ONE_MINUS_CONSTANT_ALPHA};function G(k,ie,re,de,Me,Ae,et,Mt,Wt,Pe){if(k===br){g===!0&&(Le(r.BLEND),g=!1);return}if(g===!1&&(pe(r.BLEND),g=!0),k!==Gy){if(k!==m||Pe!==S){if((p!==Ds||E!==Ds)&&(r.blendEquation(r.FUNC_ADD),p=Ds,E=Ds),Pe)switch(k){case Oo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cp:r.blendFunc(r.ONE,r.ONE);break;case Rp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Oo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cp:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Rp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,b=null,C=null,P=null,T.set(0,0,0),R=0,m=k,S=Pe}return}Me=Me||ie,Ae=Ae||re,et=et||de,(ie!==p||Me!==E)&&(r.blendEquationSeparate(je[ie],je[Me]),p=ie,E=Me),(re!==M||de!==b||Ae!==C||et!==P)&&(r.blendFuncSeparate(Xe[re],Xe[de],Xe[Ae],Xe[et]),M=re,b=de,C=Ae,P=et),(Mt.equals(T)===!1||Wt!==R)&&(r.blendColor(Mt.r,Mt.g,Mt.b,Wt),T.copy(Mt),R=Wt),m=k,S=!1}function Dt(k,ie){k.side===Fi?Le(r.CULL_FACE):pe(r.CULL_FACE);let re=k.side===ei;ie&&(re=!re),Je(re),k.blending===Oo&&k.transparent===!1?G(br):G(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const de=k.stencilWrite;a.setTest(de),de&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),xt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function Je(k){y!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),y=k)}function ee(k){k!==zy?(pe(r.CULL_FACE),k!==I&&(k===Dp?r.cullFace(r.BACK):k===Hy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),I=k}function Fe(k){k!==B&&(W&&r.lineWidth(k),B=k)}function xt(k,ie,re){k?(pe(r.POLYGON_OFFSET_FILL),(z!==ie||H!==re)&&(r.polygonOffset(ie,re),z=ie,H=re)):Le(r.POLYGON_OFFSET_FILL)}function He(k){k?pe(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function N(k){k===void 0&&(k=r.TEXTURE0+Z-1),V!==k&&(r.activeTexture(k),V=k)}function A(k,ie,re){re===void 0&&(V===null?re=r.TEXTURE0+Z-1:re=V);let de=O[re];de===void 0&&(de={type:void 0,texture:void 0},O[re]=de),(de.type!==k||de.texture!==ie)&&(V!==re&&(r.activeTexture(re),V=re),r.bindTexture(k,ie||me[k]),de.type=k,de.texture=ie)}function te(){const k=O[V];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function fe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(k){Ue.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Ue.copy(k))}function Ie(k){ne.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),ne.copy(k))}function Qe(k,ie){let re=c.get(ie);re===void 0&&(re=new WeakMap,c.set(ie,re));let de=re.get(k);de===void 0&&(de=r.getUniformBlockIndex(ie,k.name),re.set(k,de))}function Ve(k,ie){const de=c.get(ie).get(k);l.get(ie)!==de&&(r.uniformBlockBinding(ie,de,k.__bindingPointIndex),l.set(ie,de))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},V=null,O={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,b=null,E=null,C=null,P=null,T=new rt(0,0,0),R=0,S=!1,y=null,I=null,B=null,z=null,H=null,Ue.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Le,bindFramebuffer:ze,drawBuffers:Ze,useProgram:st,setBlending:G,setMaterial:Dt,setFlipSided:Je,setCullFace:ee,setLineWidth:Fe,setPolygonOffset:xt,setScissorTest:He,activeTexture:N,bindTexture:A,unbindTexture:te,compressedTexImage2D:fe,compressedTexImage3D:he,texImage2D:Se,texImage3D:Oe,updateUBOMapping:Qe,uniformBlockBinding:Ve,texStorage2D:ot,texStorage3D:ve,texSubImage2D:ce,texSubImage3D:we,compressedTexSubImage2D:Ee,compressedTexSubImage3D:be,scissor:Ne,viewport:Ie,reset:Ke}}function BA(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,A){return f?new OffscreenCanvas(N,A):cl("canvas")}function g(N,A,te){let fe=1;const he=He(N);if((he.width>te||he.height>te)&&(fe=te/Math.max(he.width,he.height)),fe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ce=Math.floor(fe*he.width),we=Math.floor(fe*he.height);h===void 0&&(h=_(ce,we));const Ee=A?_(ce,we):h;return Ee.width=ce,Ee.height=we,Ee.getContext("2d").drawImage(N,0,0,ce,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ce+"x"+we+")."),Ee}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),N;return N}function m(N){return N.generateMipmaps}function p(N){r.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(N,A,te,fe,he=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ce=A;if(A===r.RED&&(te===r.FLOAT&&(ce=r.R32F),te===r.HALF_FLOAT&&(ce=r.R16F),te===r.UNSIGNED_BYTE&&(ce=r.R8)),A===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(ce=r.R8UI),te===r.UNSIGNED_SHORT&&(ce=r.R16UI),te===r.UNSIGNED_INT&&(ce=r.R32UI),te===r.BYTE&&(ce=r.R8I),te===r.SHORT&&(ce=r.R16I),te===r.INT&&(ce=r.R32I)),A===r.RG&&(te===r.FLOAT&&(ce=r.RG32F),te===r.HALF_FLOAT&&(ce=r.RG16F),te===r.UNSIGNED_BYTE&&(ce=r.RG8)),A===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(ce=r.RG8UI),te===r.UNSIGNED_SHORT&&(ce=r.RG16UI),te===r.UNSIGNED_INT&&(ce=r.RG32UI),te===r.BYTE&&(ce=r.RG8I),te===r.SHORT&&(ce=r.RG16I),te===r.INT&&(ce=r.RG32I)),A===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),te===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),te===r.UNSIGNED_INT&&(ce=r.RGB32UI),te===r.BYTE&&(ce=r.RGB8I),te===r.SHORT&&(ce=r.RGB16I),te===r.INT&&(ce=r.RGB32I)),A===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),te===r.UNSIGNED_INT&&(ce=r.RGBA32UI),te===r.BYTE&&(ce=r.RGBA8I),te===r.SHORT&&(ce=r.RGBA16I),te===r.INT&&(ce=r.RGBA32I)),A===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),A===r.RGBA){const we=he?Bc:Et.getTransfer(fe);te===r.FLOAT&&(ce=r.RGBA32F),te===r.HALF_FLOAT&&(ce=r.RGBA16F),te===r.UNSIGNED_BYTE&&(ce=we===Nt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function E(N,A){let te;return N?A===null||A===Xs||A===Jo?te=r.DEPTH24_STENCIL8:A===bn?te=r.DEPTH32F_STENCIL8:A===ol&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Xs||A===Jo?te=r.DEPTH_COMPONENT24:A===bn?te=r.DEPTH_COMPONENT32F:A===ol&&(te=r.DEPTH_COMPONENT16),te}function C(N,A){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==qn&&N.minFilter!==un?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function P(N){const A=N.target;A.removeEventListener("dispose",P),R(A),A.isVideoTexture&&u.delete(A)}function T(N){const A=N.target;A.removeEventListener("dispose",T),y(A)}function R(N){const A=n.get(N);if(A.__webglInit===void 0)return;const te=N.source,fe=d.get(te);if(fe){const he=fe[A.__cacheKey];he.usedTimes--,he.usedTimes===0&&S(N),Object.keys(fe).length===0&&d.delete(te)}n.remove(N)}function S(N){const A=n.get(N);r.deleteTexture(A.__webglTexture);const te=N.source,fe=d.get(te);delete fe[A.__cacheKey],o.memory.textures--}function y(N){const A=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(A.__webglFramebuffer[fe]))for(let he=0;he<A.__webglFramebuffer[fe].length;he++)r.deleteFramebuffer(A.__webglFramebuffer[fe][he]);else r.deleteFramebuffer(A.__webglFramebuffer[fe]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[fe])}else{if(Array.isArray(A.__webglFramebuffer))for(let fe=0;fe<A.__webglFramebuffer.length;fe++)r.deleteFramebuffer(A.__webglFramebuffer[fe]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let fe=0;fe<A.__webglColorRenderbuffer.length;fe++)A.__webglColorRenderbuffer[fe]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[fe]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const te=N.textures;for(let fe=0,he=te.length;fe<he;fe++){const ce=n.get(te[fe]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(te[fe])}n.remove(N)}let I=0;function B(){I=0}function z(){const N=I;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),I+=1,N}function H(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function Z(N,A){const te=n.get(N);if(N.isVideoTexture&&Fe(N),N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){const fe=N.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(te,N,A);return}}t.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+A)}function W(N,A){const te=n.get(N);if(N.version>0&&te.__version!==N.version){ne(te,N,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+A)}function j(N,A){const te=n.get(N);if(N.version>0&&te.__version!==N.version){ne(te,N,A);return}t.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+A)}function q(N,A){const te=n.get(N);if(N.version>0&&te.__version!==N.version){se(te,N,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+A)}const V={[Zo]:r.REPEAT,[Yi]:r.CLAMP_TO_EDGE,[Oc]:r.MIRRORED_REPEAT},O={[qn]:r.NEAREST,[e0]:r.NEAREST_MIPMAP_NEAREST,[Ca]:r.NEAREST_MIPMAP_LINEAR,[un]:r.LINEAR,[pc]:r.LINEAR_MIPMAP_NEAREST,[$i]:r.LINEAR_MIPMAP_LINEAR},_e={[SE]:r.NEVER,[DE]:r.ALWAYS,[ME]:r.LESS,[d0]:r.LEQUAL,[bE]:r.EQUAL,[AE]:r.GEQUAL,[TE]:r.GREATER,[wE]:r.NOTEQUAL};function ye(N,A){if(A.type===bn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===un||A.magFilter===pc||A.magFilter===Ca||A.magFilter===$i||A.minFilter===un||A.minFilter===pc||A.minFilter===Ca||A.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,V[A.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,V[A.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,V[A.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,O[A.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,O[A.minFilter]),A.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,_e[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===qn||A.minFilter!==Ca&&A.minFilter!==$i||A.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ue(N,A){let te=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",P));const fe=A.source;let he=d.get(fe);he===void 0&&(he={},d.set(fe,he));const ce=H(A);if(ce!==N.__cacheKey){he[ce]===void 0&&(he[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,te=!0),he[ce].usedTimes++;const we=he[N.__cacheKey];we!==void 0&&(he[N.__cacheKey].usedTimes--,we.usedTimes===0&&S(A)),N.__cacheKey=ce,N.__webglTexture=he[ce].texture}return te}function ne(N,A,te){let fe=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(fe=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(fe=r.TEXTURE_3D);const he=Ue(N,A),ce=A.source;t.bindTexture(fe,N.__webglTexture,r.TEXTURE0+te);const we=n.get(ce);if(ce.version!==we.__version||he===!0){t.activeTexture(r.TEXTURE0+te);const Ee=Et.getPrimaries(Et.workingColorSpace),be=A.colorSpace===vr?null:Et.getPrimaries(A.colorSpace),ot=A.colorSpace===vr||Ee===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let ve=g(A.image,!1,i.maxTextureSize);ve=xt(A,ve);const Se=s.convert(A.format,A.colorSpace),Oe=s.convert(A.type);let Ne=b(A.internalFormat,Se,Oe,A.colorSpace,A.isVideoTexture);ye(fe,A);let Ie;const Qe=A.mipmaps,Ve=A.isVideoTexture!==!0,Ke=we.__version===void 0||he===!0,k=ce.dataReady,ie=C(A,ve);if(A.isDepthTexture)Ne=E(A.format===Qo,A.type),Ke&&(Ve?t.texStorage2D(r.TEXTURE_2D,1,Ne,ve.width,ve.height):t.texImage2D(r.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Se,Oe,null));else if(A.isDataTexture)if(Qe.length>0){Ve&&Ke&&t.texStorage2D(r.TEXTURE_2D,ie,Ne,Qe[0].width,Qe[0].height);for(let re=0,de=Qe.length;re<de;re++)Ie=Qe[re],Ve?k&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Ie.width,Ie.height,Se,Oe,Ie.data):t.texImage2D(r.TEXTURE_2D,re,Ne,Ie.width,Ie.height,0,Se,Oe,Ie.data);A.generateMipmaps=!1}else Ve?(Ke&&t.texStorage2D(r.TEXTURE_2D,ie,Ne,ve.width,ve.height),k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve.width,ve.height,Se,Oe,ve.data)):t.texImage2D(r.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Se,Oe,ve.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ve&&Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,Ne,Qe[0].width,Qe[0].height,ve.depth);for(let re=0,de=Qe.length;re<de;re++)if(Ie=Qe[re],A.format!==di)if(Se!==null)if(Ve){if(k)if(A.layerUpdates.size>0){const Me=Sm(Ie.width,Ie.height,A.format,A.type);for(const Ae of A.layerUpdates){const et=Ie.data.subarray(Ae*Me/Ie.data.BYTES_PER_ELEMENT,(Ae+1)*Me/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,Ae,Ie.width,Ie.height,1,Se,et)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Ie.width,Ie.height,ve.depth,Se,Ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Ne,Ie.width,Ie.height,ve.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Ie.width,Ie.height,ve.depth,Se,Oe,Ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Ne,Ie.width,Ie.height,ve.depth,0,Se,Oe,Ie.data)}else{Ve&&Ke&&t.texStorage2D(r.TEXTURE_2D,ie,Ne,Qe[0].width,Qe[0].height);for(let re=0,de=Qe.length;re<de;re++)Ie=Qe[re],A.format!==di?Se!==null?Ve?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,Ie.width,Ie.height,Se,Ie.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Ne,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?k&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Ie.width,Ie.height,Se,Oe,Ie.data):t.texImage2D(r.TEXTURE_2D,re,Ne,Ie.width,Ie.height,0,Se,Oe,Ie.data)}else if(A.isDataArrayTexture)if(Ve){if(Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,Ne,ve.width,ve.height,ve.depth),k)if(A.layerUpdates.size>0){const re=Sm(ve.width,ve.height,A.format,A.type);for(const de of A.layerUpdates){const Me=ve.data.subarray(de*re/ve.data.BYTES_PER_ELEMENT,(de+1)*re/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,de,ve.width,ve.height,1,Se,Oe,Me)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Se,Oe,ve.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,ve.width,ve.height,ve.depth,0,Se,Oe,ve.data);else if(A.isData3DTexture)Ve?(Ke&&t.texStorage3D(r.TEXTURE_3D,ie,Ne,ve.width,ve.height,ve.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Se,Oe,ve.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,ve.width,ve.height,ve.depth,0,Se,Oe,ve.data);else if(A.isFramebufferTexture){if(Ke)if(Ve)t.texStorage2D(r.TEXTURE_2D,ie,Ne,ve.width,ve.height);else{let re=ve.width,de=ve.height;for(let Me=0;Me<ie;Me++)t.texImage2D(r.TEXTURE_2D,Me,Ne,re,de,0,Se,Oe,null),re>>=1,de>>=1}}else if(Qe.length>0){if(Ve&&Ke){const re=He(Qe[0]);t.texStorage2D(r.TEXTURE_2D,ie,Ne,re.width,re.height)}for(let re=0,de=Qe.length;re<de;re++)Ie=Qe[re],Ve?k&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Se,Oe,Ie):t.texImage2D(r.TEXTURE_2D,re,Ne,Se,Oe,Ie);A.generateMipmaps=!1}else if(Ve){if(Ke){const re=He(ve);t.texStorage2D(r.TEXTURE_2D,ie,Ne,re.width,re.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se,Oe,ve)}else t.texImage2D(r.TEXTURE_2D,0,Ne,Se,Oe,ve);m(A)&&p(fe),we.__version=ce.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function se(N,A,te){if(A.image.length!==6)return;const fe=Ue(N,A),he=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+te);const ce=n.get(he);if(he.version!==ce.__version||fe===!0){t.activeTexture(r.TEXTURE0+te);const we=Et.getPrimaries(Et.workingColorSpace),Ee=A.colorSpace===vr?null:Et.getPrimaries(A.colorSpace),be=A.colorSpace===vr||we===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ot=A.isCompressedTexture||A.image[0].isCompressedTexture,ve=A.image[0]&&A.image[0].isDataTexture,Se=[];for(let de=0;de<6;de++)!ot&&!ve?Se[de]=g(A.image[de],!0,i.maxCubemapSize):Se[de]=ve?A.image[de].image:A.image[de],Se[de]=xt(A,Se[de]);const Oe=Se[0],Ne=s.convert(A.format,A.colorSpace),Ie=s.convert(A.type),Qe=b(A.internalFormat,Ne,Ie,A.colorSpace),Ve=A.isVideoTexture!==!0,Ke=ce.__version===void 0||fe===!0,k=he.dataReady;let ie=C(A,Oe);ye(r.TEXTURE_CUBE_MAP,A);let re;if(ot){Ve&&Ke&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,Qe,Oe.width,Oe.height);for(let de=0;de<6;de++){re=Se[de].mipmaps;for(let Me=0;Me<re.length;Me++){const Ae=re[Me];A.format!==di?Ne!==null?Ve?k&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me,0,0,Ae.width,Ae.height,Ne,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me,Qe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me,0,0,Ae.width,Ae.height,Ne,Ie,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me,Qe,Ae.width,Ae.height,0,Ne,Ie,Ae.data)}}}else{if(re=A.mipmaps,Ve&&Ke){re.length>0&&ie++;const de=He(Se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,Qe,de.width,de.height)}for(let de=0;de<6;de++)if(ve){Ve?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Se[de].width,Se[de].height,Ne,Ie,Se[de].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Qe,Se[de].width,Se[de].height,0,Ne,Ie,Se[de].data);for(let Me=0;Me<re.length;Me++){const et=re[Me].image[de].image;Ve?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me+1,0,0,et.width,et.height,Ne,Ie,et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me+1,Qe,et.width,et.height,0,Ne,Ie,et.data)}}else{Ve?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne,Ie,Se[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Qe,Ne,Ie,Se[de]);for(let Me=0;Me<re.length;Me++){const Ae=re[Me];Ve?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me+1,0,0,Ne,Ie,Ae.image[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me+1,Qe,Ne,Ie,Ae.image[de])}}}m(A)&&p(r.TEXTURE_CUBE_MAP),ce.__version=he.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function me(N,A,te,fe,he,ce){const we=s.convert(te.format,te.colorSpace),Ee=s.convert(te.type),be=b(te.internalFormat,we,Ee,te.colorSpace),ot=n.get(A),ve=n.get(te);if(ve.__renderTarget=A,!ot.__hasExternalTextures){const Se=Math.max(1,A.width>>ce),Oe=Math.max(1,A.height>>ce);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,ce,be,Se,Oe,A.depth,0,we,Ee,null):t.texImage2D(he,ce,be,Se,Oe,0,we,Ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),ee(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,he,ve.__webglTexture,0,Je(A)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,fe,he,ve.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(N,A,te){if(r.bindRenderbuffer(r.RENDERBUFFER,N),A.depthBuffer){const fe=A.depthTexture,he=fe&&fe.isDepthTexture?fe.type:null,ce=E(A.stencilBuffer,he),we=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=Je(A);ee(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,ce,A.width,A.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,ce,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ce,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,N)}else{const fe=A.textures;for(let he=0;he<fe.length;he++){const ce=fe[he],we=s.convert(ce.format,ce.colorSpace),Ee=s.convert(ce.type),be=b(ce.internalFormat,we,Ee,ce.colorSpace),ot=Je(A);te&&ee(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,be,A.width,A.height):ee(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,be,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,be,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=n.get(A.depthTexture);fe.__renderTarget=A,(!fe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Z(A.depthTexture,0);const he=fe.__webglTexture,ce=Je(A);if(A.depthTexture.format===Bo)ee(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,he,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,he,0);else if(A.depthTexture.format===Qo)ee(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,he,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function ze(N){const A=n.get(N),te=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const fe=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),fe){const he=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,fe.removeEventListener("dispose",he)};fe.addEventListener("dispose",he),A.__depthDisposeCallback=he}A.__boundDepthTexture=fe}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Le(A.__webglFramebuffer,N)}else if(te){A.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[fe]),A.__webglDepthbuffer[fe]===void 0)A.__webglDepthbuffer[fe]=r.createRenderbuffer(),pe(A.__webglDepthbuffer[fe],N,!1);else{const he=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=A.__webglDepthbuffer[fe];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),pe(A.__webglDepthbuffer,N,!1);else{const fe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,he)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(N,A,te){const fe=n.get(N);A!==void 0&&me(fe.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&ze(N)}function st(N){const A=N.texture,te=n.get(N),fe=n.get(A);N.addEventListener("dispose",T);const he=N.textures,ce=N.isWebGLCubeRenderTarget===!0,we=he.length>1;if(we||(fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture()),fe.__version=A.version,o.memory.textures++),ce){te.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[Ee]=[];for(let be=0;be<A.mipmaps.length;be++)te.__webglFramebuffer[Ee][be]=r.createFramebuffer()}else te.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)te.__webglFramebuffer[Ee]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(we)for(let Ee=0,be=he.length;Ee<be;Ee++){const ot=n.get(he[Ee]);ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture(),o.memory.textures++)}if(N.samples>0&&ee(N)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ee=0;Ee<he.length;Ee++){const be=he[Ee];te.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[Ee]);const ot=s.convert(be.format,be.colorSpace),ve=s.convert(be.type),Se=b(be.internalFormat,ot,ve,be.colorSpace,N.isXRRenderTarget===!0),Oe=Je(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,Se,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,te.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(te.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),ye(r.TEXTURE_CUBE_MAP,A);for(let Ee=0;Ee<6;Ee++)if(A.mipmaps&&A.mipmaps.length>0)for(let be=0;be<A.mipmaps.length;be++)me(te.__webglFramebuffer[Ee][be],N,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,be);else me(te.__webglFramebuffer[Ee],N,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);m(A)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let Ee=0,be=he.length;Ee<be;Ee++){const ot=he[Ee],ve=n.get(ot);t.bindTexture(r.TEXTURE_2D,ve.__webglTexture),ye(r.TEXTURE_2D,ot),me(te.__webglFramebuffer,N,ot,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,0),m(ot)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ee=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,fe.__webglTexture),ye(Ee,A),A.mipmaps&&A.mipmaps.length>0)for(let be=0;be<A.mipmaps.length;be++)me(te.__webglFramebuffer[be],N,A,r.COLOR_ATTACHMENT0,Ee,be);else me(te.__webglFramebuffer,N,A,r.COLOR_ATTACHMENT0,Ee,0);m(A)&&p(Ee),t.unbindTexture()}N.depthBuffer&&ze(N)}function je(N){const A=N.textures;for(let te=0,fe=A.length;te<fe;te++){const he=A[te];if(m(he)){const ce=M(N),we=n.get(he).__webglTexture;t.bindTexture(ce,we),p(ce),t.unbindTexture()}}}const Xe=[],G=[];function Dt(N){if(N.samples>0){if(ee(N)===!1){const A=N.textures,te=N.width,fe=N.height;let he=r.COLOR_BUFFER_BIT;const ce=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=n.get(N),Ee=A.length>1;if(Ee)for(let be=0;be<A.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let be=0;be<A.length;be++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),Ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[be]);const ot=n.get(A[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ot,0)}r.blitFramebuffer(0,0,te,fe,0,0,te,fe,he,r.NEAREST),l===!0&&(Xe.length=0,G.length=0,Xe.push(r.COLOR_ATTACHMENT0+be),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Xe.push(ce),G.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,G)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let be=0;be<A.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,we.__webglColorRenderbuffer[be]);const ot=n.get(A[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,ot,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const A=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Je(N){return Math.min(i.maxSamples,N.samples)}function ee(N){const A=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Fe(N){const A=o.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function xt(N,A){const te=N.colorSpace,fe=N.format,he=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||te!==pn&&te!==vr&&(Et.getTransfer(te)===Nt?(fe!==di||he!==Cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}function He(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Ze,this.setupRenderTarget=st,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ee}function kA(r,e){function t(n,i=vr){let s;const o=Et.getTransfer(i);if(n===Cr)return r.UNSIGNED_BYTE;if(n===vf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===xf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===i0)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===t0)return r.BYTE;if(n===n0)return r.SHORT;if(n===ol)return r.UNSIGNED_SHORT;if(n===_f)return r.INT;if(n===Xs)return r.UNSIGNED_INT;if(n===bn)return r.FLOAT;if(n===jn)return r.HALF_FLOAT;if(n===r0)return r.ALPHA;if(n===s0)return r.RGB;if(n===di)return r.RGBA;if(n===o0)return r.LUMINANCE;if(n===a0)return r.LUMINANCE_ALPHA;if(n===Bo)return r.DEPTH_COMPONENT;if(n===Qo)return r.DEPTH_STENCIL;if(n===Qc)return r.RED;if(n===yf)return r.RED_INTEGER;if(n===l0)return r.RG;if(n===Ef)return r.RG_INTEGER;if(n===Sf)return r.RGBA_INTEGER;if(n===mc||n===gc||n===_c||n===vc)if(o===Nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_c)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===td||n===nd||n===id||n===rd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===td)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===id)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sd||n===od||n===ad)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===sd||n===od)return o===Nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ad)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ld||n===cd||n===ud||n===hd||n===dd||n===fd||n===pd||n===md||n===gd||n===_d||n===vd||n===xd||n===yd||n===Ed)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ld)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cd)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ud)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hd)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dd)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fd)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pd)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===md)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gd)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_d)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vd)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xd)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yd)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ed)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xc||n===Sd||n===Md)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xc)return o===Nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Md)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===c0||n===bd||n===Td||n===wd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Td)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const zA={type:"move"};class th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zA)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const HA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new En,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ir({vertexShader:HA,fragmentShader:VA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new eu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends $s{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=new GA,m=t.getContextAttributes();let p=null,M=null;const b=[],E=[],C=new it;let P=null;const T=new Vn;T.viewport=new At;const R=new Vn;R.viewport=new At;const S=[T,R],y=new QS;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let se=b[ne];return se===void 0&&(se=new th,b[ne]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ne){let se=b[ne];return se===void 0&&(se=new th,b[ne]=se),se.getGripSpace()},this.getHand=function(ne){let se=b[ne];return se===void 0&&(se=new th,b[ne]=se),se.getHandSpace()};function z(ne){const se=E.indexOf(ne.inputSource);if(se===-1)return;const me=b[se];me!==void 0&&(me.update(ne.inputSource,ne.frame,c||o),me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function H(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<b.length;ne++){const se=E[ne];se!==null&&(E[ne]=null,b[ne].disconnect(se))}I=null,B=null,g.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,M=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new us(f.framebufferWidth,f.framebufferHeight,{format:di,type:Cr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,me=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Qo:Bo,me=m.stencil?Jo:Xs);const Le={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Le),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new us(d.textureWidth,d.textureHeight,{format:di,type:Cr,depthTexture:new D0(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(ne){for(let se=0;se<ne.removed.length;se++){const me=ne.removed[se],pe=E.indexOf(me);pe>=0&&(E[pe]=null,b[pe].disconnect(me))}for(let se=0;se<ne.added.length;se++){const me=ne.added[se];let pe=E.indexOf(me);if(pe===-1){for(let ze=0;ze<b.length;ze++)if(ze>=E.length){E.push(me),pe=ze;break}else if(E[ze]===null){E[ze]=me,pe=ze;break}if(pe===-1)break}const Le=b[pe];Le&&Le.connect(me)}}const W=new K,j=new K;function q(ne,se,me){W.setFromMatrixPosition(se.matrixWorld),j.setFromMatrixPosition(me.matrixWorld);const pe=W.distanceTo(j),Le=se.projectionMatrix.elements,ze=me.projectionMatrix.elements,Ze=Le[14]/(Le[10]-1),st=Le[14]/(Le[10]+1),je=(Le[9]+1)/Le[5],Xe=(Le[9]-1)/Le[5],G=(Le[8]-1)/Le[0],Dt=(ze[8]+1)/ze[0],Je=Ze*G,ee=Ze*Dt,Fe=pe/(-G+Dt),xt=Fe*-G;if(se.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(xt),ne.translateZ(Fe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Le[10]===-1)ne.projectionMatrix.copy(se.projectionMatrix),ne.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const He=Ze+Fe,N=st+Fe,A=Je-xt,te=ee+(pe-xt),fe=je*st/N*He,he=Xe*st/N*He;ne.projectionMatrix.makePerspective(A,te,fe,he,He,N),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function V(ne,se){se===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(se.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let se=ne.near,me=ne.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(me=g.depthFar)),y.near=R.near=T.near=se,y.far=R.far=T.far=me,(I!==y.near||B!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,B=y.far),T.layers.mask=ne.layers.mask|2,R.layers.mask=ne.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;const pe=ne.parent,Le=y.cameras;V(y,pe);for(let ze=0;ze<Le.length;ze++)V(Le[ze],pe);Le.length===2?q(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),O(ne,y,pe)};function O(ne,se,me){me===null?ne.matrix.copy(se.matrixWorld):(ne.matrix.copy(me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(se.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(se.projectionMatrix),ne.projectionMatrixInverse.copy(se.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ea*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let _e=null;function ye(ne,se){if(u=se.getViewerPose(c||o),_=se,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let pe=!1;me.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let ze=0;ze<me.length;ze++){const Ze=me[ze];let st=null;if(f!==null)st=f.getViewport(Ze);else{const Xe=h.getViewSubImage(d,Ze);st=Xe.viewport,ze===0&&(e.setRenderTargetTextures(M,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(M))}let je=S[ze];je===void 0&&(je=new Vn,je.layers.enable(ze),je.viewport=new At,S[ze]=je),je.matrix.fromArray(Ze.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ze.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(st.x,st.y,st.width,st.height),ze===0&&(y.matrix.copy(je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(je)}const Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ze=h.getDepthInformation(me[0]);ze&&ze.isValid&&ze.texture&&g.init(e,ze,i.renderState)}}for(let me=0;me<b.length;me++){const pe=E[me],Le=b[me];pe!==null&&Le!==void 0&&Le.update(pe,se,c||o)}_e&&_e(ne,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),_=null}const Ue=new I0;Ue.setAnimationLoop(ye),this.setAnimationLoop=function(ne){_e=ne},this.dispose=function(){}}}const Es=new nr,XA=new ht;function qA(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,E0(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,b,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ei&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ei&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),b=M.envMap,E=M.envMapRotation;b&&(m.envMap.value=b,Es.copy(E),Es.x*=-1,Es.y*=-1,Es.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),m.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(Es)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ei&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function YA(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const E=b.program;n.uniformBlockBinding(M,E)}function c(M,b){let E=i[M.id];E===void 0&&(_(M),E=u(M),i[M.id]=E,M.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(M,C);const P=e.render.frame;s[M.id]!==P&&(d(M),s[M.id]=P)}function u(M){const b=h();M.__bindingPointIndex=b;const E=r.createBuffer(),C=M.__size,P=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,C,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,E),E}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=i[M.id],E=M.uniforms,C=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let P=0,T=E.length;P<T;P++){const R=Array.isArray(E[P])?E[P]:[E[P]];for(let S=0,y=R.length;S<y;S++){const I=R[S];if(f(I,P,S,C)===!0){const B=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let Z=0;Z<z.length;Z++){const W=z[Z],j=g(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,B+H,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,b,E,C){const P=M.value,T=b+"_"+E;if(C[T]===void 0)return typeof P=="number"||typeof P=="boolean"?C[T]=P:C[T]=P.clone(),!0;{const R=C[T];if(typeof P=="number"||typeof P=="boolean"){if(R!==P)return C[T]=P,!0}else if(R.equals(P)===!1)return R.copy(P),!0}return!1}function _(M){const b=M.uniforms;let E=0;const C=16;for(let T=0,R=b.length;T<R;T++){const S=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,I=S.length;y<I;y++){const B=S[y],z=Array.isArray(B.value)?B.value:[B.value];for(let H=0,Z=z.length;H<Z;H++){const W=z[H],j=g(W),q=E%C,V=q%j.boundary,O=q+V;E+=V,O!==0&&C-O<j.storage&&(E+=C-O),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=j.storage}}}const P=E%C;return P>0&&(E+=C-P),M.__size=E,M.__cache={},this}function g(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class $A{constructor(e={}){const{canvas:t=XE(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=os,this.toneMappingExposure=1;const E=this;let C=!1,P=0,T=0,R=null,S=-1,y=null;const I=new At,B=new At;let z=null;const H=new rt(0);let Z=0,W=t.width,j=t.height,q=1,V=null,O=null;const _e=new At(0,0,W,j),ye=new At(0,0,W,j);let Ue=!1;const ne=new Af;let se=!1,me=!1;const pe=new ht,Le=new ht,ze=new K,Ze=new At,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Xe(){return R===null?q:1}let G=n;function Dt(v,w){return t.getContext(v,w)}try{const v={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gf}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),G===null){const w="webgl2";if(G=Dt(w,v),G===null)throw Dt(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Je,ee,Fe,xt,He,N,A,te,fe,he,ce,we,Ee,be,ot,ve,Se,Oe,Ne,Ie,Qe,Ve,Ke,k;function ie(){Je=new iw(G),Je.init(),Ve=new kA(G,Je),ee=new ZT(G,Je,e,Ve),Fe=new OA(G,Je),ee.reverseDepthBuffer&&d&&Fe.buffers.depth.setReversed(!0),xt=new ow(G),He=new bA,N=new BA(G,Je,Fe,He,ee,Ve,xt),A=new QT(E),te=new nw(E),fe=new fM(G),Ke=new jT(G,fe),he=new rw(G,fe,xt,Ke),ce=new lw(G,he,fe,xt),Ne=new aw(G,ee,N),ve=new JT(He),we=new MA(E,A,te,Je,ee,Ke,ve),Ee=new qA(E,He),be=new wA,ot=new LA(Je),Oe=new $T(E,A,te,Fe,ce,f,l),Se=new NA(E,ce,ee),k=new YA(G,xt,ee,Fe),Ie=new KT(G,Je,xt),Qe=new sw(G,Je,xt),xt.programs=we.programs,E.capabilities=ee,E.extensions=Je,E.properties=He,E.renderLists=be,E.shadowMap=Se,E.state=Fe,E.info=xt}ie();const re=new WA(E,G);this.xr=re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const v=Je.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Je.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(v){v!==void 0&&(q=v,this.setSize(W,j,!1))},this.getSize=function(v){return v.set(W,j)},this.setSize=function(v,w,U=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,j=w,t.width=Math.floor(v*q),t.height=Math.floor(w*q),U===!0&&(t.style.width=v+"px",t.style.height=w+"px"),this.setViewport(0,0,v,w)},this.getDrawingBufferSize=function(v){return v.set(W*q,j*q).floor()},this.setDrawingBufferSize=function(v,w,U){W=v,j=w,q=U,t.width=Math.floor(v*U),t.height=Math.floor(w*U),this.setViewport(0,0,v,w)},this.getCurrentViewport=function(v){return v.copy(I)},this.getViewport=function(v){return v.copy(_e)},this.setViewport=function(v,w,U,L){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,w,U,L),Fe.viewport(I.copy(_e).multiplyScalar(q).round())},this.getScissor=function(v){return v.copy(ye)},this.setScissor=function(v,w,U,L){v.isVector4?ye.set(v.x,v.y,v.z,v.w):ye.set(v,w,U,L),Fe.scissor(B.copy(ye).multiplyScalar(q).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(v){Fe.setScissorTest(Ue=v)},this.setOpaqueSort=function(v){V=v},this.setTransparentSort=function(v){O=v},this.getClearColor=function(v){return v.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(v=!0,w=!0,U=!0){let L=0;if(v){let F=!1;if(R!==null){const X=R.texture.format;F=X===Sf||X===Ef||X===yf}if(F){const X=R.texture.type,Y=X===Cr||X===Xs||X===ol||X===Jo||X===vf||X===xf,J=Oe.getClearColor(),Q=Oe.getClearAlpha(),ae=J.r,ue=J.g,oe=J.b;Y?(_[0]=ae,_[1]=ue,_[2]=oe,_[3]=Q,G.clearBufferuiv(G.COLOR,0,_)):(g[0]=ae,g[1]=ue,g[2]=oe,g[3]=Q,G.clearBufferiv(G.COLOR,0,g))}else L|=G.COLOR_BUFFER_BIT}w&&(L|=G.DEPTH_BUFFER_BIT),U&&(L|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Oe.dispose(),be.dispose(),ot.dispose(),He.dispose(),A.dispose(),te.dispose(),ce.dispose(),Ke.dispose(),k.dispose(),we.dispose(),re.dispose(),re.removeEventListener("sessionstart",De),re.removeEventListener("sessionend",nt),We.stop()};function de(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=xt.autoReset,w=Se.enabled,U=Se.autoUpdate,L=Se.needsUpdate,F=Se.type;ie(),xt.autoReset=v,Se.enabled=w,Se.autoUpdate=U,Se.needsUpdate=L,Se.type=F}function Ae(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function et(v){const w=v.target;w.removeEventListener("dispose",et),Mt(w)}function Mt(v){Wt(v),He.remove(v)}function Wt(v){const w=He.get(v).programs;w!==void 0&&(w.forEach(function(U){we.releaseProgram(U)}),v.isShaderMaterial&&we.releaseShaderCache(v))}this.renderBufferDirect=function(v,w,U,L,F,X){w===null&&(w=st);const Y=F.isMesh&&F.matrixWorld.determinant()<0,J=Fn(v,w,U,L,F);Fe.setMaterial(L,Y);let Q=U.index,ae=1;if(L.wireframe===!0){if(Q=he.getWireframeAttribute(U),Q===void 0)return;ae=2}const ue=U.drawRange,oe=U.attributes.position;let xe=ue.start*ae,ge=(ue.start+ue.count)*ae;X!==null&&(xe=Math.max(xe,X.start*ae),ge=Math.min(ge,(X.start+X.count)*ae)),Q!==null?(xe=Math.max(xe,0),ge=Math.min(ge,Q.count)):oe!=null&&(xe=Math.max(xe,0),ge=Math.min(ge,oe.count));const Te=ge-xe;if(Te<0||Te===1/0)return;Ke.setup(F,L,J,U,Q);let Be,qe=Ie;if(Q!==null&&(Be=fe.get(Q),qe=Qe,qe.setIndex(Be)),F.isMesh)L.wireframe===!0?(Fe.setLineWidth(L.wireframeLinewidth*Xe()),qe.setMode(G.LINES)):qe.setMode(G.TRIANGLES);else if(F.isLine){let Ce=L.linewidth;Ce===void 0&&(Ce=1),Fe.setLineWidth(Ce*Xe()),F.isLineSegments?qe.setMode(G.LINES):F.isLineLoop?qe.setMode(G.LINE_LOOP):qe.setMode(G.LINE_STRIP)}else F.isPoints?qe.setMode(G.POINTS):F.isSprite&&qe.setMode(G.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)qe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ce=F._multiDrawStarts,wt=F._multiDrawCounts,Ye=F._multiDrawCount,at=Q?fe.get(Q).bytesPerElement:1,kt=He.get(L).currentProgram.getUniforms();for(let zt=0;zt<Ye;zt++)kt.setValue(G,"_gl_DrawID",zt),qe.render(Ce[zt]/at,wt[zt])}else if(F.isInstancedMesh)qe.renderInstances(xe,Te,F.count);else if(U.isInstancedBufferGeometry){const Ce=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,wt=Math.min(U.instanceCount,Ce);qe.renderInstances(xe,Te,wt)}else qe.render(xe,Te)};function Pe(v,w,U){v.transparent===!0&&v.side===Fi&&v.forceSinglePass===!1?(v.side=ei,v.needsUpdate=!0,Pt(v,w,U),v.side=Dr,v.needsUpdate=!0,Pt(v,w,U),v.side=Fi):Pt(v,w,U)}this.compile=function(v,w,U=null){U===null&&(U=v),p=ot.get(U),p.init(w),b.push(p),U.traverseVisible(function(F){F.isLight&&F.layers.test(w.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),v!==U&&v.traverseVisible(function(F){F.isLight&&F.layers.test(w.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const L=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const X=F.material;if(X)if(Array.isArray(X))for(let Y=0;Y<X.length;Y++){const J=X[Y];Pe(J,U,F),L.add(J)}else Pe(X,U,F),L.add(X)}),b.pop(),p=null,L},this.compileAsync=function(v,w,U=null){const L=this.compile(v,w,U);return new Promise(F=>{function X(){if(L.forEach(function(Y){He.get(Y).currentProgram.isReady()&&L.delete(Y)}),L.size===0){F(v);return}setTimeout(X,10)}Je.get("KHR_parallel_shader_compile")!==null?X():setTimeout(X,10)})};let Ge=null;function ct(v){Ge&&Ge(v)}function De(){We.stop()}function nt(){We.start()}const We=new I0;We.setAnimationLoop(ct),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(v){Ge=v,re.setAnimationLoop(v),v===null?We.stop():We.start()},re.addEventListener("sessionstart",De),re.addEventListener("sessionend",nt),this.render=function(v,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(w),w=re.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,w,R),p=ot.get(v,b.length),p.init(w),b.push(p),Le.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),ne.setFromProjectionMatrix(Le),me=this.localClippingEnabled,se=ve.init(this.clippingPlanes,me),m=be.get(v,M.length),m.init(),M.push(m),re.enabled===!0&&re.isPresenting===!0){const X=E.xr.getDepthSensingMesh();X!==null&&tt(X,w,-1/0,E.sortObjects)}tt(v,w,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(V,O),je=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,je&&Oe.addToRenderList(m,v),this.info.render.frame++,se===!0&&ve.beginShadows();const U=p.state.shadowsArray;Se.render(U,v,w),se===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=m.opaque,F=m.transmissive;if(p.setupLights(),w.isArrayCamera){const X=w.cameras;if(F.length>0)for(let Y=0,J=X.length;Y<J;Y++){const Q=X[Y];dt(L,F,v,Q)}je&&Oe.render(v);for(let Y=0,J=X.length;Y<J;Y++){const Q=X[Y];Xt(m,v,Q,Q.viewport)}}else F.length>0&&dt(L,F,v,w),je&&Oe.render(v),Xt(m,v,w);R!==null&&(N.updateMultisampleRenderTarget(R),N.updateRenderTargetMipmap(R)),v.isScene===!0&&v.onAfterRender(E,v,w),Ke.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],se===!0&&ve.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function tt(v,w,U,L){if(v.visible===!1)return;if(v.layers.test(w.layers)){if(v.isGroup)U=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(w);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ne.intersectsSprite(v)){L&&Ze.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Le);const Y=ce.update(v),J=v.material;J.visible&&m.push(v,Y,J,U,Ze.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ne.intersectsObject(v))){const Y=ce.update(v),J=v.material;if(L&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ze.copy(v.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),Ze.copy(Y.boundingSphere.center)),Ze.applyMatrix4(v.matrixWorld).applyMatrix4(Le)),Array.isArray(J)){const Q=Y.groups;for(let ae=0,ue=Q.length;ae<ue;ae++){const oe=Q[ae],xe=J[oe.materialIndex];xe&&xe.visible&&m.push(v,Y,xe,U,Ze.z,oe)}}else J.visible&&m.push(v,Y,J,U,Ze.z,null)}}const X=v.children;for(let Y=0,J=X.length;Y<J;Y++)tt(X[Y],w,U,L)}function Xt(v,w,U,L){const F=v.opaque,X=v.transmissive,Y=v.transparent;p.setupLightsView(U),se===!0&&ve.setGlobalState(E.clippingPlanes,U),L&&Fe.viewport(I.copy(L)),F.length>0&&Ft(F,w,U),X.length>0&&Ft(X,w,U),Y.length>0&&Ft(Y,w,U),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function dt(v,w,U,L){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[L.id]===void 0&&(p.state.transmissionRenderTarget[L.id]=new us(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?jn:Cr,minFilter:$i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const X=p.state.transmissionRenderTarget[L.id],Y=L.viewport||I;X.setSize(Y.z,Y.w);const J=E.getRenderTarget();E.setRenderTarget(X),E.getClearColor(H),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),E.clear(),je&&Oe.render(U);const Q=E.toneMapping;E.toneMapping=os;const ae=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),p.setupLightsView(L),se===!0&&ve.setGlobalState(E.clippingPlanes,L),Ft(v,U,L),N.updateMultisampleRenderTarget(X),N.updateRenderTargetMipmap(X),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let oe=0,xe=w.length;oe<xe;oe++){const ge=w[oe],Te=ge.object,Be=ge.geometry,qe=ge.material,Ce=ge.group;if(qe.side===Fi&&Te.layers.test(L.layers)){const wt=qe.side;qe.side=ei,qe.needsUpdate=!0,en(Te,U,L,Be,qe,Ce),qe.side=wt,qe.needsUpdate=!0,ue=!0}}ue===!0&&(N.updateMultisampleRenderTarget(X),N.updateRenderTargetMipmap(X))}E.setRenderTarget(J),E.setClearColor(H,Z),ae!==void 0&&(L.viewport=ae),E.toneMapping=Q}function Ft(v,w,U){const L=w.isScene===!0?w.overrideMaterial:null;for(let F=0,X=v.length;F<X;F++){const Y=v[F],J=Y.object,Q=Y.geometry,ae=L===null?Y.material:L,ue=Y.group;J.layers.test(U.layers)&&en(J,w,U,Q,ae,ue)}}function en(v,w,U,L,F,X){v.onBeforeRender(E,w,U,L,F,X),v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(E,w,U,L,v,X),F.transparent===!0&&F.side===Fi&&F.forceSinglePass===!1?(F.side=ei,F.needsUpdate=!0,E.renderBufferDirect(U,w,L,F,v,X),F.side=Dr,F.needsUpdate=!0,E.renderBufferDirect(U,w,L,F,v,X),F.side=Fi):E.renderBufferDirect(U,w,L,F,v,X),v.onAfterRender(E,w,U,L,F,X)}function Pt(v,w,U){w.isScene!==!0&&(w=st);const L=He.get(v),F=p.state.lights,X=p.state.shadowsArray,Y=F.state.version,J=we.getParameters(v,F.state,X,w,U),Q=we.getProgramCacheKey(J);let ae=L.programs;L.environment=v.isMeshStandardMaterial?w.environment:null,L.fog=w.fog,L.envMap=(v.isMeshStandardMaterial?te:A).get(v.envMap||L.environment),L.envMapRotation=L.environment!==null&&v.envMap===null?w.environmentRotation:v.envMapRotation,ae===void 0&&(v.addEventListener("dispose",et),ae=new Map,L.programs=ae);let ue=ae.get(Q);if(ue!==void 0){if(L.currentProgram===ue&&L.lightsStateVersion===Y)return bt(v,J),ue}else J.uniforms=we.getUniforms(v),v.onBeforeCompile(J,E),ue=we.acquireProgram(J,Q),ae.set(Q,ue),L.uniforms=J.uniforms;const oe=L.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(oe.clippingPlanes=ve.uniform),bt(v,J),L.needsLights=Zt(v),L.lightsStateVersion=Y,L.needsLights&&(oe.ambientLightColor.value=F.state.ambient,oe.lightProbe.value=F.state.probe,oe.directionalLights.value=F.state.directional,oe.directionalLightShadows.value=F.state.directionalShadow,oe.spotLights.value=F.state.spot,oe.spotLightShadows.value=F.state.spotShadow,oe.rectAreaLights.value=F.state.rectArea,oe.ltc_1.value=F.state.rectAreaLTC1,oe.ltc_2.value=F.state.rectAreaLTC2,oe.pointLights.value=F.state.point,oe.pointLightShadows.value=F.state.pointShadow,oe.hemisphereLights.value=F.state.hemi,oe.directionalShadowMap.value=F.state.directionalShadowMap,oe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,oe.spotShadowMap.value=F.state.spotShadowMap,oe.spotLightMatrix.value=F.state.spotLightMatrix,oe.spotLightMap.value=F.state.spotLightMap,oe.pointShadowMap.value=F.state.pointShadowMap,oe.pointShadowMatrix.value=F.state.pointShadowMatrix),L.currentProgram=ue,L.uniformsList=null,ue}function Ct(v){if(v.uniformsList===null){const w=v.currentProgram.getUniforms();v.uniformsList=yc.seqWithValue(w.seq,v.uniforms)}return v.uniformsList}function bt(v,w){const U=He.get(v);U.outputColorSpace=w.outputColorSpace,U.batching=w.batching,U.batchingColor=w.batchingColor,U.instancing=w.instancing,U.instancingColor=w.instancingColor,U.instancingMorph=w.instancingMorph,U.skinning=w.skinning,U.morphTargets=w.morphTargets,U.morphNormals=w.morphNormals,U.morphColors=w.morphColors,U.morphTargetsCount=w.morphTargetsCount,U.numClippingPlanes=w.numClippingPlanes,U.numIntersection=w.numClipIntersection,U.vertexAlphas=w.vertexAlphas,U.vertexTangents=w.vertexTangents,U.toneMapping=w.toneMapping}function Fn(v,w,U,L,F){w.isScene!==!0&&(w=st),N.resetTextureUnits();const X=w.fog,Y=L.isMeshStandardMaterial?w.environment:null,J=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:pn,Q=(L.isMeshStandardMaterial?te:A).get(L.envMap||Y),ae=L.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,ue=!!U.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),oe=!!U.morphAttributes.position,xe=!!U.morphAttributes.normal,ge=!!U.morphAttributes.color;let Te=os;L.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Te=E.toneMapping);const Be=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,qe=Be!==void 0?Be.length:0,Ce=He.get(L),wt=p.state.lights;if(se===!0&&(me===!0||v!==y)){const tn=v===y&&L.id===S;ve.setState(L,v,tn)}let Ye=!1;L.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==wt.state.version||Ce.outputColorSpace!==J||F.isBatchedMesh&&Ce.batching===!1||!F.isBatchedMesh&&Ce.batching===!0||F.isBatchedMesh&&Ce.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ce.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ce.instancing===!1||!F.isInstancedMesh&&Ce.instancing===!0||F.isSkinnedMesh&&Ce.skinning===!1||!F.isSkinnedMesh&&Ce.skinning===!0||F.isInstancedMesh&&Ce.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ce.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ce.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ce.instancingMorph===!1&&F.morphTexture!==null||Ce.envMap!==Q||L.fog===!0&&Ce.fog!==X||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ve.numPlanes||Ce.numIntersection!==ve.numIntersection)||Ce.vertexAlphas!==ae||Ce.vertexTangents!==ue||Ce.morphTargets!==oe||Ce.morphNormals!==xe||Ce.morphColors!==ge||Ce.toneMapping!==Te||Ce.morphTargetsCount!==qe)&&(Ye=!0):(Ye=!0,Ce.__version=L.version);let at=Ce.currentProgram;Ye===!0&&(at=Pt(L,w,F));let kt=!1,zt=!1,qt=!1;const $e=at.getUniforms(),mt=Ce.uniforms;if(Fe.useProgram(at.program)&&(kt=!0,zt=!0,qt=!0),L.id!==S&&(S=L.id,zt=!0),kt||y!==v){Fe.buffers.depth.getReversed()?(pe.copy(v.projectionMatrix),YE(pe),$E(pe),$e.setValue(G,"projectionMatrix",pe)):$e.setValue(G,"projectionMatrix",v.projectionMatrix),$e.setValue(G,"viewMatrix",v.matrixWorldInverse);const Vt=$e.map.cameraPosition;Vt!==void 0&&Vt.setValue(G,ze.setFromMatrixPosition(v.matrixWorld)),ee.logarithmicDepthBuffer&&$e.setValue(G,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&$e.setValue(G,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,zt=!0,qt=!0)}if(F.isSkinnedMesh){$e.setOptional(G,F,"bindMatrix"),$e.setOptional(G,F,"bindMatrixInverse");const tn=F.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),$e.setValue(G,"boneTexture",tn.boneTexture,N))}F.isBatchedMesh&&($e.setOptional(G,F,"batchingTexture"),$e.setValue(G,"batchingTexture",F._matricesTexture,N),$e.setOptional(G,F,"batchingIdTexture"),$e.setValue(G,"batchingIdTexture",F._indirectTexture,N),$e.setOptional(G,F,"batchingColorTexture"),F._colorsTexture!==null&&$e.setValue(G,"batchingColorTexture",F._colorsTexture,N));const Jt=U.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Ne.update(F,U,at),(zt||Ce.receiveShadow!==F.receiveShadow)&&(Ce.receiveShadow=F.receiveShadow,$e.setValue(G,"receiveShadow",F.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(mt.envMap.value=Q,mt.flipEnvMap.value=Q.isCubeTexture&&Q.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&w.environment!==null&&(mt.envMapIntensity.value=w.environmentIntensity),zt&&($e.setValue(G,"toneMappingExposure",E.toneMappingExposure),Ce.needsLights&&Tt(mt,qt),X&&L.fog===!0&&Ee.refreshFogUniforms(mt,X),Ee.refreshMaterialUniforms(mt,L,q,j,p.state.transmissionRenderTarget[v.id]),yc.upload(G,Ct(Ce),mt,N)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(yc.upload(G,Ct(Ce),mt,N),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&$e.setValue(G,"center",F.center),$e.setValue(G,"modelViewMatrix",F.modelViewMatrix),$e.setValue(G,"normalMatrix",F.normalMatrix),$e.setValue(G,"modelMatrix",F.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const tn=L.uniformsGroups;for(let Vt=0,Pr=tn.length;Vt<Pr;Vt++){const fs=tn[Vt];k.update(fs,at),k.bind(fs,at)}}return at}function Tt(v,w){v.ambientLightColor.needsUpdate=w,v.lightProbe.needsUpdate=w,v.directionalLights.needsUpdate=w,v.directionalLightShadows.needsUpdate=w,v.pointLights.needsUpdate=w,v.pointLightShadows.needsUpdate=w,v.spotLights.needsUpdate=w,v.spotLightShadows.needsUpdate=w,v.rectAreaLights.needsUpdate=w,v.hemisphereLights.needsUpdate=w}function Zt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(v,w,U){He.get(v.texture).__webglTexture=w,He.get(v.depthTexture).__webglTexture=U;const L=He.get(v);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=U===void 0,L.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,w){const U=He.get(v);U.__webglFramebuffer=w,U.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(v,w=0,U=0){R=v,P=w,T=U;let L=!0,F=null,X=!1,Y=!1;if(v){const Q=He.get(v);if(Q.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(G.FRAMEBUFFER,null),L=!1;else if(Q.__webglFramebuffer===void 0)N.setupRenderTarget(v);else if(Q.__hasExternalTextures)N.rebindTextures(v,He.get(v.texture).__webglTexture,He.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const oe=v.depthTexture;if(Q.__boundDepthTexture!==oe){if(oe!==null&&He.has(oe)&&(v.width!==oe.image.width||v.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(v)}}const ae=v.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Y=!0);const ue=He.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ue[w])?F=ue[w][U]:F=ue[w],X=!0):v.samples>0&&N.useMultisampledRTT(v)===!1?F=He.get(v).__webglMultisampledFramebuffer:Array.isArray(ue)?F=ue[U]:F=ue,I.copy(v.viewport),B.copy(v.scissor),z=v.scissorTest}else I.copy(_e).multiplyScalar(q).floor(),B.copy(ye).multiplyScalar(q).floor(),z=Ue;if(Fe.bindFramebuffer(G.FRAMEBUFFER,F)&&L&&Fe.drawBuffers(v,F),Fe.viewport(I),Fe.scissor(B),Fe.setScissorTest(z),X){const Q=He.get(v.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+w,Q.__webglTexture,U)}else if(Y){const Q=He.get(v.texture),ae=w||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Q.__webglTexture,U||0,ae)}S=-1},this.readRenderTargetPixels=function(v,w,U,L,F,X,Y){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let J=He.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Y!==void 0&&(J=J[Y]),J){Fe.bindFramebuffer(G.FRAMEBUFFER,J);try{const Q=v.texture,ae=Q.format,ue=Q.type;if(!ee.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=v.width-L&&U>=0&&U<=v.height-F&&G.readPixels(w,U,L,F,Ve.convert(ae),Ve.convert(ue),X)}finally{const Q=R!==null?He.get(R).__webglFramebuffer:null;Fe.bindFramebuffer(G.FRAMEBUFFER,Q)}}},this.readRenderTargetPixelsAsync=async function(v,w,U,L,F,X,Y){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let J=He.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Y!==void 0&&(J=J[Y]),J){const Q=v.texture,ae=Q.format,ue=Q.type;if(!ee.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(w>=0&&w<=v.width-L&&U>=0&&U<=v.height-F){Fe.bindFramebuffer(G.FRAMEBUFFER,J);const oe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,oe),G.bufferData(G.PIXEL_PACK_BUFFER,X.byteLength,G.STREAM_READ),G.readPixels(w,U,L,F,Ve.convert(ae),Ve.convert(ue),0);const xe=R!==null?He.get(R).__webglFramebuffer:null;Fe.bindFramebuffer(G.FRAMEBUFFER,xe);const ge=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await qE(G,ge,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,oe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,X),G.deleteBuffer(oe),G.deleteSync(ge),X}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,w=null,U=0){v.isTexture!==!0&&(xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),w=arguments[0]||null,v=arguments[1]);const L=Math.pow(2,-U),F=Math.floor(v.image.width*L),X=Math.floor(v.image.height*L),Y=w!==null?w.x:0,J=w!==null?w.y:0;N.setTexture2D(v,0),G.copyTexSubImage2D(G.TEXTURE_2D,U,0,0,Y,J,F,X),Fe.unbindTexture()};const x=G.createFramebuffer(),D=G.createFramebuffer();this.copyTextureToTexture=function(v,w,U=null,L=null,F=0,X=null){v.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,v=arguments[1],w=arguments[2],X=arguments[3]||0,U=null),X===null&&(F!==0?(xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),X=F,F=0):X=0);let Y,J,Q,ae,ue,oe,xe,ge,Te;const Be=v.isCompressedTexture?v.mipmaps[X]:v.image;if(U!==null)Y=U.max.x-U.min.x,J=U.max.y-U.min.y,Q=U.isBox3?U.max.z-U.min.z:1,ae=U.min.x,ue=U.min.y,oe=U.isBox3?U.min.z:0;else{const Jt=Math.pow(2,-F);Y=Math.floor(Be.width*Jt),J=Math.floor(Be.height*Jt),v.isDataArrayTexture?Q=Be.depth:v.isData3DTexture?Q=Math.floor(Be.depth*Jt):Q=1,ae=0,ue=0,oe=0}L!==null?(xe=L.x,ge=L.y,Te=L.z):(xe=0,ge=0,Te=0);const qe=Ve.convert(w.format),Ce=Ve.convert(w.type);let wt;w.isData3DTexture?(N.setTexture3D(w,0),wt=G.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(N.setTexture2DArray(w,0),wt=G.TEXTURE_2D_ARRAY):(N.setTexture2D(w,0),wt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,w.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,w.unpackAlignment);const Ye=G.getParameter(G.UNPACK_ROW_LENGTH),at=G.getParameter(G.UNPACK_IMAGE_HEIGHT),kt=G.getParameter(G.UNPACK_SKIP_PIXELS),zt=G.getParameter(G.UNPACK_SKIP_ROWS),qt=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Be.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Be.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ae),G.pixelStorei(G.UNPACK_SKIP_ROWS,ue),G.pixelStorei(G.UNPACK_SKIP_IMAGES,oe);const $e=v.isDataArrayTexture||v.isData3DTexture,mt=w.isDataArrayTexture||w.isData3DTexture;if(v.isDepthTexture){const Jt=He.get(v),tn=He.get(w),Vt=He.get(Jt.__renderTarget),Pr=He.get(tn.__renderTarget);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let fs=0;fs<Q;fs++)$e&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,He.get(v).__webglTexture,F,oe+fs),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,He.get(w).__webglTexture,X,Te+fs)),G.blitFramebuffer(ae,ue,Y,J,xe,ge,Y,J,G.DEPTH_BUFFER_BIT,G.NEAREST);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(F!==0||v.isRenderTargetTexture||He.has(v)){const Jt=He.get(v),tn=He.get(w);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,x),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,D);for(let Vt=0;Vt<Q;Vt++)$e?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Jt.__webglTexture,F,oe+Vt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Jt.__webglTexture,F),mt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,tn.__webglTexture,X,Te+Vt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,tn.__webglTexture,X),F!==0?G.blitFramebuffer(ae,ue,Y,J,xe,ge,Y,J,G.COLOR_BUFFER_BIT,G.NEAREST):mt?G.copyTexSubImage3D(wt,X,xe,ge,Te+Vt,ae,ue,Y,J):G.copyTexSubImage2D(wt,X,xe,ge,ae,ue,Y,J);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else mt?v.isDataTexture||v.isData3DTexture?G.texSubImage3D(wt,X,xe,ge,Te,Y,J,Q,qe,Ce,Be.data):w.isCompressedArrayTexture?G.compressedTexSubImage3D(wt,X,xe,ge,Te,Y,J,Q,qe,Be.data):G.texSubImage3D(wt,X,xe,ge,Te,Y,J,Q,qe,Ce,Be):v.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,X,xe,ge,Y,J,qe,Ce,Be.data):v.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,X,xe,ge,Be.width,Be.height,qe,Be.data):G.texSubImage2D(G.TEXTURE_2D,X,xe,ge,Y,J,qe,Ce,Be);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,at),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,zt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt),X===0&&w.generateMipmaps&&G.generateMipmap(wt),Fe.unbindTexture()},this.copyTextureToTexture3D=function(v,w,U=null,L=null,F=0){return v.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,L=arguments[1]||null,v=arguments[2],w=arguments[3],F=arguments[4]||0),xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,w,U,L,F)},this.initRenderTarget=function(v){He.get(v).__webglFramebuffer===void 0&&N.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?N.setTextureCube(v,0):v.isData3DTexture?N.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?N.setTexture2DArray(v,0):N.setTexture2D(v,0),Fe.unbindTexture()},this.resetState=function(){P=0,T=0,R=null,Fe.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const Ym={type:"change"},Uf={type:"start"},B0={type:"end"},ic=new dl,$m=new Vr,jA=Math.cos(70*f0.DEG2RAD),hn=new K,Yn=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nh=1e-6;class KA extends hM{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Uo.ROTATE,MIDDLE:Uo.DOLLY,RIGHT:Uo.PAN},this.touches={ONE:wo.ROTATE,TWO:wo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new tr,this._lastTargetPosition=new K,this._quat=new tr().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Em,this._sphericalDelta=new Em,this._scale=1,this._panOffset=new K,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new K,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=JA.bind(this),this._onPointerDown=ZA.bind(this),this._onPointerUp=QA.bind(this),this._onContextMenu=o1.bind(this),this._onMouseWheel=n1.bind(this),this._onKeyDown=i1.bind(this),this._onTouchStart=r1.bind(this),this._onTouchMove=s1.bind(this),this._onMouseDown=e1.bind(this),this._onMouseMove=t1.bind(this),this._interceptControlDown=a1.bind(this),this._interceptControlUp=l1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ym),this.update(),this.state=Ut.NONE}update(e=null){const t=this.object.position;hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Yn:n>Math.PI&&(n-=Yn),i<-Math.PI?i+=Yn:i>Math.PI&&(i-=Yn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=hn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new K(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new K(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ic.origin.copy(this.object.position),ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ic.direction))<jA?this.object.lookAt(this.target):($m.setFromNormalAndCoplanarPoint(this.object.up,this.target),ic.intersectPlane($m,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nh||this._lastTargetPosition.distanceToSquared(this.target)>nh?(this.dispatchEvent(Ym),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yn/60*this.autoRotateSpeed*e:Yn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){this.screenSpacePanning===!0?hn.setFromMatrixColumn(t,1):(hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;hn.copy(i).sub(this.target);let s=hn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new it,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ZA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function JA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function QA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(B0),this.state=Ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function e1(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Uo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ut.DOLLY;break;case Uo.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ut.ROTATE}break;case Uo.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(Uf)}function t1(r){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function n1(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(r.preventDefault(),this.dispatchEvent(Uf),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(B0))}function i1(r){this.enabled!==!1&&this._handleKeyDown(r)}function r1(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case wo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ut.TOUCH_ROTATE;break;case wo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case wo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ut.TOUCH_DOLLY_PAN;break;case wo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(Uf)}function s1(r){switch(this._trackPointer(r),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ut.NONE}}function o1(r){this.enabled!==!1&&r.preventDefault()}function a1(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l1(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class c1 extends P0{constructor(e){super(e),this.type=jn}parse(e){const o=function(R,S){switch(R){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(S||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(S||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(S||""))}},u=`
`,h=function(R,S,y){S=S||1024;let B=R.pos,z=-1,H=0,Z="",W=String.fromCharCode.apply(null,new Uint16Array(R.subarray(B,B+128)));for(;0>(z=W.indexOf(u))&&H<S&&B<R.byteLength;)Z+=W,H+=W.length,B+=128,W+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(B,B+128)));return-1<z?(y!==!1&&(R.pos+=H+z+1),Z+W.slice(0,z)):!1},d=function(R){const S=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,H={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let Z,W;for((R.pos>=R.byteLength||!(Z=h(R)))&&o(1,"no header found"),(W=Z.match(S))||o(3,"bad initial token"),H.valid|=1,H.programtype=W[1],H.string+=Z+`
`;Z=h(R),Z!==!1;){if(H.string+=Z+`
`,Z.charAt(0)==="#"){H.comments+=Z+`
`;continue}if((W=Z.match(y))&&(H.gamma=parseFloat(W[1])),(W=Z.match(I))&&(H.exposure=parseFloat(W[1])),(W=Z.match(B))&&(H.valid|=2,H.format=W[1]),(W=Z.match(z))&&(H.valid|=4,H.height=parseInt(W[1],10),H.width=parseInt(W[2],10)),H.valid&2&&H.valid&4)break}return H.valid&2||o(3,"missing format specifier"),H.valid&4||o(3,"missing image size specifier"),H},f=function(R,S,y){const I=S;if(I<8||I>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);I!==(R[2]<<8|R[3])&&o(3,"wrong scanline width");const B=new Uint8Array(4*S*y);B.length||o(4,"unable to allocate buffer space");let z=0,H=0;const Z=4*I,W=new Uint8Array(4),j=new Uint8Array(Z);let q=y;for(;q>0&&H<R.byteLength;){H+4>R.byteLength&&o(1),W[0]=R[H++],W[1]=R[H++],W[2]=R[H++],W[3]=R[H++],(W[0]!=2||W[1]!=2||(W[2]<<8|W[3])!=I)&&o(3,"bad rgbe scanline format");let V=0,O;for(;V<Z&&H<R.byteLength;){O=R[H++];const ye=O>128;if(ye&&(O-=128),(O===0||V+O>Z)&&o(3,"bad scanline data"),ye){const Ue=R[H++];for(let ne=0;ne<O;ne++)j[V++]=Ue}else j.set(R.subarray(H,H+O),V),V+=O,H+=O}const _e=I;for(let ye=0;ye<_e;ye++){let Ue=0;B[z]=j[ye+Ue],Ue+=I,B[z+1]=j[ye+Ue],Ue+=I,B[z+2]=j[ye+Ue],Ue+=I,B[z+3]=j[ye+Ue],z+=4}q--}return B},_=function(R,S,y,I){const B=R[S+3],z=Math.pow(2,B-128)/255;y[I+0]=R[S+0]*z,y[I+1]=R[S+1]*z,y[I+2]=R[S+2]*z,y[I+3]=1},g=function(R,S,y,I){const B=R[S+3],z=Math.pow(2,B-128)/255;y[I+0]=Ao.toHalfFloat(Math.min(R[S+0]*z,65504)),y[I+1]=Ao.toHalfFloat(Math.min(R[S+1]*z,65504)),y[I+2]=Ao.toHalfFloat(Math.min(R[S+2]*z,65504)),y[I+3]=Ao.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),M=p.width,b=p.height,E=f(m.subarray(m.pos),M,b);let C,P,T;switch(this.type){case bn:T=E.length/4;const R=new Float32Array(T*4);for(let y=0;y<T;y++)_(E,y*4,R,y*4);C=R,P=bn;break;case jn:T=E.length/4;const S=new Uint16Array(T*4);for(let y=0;y<T;y++)g(E,y*4,S,y*4);C=S,P=jn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:b,data:C,header:p.string,gamma:p.gamma,exposure:p.exposure,type:P}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case bn:case jn:o.colorSpace=pn,o.minFilter=un,o.magFilter=un,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}function jm(r,e){if(e===vE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ad||e===u0){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ad)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class u1 extends ds{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new m1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new w1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new C1(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=qa.extractUrlBase(e);o=qa.resolveURL(c,this.path)}else o=qa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ul(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===k0){try{o[yt.KHR_BINARY_GLTF]=new R1(e)}catch(h){i&&i(h);return}s=JSON.parse(o[yt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new G1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case yt.KHR_MATERIALS_UNLIT:o[h]=new f1;break;case yt.KHR_DRACO_MESH_COMPRESSION:o[h]=new P1(s,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:o[h]=new L1;break;case yt.KHR_MESH_QUANTIZATION:o[h]=new I1;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function h1(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class d1{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new rt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],pn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ZS(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new L0(u),c.distance=h;break;case"spot":c=new $S(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,pr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class f1{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return ts}extendParams(e,t,n){const i=[];e.color=new rt(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,rn))}return Promise.all(i)}}class p1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class m1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(a,a)}return Promise.all(s)}}class g1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class _1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class v1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new rt(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,rn)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class x1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class y1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new rt().setRGB(a[0],a[1],a[2],pn),Promise.all(s)}}class E1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class S1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new rt().setRGB(a[0],a[1],a[2],pn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,rn)),Promise.all(s)}}class M1{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class b1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class T1{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class w1{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class A1{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class D1{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class C1{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==yi.TRIANGLES&&c.mode!==yi.TRIANGLE_STRIP&&c.mode!==yi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const _ of h){const g=new ht,m=new K,p=new tr,M=new K(1,1,1),b=new TS(_.geometry,_.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,E),l.SCALE&&M.fromBufferAttribute(l.SCALE,E),b.setMatrixAt(E,g.compose(m,p,M));for(const E in l)if(E==="_COLOR_0"){const C=l[E];b.instanceColor=new Cd(C.array,C.itemSize,C.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,l[E]);$t.prototype.copy.call(b,_),this.parser.assignFinalMaterial(b),f.push(b)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const k0="glTF",Ea=12,Km={JSON:1313821514,BIN:5130562};class R1{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ea),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==k0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ea,s=new DataView(e,Ea);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Km.JSON){const c=new Uint8Array(e,Ea+o,a);this.content=n.decode(c)}else if(l===Km.BIN){const c=Ea+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class P1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Ld[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Ld[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=zo[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const _ in f.attributes){const g=f.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}h(f)},a,c,pn,d)})})}}class L1{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class I1{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}}class z0 extends pl{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,_=e*c,g=_-c,m=-2*f+3*d,p=f-d,M=1-m,b=p-d+h;for(let E=0;E!==a;E++){const C=o[g+E+a],P=o[g+E+l]*u,T=o[_+E+a],R=o[_+E]*u;s[E]=M*C+b*P+m*T+p*R}return s}}const F1=new tr;class N1 extends z0{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return F1.fromArray(s).normalize().toArray(s),s}}const yi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zm={9728:qn,9729:un,9984:e0,9985:pc,9986:Ca,9987:$i},Jm={33071:Yi,33648:Oc,10497:Zo},ih={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ld={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Br={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U1={CUBICSPLINE:void 0,LINEAR:ll,STEP:al},rh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function O1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Rf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dr})),r.DefaultMaterial}function Ss(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function pr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function B1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function k1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function z1(r){let e;const t=r.extensions&&r.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sh(t.attributes):e=r.indices+":"+sh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+sh(r.targets[n]);return e}function sh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Id(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function H1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const V1=new ht;class G1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new h1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new qS(this.options.manager):this.textureLoader=new JS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ul(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ss(s,a,i),pr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(qa.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ih[i.type],a=zo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new wn(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=ih[i.type],c=zo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(f&&f!==h){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(M);b||(g=new c(a,p*f,i.count*f/u),b=new yS(g,f/u),t.cache.add(M,b)),m=new bf(b,l,d%f/u,_)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),m=new wn(g,l,_);if(i.sparse!==void 0){const p=ih.SCALAR,M=zo[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,C=new M(o[1],b,i.sparse.count*p),P=new c(o[2],E,i.sparse.count*l);a!==null&&(m=new wn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,R=C.length;T<R;T++){const S=C[T];if(m.setX(S,P[T*l]),l>=2&&m.setY(S,P[T*l+1]),l>=3&&m.setZ(S,P[T*l+2]),l>=4&&m.setW(S,P[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Zm[d.magFilter]||un,u.minFilter=Zm[d.minFilter]||$i,u.wrapS=Jm[d.wrapS]||Zo,u.wrapT=Jm[d.wrapT]||Zo,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==qn&&u.minFilter!==un,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new En(g);m.needsUpdate=!0,d(m)}),t.load(qa.resolveURL(h,s.path),_,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),pr(h,o),h.userData.mimeType=o.mimeType||H1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[yt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new A0,Qi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new w0,Qi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Rf}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[yt.KHR_MATERIALS_UNLIT]){const h=i[yt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new rt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],pn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,rn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Fi);const u=s.alphaMode||rh.OPAQUE;if(u===rh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===rh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ts&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new it(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==ts&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ts){const h=s.emissiveFactor;a.emissive=new rt().setRGB(h[0],h[1],h[2],pn)}return s.emissiveTexture!==void 0&&o!==ts&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,rn)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),pr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ss(i,h,s),h})}createUniqueName(e){const t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Qm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=z1(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Qm(new gi,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?O1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,_=u.length;f<_;f++){const g=u[f],m=o[f];let p;const M=c[f];if(m.mode===yi.TRIANGLES||m.mode===yi.TRIANGLE_STRIP||m.mode===yi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new SS(g,M):new Xn(g,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===yi.TRIANGLE_STRIP?p.geometry=jm(p.geometry,u0):m.mode===yi.TRIANGLE_FAN&&(p.geometry=jm(p.geometry,Ad));else if(m.mode===yi.LINES)p=new DS(g,M);else if(m.mode===yi.LINE_STRIP)p=new Df(g,M);else if(m.mode===yi.LINE_LOOP)p=new CS(g,M);else if(m.mode===yi.POINTS)p=new RS(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&k1(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),pr(p,s),m.extensions&&Ss(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,_=h.length;f<_;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Ss(i,h[0],s),h[0];const d=new Sr;s.extensions&&Ss(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,_=h.length;f<_;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vn(f0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),pr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new ht;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wf(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],_=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let M=0,b=d.length;M<b;M++){const E=d[M],C=f[M],P=_[M],T=g[M],R=m[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const S=n._createAnimationTracks(E,C,P,T,R);if(S)for(let y=0;y<S.length;y++)p.push(S[y])}return new kS(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,V1)});for(let f=0,_=h.length;f<_;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new T0:c.length>1?u=new Sr:c.length===1?u=c[0]:u=new $t,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),pr(u,s),s.extensions&&Ss(n,u,s),s.matrix!==void 0){const h=new ht;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Sr;n.name&&(s.name=i.createUniqueName(n.name)),pr(s,n),n.extensions&&Ss(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Qi||d instanceof En)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Br[s.path]===Br.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Br[s.path]){case Br.weights:c=na;break;case Br.rotation:c=ia;break;case Br.position:case Br.scale:c=ra;break;default:switch(n.itemSize){case 1:c=na;break;case 2:case 3:default:c=ra;break}break}const u=i.interpolation!==void 0?U1[i.interpolation]:ll,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const _=new c(l[d]+"."+Br[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Id(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ia?N1:z0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function W1(r,e,t){const n=e.attributes,i=new Rr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new K(l[0],l[1],l[2]),new K(c[0],c[1],c[2])),a.normalized){const u=Id(zo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new K,l=new K;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const g=Id(zo[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new rr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Qm(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Ld[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Et.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),pr(r,e),W1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?B1(r,e.targets,t):r})}const oh=new WeakMap;class X1 extends ds{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new ul(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,rn,n).catch(n)}decodeDracoFile(e,t,n,i,s=pn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(oh.has(e)){const l=oh.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),oh.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new gi;e.index&&t.setIndex(new wn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new wn(o,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==rn)return;const n=new rt;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),Et.toWorkingColorSpace(n,rn),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ul(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=q1.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function q1(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const f=t(h,d,new Int8Array(l),c),_=f.attributes.map(g=>g.array.buffer);f.index&&_.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},_)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{h.destroy(d)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,f;const _=a.GetEncodedGeometryType(l);if(_===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(_===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const g={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let M,b;if(c.useUniqueIDs)b=u[m],M=a.GetAttributeByUniqueId(d,b);else{if(b=a.GetAttributeId(d,o[u[m]]),b===-1)continue;M=a.GetAttribute(d,b)}const E=i(o,a,d,m,p,M);m==="color"&&(E.vertexColorSpace=c.vertexColorSpace),g.attributes.push(E)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,d)),o.destroy(d),g}function n(o,a,l){const u=l.num_faces()*3,h=u*4,d=o._malloc(h);a.GetTrianglesUInt32Array(l,h,d);const f=new Uint32Array(o.HEAPF32.buffer,d,u).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,u,h){const d=h.num_components(),_=l.num_points()*d,g=_*u.BYTES_PER_ELEMENT,m=s(o,u),p=o._malloc(g);a.GetAttributeDataArrayForAllPoints(l,h,m,g,p);const M=new u(o.HEAPF32.buffer,p,_).slice();return o._free(p),{name:c,array:M,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var bi=Uint8Array,Co=Uint16Array,Y1=Int32Array,H0=new bi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),V0=new bi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$1=new bi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),G0=function(r,e){for(var t=new Co(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new Y1(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},W0=G0(H0,2),X0=W0.b,j1=W0.r;X0[28]=258,j1[258]=28;var K1=G0(V0,0),Z1=K1.b,Fd=new Co(32768);for(var Gt=0;Gt<32768;++Gt){var kr=(Gt&43690)>>1|(Gt&21845)<<1;kr=(kr&52428)>>2|(kr&13107)<<2,kr=(kr&61680)>>4|(kr&3855)<<4,Fd[Gt]=((kr&65280)>>8|(kr&255)<<8)>>1}var Ya=function(r,e,t){for(var n=r.length,i=0,s=new Co(e);i<n;++i)r[i]&&++s[r[i]-1];var o=new Co(e);for(i=1;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new Co(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],u=e-r[i],h=o[r[i]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[Fd[h]>>l]=c}else for(a=new Co(n),i=0;i<n;++i)r[i]&&(a[i]=Fd[o[r[i]-1]++]>>15-r[i]);return a},ml=new bi(288);for(var Gt=0;Gt<144;++Gt)ml[Gt]=8;for(var Gt=144;Gt<256;++Gt)ml[Gt]=9;for(var Gt=256;Gt<280;++Gt)ml[Gt]=7;for(var Gt=280;Gt<288;++Gt)ml[Gt]=8;var q0=new bi(32);for(var Gt=0;Gt<32;++Gt)q0[Gt]=5;var J1=Ya(ml,9,1),Q1=Ya(q0,5,1),ah=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Pi=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},lh=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},eD=function(r){return(r+7)/8|0},tD=function(r,e,t){return(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length),new bi(r.subarray(e,t))},nD=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ii=function(r,e,t){var n=new Error(e||nD[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,Ii),!t)throw n;return n},iD=function(r,e,t,n){var i=r.length,s=n?n.length:0;if(!i||e.f&&!e.l)return t||new bi(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new bi(i*3));var c=function(st){var je=t.length;if(st>je){var Xe=new bi(Math.max(je*2,st));Xe.set(t),t=Xe}},u=e.f||0,h=e.p||0,d=e.b||0,f=e.l,_=e.d,g=e.m,m=e.n,p=i*8;do{if(!f){u=Pi(r,h,1);var M=Pi(r,h+1,3);if(h+=3,M)if(M==1)f=J1,_=Q1,g=9,m=5;else if(M==2){var P=Pi(r,h,31)+257,T=Pi(r,h+10,15)+4,R=P+Pi(r,h+5,31)+1;h+=14;for(var S=new bi(R),y=new bi(19),I=0;I<T;++I)y[$1[I]]=Pi(r,h+I*3,7);h+=T*3;for(var B=ah(y),z=(1<<B)-1,H=Ya(y,B,1),I=0;I<R;){var Z=H[Pi(r,h,z)];h+=Z&15;var b=Z>>4;if(b<16)S[I++]=b;else{var W=0,j=0;for(b==16?(j=3+Pi(r,h,3),h+=2,W=S[I-1]):b==17?(j=3+Pi(r,h,7),h+=3):b==18&&(j=11+Pi(r,h,127),h+=7);j--;)S[I++]=W}}var q=S.subarray(0,P),V=S.subarray(P);g=ah(q),m=ah(V),f=Ya(q,g,1),_=Ya(V,m,1)}else Ii(1);else{var b=eD(h)+4,E=r[b-4]|r[b-3]<<8,C=b+E;if(C>i){l&&Ii(0);break}a&&c(d+E),t.set(r.subarray(b,C),d),e.b=d+=E,e.p=h=C*8,e.f=u;continue}if(h>p){l&&Ii(0);break}}a&&c(d+131072);for(var O=(1<<g)-1,_e=(1<<m)-1,ye=h;;ye=h){var W=f[lh(r,h)&O],Ue=W>>4;if(h+=W&15,h>p){l&&Ii(0);break}if(W||Ii(2),Ue<256)t[d++]=Ue;else if(Ue==256){ye=h,f=null;break}else{var ne=Ue-254;if(Ue>264){var I=Ue-257,se=H0[I];ne=Pi(r,h,(1<<se)-1)+X0[I],h+=se}var me=_[lh(r,h)&_e],pe=me>>4;me||Ii(3),h+=me&15;var V=Z1[pe];if(pe>3){var se=V0[pe];V+=lh(r,h)&(1<<se)-1,h+=se}if(h>p){l&&Ii(0);break}a&&c(d+131072);var Le=d+ne;if(d<V){var ze=s-V,Ze=Math.min(V,Le);for(ze+d<0&&Ii(3);d<Ze;++d)t[d]=n[ze+d]}for(;d<Le;++d)t[d]=t[d-V]}}e.l=f,e.p=ye,e.b=d,e.f=u,f&&(u=1,e.m=g,e.d=_,e.n=m)}while(!u);return d!=t.length&&o?tD(t,0,d):t.subarray(0,d)},rD=new bi(0),sD=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&Ii(6,"invalid zlib data"),(r[1]>>5&1)==+!e&&Ii(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function rc(r,e){return iD(r.subarray(sD(r,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var oD=typeof TextDecoder<"u"&&new TextDecoder,aD=0;try{oD.decode(rD,{stream:!0}),aD=1}catch{}class lD extends P0{constructor(e){super(e),this.type=jn}parse(e){const S=Math.pow(2.7182818,2.2);function y(x,D){let v=0;for(let U=0;U<65536;++U)(U==0||x[U>>3]&1<<(U&7))&&(D[v++]=U);const w=v-1;for(;v<65536;)D[v++]=0;return w}function I(x){for(let D=0;D<16384;D++)x[D]={},x[D].len=0,x[D].lit=0,x[D].p=null}const B={l:0,c:0,lc:0};function z(x,D,v,w,U){for(;v<x;)D=D<<8|Ie(w,U),v+=8;v-=x,B.l=D>>v&(1<<x)-1,B.c=D,B.lc=v}const H=new Array(59);function Z(x){for(let v=0;v<=58;++v)H[v]=0;for(let v=0;v<65537;++v)H[x[v]]+=1;let D=0;for(let v=58;v>0;--v){const w=D+H[v]>>1;H[v]=D,D=w}for(let v=0;v<65537;++v){const w=x[v];w>0&&(x[v]=w|H[w]++<<6)}}function W(x,D,v,w,U,L){const F=D;let X=0,Y=0;for(;w<=U;w++){if(F.value-D.value>v)return!1;z(6,X,Y,x,F);const J=B.l;if(X=B.c,Y=B.lc,L[w]=J,J==63){if(F.value-D.value>v)throw new Error("Something wrong with hufUnpackEncTable");z(8,X,Y,x,F);let Q=B.l+6;if(X=B.c,Y=B.lc,w+Q>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Q--;)L[w++]=0;w--}else if(J>=59){let Q=J-59+2;if(w+Q>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Q--;)L[w++]=0;w--}}Z(L)}function j(x){return x&63}function q(x){return x>>6}function V(x,D,v,w){for(;D<=v;D++){const U=q(x[D]),L=j(x[D]);if(U>>L)throw new Error("Invalid table entry");if(L>14){const F=w[U>>L-14];if(F.len)throw new Error("Invalid table entry");if(F.lit++,F.p){const X=F.p;F.p=new Array(F.lit);for(let Y=0;Y<F.lit-1;++Y)F.p[Y]=X[Y]}else F.p=new Array(1);F.p[F.lit-1]=D}else if(L){let F=0;for(let X=1<<14-L;X>0;X--){const Y=w[(U<<14-L)+F];if(Y.len||Y.p)throw new Error("Invalid table entry");Y.len=L,Y.lit=D,F++}}}return!0}const O={c:0,lc:0};function _e(x,D,v,w){x=x<<8|Ie(v,w),D+=8,O.c=x,O.lc=D}const ye={c:0,lc:0};function Ue(x,D,v,w,U,L,F,X,Y){if(x==D){w<8&&(_e(v,w,U,L),v=O.c,w=O.lc),w-=8;let J=v>>w;if(J=new Uint8Array([J])[0],X.value+J>Y)return!1;const Q=F[X.value-1];for(;J-- >0;)F[X.value++]=Q}else if(X.value<Y)F[X.value++]=x;else return!1;ye.c=v,ye.lc=w}function ne(x){return x&65535}function se(x){const D=ne(x);return D>32767?D-65536:D}const me={a:0,b:0};function pe(x,D){const v=se(x),U=se(D),L=v+(U&1)+(U>>1),F=L,X=L-U;me.a=F,me.b=X}function Le(x,D){const v=ne(x),w=ne(D),U=v-(w>>1)&65535,L=w+U-32768&65535;me.a=L,me.b=U}function ze(x,D,v,w,U,L,F){const X=F<16384,Y=v>U?U:v;let J=1,Q,ae;for(;J<=Y;)J<<=1;for(J>>=1,Q=J,J>>=1;J>=1;){ae=0;const ue=ae+L*(U-Q),oe=L*J,xe=L*Q,ge=w*J,Te=w*Q;let Be,qe,Ce,wt;for(;ae<=ue;ae+=xe){let Ye=ae;const at=ae+w*(v-Q);for(;Ye<=at;Ye+=Te){const kt=Ye+ge,zt=Ye+oe,qt=zt+ge;X?(pe(x[Ye+D],x[zt+D]),Be=me.a,Ce=me.b,pe(x[kt+D],x[qt+D]),qe=me.a,wt=me.b,pe(Be,qe),x[Ye+D]=me.a,x[kt+D]=me.b,pe(Ce,wt),x[zt+D]=me.a,x[qt+D]=me.b):(Le(x[Ye+D],x[zt+D]),Be=me.a,Ce=me.b,Le(x[kt+D],x[qt+D]),qe=me.a,wt=me.b,Le(Be,qe),x[Ye+D]=me.a,x[kt+D]=me.b,Le(Ce,wt),x[zt+D]=me.a,x[qt+D]=me.b)}if(v&J){const kt=Ye+oe;X?pe(x[Ye+D],x[kt+D]):Le(x[Ye+D],x[kt+D]),Be=me.a,x[kt+D]=me.b,x[Ye+D]=Be}}if(U&J){let Ye=ae;const at=ae+w*(v-Q);for(;Ye<=at;Ye+=Te){const kt=Ye+ge;X?pe(x[Ye+D],x[kt+D]):Le(x[Ye+D],x[kt+D]),Be=me.a,x[kt+D]=me.b,x[Ye+D]=Be}}Q=J,J>>=1}return ae}function Ze(x,D,v,w,U,L,F,X,Y){let J=0,Q=0;const ae=F,ue=Math.trunc(w.value+(U+7)/8);for(;w.value<ue;)for(_e(J,Q,v,w),J=O.c,Q=O.lc;Q>=14;){const xe=J>>Q-14&16383,ge=D[xe];if(ge.len)Q-=ge.len,Ue(ge.lit,L,J,Q,v,w,X,Y,ae),J=ye.c,Q=ye.lc;else{if(!ge.p)throw new Error("hufDecode issues");let Te;for(Te=0;Te<ge.lit;Te++){const Be=j(x[ge.p[Te]]);for(;Q<Be&&w.value<ue;)_e(J,Q,v,w),J=O.c,Q=O.lc;if(Q>=Be&&q(x[ge.p[Te]])==(J>>Q-Be&(1<<Be)-1)){Q-=Be,Ue(ge.p[Te],L,J,Q,v,w,X,Y,ae),J=ye.c,Q=ye.lc;break}}if(Te==ge.lit)throw new Error("hufDecode issues")}}const oe=8-U&7;for(J>>=oe,Q-=oe;Q>0;){const xe=D[J<<14-Q&16383];if(xe.len)Q-=xe.len,Ue(xe.lit,L,J,Q,v,w,X,Y,ae),J=ye.c,Q=ye.lc;else throw new Error("hufDecode issues")}return!0}function st(x,D,v,w,U,L){const F={value:0},X=v.value,Y=Ne(D,v),J=Ne(D,v);v.value+=4;const Q=Ne(D,v);if(v.value+=4,Y<0||Y>=65537||J<0||J>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ae=new Array(65537),ue=new Array(16384);I(ue);const oe=w-(v.value-X);if(W(x,v,oe,Y,J,ae),Q>8*(w-(v.value-X)))throw new Error("Something wrong with hufUncompress");V(ae,Y,J,ue),Ze(ae,ue,x,v,Q,J,L,U,F)}function je(x,D,v){for(let w=0;w<v;++w)D[w]=x[D[w]]}function Xe(x){for(let D=1;D<x.length;D++){const v=x[D-1]+x[D]-128;x[D]=v}}function G(x,D){let v=0,w=Math.floor((x.length+1)/2),U=0;const L=x.length-1;for(;!(U>L||(D[U++]=x[v++],U>L));)D[U++]=x[w++]}function Dt(x){let D=x.byteLength;const v=new Array;let w=0;const U=new DataView(x);for(;D>0;){const L=U.getInt8(w++);if(L<0){const F=-L;D-=F+1;for(let X=0;X<F;X++)v.push(U.getUint8(w++))}else{const F=L;D-=2;const X=U.getUint8(w++);for(let Y=0;Y<F+1;Y++)v.push(X)}}return v}function Je(x,D,v,w,U,L){let F=new DataView(L.buffer);const X=v[x.idx[0]].width,Y=v[x.idx[0]].height,J=3,Q=Math.floor(X/8),ae=Math.ceil(X/8),ue=Math.ceil(Y/8),oe=X-(ae-1)*8,xe=Y-(ue-1)*8,ge={value:0},Te=new Array(J),Be=new Array(J),qe=new Array(J),Ce=new Array(J),wt=new Array(J);for(let at=0;at<J;++at)wt[at]=D[x.idx[at]],Te[at]=at<1?0:Te[at-1]+ae*ue,Be[at]=new Float32Array(64),qe[at]=new Uint16Array(64),Ce[at]=new Uint16Array(ae*64);for(let at=0;at<ue;++at){let kt=8;at==ue-1&&(kt=xe);let zt=8;for(let $e=0;$e<ae;++$e){$e==ae-1&&(zt=oe);for(let mt=0;mt<J;++mt)qe[mt].fill(0),qe[mt][0]=U[Te[mt]++],ee(ge,w,qe[mt]),Fe(qe[mt],Be[mt]),xt(Be[mt]);He(Be);for(let mt=0;mt<J;++mt)N(Be[mt],Ce[mt],$e*64)}let qt=0;for(let $e=0;$e<J;++$e){const mt=v[x.idx[$e]].type;for(let Jt=8*at;Jt<8*at+kt;++Jt){qt=wt[$e][Jt];for(let tn=0;tn<Q;++tn){const Vt=tn*64+(Jt&7)*8;F.setUint16(qt+0*2*mt,Ce[$e][Vt+0],!0),F.setUint16(qt+1*2*mt,Ce[$e][Vt+1],!0),F.setUint16(qt+2*2*mt,Ce[$e][Vt+2],!0),F.setUint16(qt+3*2*mt,Ce[$e][Vt+3],!0),F.setUint16(qt+4*2*mt,Ce[$e][Vt+4],!0),F.setUint16(qt+5*2*mt,Ce[$e][Vt+5],!0),F.setUint16(qt+6*2*mt,Ce[$e][Vt+6],!0),F.setUint16(qt+7*2*mt,Ce[$e][Vt+7],!0),qt+=8*2*mt}}if(Q!=ae)for(let Jt=8*at;Jt<8*at+kt;++Jt){const tn=wt[$e][Jt]+8*Q*2*mt,Vt=Q*64+(Jt&7)*8;for(let Pr=0;Pr<zt;++Pr)F.setUint16(tn+Pr*2*mt,Ce[$e][Vt+Pr],!0)}}}const Ye=new Uint16Array(X);F=new DataView(L.buffer);for(let at=0;at<J;++at){v[x.idx[at]].decoded=!0;const kt=v[x.idx[at]].type;if(v[at].type==2)for(let zt=0;zt<Y;++zt){const qt=wt[at][zt];for(let $e=0;$e<X;++$e)Ye[$e]=F.getUint16(qt+$e*2*kt,!0);for(let $e=0;$e<X;++$e)F.setFloat32(qt+$e*2*kt,ie(Ye[$e]),!0)}}}function ee(x,D,v){let w,U=1;for(;U<64;)w=D[x.value],w==65280?U=64:w>>8==255?U+=w&255:(v[U]=w,U++),x.value++}function Fe(x,D){D[0]=ie(x[0]),D[1]=ie(x[1]),D[2]=ie(x[5]),D[3]=ie(x[6]),D[4]=ie(x[14]),D[5]=ie(x[15]),D[6]=ie(x[27]),D[7]=ie(x[28]),D[8]=ie(x[2]),D[9]=ie(x[4]),D[10]=ie(x[7]),D[11]=ie(x[13]),D[12]=ie(x[16]),D[13]=ie(x[26]),D[14]=ie(x[29]),D[15]=ie(x[42]),D[16]=ie(x[3]),D[17]=ie(x[8]),D[18]=ie(x[12]),D[19]=ie(x[17]),D[20]=ie(x[25]),D[21]=ie(x[30]),D[22]=ie(x[41]),D[23]=ie(x[43]),D[24]=ie(x[9]),D[25]=ie(x[11]),D[26]=ie(x[18]),D[27]=ie(x[24]),D[28]=ie(x[31]),D[29]=ie(x[40]),D[30]=ie(x[44]),D[31]=ie(x[53]),D[32]=ie(x[10]),D[33]=ie(x[19]),D[34]=ie(x[23]),D[35]=ie(x[32]),D[36]=ie(x[39]),D[37]=ie(x[45]),D[38]=ie(x[52]),D[39]=ie(x[54]),D[40]=ie(x[20]),D[41]=ie(x[22]),D[42]=ie(x[33]),D[43]=ie(x[38]),D[44]=ie(x[46]),D[45]=ie(x[51]),D[46]=ie(x[55]),D[47]=ie(x[60]),D[48]=ie(x[21]),D[49]=ie(x[34]),D[50]=ie(x[37]),D[51]=ie(x[47]),D[52]=ie(x[50]),D[53]=ie(x[56]),D[54]=ie(x[59]),D[55]=ie(x[61]),D[56]=ie(x[35]),D[57]=ie(x[36]),D[58]=ie(x[48]),D[59]=ie(x[49]),D[60]=ie(x[57]),D[61]=ie(x[58]),D[62]=ie(x[62]),D[63]=ie(x[63])}function xt(x){const D=.5*Math.cos(.7853975),v=.5*Math.cos(3.14159/16),w=.5*Math.cos(3.14159/8),U=.5*Math.cos(3*3.14159/16),L=.5*Math.cos(5*3.14159/16),F=.5*Math.cos(3*3.14159/8),X=.5*Math.cos(7*3.14159/16),Y=new Array(4),J=new Array(4),Q=new Array(4),ae=new Array(4);for(let ue=0;ue<8;++ue){const oe=ue*8;Y[0]=w*x[oe+2],Y[1]=F*x[oe+2],Y[2]=w*x[oe+6],Y[3]=F*x[oe+6],J[0]=v*x[oe+1]+U*x[oe+3]+L*x[oe+5]+X*x[oe+7],J[1]=U*x[oe+1]-X*x[oe+3]-v*x[oe+5]-L*x[oe+7],J[2]=L*x[oe+1]-v*x[oe+3]+X*x[oe+5]+U*x[oe+7],J[3]=X*x[oe+1]-L*x[oe+3]+U*x[oe+5]-v*x[oe+7],Q[0]=D*(x[oe+0]+x[oe+4]),Q[3]=D*(x[oe+0]-x[oe+4]),Q[1]=Y[0]+Y[3],Q[2]=Y[1]-Y[2],ae[0]=Q[0]+Q[1],ae[1]=Q[3]+Q[2],ae[2]=Q[3]-Q[2],ae[3]=Q[0]-Q[1],x[oe+0]=ae[0]+J[0],x[oe+1]=ae[1]+J[1],x[oe+2]=ae[2]+J[2],x[oe+3]=ae[3]+J[3],x[oe+4]=ae[3]-J[3],x[oe+5]=ae[2]-J[2],x[oe+6]=ae[1]-J[1],x[oe+7]=ae[0]-J[0]}for(let ue=0;ue<8;++ue)Y[0]=w*x[16+ue],Y[1]=F*x[16+ue],Y[2]=w*x[48+ue],Y[3]=F*x[48+ue],J[0]=v*x[8+ue]+U*x[24+ue]+L*x[40+ue]+X*x[56+ue],J[1]=U*x[8+ue]-X*x[24+ue]-v*x[40+ue]-L*x[56+ue],J[2]=L*x[8+ue]-v*x[24+ue]+X*x[40+ue]+U*x[56+ue],J[3]=X*x[8+ue]-L*x[24+ue]+U*x[40+ue]-v*x[56+ue],Q[0]=D*(x[ue]+x[32+ue]),Q[3]=D*(x[ue]-x[32+ue]),Q[1]=Y[0]+Y[3],Q[2]=Y[1]-Y[2],ae[0]=Q[0]+Q[1],ae[1]=Q[3]+Q[2],ae[2]=Q[3]-Q[2],ae[3]=Q[0]-Q[1],x[0+ue]=ae[0]+J[0],x[8+ue]=ae[1]+J[1],x[16+ue]=ae[2]+J[2],x[24+ue]=ae[3]+J[3],x[32+ue]=ae[3]-J[3],x[40+ue]=ae[2]-J[2],x[48+ue]=ae[1]-J[1],x[56+ue]=ae[0]-J[0]}function He(x){for(let D=0;D<64;++D){const v=x[0][D],w=x[1][D],U=x[2][D];x[0][D]=v+1.5747*U,x[1][D]=v-.1873*w-.4682*U,x[2][D]=v+1.8556*w}}function N(x,D,v){for(let w=0;w<64;++w)D[v+w]=Ao.toHalfFloat(A(x[w]))}function A(x){return x<=1?Math.sign(x)*Math.pow(Math.abs(x),2.2):Math.sign(x)*Math.pow(S,Math.abs(x)-1)}function te(x){return new DataView(x.array.buffer,x.offset.value,x.size)}function fe(x){const D=x.viewer.buffer.slice(x.offset.value,x.offset.value+x.size),v=new Uint8Array(Dt(D)),w=new Uint8Array(v.length);return Xe(v),G(v,w),new DataView(w.buffer)}function he(x){const D=x.array.slice(x.offset.value,x.offset.value+x.size),v=rc(D),w=new Uint8Array(v.length);return Xe(v),G(v,w),new DataView(w.buffer)}function ce(x){const D=x.viewer,v={value:x.offset.value},w=new Uint16Array(x.columns*x.lines*(x.inputChannels.length*x.type)),U=new Uint8Array(8192);let L=0;const F=new Array(x.inputChannels.length);for(let xe=0,ge=x.inputChannels.length;xe<ge;xe++)F[xe]={},F[xe].start=L,F[xe].end=F[xe].start,F[xe].nx=x.columns,F[xe].ny=x.lines,F[xe].size=x.type,L+=F[xe].nx*F[xe].ny*F[xe].size;const X=re(D,v),Y=re(D,v);if(Y>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(X<=Y)for(let xe=0;xe<Y-X+1;xe++)U[xe+X]=Qe(D,v);const J=new Uint16Array(65536),Q=y(U,J),ae=Ne(D,v);st(x.array,D,v,ae,w,L);for(let xe=0;xe<x.inputChannels.length;++xe){const ge=F[xe];for(let Te=0;Te<F[xe].size;++Te)ze(w,ge.start+Te,ge.nx,ge.size,ge.ny,ge.nx*ge.size,Q)}je(J,w,L);let ue=0;const oe=new Uint8Array(w.buffer.byteLength);for(let xe=0;xe<x.lines;xe++)for(let ge=0;ge<x.inputChannels.length;ge++){const Te=F[ge],Be=Te.nx*Te.size,qe=new Uint8Array(w.buffer,Te.end*2,Be*2);oe.set(qe,ue),ue+=Be*2,Te.end+=Be}return new DataView(oe.buffer)}function we(x){const D=x.array.slice(x.offset.value,x.offset.value+x.size),v=rc(D),w=x.inputChannels.length*x.lines*x.columns*x.totalBytes,U=new ArrayBuffer(w),L=new DataView(U);let F=0,X=0;const Y=new Array(4);for(let J=0;J<x.lines;J++)for(let Q=0;Q<x.inputChannels.length;Q++){let ae=0;switch(x.inputChannels[Q].pixelType){case 1:Y[0]=F,Y[1]=Y[0]+x.columns,F=Y[1]+x.columns;for(let oe=0;oe<x.columns;++oe){const xe=v[Y[0]++]<<8|v[Y[1]++];ae+=xe,L.setUint16(X,ae,!0),X+=2}break;case 2:Y[0]=F,Y[1]=Y[0]+x.columns,Y[2]=Y[1]+x.columns,F=Y[2]+x.columns;for(let oe=0;oe<x.columns;++oe){const xe=v[Y[0]++]<<24|v[Y[1]++]<<16|v[Y[2]++]<<8;ae+=xe,L.setUint32(X,ae,!0),X+=4}break}}return L}function Ee(x){const D=x.viewer,v={value:x.offset.value},w=new Uint8Array(x.columns*x.lines*(x.inputChannels.length*x.type*2)),U={version:Ve(D,v),unknownUncompressedSize:Ve(D,v),unknownCompressedSize:Ve(D,v),acCompressedSize:Ve(D,v),dcCompressedSize:Ve(D,v),rleCompressedSize:Ve(D,v),rleUncompressedSize:Ve(D,v),rleRawSize:Ve(D,v),totalAcUncompressedCount:Ve(D,v),totalDcUncompressedCount:Ve(D,v),acCompression:Ve(D,v)};if(U.version<2)throw new Error("EXRLoader.parse: "+Tt.compression+" version "+U.version+" is unsupported");const L=new Array;let F=re(D,v)-2;for(;F>0;){const ge=be(D.buffer,v),Te=Qe(D,v),Be=Te>>2&3,qe=(Te>>4)-1,Ce=new Int8Array([qe])[0],wt=Qe(D,v);L.push({name:ge,index:Ce,type:wt,compression:Be}),F-=ge.length+3}const X=Tt.channels,Y=new Array(x.inputChannels.length);for(let ge=0;ge<x.inputChannels.length;++ge){const Te=Y[ge]={},Be=X[ge];Te.name=Be.name,Te.compression=0,Te.decoded=!1,Te.type=Be.pixelType,Te.pLinear=Be.pLinear,Te.width=x.columns,Te.height=x.lines}const J={idx:new Array(3)};for(let ge=0;ge<x.inputChannels.length;++ge){const Te=Y[ge];for(let Be=0;Be<L.length;++Be){const qe=L[Be];Te.name==qe.name&&(Te.compression=qe.compression,qe.index>=0&&(J.idx[qe.index]=ge),Te.offset=ge)}}let Q,ae,ue;if(U.acCompressedSize>0)switch(U.acCompression){case 0:Q=new Uint16Array(U.totalAcUncompressedCount),st(x.array,D,v,U.acCompressedSize,Q,U.totalAcUncompressedCount);break;case 1:const ge=x.array.slice(v.value,v.value+U.totalAcUncompressedCount),Te=rc(ge);Q=new Uint16Array(Te.buffer),v.value+=U.totalAcUncompressedCount;break}if(U.dcCompressedSize>0){const ge={array:x.array,offset:v,size:U.dcCompressedSize};ae=new Uint16Array(he(ge).buffer),v.value+=U.dcCompressedSize}if(U.rleRawSize>0){const ge=x.array.slice(v.value,v.value+U.rleCompressedSize),Te=rc(ge);ue=Dt(Te.buffer),v.value+=U.rleCompressedSize}let oe=0;const xe=new Array(Y.length);for(let ge=0;ge<xe.length;++ge)xe[ge]=new Array;for(let ge=0;ge<x.lines;++ge)for(let Te=0;Te<Y.length;++Te)xe[Te].push(oe),oe+=Y[Te].width*x.type*2;Je(J,xe,Y,Q,ae,w);for(let ge=0;ge<Y.length;++ge){const Te=Y[ge];if(!Te.decoded)switch(Te.compression){case 2:let Be=0,qe=0;for(let Ce=0;Ce<x.lines;++Ce){let wt=xe[ge][Be];for(let Ye=0;Ye<Te.width;++Ye){for(let at=0;at<2*Te.type;++at)w[wt++]=ue[qe+at*Te.width*Te.height];qe++}Be++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(w.buffer)}function be(x,D){const v=new Uint8Array(x);let w=0;for(;v[D.value+w]!=0;)w+=1;const U=new TextDecoder().decode(v.slice(D.value,D.value+w));return D.value=D.value+w+1,U}function ot(x,D,v){const w=new TextDecoder().decode(new Uint8Array(x).slice(D.value,D.value+v));return D.value=D.value+v,w}function ve(x,D){const v=Oe(x,D),w=Ne(x,D);return[v,w]}function Se(x,D){const v=Ne(x,D),w=Ne(x,D);return[v,w]}function Oe(x,D){const v=x.getInt32(D.value,!0);return D.value=D.value+4,v}function Ne(x,D){const v=x.getUint32(D.value,!0);return D.value=D.value+4,v}function Ie(x,D){const v=x[D.value];return D.value=D.value+1,v}function Qe(x,D){const v=x.getUint8(D.value);return D.value=D.value+1,v}const Ve=function(x,D){let v;return"getBigInt64"in DataView.prototype?v=Number(x.getBigInt64(D.value,!0)):v=x.getUint32(D.value+4,!0)+Number(x.getUint32(D.value,!0)<<32),D.value+=8,v};function Ke(x,D){const v=x.getFloat32(D.value,!0);return D.value+=4,v}function k(x,D){return Ao.toHalfFloat(Ke(x,D))}function ie(x){const D=(x&31744)>>10,v=x&1023;return(x>>15?-1:1)*(D?D===31?v?NaN:1/0:Math.pow(2,D-15)*(1+v/1024):6103515625e-14*(v/1024))}function re(x,D){const v=x.getUint16(D.value,!0);return D.value+=2,v}function de(x,D){return ie(re(x,D))}function Me(x,D,v,w){const U=v.value,L=[];for(;v.value<U+w-1;){const F=be(D,v),X=Oe(x,v),Y=Qe(x,v);v.value+=3;const J=Oe(x,v),Q=Oe(x,v);L.push({name:F,pixelType:X,pLinear:Y,xSampling:J,ySampling:Q})}return v.value+=1,L}function Ae(x,D){const v=Ke(x,D),w=Ke(x,D),U=Ke(x,D),L=Ke(x,D),F=Ke(x,D),X=Ke(x,D),Y=Ke(x,D),J=Ke(x,D);return{redX:v,redY:w,greenX:U,greenY:L,blueX:F,blueY:X,whiteX:Y,whiteY:J}}function et(x,D){const v=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],w=Qe(x,D);return v[w]}function Mt(x,D){const v=Oe(x,D),w=Oe(x,D),U=Oe(x,D),L=Oe(x,D);return{xMin:v,yMin:w,xMax:U,yMax:L}}function Wt(x,D){const v=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],w=Qe(x,D);return v[w]}function Pe(x,D){const v=["ENVMAP_LATLONG","ENVMAP_CUBE"],w=Qe(x,D);return v[w]}function Ge(x,D){const v=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],w=["ROUND_DOWN","ROUND_UP"],U=Ne(x,D),L=Ne(x,D),F=Qe(x,D);return{xSize:U,ySize:L,levelMode:v[F&15],roundingMode:w[F>>4]}}function ct(x,D){const v=Ke(x,D),w=Ke(x,D);return[v,w]}function De(x,D){const v=Ke(x,D),w=Ke(x,D),U=Ke(x,D);return[v,w,U]}function nt(x,D,v,w,U){if(w==="string"||w==="stringvector"||w==="iccProfile")return ot(D,v,U);if(w==="chlist")return Me(x,D,v,U);if(w==="chromaticities")return Ae(x,v);if(w==="compression")return et(x,v);if(w==="box2i")return Mt(x,v);if(w==="envmap")return Pe(x,v);if(w==="tiledesc")return Ge(x,v);if(w==="lineOrder")return Wt(x,v);if(w==="float")return Ke(x,v);if(w==="v2f")return ct(x,v);if(w==="v3f")return De(x,v);if(w==="int")return Oe(x,v);if(w==="rational")return ve(x,v);if(w==="timecode")return Se(x,v);if(w==="preview")return v.value+=U,"skipped";v.value+=U}function We(x,D){const v=Math.log2(x);return D=="ROUND_DOWN"?Math.floor(v):Math.ceil(v)}function tt(x,D,v){let w=0;switch(x.levelMode){case"ONE_LEVEL":w=1;break;case"MIPMAP_LEVELS":w=We(Math.max(D,v),x.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return w}function Xt(x,D,v,w){const U=new Array(x);for(let L=0;L<x;L++){const F=1<<L;let X=D/F|0;w=="ROUND_UP"&&X*F<D&&(X+=1);const Y=Math.max(X,1);U[L]=(Y+v-1)/v|0}return U}function dt(){const x=this,D=x.offset,v={value:0};for(let w=0;w<x.tileCount;w++){const U=Oe(x.viewer,D),L=Oe(x.viewer,D);D.value+=8,x.size=Ne(x.viewer,D);const F=U*x.blockWidth,X=L*x.blockHeight;x.columns=F+x.blockWidth>x.width?x.width-F:x.blockWidth,x.lines=X+x.blockHeight>x.height?x.height-X:x.blockHeight;const Y=x.columns*x.totalBytes,Q=x.size<x.lines*Y?x.uncompress(x):te(x);D.value+=x.size;for(let ae=0;ae<x.lines;ae++){const ue=ae*x.columns*x.totalBytes;for(let oe=0;oe<x.inputChannels.length;oe++){const xe=Tt.channels[oe].name,ge=x.channelByteOffsets[xe]*x.columns,Te=x.decodeChannels[xe];if(Te===void 0)continue;v.value=ue+ge;const Be=(x.height-(1+X+ae))*x.outLineWidth;for(let qe=0;qe<x.columns;qe++){const Ce=Be+(qe+F)*x.outputChannels+Te;x.byteArray[Ce]=x.getter(Q,v)}}}}}function Ft(){const x=this,D=x.offset,v={value:0};for(let w=0;w<x.height/x.blockHeight;w++){const U=Oe(x.viewer,D)-Tt.dataWindow.yMin;x.size=Ne(x.viewer,D),x.lines=U+x.blockHeight>x.height?x.height-U:x.blockHeight;const L=x.columns*x.totalBytes,X=x.size<x.lines*L?x.uncompress(x):te(x);D.value+=x.size;for(let Y=0;Y<x.blockHeight;Y++){const J=w*x.blockHeight,Q=Y+x.scanOrder(J);if(Q>=x.height)continue;const ae=Y*L,ue=(x.height-1-Q)*x.outLineWidth;for(let oe=0;oe<x.inputChannels.length;oe++){const xe=Tt.channels[oe].name,ge=x.channelByteOffsets[xe]*x.columns,Te=x.decodeChannels[xe];if(Te!==void 0){v.value=ae+ge;for(let Be=0;Be<x.columns;Be++){const qe=ue+Be*x.outputChannels+Te;x.byteArray[qe]=x.getter(X,v)}}}}}}function en(x,D,v){const w={};if(x.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");w.version=x.getUint8(4);const U=x.getUint8(5);w.spec={singleTile:!!(U&2),longName:!!(U&4),deepFormat:!!(U&8),multiPart:!!(U&16)},v.value=8;let L=!0;for(;L;){const F=be(D,v);if(F==0)L=!1;else{const X=be(D,v),Y=Ne(x,v),J=nt(x,D,v,X,Y);J===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${X}'.`):w[F]=J}}if(U&-7)throw console.error("THREE.EXRHeader:",w),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return w}function Pt(x,D,v,w,U){const L={size:0,viewer:D,array:v,offset:w,width:x.dataWindow.xMax-x.dataWindow.xMin+1,height:x.dataWindow.yMax-x.dataWindow.yMin+1,inputChannels:x.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:pn};switch(x.compression){case"NO_COMPRESSION":L.blockHeight=1,L.uncompress=te;break;case"RLE_COMPRESSION":L.blockHeight=1,L.uncompress=fe;break;case"ZIPS_COMPRESSION":L.blockHeight=1,L.uncompress=he;break;case"ZIP_COMPRESSION":L.blockHeight=16,L.uncompress=he;break;case"PIZ_COMPRESSION":L.blockHeight=32,L.uncompress=ce;break;case"PXR24_COMPRESSION":L.blockHeight=16,L.uncompress=we;break;case"DWAA_COMPRESSION":L.blockHeight=32,L.uncompress=Ee;break;case"DWAB_COMPRESSION":L.blockHeight=256,L.uncompress=Ee;break;default:throw new Error("EXRLoader.parse: "+x.compression+" is unsupported")}const F={};for(const Q of x.channels)switch(Q.name){case"Y":case"R":case"G":case"B":case"A":F[Q.name]=!0,L.type=Q.pixelType}let X=!1;if(F.R&&F.G&&F.B)X=!F.A,L.outputChannels=4,L.decodeChannels={R:0,G:1,B:2,A:3};else if(F.Y)L.outputChannels=1,L.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(L.type==1)switch(U){case bn:L.getter=de;break;case jn:L.getter=re;break}else if(L.type==2)switch(U){case bn:L.getter=Ke;break;case jn:L.getter=k}else throw new Error("EXRLoader.parse: unsupported pixelType "+L.type+" for "+x.compression+".");L.columns=L.width;const Y=L.width*L.height*L.outputChannels;switch(U){case bn:L.byteArray=new Float32Array(Y),X&&L.byteArray.fill(1,0,Y);break;case jn:L.byteArray=new Uint16Array(Y),X&&L.byteArray.fill(15360,0,Y);break;default:console.error("THREE.EXRLoader: unsupported type: ",U);break}let J=0;for(const Q of x.channels)L.decodeChannels[Q.name]!==void 0&&(L.channelByteOffsets[Q.name]=J),J+=Q.pixelType*2;if(L.totalBytes=J,L.outLineWidth=L.width*L.outputChannels,x.lineOrder==="INCREASING_Y"?L.scanOrder=Q=>Q:L.scanOrder=Q=>L.height-1-Q,L.outputChannels==4?(L.format=di,L.colorSpace=pn):(L.format=Qc,L.colorSpace=vr),x.spec.singleTile){L.blockHeight=x.tiles.ySize,L.blockWidth=x.tiles.xSize;const Q=tt(x.tiles,L.width,L.height),ae=Xt(Q,L.width,x.tiles.xSize,x.tiles.roundingMode),ue=Xt(Q,L.height,x.tiles.ySize,x.tiles.roundingMode);L.tileCount=ae[0]*ue[0];for(let oe=0;oe<Q;oe++)for(let xe=0;xe<ue[oe];xe++)for(let ge=0;ge<ae[oe];ge++)Ve(D,w);L.decode=dt.bind(L)}else{L.blockWidth=L.width;const Q=Math.ceil(L.height/L.blockHeight);for(let ae=0;ae<Q;ae++)Ve(D,w);L.decode=Ft.bind(L)}return L}const Ct={value:0},bt=new DataView(e),Fn=new Uint8Array(e),Tt=en(bt,e,Ct),Zt=Pt(Tt,bt,Fn,Ct,this.type);return Zt.decode(),{header:Tt,width:Zt.width,height:Zt.height,data:Zt.byteArray,format:Zt.format,colorSpace:Zt.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=un,o.magFilter=un,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,i)}}const cD={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class iu{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const uD=new tu(-1,1,1,-1,0,1);class hD extends gi{constructor(){super(),this.setAttribute("position",new ti([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ti([0,2,0,0,2,0],2))}}const dD=new hD;class fD{constructor(e){this._mesh=new Xn(dD,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uD)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Y0 extends iu{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ir?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=S0.clone(e.uniforms),this.material=new ir({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new fD(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class eg extends iu{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class pD extends iu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class mD{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new it);this._width=n.width,this._height=n.height,t=new us(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Y0(cD),this.copyPass.material.blending=br,this.clock=new eM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}eg!==void 0&&(o instanceof eg?n=!0:o instanceof pD&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class gD extends iu{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}le.defaults({ease:"ease"});le.config({nullTargetWarn:!1,force3D:!1,autoSleep:60});le.registerPlugin(lt,jc);const Ei=new Ay({duration:1.2,easing:r=>r===1?1:1-Math.pow(2,-10*r),direction:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:1.5});Ei.on("scroll",r=>{});Ei.on("scroll",lt.update);le.ticker.add(r=>{Ei.raf(r*1e3)});le.ticker.lagSmoothing(0);console.log(` ██ ▄█▀ █    ██  ▄▄▄██▀▀▀██▓ ██▀███   ▄▄▄            ▄████▄   ▒█████  \r
 ██▄█▒  ██  ▓██▒   ▒██  ▓██▒▓██ ▒ ██▒▒████▄         ▒██▀ ▀█  ▒██▒  ██▒\r
▓███▄░ ▓██  ▒██░   ░██  ▒██▒▓██ ░▄█ ▒▒██  ▀█▄       ▒▓█    ▄ ▒██░  ██▒\r
▓██ █▄ ▓▓█  ░██░▓██▄██▓ ░██░▒██▀▀█▄  ░██▄▄▄▄██      ▒▓▓▄ ▄██▒▒██   ██░\r
▒██▒ █▄▒▒█████▓  ▓███▒  ░██░░██▓ ▒██▒ ▓█   ▓██▒ ██▓ ▒ ▓███▀ ░░ ████▓▒░\r
▒ ▒▒ ▓▒░▒▓▒ ▒ ▒  ▒▓▒▒░  ░▓  ░ ▒▓ ░▒▓░ ▒▒   ▓▒█░ ▒▓▒ ░ ░▒ ▒  ░░ ▒░▒░▒░ \r
░ ░▒ ▒░░░▒░ ░ ░  ▒ ░▒░   ▒ ░  ░▒ ░ ▒░  ▒   ▒▒ ░ ░▒    ░  ▒     ░ ▒ ▒░ \r
░ ░░ ░  ░░░ ░ ░  ░ ░ ░   ▒ ░  ░░   ░   ░   ▒    ░   ░        ░ ░ ░ ▒  \r
░  ░      ░      ░   ░   ░     ░           ░  ░  ░  ░ ░          ░ ░  \r
                                                 ░  ░                 `);function Nd(r){r.querySelectorAll("[text-split]").forEach(t=>{if(t.dataset.split==="true")return;t.dataset.split="true";const n=new jc(t,{type:"words,chars",charsClass:"char",wordsClass:"word"}),i=le.timeline({paused:!0});i.from(n.chars,{yPercent:118,duration:1.3,ease:"power4.inOut",delay:.1,stagger:{amount:.2}}),t.getAttribute("data-name")==="up-we-go"?i.play():lt.create({trigger:t,start:"top bottom",onEnter:()=>i.play()}),le.set(t,{opacity:1})})}function $0(r){le.set(r.querySelectorAll("[text-split]"),{opacity:1}),r.querySelectorAll("[letters-slide-up]").forEach(e=>{const t=e.querySelectorAll(".char"),n=le.timeline({paused:!0});n.to(t,{yPercent:-118,duration:1.3,ease:"power4.inOut",stagger:{amount:.2}}),n.play()})}function tg(r){if(!r)return;const e=$(r).find(".clip-up"),t=$(r).find(".clip-up-pol");e.length&&le.fromTo(e,{height:"0%",width:"80%"},{height:"100%",width:"100%",duration:1.4,ease:"power4.inOut"}),t.length&&le.fromTo(t,{height:"0%"},{height:"100%",duration:1.2,delay:.4,ease:"power4.inOut"})}function ng(r){if(!r)return;const e=$(r).find("img:not(.link_btn_arrow, .client_logo, .logo), .fade_extra:not(.link_btn_arrow, .client_logo, .logo)");le.set(e,{opacity:0,y:"10vh"}),e.length&&le.to(e,{opacity:1,y:"0vh",duration:1,delay:.6,ease:"power4.out"})}function Ud(r){if(!r)return;const e=$(r).find(".fade:not(.logo)");le.set(e,{opacity:0}),e.length&&le.to(e,{opacity:1,duration:.6,delay:.6,ease:"power4.inOut"})}function j0(r){if(!r)return;const e=$(r).find("img:not(.logo), .fade_extra:not(.logo), .fade:not(.logo)");e.length&&(le.to(e,{opacity:0,duration:.2,delay:.5,ease:"power2.in"}),le.to(e,{y:"-20vh",duration:.4,delay:.4,ease:"power4.in"}))}function ig(r){if(!r)return;[".e",".x",".a",".m",".p",".l",".e2"].forEach((t,n)=>{const i=$(r).find(`.logo${t}`);le.set(i,{yPercent:200,opacity:1}),le.to(i,{yPercent:0,opacity:1,duration:.8,ease:"power4.out",delay:.7+n*.03})})}function _D(r){if(!r)return;[".e",".x",".a",".m",".p",".l",".e2"].forEach((t,n)=>{const i=$(r).find(`.logo${t}`);le.set(i,{yPercent:0}),le.to(i,{yPercent:-100,duration:.6,ease:"power4.in",delay:.4+n*.02})})}function K0(){document.querySelectorAll(".clip-up-pol").forEach((e,t)=>{const n=e.querySelectorAll(".pol-mask");if(n.length<2)return;let i=0,s=10;const o=50,a=[...n].findIndex(c=>c.classList.contains("start-visible"));i=a!==-1?a:0,le.set(n,{height:"0%",zIndex:1}),le.set(n[i],{height:"100%",zIndex:s});function l(){n[i];let c=(i+1)%n.length,u=n[c],h=u.querySelector(".polaroid-image");s++,s>o&&(n.forEach(_=>le.set(_,{zIndex:1})),s=10);const d=le.timeline();le.set(u,{zIndex:s,height:"0%"});let f=t===1?.3:0;d.to(u,{height:"100%",duration:1.2,ease:"power4.out",delay:f}),h&&d.fromTo(h,{scale:1.1},{scale:1.01,duration:2,ease:"power4.out",delay:f},0),i=c}setInterval(l,5e3)})}function vD(){document.querySelectorAll(".clip-up-pol").forEach(r=>{const e=r.querySelectorAll(".pol-mask");if(e.length<2)return;const t=[...e].findIndex(i=>i.classList.contains("start-visible")),n=t!==-1?t:0;le.set(e,{height:"0%",zIndex:1}),le.set(e[n],{height:"100%",zIndex:10})})}document.addEventListener("DOMContentLoaded",K0);Ys.hooks.after(()=>{vD(),K0()});function Od(){const r=document.querySelector(".menu_underlay"),e=document.querySelector(".drop_downmenu_group");if(!r||!e)return;const t=e;e.querySelectorAll("[text-split]").forEach(n=>{const i=n.querySelectorAll(".char");le.killTweensOf(i),le.set(i,{yPercent:0})}),r.style.display="block",le.to(r,{opacity:1,duration:.4,ease:"power2.out"}),e.style.display="grid",le.set(e,{opacity:0,y:"3vw"}),le.to(e,{opacity:1,y:"0vw",duration:1,ease:"power4.inOut",onStart:()=>{Ud(t),Nd(t)}})}function Bd(){const r=document.querySelector(".menu_underlay"),e=document.querySelector(".drop_downmenu_group");if(!r||!e)return;const t=e;j0(t),$0(t),setTimeout(()=>{le.to(e,{opacity:0,duration:.3,ease:"power2.out"})},800),le.to(r,{opacity:0,duration:.3,delay:.8,ease:"power2.out",onComplete:()=>{e.style.display="none",r.style.display="none",xD()}})}function xD(){const r=document.querySelector(".drop_downmenu_group"),e=document.querySelector(".menu_underlay");!r||!e||(le.set(r,{opacity:0,y:"3vw",display:"none"}),le.set(e,{opacity:0,display:"none"}),r.querySelectorAll(".fade, .fade_extra").forEach(t=>{le.set(t,{opacity:0,y:0})}),r.querySelectorAll(".link_btn_arrow").forEach(t=>{le.set(t,{opacity:0,y:0})}),r.querySelectorAll("[text-split]").forEach(t=>{le.set(t,{opacity:1}),le.set(t.querySelectorAll(".char"),{yPercent:0})}))}function kd(){const r=document.getElementById("open_mobile"),e=document.getElementById("close_mobile"),t=document.querySelectorAll(".mobmenu_link"),n=document.querySelector(".mobile_menu");if(!r||!e||!n)return;function i(){Ei.stop(),le.set(n,{display:"flex",opacity:0}),le.to(n,{opacity:1,duration:.4,ease:"power2.out"})}function s(){le.to(n,{opacity:0,duration:.4,ease:"power2.inOut",onComplete:()=>{le.set(n,{display:"none"}),Ei.start()}})}r.addEventListener("click",i),e.addEventListener("click",s),t.forEach(o=>o.addEventListener("click",s))}function yD(){if(window.innerWidth<992)return;const r=document.querySelectorAll(".pimage:not(.is-leaving)");r.length&&r.forEach(e=>{le.to(e,{yPercent:10,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:1}})})}function ED(r){const e=r.querySelectorAll(".pimage");e.length&&le.to(e,{yPercent:-5,duration:.8,ease:"power4.in"})}function SD(r){r.querySelectorAll(".pimage").forEach((t,n)=>{const i=t.cloneNode(!0),s=getComputedStyle(t);i.style.transform=s.transform,i.style.position="absolute",i.style.top=t.offsetTop+"px",i.style.left=t.offsetLeft+"px",i.style.width=t.offsetWidth+"px",i.style.height=t.offsetHeight+"px",i.style.pointerEvents="none",t.parentNode.appendChild(i),requestAnimationFrame(()=>{t.style.visibility="hidden"}),t.dataset._parallaxCloneId=n})}function MD(){$(".page_link").removeClass("w--current"),$(".page_link").each(function(){$(this).attr("href")===window.location.pathname&&$(this).addClass("w--current")})}function ch(r){const e=r.querySelectorAll(".link_list.w-dyn-list");e.length&&e.forEach(t=>{const n=t.querySelectorAll(".what_we_do_list.w-dyn-items .listing_large_link_group.w-dyn-item");n.length&&n.forEach((i,s)=>{const o=i.querySelector(".listing_large_links.comma"),a=i.querySelector(".listing_large_links.plus");o&&(o.style.display="none"),a&&(a.style.display="none"),s<n.length-2&&o&&(o.style.display="inline"),s===n.length-2&&a&&(a.style.display="inline")})})}function rg(){function r(e,t,n){let i=document.querySelector(e),s=document.querySelector(t),o=document.querySelector(n);if(!s||!i)return;let a=parseInt(i.textContent.trim(),10),l=s.textContent.trim(),c=o?o.textContent.trim().toLowerCase()==="true":!1;if(!l)return;let u=document.querySelector(".work_detail_holder.w-dyn-list");if(!u)return;let h=u.querySelectorAll(".work_detail_grid.w-dyn-items .work_detail_item.w-dyn-item");if(a>h.length||a<1)return;let d=h[a-1],f=d.querySelector(".bg-vid-detail"),_=d.querySelector(".work_phone_video_holder"),g=_?_.querySelector(".phone_mask"):null;console.log(`🎯 Targeting item ${a}:`,{phoneFlag:c,bgVidTargetFound:!!f,phoneVideoHolderFound:!!_,phoneMaskFound:!!g});let m=`
      <div style="width: 100%; height: 100%;" class="w-background-video w-background-video-atom">
          <video playsinline loop muted autoplay data-wf-ignore="true" data-object-fit="cover">
              <source src="${l}" data-wf-ignore="true"/>
          </video>
      </div>`;c&&g?(g.innerHTML=m,_.style.display="flex",f&&(f.style.display="none")):f&&(f.innerHTML=m,f.style.display="block",_&&(_.style.display="none"))}r("#vid-position-1","#vid-data-1","#vid-phone-1"),r("#vid-position-2","#vid-data-2","#vid-phone-2"),r("#vid-position-3","#vid-data-3","#vid-phone-3")}function mo(){document.querySelectorAll(".work_list.w-dyn-list").forEach(t=>{t.querySelectorAll(".work_listing_list.w-dyn-items .work_listing_item.w-dyn-item").forEach((i,s)=>{const o=i.querySelector(".label");if(o){const a=String(s+1).padStart(2,"0");o.textContent=`( ${a} )`}})});const e=document.querySelector(".work_list_total");if(e){const t=document.querySelectorAll(".work_list.w-dyn-list .work_listing_list.w-dyn-items .work_listing_item.w-dyn-item").length;e.textContent=String(t).padStart(2,"0")}}function sg(){document.querySelectorAll(".aos").forEach(r=>{le.set(r,{opacity:0}),le.to(r,{opacity:1,duration:.6,ease:"power2.out",scrollTrigger:{trigger:r,start:"top 70%",toggleActions:"play none none none"}})})}function og(){const r=Array.from(document.querySelectorAll(".client_slider_logo_list.w-dyn-list"));if(!r.length)return;const e=200,t=2;r.reverse().forEach((n,i)=>{var h;const s=n.querySelector(".client_slider_logo_items.w-dyn-items");if(!s)return;const o=s.querySelectorAll(".client_slider_logo_item.w-dyn-item");if(!o.length)return;o.forEach(d=>{const f=d.querySelector(".client_logo");f&&le.set(f,{opacity:0,rotateX:-180})});const a=(h=o[0])==null?void 0:h.querySelector(".client_logo");a&&le.set(a,{opacity:1,rotateX:0});let l=0,c=1;function u(){const d=o[l],f=(l+1)%o.length,_=o[f],g=d.querySelector(".client_logo"),m=_.querySelector(".client_logo");if(!g||!m)return;const p=-90-c*180,M=-180-c*180,b=c>=t&&(c-t)%3===0;le.set(_,{rotateX:p});const E=le.timeline();E.to(d,{rotateX:p,duration:.6,ease:"power2.in",onComplete:()=>{if(le.set(g,{opacity:0}),le.set(m,{opacity:1}),b){const C=le.getProperty(n,"scaleY")||1;le.set(n,{scaleY:C===-1?1:-1})}}}),E.to(_,{rotateX:M,duration:.6,ease:"power2.out"}),l=f,c++}for(let d=0;d<2;d++)setTimeout(()=>u(),0);setTimeout(()=>{setInterval(u,5e3)},e*i)})}function ag(){[{name:"Desktop",containerSelector:".full-width-image.w-dyn-list:not(.slider_mob)"},{name:"Mobile",containerSelector:".full-width-image.slider_mob.w-dyn-list"}].forEach(({name:e,containerSelector:t})=>{const n=document.querySelectorAll(`${t} .hero_slide`),i=document.querySelector(".slide_progress_bar");if(n.forEach((c,u)=>{c.getAttribute("order")}),n.length===0||!i)return;let s=0;const o=6;le.set(n,{zIndex:0}),n.forEach((c,u)=>{const h=c.querySelector(".clip-up img");h&&le.set(h,{opacity:u===0?1:0})}),setTimeout(()=>{const c=n[2];c&&(le.set(c,{opacity:0}),setTimeout(()=>{le.set(c,{opacity:1})},1e4))},1e3),le.set(n[0],{zIndex:2});function a(){const c=n[s],u=(s+1)%n.length,h=n[u],d=c.querySelector(".clip-up img"),f=h.querySelector(".clip-up img"),_=c.querySelector(".slide-title-holder-outer"),g=h.querySelector(".slide-title-holder-outer"),m=c.querySelector(".image-hero-slide1"),p=h.querySelector(".image-hero-slide1"),M=le.timeline();le.set([d,f],{zIndex:1}),le.set([_,g,m,p],{zIndex:3}),_&&M.to(_,{yPercent:-118,duration:1.3,ease:"power4.inOut",stagger:{amount:.2}},0),g&&le.set(g,{yPercent:118}),d&&f&&(M.to(d,{opacity:0,yPercent:-5,duration:3,ease:"power2.inOut"},0),M.fromTo(f,{opacity:0,yPercent:5,scale:1.05},{opacity:1,yPercent:0,scale:1,duration:1.2,ease:"power2.inOut"},.2)),m&&p&&(M.to(m,{opacity:0,duration:1.2,ease:"power2.inOut"},0),M.fromTo(p,{opacity:0},{opacity:1,duration:1.2,ease:"power2.inOut"},.2)),g&&M.to(g,{yPercent:0,duration:1.3,ease:"power4.inOut",stagger:{amount:.2}},.2),le.set(h,{zIndex:2}),le.set(c,{zIndex:0}),s=u}function l(){le.set(i,{width:"0%"}),le.to(i,{width:"100%",duration:o,ease:"linear",repeat:-1,onRepeat:()=>{a()}})}l()})}function lg(){const r=document.querySelectorAll(".slide-title-holder-outer");r.length&&(r.forEach(e=>{let t=e.children;if(!t.length)return;const i=window.matchMedia("(max-width: 767px)").matches?20:40;le.to(t,{x:"-100vw",duration:i,ease:"none",repeat:-1,onRepeat:function(){le.set(this.targets(),{x:"100vw"})}})}),r.forEach(e=>{le.to(e,{x:"-30vw",ease:"none",scrollTrigger:{trigger:".hero_slide",start:"top bottom",end:"bottom top",scrub:!0}})}))}function bD(){const r=document.querySelectorAll(".logo_group_holder");r.length&&r.forEach(e=>{const t=e.scrollWidth;le.to(e,{x:`-${t/2}px`,duration:60,ease:"none",repeat:-1})})}function TD(){const r=document.querySelectorAll(".logo_container");r.length&&r.forEach(e=>{le.to(e,{x:"-10vw",ease:"none",scrollTrigger:{trigger:e.closest(".client_logos"),start:"top bottom",end:"bottom top",scrub:!0}})})}function cg(){bD(),TD()}function Z0(){document.querySelectorAll(".nav_link").forEach(e=>{const t=e.querySelector(".link_btn_arrow");if(!t)return;const n=Array.from(e.children).filter(i=>!i.classList.contains("link_btn_arrow"));le.set(t,{opacity:0}),le.set(n,{x:0}),e.addEventListener("mouseenter",()=>{le.to(t,{opacity:1,duration:.3,ease:"power4.inOut"}),le.to(n,{x:"1.2vw",duration:.3,ease:"power4.inOut"})}),e.addEventListener("mouseleave",()=>{le.to(t,{opacity:0,duration:.3,ease:"power4.inOut"}),le.to(n,{x:"0vw",duration:.3,ease:"power4.inOut"})})})}function Ec(){document.querySelectorAll(".work_listing_item").forEach(e=>{const t=e.querySelector(".work-img");t&&(e.addEventListener("mouseenter",()=>{le.to(t,{scale:1,duration:.6,ease:"power1.out"})}),e.addEventListener("mouseleave",()=>{le.to(t,{scale:1.03,duration:.6,ease:"power1.out"})}))})}function J0(){document.querySelectorAll(".feature_work_home").forEach(e=>{const t=e.querySelector(".work-img");t&&(e.addEventListener("mouseenter",()=>{le.to(t,{scale:1,duration:.6,ease:"power1.out"})}),e.addEventListener("mouseleave",()=>{le.to(t,{scale:1.03,duration:.6,ease:"power1.out"})}))})}function yo(){let r=document.querySelector(".cursor"),e=r.querySelector("p"),t=document.querySelectorAll("[data-cursor]"),n=6,i=140,s=null,o="";if(!r||!e||!t.length)return;le.set(r,{opacity:0,xPercent:n,yPercent:i});let a=le.quickTo(r,"x",{ease:"power3"}),l=le.quickTo(r,"y",{ease:"power3"});const c=()=>r.offsetWidth+16;window.addEventListener("mousemove",u=>{let h=window.innerWidth,d=window.innerHeight,f=window.scrollY,_=u.clientX,g=u.clientY+f,m=n,p=i;if(_>h-c()&&(m=-100),g>f+d*.9&&(p=-120),s){let M=s.getAttribute("data-cursor");M!==o&&(e.innerHTML=M,o=M)}le.to(r,{xPercent:m,yPercent:p,duration:.9,ease:"power3"}),a(_),l(g-f)}),t.forEach(u=>{u.addEventListener("mouseenter",()=>{s=u;const h=u.getAttribute("data-cursor");le.to(r,{opacity:1,duration:.3,ease:"power2.out"}),h!==o&&(e.innerHTML=h,o=h)}),u.addEventListener("mouseleave",()=>{s=null,o="",le.to(r,{opacity:0,duration:.3,ease:"power2.out"})})})}function ug(){const r=document.querySelectorAll(".about_slide");r.length&&r.forEach((e,t)=>{const n=r[t+1],i=e.querySelector(".about_slide_left"),s=e.querySelector(".about_slide_right");if(!n)return;const o=le.timeline({scrollTrigger:{trigger:n,start:"top bottom",end:"top top",scrub:!0}});o.to(e,{scale:.98,y:"-2vh",ease:"none"},0),i&&o.to(i,{opacity:.2,ease:"none"},0),s&&o.to(s,{opacity:.2,ease:"none"},0)})}function Q0(){if(window.innerWidth<992)return;const r=document.querySelector(".footer"),e=document.querySelector(".footer_content");if(!r||!e)return;le.set(e,{autoAlpha:1,y:0});const t=le.fromTo(e,{y:"-20vh",autoAlpha:0},{y:"0vh",autoAlpha:1,ease:"none",paused:!0});requestAnimationFrame(()=>{setTimeout(()=>{r.getBoundingClientRect().height>0&&(lt.create({trigger:r,start:"top bottom",end:"+=800",scrub:!0,animation:t,onUpdate:s=>{t.progress(s.progress)}}),lt.refresh())},200)})}function wD(){document.querySelectorAll(".nav_link").forEach(e=>{e.addEventListener("mouseenter",()=>{le.to(e,{opacity:.8,duration:.3,ease:"power2.out"})}),e.addEventListener("mouseleave",()=>{le.to(e,{opacity:1,duration:.3,ease:"power2.out"})})})}function AD(){document.querySelectorAll(".h6.link").forEach(e=>{e.addEventListener("mouseenter",()=>{le.to(e,{opacity:.7,duration:.3,ease:"power2.out"})}),e.addEventListener("mouseleave",()=>{le.to(e,{opacity:1,duration:.3,ease:"power2.out"})})})}function DD(){wD(),AD()}function ev(){const r=document.querySelector(".home_hero");r&&setTimeout(()=>{var e;(e=lt.getById("home-hero-scroll"))==null||e.kill(),le.to(r,{y:"50vh",scale:.9,opacity:.7,ease:"none",scrollTrigger:{id:"home-hero-scroll",trigger:"#trigger_200",start:"top top",end:"bottom top",scrub:!0,invalidateOnRefresh:!0}})},200)}let uh=!1;function hg(){uh=!!sessionStorage.getItem("hasVisitedBefore"),uh?document.querySelectorAll(".intro_onetime").forEach(e=>{e.style.display="none"}):setTimeout(()=>{sessionStorage.setItem("hasVisitedBefore","true"),uh=!0},1e3)}function dg(){window.innerWidth<992||document.querySelectorAll("a").forEach(r=>{r.addEventListener("click",function(e){const t=r.getAttribute("href"),n=window.location.pathname;(t===n||t===window.location.href)&&(e.preventDefault(),Ys.go(t,"samePage"))})})}Ys.init({preventRunning:!0,prevent:({el:r})=>{const e=window.innerWidth<992,t=r==null?void 0:r.closest(".featured_work_mask, .work_titles.home");return e||t&&!e},transitions:[{name:"exampple-transition",once(r){var e;Nd(r.next.container),tg(r.next.container),Ud(r.next.container),ng(r.next.container),dg(),kd(),sg(),Z0(),ig(r.next.container),Q0(),DD(),Bf(),(e=document.getElementById("what-we-do-menu"))==null||e.addEventListener("click",Od),document.querySelectorAll(".cm, .menu_underlay").forEach(t=>{t.addEventListener("click",Bd)}),setTimeout(()=>{yD(),lt.refresh()},800),r.next.container.querySelector("#homepage")&&(console.log("on home page"),hg(),setTimeout(ag,100),lg(),setTimeout(og,2e3),setTimeout(J0,1e3),yo(),sv(),ev(),Of()),r.next.container.querySelector("#contact")&&console.log("contact page"),r.next.container.querySelector("#about")&&(cg(),ug()),r.next.container.querySelector("#what-we-do")&&setTimeout(()=>{ch(r.next.container),mo(),yo(),Ec()},0),r.next.container.querySelector("#what-we-do-detail")&&(mo(),yo(),Ec()),r.next.container.querySelector("#who-we-help-detail")&&(mo(),yo(),Ec()),r.next.container.querySelector("#work")&&setTimeout(rg,1e3),Ei.scrollTo(0,{duration:0,immediate:!0})},beforeLeave(r){return SD(r.current.container),ED(r.current.container),Ei.stop(),window.innerWidth<992?(window.location.href=r.trigger.href,!1):(window.Webflow&&window.Webflow.destroy(),$0(r.current.container),j0(r.current.container),_D(r.current.container),new Promise(e=>{setTimeout(()=>{document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden";const t=r.current.container.getBoundingClientRect();le.set(r.current.container,{position:"fixed",top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`,zIndex:1}),e()},25)}))},leave(r){},enter(r){return r.next.container.querySelectorAll(".pimage").forEach(e=>{le.to(e,{yPercent:10,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:1}})}),Nd(r.next.container),tg(r.next.container),Ud(r.next.container),ng(r.next.container),ig(r.next.container),r.next.container.querySelector("#homepage")&&(hg(),setTimeout(ag,100),lg(),setTimeout(yo,2e3)),r.next.container.querySelector("#what-we-do")&&setTimeout(()=>{ch(r.next.container)},50),Ei.start(),Ei.scrollTo(0,{duration:0,immediate:!0}),Ei.stop(),le.set(r.next.container,{y:"30vh",position:"absolute",zIndex:2}),le.to(r.next.container,{y:"0vh",duration:1.2,ease:"power4.inOut"})},afterEnter(r){MD(),dg(),kd(),sg(),r.next.container.querySelector("#what-we-do")&&setTimeout(()=>{ch(r.next.container),mo()},0),r.next.container.querySelector("#what-we-do-detail")&&mo(),r.next.container.querySelector("#who-we-help-detail")&&mo(),r.next.container.querySelector("#work")&&setTimeout(rg,1e3),r.next.container.querySelector("#about")&&(cg(),ug()),document.documentElement.style.overflow="",document.body.style.overflow="",Ei.start(),le.set(r.current.container,{y:"0vh"}),Ei.raf(),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},0),r.next.container.querySelector("#home")&&setTimeout(og,2e3)}}]});Ys.hooks.after(()=>{var t,n;Z0(),Ec(),J0(),yo(),sv(),Q0();const r=document.querySelector(".menu_underlay"),e=document.querySelector(".drop_downmenu_group");r&&e&&(r.style.display="none",e.style.display="none",le.set(r,{opacity:0}),le.set(e,{opacity:0,y:"3vw"})),(t=document.getElementById("what-we-do-menu"))==null||t.removeEventListener("click",Od),(n=document.getElementById("what-we-do-menu"))==null||n.addEventListener("click",Od),document.querySelectorAll(".cm, .menu_underlay").forEach(i=>{i.removeEventListener("click",Bd),i.addEventListener("click",Bd)}),setTimeout(kd,100)});Ys.hooks.afterEnter(({next:r})=>{Gc=!!r.container.querySelector("#homepage"),Gc&&(console.log("✅ Entered homepage"),Bf(!0,.4),rv.startRendering(),ev(),setTimeout(Of,100))});Ys.hooks.beforeLeave(({current:r})=>{!!r.container.querySelector("#homepage")&&(console.log("🚪 Leaving homepage"),rv.stopRendering())});let ru=!0,Vc,Sc,xi,mr,As,jr,hh;new Sr;new $t;let tv=null,go=null,Gr,Wr,Xr,qr,Gc=!1,Pa=!1;const fg=window.innerWidth,yn={width:fg,height:fg/(16/9),pixelRatio:Math.min(window.devicePixelRatio,2)};function CD(r){const e=r.getBoundingClientRect();return e.bottom>=0&&e.right>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)&&e.left<=(window.innerWidth||document.documentElement.clientWidth)}document.addEventListener("visibilitychange",function(){ru=!document.hidden});new c1;const nv=new X1;nv.setDecoderPath("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/cw/draco/");const iv=new u1;iv.setDRACOLoader(nv);const RD=new lD,zd=new mf({width:300});function PD(){Sc=document.querySelector("canvas.webgl"),mr=new xS;const e=document.querySelector("canvas.webgl").getBoundingClientRect();yn.width=e.width,yn.height=e.height,xi=new Vn(10,yn.width/yn.height,.1,100),mr.add(xi),xi.position.set(-8,-3,15),xi.lookAt(0,0,0),mr.rotation.set(.1,0,0),Vc=new KA(xi,Sc),Vc.enableDamping=!0,As=new $A({canvas:Sc,antialias:!0,alpha:!0}),As.toneMappingExposure=1,As.setSize(yn.width,yn.height),As.setPixelRatio(yn.pixelRatio),As.outputColorSpace=rn,jr=new mD(As),jr.setSize(yn.width,yn.height),jr.setPixelRatio(yn.pixelRatio),jr.addPass(new gD(mr,xi));const t={uniforms:{tDiffuse:{value:null},amount:{value:.004}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float amount;
      varying vec2 vUv;

      void main() {
        vec2 offset = amount * vec2( cos(3.1415 * vUv.y), sin(3.1415 * vUv.x) );
        vec4 cr = texture2D(tDiffuse, vUv + offset);
        vec4 cga = texture2D(tDiffuse, vUv);
        vec4 cb = texture2D(tDiffuse, vUv - offset);
        gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
      }
    `};hh=new Y0(t),jr.addPass(hh);const n=zd.addFolder("Post FX");n.add(hh.uniforms.amount,"value",0,.02).step(1e-4).name("Chromatic Amt"),n.open(),mr.background=new rt(16579832);const i=xi.position.x,s=xi.position.y,o=le.quickTo(xi.position,"x",{duration:1.2,ease:"power3.out"}),a=le.quickTo(xi.position,"y",{duration:1.2,ease:"power3.out"});window.addEventListener("mousemove",u=>{const h=window.innerWidth/2,d=window.innerHeight/2,f=(u.clientX-h)/h,_=(u.clientY-d)/d,g=1;o(i+f*g),a(s+_*g)}),RD.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/Example/textures/blackstudio.exr",u=>{u.mapping=Uc,mr.environment=u});const l={color:"#f3f3f0"},c=zd.addFolder("Background");c.addColor(l,"color").name("BG Color").onChange(u=>{mr.background.set(u)}),c.open()}const rv={hasInitialised:!1,firstFrameRendered:!1,startRendering(){if(!Gc||Pa)return;setTimeout(()=>{this.hasInitialised||(console.log("🌐 Initialising WebGL scene..."),PD(),ID(),this.hasInitialised=!0),Vc.update(),jr.render(),this.firstFrameRendered=!0,console.log("🖼️ Rendered first frame. Starting render loop..."),Pa=!0,lv()},2e3)},stopRendering(){Pa&&(console.log("⏸️ Stopping WebGL rendering loop."),Pa=!1)}};function LD(r){const e=()=>{const t=window.innerWidth;let n;t<479||t>=479&&t<991?n=.5:n=2,r.scale.set(n,n,n)};e(),window.addEventListener("resize",e)}function sv(){setTimeout(()=>{const r=document.getElementById("webgl_trigger"),e=document.getElementById("webgl_holder");!e||!r||le.fromTo(e,{y:"0vh"},{y:"-200vh",ease:"none",scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:!0}})},100)}function ID(){const r=new Sr,e=zd.addFolder("Lights"),t=[16776960,16711680,255],n=.2,i=[];t.forEach((s,o)=>{const a=new L0(s,2,50);a.position.set(0,o*n,0),new uM(a,.1),i.push(a),r.add(a);const l=e.addFolder(`Light ${o+1}`);l.addColor({color:s},"color").onChange(c=>{a.color.set(c)}),l.add(a,"intensity",0,50,.1),l.add(a.position,"x",-5,5,.01),l.add(a.position,"y",-5,5,.01),l.add(a.position,"z",-5,5,.01)}),mr.add(r),r.position.set(1.5,.4,-2),i.forEach((s,o)=>{le.to(s.position,{y:"+=1",duration:5,ease:"sine.inOut",yoyo:!0,repeat:-1,delay:o*.2})}),iv.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/Example/models/example16.glb",s=>{const o=s.scene;o.position.set(1.2,0,0),mr.add(o),Gr=o.getObjectByName("ex1"),Wr=o.getObjectByName("ex2"),Xr=o.getObjectByName("ex3"),qr=o.getObjectByName("ex4"),(!Gr||!Wr||!Xr||!qr)&&console.warn("Some parts not found"),LD(o),tv=o,o.rotation.y=-.9,Of(),o.traverse(a=>{if(a.isMesh){const l=a.material,c=new Bi({color:16777215,metalness:0,roughness:.3,transmission:1,thickness:2,ior:1.9,specularIntensity:0,clearcoat:.4,clearcoatRoughness:.5,reflectivity:.02,side:Fi});l.normalMap&&(c.normalMap=l.normalMap,c.normalScale=l.normalScale||new it(30,30)),a.material=c}})})}function Of(){var e;const r=document.querySelector("#webgl_trigger");(e=lt.getById("model-rotation"))==null||e.kill(),go==null||go.kill(),go=le.fromTo(tv.rotation,{y:-.9},{y:Math.PI/8,ease:"none",paused:!0}),lt.create({id:"model-rotation",start:"top bottom",trigger:r,end:"bottom top",scrub:!0,animation:go,onUpdate:t=>{go.progress(t.progress)}})}function FD(){if(!Gr||!Wr||!Xr||!qr){console.warn("Model parts not ready");return}const r=[{part:Gr,pos:Gr.position.clone(),rot:Gr.rotation.clone()},{part:Wr,pos:Wr.position.clone(),rot:Wr.rotation.clone()},{part:Xr,pos:Xr.position.clone(),rot:Xr.rotation.clone()},{part:qr,pos:qr.position.clone(),rot:qr.rotation.clone()}],e=.5;le.to(Gr.position,{x:0,y:1,z:-.7,duration:e,ease:"power1.in"}),le.to(Gr.rotation,{z:Math.PI/8,duration:e,ease:"power1.in"}),le.to(Wr.position,{x:0,y:.6,z:-.9,duration:e,ease:"power1.in"}),le.to(Wr.rotation,{y:Math.PI/12,duration:e,ease:"power1.in"}),le.to(Xr.position,{x:.2,y:.2,z:-.4,duration:e,ease:"power1.in"}),le.to(Xr.rotation,{x:Math.PI/12,z:Math.PI/10,duration:e,ease:"power1.in"}),le.to(qr.position,{x:-.3,y:0,z:-.2,duration:e,ease:"power1.in"}),le.to(qr.rotation,{y:-Math.PI/14,duration:e,ease:"power1.int"}),setTimeout(()=>{r.forEach(({part:t,pos:n,rot:i})=>{le.to(t.position,{x:n.x,y:n.y,z:n.z,duration:.6,ease:"power4.out"}),le.to(t.rotation,{x:i.x,y:i.y,z:i.z,duration:.6,ease:"power4.out"})})},e*1e3+100)}window.addEventListener("resize",()=>{const r=Sc.getBoundingClientRect();yn.width=r.width,yn.height=r.height,xi.aspect=yn.width/yn.height,xi.updateProjectionMatrix(),As.setSize(yn.width,yn.height),jr.setSize(yn.width,yn.height)});function Bf(r=!0,e=.5){const t=document.getElementById("webgl_holder");t&&(window._webglClickIntercepted||(window._webglClickIntercepted=!0,document.addEventListener("click",n=>{const i=n.target.closest(".featured_work_mask, .work_titles.home"),s=window.innerWidth<992;if(!i||s)return;n.preventDefault();const o=i.getAttribute("href")||i.dataset.href;o&&(Bf(!1,.4),FD(),setTimeout(()=>{Ys.go(o,i)},400))},!0)),r&&le.set(t,{autoAlpha:0,display:"block",visibility:"visible"}),le.to(t,{autoAlpha:r?1:0,duration:e,ease:"power1.in",onComplete:()=>{r||(t.style.visibility="hidden")}}))}window.onfocus=function(){ru=!0};window.onblur=function(){ru=!1};let ov=!1;setTimeout(()=>{ov=!0},5e3);let av=Date.now(),Wc=!1;["mousemove","scroll","keydown"].forEach(r=>{window.addEventListener(r,()=>{av=Date.now(),Wc&&(Wc=!1,console.log("👋 User active again. Resuming rendering."))})});let pg=0;const ND=60,UD=1e3/ND;let dh=!1,fh=!1;function lv(r){if(!Pa||!Gc)return;requestAnimationFrame(lv);const e=document.getElementById("webgl_trigger"),t=CD(e),n=Date.now();if(ov&&!ru){console.log("Tab inactive. Stopping render.");return}if(!dh&&t&&(dh=!0,console.log("🟢 First time canvas in view. Forcing rendering to begin.")),dh&&!fh&&!t&&(fh=!0,console.log("👀 Canvas has now gone out of view at least once. Activating visibility checks.")),fh&&!t){console.log("Canvas out of view. Stopping render.");return}if(n-av>1e4){Wc||(Wc=!0,console.log("💤 User idle. Pausing rendering."));return}n-pg>=UD&&(console.log("🟢 Rendering frame"),Vc.update(),jr.render(),pg=n)}
