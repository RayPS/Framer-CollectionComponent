###

Module: CollectionComponent
Author: Ray
Website: http://rayps.com
README: https://github.com/RayPS/Framer-CollectionComponent

###

class exports.CollectionComponent extends Layer

	constructor: (@options = {}) ->

		@options.amount ?= 16
		@options.columns ?= 4
		@options.gutter ?= 2
		@options.cellWidth  ?= 50
		@options.cellHeight ?= 50
		@options.cell ?= (cell) ->
		@options.backgroundColor ?= "transparent"

		super @options

		@rows = Math.floor @options.amount / @options.columns
		@width = @options.cellWidth * @options.columns + @options.gutter * (@options.columns - 1)
		@height = @options.cellHeight * @options.rows + @options.gutter * (@rows - 1)

		@defineCoords()
		@render()

		throw Error "cell is not a function" if typeof @cell is not "function"

	render: ->
		palette = @randomPalette()

		for i in [0...@options.amount]
			offsetX = i % @options.columns
			offsetY = Math.floor i / @options.columns

			@options.cell new Layer
				parent: @
				name: "Cell " + i
				width:  @options.cellWidth
				height: @options.cellHeight
				x: offsetX * @options.cellWidth  + offsetX * @options.gutter
				y: offsetY * @options.cellHeight + offsetY * @options.gutter
				backgroundColor: palette[i]
				coords: x: offsetX + 1, y: offsetY + 1

	randomPalette: ->
		c1 = Color.random()
		c2 = Color.random()
		p = []
		p.push Color.mix c1, c2, i * 0.03 for i in [0...@options.amount]
		return p

	defineCoords: ->
		try Layer.define "coords",
			get: -> @_properties["coords"]
			set: (coords) -> @_properties["coords"] = coords
