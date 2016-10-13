{CollectionComponent} = require 'CollectionComponent'

myCollection = new CollectionComponent
	amount: 24
	columns: 4
	gutter: 0
	cellWidth: Screen.width / 4
	cellHeight: 100
	cell: (cell) ->
		cell.borderColor = "black"
		cell.borderWidth = 1
		cell.borderRadius = 5
		cell.style =
			lineHeight: cell.height + "px"
			textAlign: "center"



buttonA = new Layer
	x: Align.center
	y: Align.bottom -300
	width: 300
	height: 100
	borderRadius: 10
	html: "Show Coords"
	style: lineHeight: "100px", textAlign: "center"

buttonB = buttonA.copy()
buttonB.props =
	html: "Show Index"
	y: Align.bottom -150

buttonA.onClick ->
	for cell in myCollection.children
		cell.html = cell.coords.x + ", " + cell.coords.y

buttonB.onClick ->
	for cell in myCollection.children
		cell.html = cell.name