

class CollectionComponent extends Layer
	
	constructor: (options = {}) ->
		super {
			@amount = 16
			@columns = 4
			@gutter = 2
			@cellWidth  = 50
			@cellHeight = 50
			@cell = (cell) ->
		} = options
		
		throw Error "cell is not a function" if typeof cell is not "function"
		
		@rows = Math.floor @amount / @columns
		@width = @cellWidth * @columns + @gutter * (@columns - 1)
		@height = @cellHeight * @rows + @gutter * (@rows - 1)
		@render()
	
	render: ->
		palette = @randomPalette()
		
		for i in [0...@amount]
			offsetX = i % @columns
			offsetY = Math.floor i / @columns
			
			@cell new Layer
				parent: @
				name: "cell_#{i}"
				width:  @cellWidth
				height: @cellHeight
				x: offsetX * @cellWidth  + offsetX * @gutter
				y: offsetY * @cellHeight + offsetY * @gutter
				backgroundColor: palette[i]
	
	randomPalette: ->
		c1 = Color.random()
		c2 = Color.random()
		p = []
		p.push Color.mix c1, c2, i * 0.03 for i in [0...@amount]
		return p


myCollection = new CollectionComponent
	amount: 24
	columns: 4
	cellWidth: Screen.width / 4
	cellHeight: 100
	backgroundColor: "black"
# 	cell: (cell) -> print cell.name