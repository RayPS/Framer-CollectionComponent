# Framer-CollectionComponent
CollectionComponent Framer Module


### Usage:
Put [CollectionComponent.coffee](modules/CollectionComponent.coffee) into the `modules` folder of your project.


```coffeescript
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
```

<a href="#"><img width="160px" src='fm-badge@2x.png'></a>

<h1 align="center">[ <a href="http://share.framerjs.com/jevnkuy1j17y/">DEMO</a> ]</h1>

![](https://cloud.githubusercontent.com/assets/1941540/19346536/706decc2-9176-11e6-985b-0ceab8d55dd3.png)


