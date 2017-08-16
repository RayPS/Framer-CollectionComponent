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
	y: Align.bottom -200
	width: 150
	height: 50
	borderRadius: 5
	html: "Show Coords"
	style: lineHeight: "100px", textAlign: "center", fontSize: "18px"

buttonB = buttonA.copy()
buttonB.props =
	html: "Show Index"
	y: Align.bottom -100

buttonA.onClick ->
	for cell in myCollection.children
		cell.html = cell.coords.x + ", " + cell.coords.y

buttonB.onClick ->
	for cell in myCollection.children
		cell.html = cell.name