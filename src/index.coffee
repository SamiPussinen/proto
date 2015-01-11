ace = require('brace')
require('brace/mode/javascript')
require('brace/theme/monokai')
Awesome = require('./coffee/editor.coffee')

editor = ace.edit('editor')
editor.getSession().setMode('ace/mode/javascript')
editor.setTheme('ace/theme/monokai')

Awesome.init()
