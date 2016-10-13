{CollectionComponent} = require 'CollectionComponent'

myCollection = new CollectionComponent
	amount: 24
	columns: 4
	gutter: 1
	cellWidth: Screen.width / 4
	cellHeight: 100
	cell: (cell) ->
		coords = cell.html = cell.coords.x + ", " + cell.coords.y
		cell.style = lineHeight: cell.height + "px", textAlign: "center"
		cell.onMouseOver -> this.html = this.name
		cell.onMouseOut -> this.html = coords