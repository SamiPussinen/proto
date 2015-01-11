ace = require('brace')
editor = ace.edit('editor')

Awesome =
	init : ->
		editor.getSession().setValue('Awesome')
		editor.setShowPrintMargin(false)


module.exports = Awesome
