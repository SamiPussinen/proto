!function e(o,n,t){function r(i,a){if(!n[i]){if(!o[i]){var u="function"==typeof require&&require;if(!a&&u)return u(i,!0);if(c)return c(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var p=n[i]={exports:{}};o[i][0].call(p.exports,function(e){var n=o[i][1][e];return r(n?n:e)},p,p.exports,e,o,n,t)}return n[i].exports}for(var c="function"==typeof require&&require,i=0;i<t.length;i++)r(t[i]);return r}({1:[function(){ace.define("ace/ext/chromevox",["require","exports","module","ace/editor","ace/config"],function(e){function o(){return"undefined"!=typeof cvox&&cvox&&cvox.Api}function n(e){if(o())go(e);else{if(Ao++,Ao>=ho)return;window.setTimeout(n,500,e)}}var t={};t.SpeechProperty,t.Cursor,t.Token,t.Annotation;var r={rate:.8,pitch:.4,volume:.9},c={rate:1,pitch:.5,volume:.9},i={rate:.8,pitch:.8,volume:.9},a={rate:.8,pitch:.3,volume:.9},u={rate:.8,pitch:.7,volume:.9},s={rate:.8,pitch:.8,volume:.9},p={punctuationEcho:"none",relativePitch:-.6},f="ALERT_NONMODAL",l="ALERT_MODAL",d="INVALID_KEYPRESS",v="insertMode",m="start",g=[{substr:";",newSubstr:" semicolon "},{substr:":",newSubstr:" colon "}],A={SPEAK_ANNOT:"annots",SPEAK_ALL_ANNOTS:"all_annots",TOGGLE_LOCATION:"toggle_location",SPEAK_MODE:"mode",SPEAK_ROW_COL:"row_col",TOGGLE_DISPLACEMENT:"toggle_displacement",FOCUS_TEXT:"focus_text"},h="CONTROL + SHIFT ";t.editor=null;var x=null,E={},S=!1,k=!1,y=!1,w=null,T={},C={},O=function(e){return h+String.fromCharCode(e)},_=function(){var e=t.editor.keyBinding.getKeyboardHandler();return"ace/keyboard/vim"===e.$id},b=function(e){return t.editor.getSession().getTokenAt(e.row,e.column+1)},L=function(e){return t.editor.getSession().getLine(e.row)},N=function(e){E[e.row]&&cvox.Api.playEarcon(f),S?(cvox.Api.stop(),$(e),B(b(e)),R(e.row,1)):R(e.row,0)},K=function(e){var o=L(e),n=o.substr(e.column-1);0===e.column&&(n=" "+o);var t=/^\W(\w+)/,r=t.exec(n);return null!==r},P={constant:{prop:r},entity:{prop:i},keyword:{prop:a},storage:{prop:u},variable:{prop:s},meta:{prop:c,replace:[{substr:"</",newSubstr:" closing tag "},{substr:"/>",newSubstr:" close tag "},{substr:"<",newSubstr:" tag start "},{substr:">",newSubstr:" tag end "}]}},D={prop:D},M=function(e,o){for(var n=e,t=0;t<o.length;t++){var r=o[t],c=new RegExp(r.substr,"g");n=n.replace(c,r.newSubstr)}return n},I=function(e,o,n){var t={};t.value="",t.type=e[o].type;for(var r=o;n>r;r++)t.value+=e[r].value;return t},G=function(e){if(e.length<=1)return e;for(var o=[],n=0,t=1;t<e.length;t++){var r=e[n],c=e[t];F(r)!==F(c)&&(o.push(I(e,n,t)),n=t)}return o.push(I(e,n,e.length)),o},q=function(e){var o=t.editor.getSession().getLine(e),n=/^\s*$/;return null!==n.exec(o)},R=function(e,o){var n=t.editor.getSession().getTokens(e);if(0===n.length||q(e))return void cvox.Api.playEarcon("EDITABLE_TEXT");n=G(n);var r=n[0];n=n.filter(function(e){return e!==r}),U(r,o),n.forEach(B)},B=function(e){U(e,1)},F=function(e){if(e&&e.type){var o=e.type.split(".");if(0!==o.length){var n=o[0],t=P[n];return t?t:D}}},U=function(e,o){var n=F(e),t=M(e.value,g);n.replace&&(t=M(t,n.replace)),cvox.Api.speak(t,o,n.prop)},$=function(e){var o=L(e);cvox.Api.speak(o[e.column],1)},W=function(e,o){var n=L(o),t=n.substring(e.column,o.column);t=t.replace(/ /g," space "),cvox.Api.speak(t)},X=function(e,o){if(1!==Math.abs(e.column-o.column)){var n=L(o).length;if(0===o.column||o.column===n)return void R(o.row,0);if(K(o))return cvox.Api.stop(),void B(b(o))}$(o)},H=function(e,o){t.editor.selection.isEmpty()?k?W(e,o):X(e,o):(W(e,o),cvox.Api.speak("selected",1))},V=function(){if(y)return void(y=!1);var e=t.editor.selection.getCursor();e.row!==x.row?N(e):H(x,e),x=e},J=function(){t.editor.selection.isEmpty()&&cvox.Api.speak("unselected")},Y=function(e){var o=e.data;switch(o.action){case"removeText":cvox.Api.speak(o.text,0,p),y=!0;break;case"insertText":cvox.Api.speak(o.text,0),y=!0}},j=function(e){var o=e.row,n=e.column;return!E[o]||!E[o][n]},z=function(e){E={};for(var o=0;o<e.length;o++){var n=e[o],t=n.row,r=n.column;E[t]||(E[t]={}),E[t][r]=n}},Q=function(){var e=t.editor.getSession().getAnnotations(),o=e.filter(j);o.length>0&&cvox.Api.playEarcon(f),z(e)},Z=function(e){var o=e.type+" "+e.text+" on "+oo(e.row,e.column);o=o.replace(";","semicolon"),cvox.Api.speak(o,1)},eo=function(e){var o=E[e];for(var n in o)Z(o[n])},oo=function(e,o){return"row "+(e+1)+" column "+(o+1)},no=function(){cvox.Api.speak(oo(x.row,x.column))},to=function(){for(var e in E)eo(e)},ro=function(){if(_())switch(t.editor.keyBinding.$data.state){case v:cvox.Api.speak("Insert mode");break;case m:cvox.Api.speak("Command mode")}},co=function(){S=!S,cvox.Api.speak(S?"Speak location on row change enabled.":"Speak location on row change disabled.")},io=function(){k=!k,cvox.Api.speak(k?"Speak displacement on column changes.":"Speak current character or word on column changes.")},ao=function(e){if(e.ctrlKey&&e.shiftKey){var o=T[e.keyCode];o&&o.func()}},uo=function(e,o){if(_()){var n=o.keyBinding.$data.state;if(n!==w){switch(n){case v:cvox.Api.playEarcon(l),cvox.Api.setKeyEcho(!0);break;case m:cvox.Api.playEarcon(l),cvox.Api.setKeyEcho(!1)}w=n}}},so=function(e){var o=e.detail.customCommand,n=C[o];n&&(n.func(),t.editor.focus())},po=function(){var e=vo.map(function(e){return{desc:e.desc+O(e.keyCode),cmd:e.cmd}}),o=document.querySelector("body");o.setAttribute("contextMenuActions",JSON.stringify(e)),o.addEventListener("ATCustomEvent",so,!0)},fo=function(e){e.match?R(x.row,0):cvox.Api.playEarcon(d)},lo=function(){t.editor.focus()},vo=[{keyCode:49,func:function(){eo(x.row)},cmd:A.SPEAK_ANNOT,desc:"Speak annotations on line"},{keyCode:50,func:to,cmd:A.SPEAK_ALL_ANNOTS,desc:"Speak all annotations"},{keyCode:51,func:ro,cmd:A.SPEAK_MODE,desc:"Speak Vim mode"},{keyCode:52,func:co,cmd:A.TOGGLE_LOCATION,desc:"Toggle speak row location"},{keyCode:53,func:no,cmd:A.SPEAK_ROW_COL,desc:"Speak row and column"},{keyCode:54,func:io,cmd:A.TOGGLE_DISPLACEMENT,desc:"Toggle speak displacement"},{keyCode:55,func:lo,cmd:A.FOCUS_TEXT,desc:"Focus text"}],mo=function(){t.editor=editor,editor.getSession().selection.on("changeCursor",V),editor.getSession().selection.on("changeSelection",J),editor.getSession().on("change",Y),editor.getSession().on("changeAnnotation",Q),editor.on("changeStatus",uo),editor.on("findSearchBox",fo),editor.container.addEventListener("keydown",ao),x=editor.selection.getCursor()},go=function(e){mo(),vo.forEach(function(e){T[e.keyCode]=e,C[e.cmd]=e}),e.on("focus",mo),_()&&cvox.Api.setKeyEcho(!1),po()},Ao=0,ho=15,xo=e("../editor").Editor;e("../config").defineOptions(xo.prototype,"editor",{enableChromevoxEnhancements:{set:function(e){e&&n(this)},value:!0}})}),function(){ace.require(["ace/ext/chromevox"],function(){})}()},{}]},{},[1]);