# Framer-CollectionComponent
Framer Module working in progress

```coffeescript
myCollection = new CollectionComponent
	amount: 24
	columns: 4
	cellWidth: Screen.width / 4
	cellHeight: 100
	backgroundColor: "transparent"
	cell: (cell) -> cell.html = cell.name
```

<img width="1142" alt="screen shot 2016-10-12 at 1 33 37 pm" src="https://cloud.githubusercontent.com/assets/1941540/19298483/8d174202-9080-11e6-90fe-c48ec95e98de.png">

