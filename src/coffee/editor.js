var ace = require('.././lib/ace/ace');

function init() {
	var editor = ace.edit("editor");
	console.log("initializing ace editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/javascript");
}
