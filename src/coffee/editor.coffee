ace = require('./brace')
require('./brace/mode/javascript')
require('./brace/theme/proto')

module.exports =
	init: ->
		editor = ace.edit('editor')
		editor.getSession().setMode('ace/mode/javascript')
		editor.setTheme('ace/theme/proto')
		editor.setShowPrintMargin(false)
