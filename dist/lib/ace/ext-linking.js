!function e(o,n,t){function i(c,u){if(!n[c]){if(!o[c]){var f="function"==typeof require&&require;if(!u&&f)return f(c,!0);if(r)return r(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var a=n[c]={exports:{}};o[c][0].call(a.exports,function(e){var n=o[c][1][e];return i(n?n:e)},a,a.exports,e,o,n,t)}return n[c].exports}for(var r="function"==typeof require&&require,c=0;c<t.length;c++)i(t[c]);return i}({1:[function(){ace.define("ace/ext/linking",["require","exports","module","ace/editor","ace/config"],function(e){function o(e){var o=e.editor,n=e.getAccelKey();if(n){var o=e.editor,t=e.getDocumentPosition(),i=o.session,r=i.getTokenAt(t.row,t.column);o._emit("linkHover",{position:t,token:r})}}function n(e){var o=e.getAccelKey(),n=e.getButton();if(0==n&&o){var t=e.editor,i=e.getDocumentPosition(),r=t.session,c=r.getTokenAt(i.row,i.column);t._emit("linkClick",{position:i,token:c})}}var t=e("ace/editor").Editor;e("../config").defineOptions(t.prototype,"editor",{enableLinking:{set:function(e){e?(this.on("click",n),this.on("mousemove",o)):(this.off("click",n),this.off("mousemove",o))},value:!1}})}),function(){ace.require(["ace/ext/linking"],function(){})}()},{}]},{},[1]);