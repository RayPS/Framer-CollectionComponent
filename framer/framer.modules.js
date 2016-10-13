require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"CollectionComponent":[function(require,module,exports){

/*

Module: CollectionComponent
Author: Ray
Website: http://rayps.com
README: https://github.com/RayPS/Framer-CollectionComponent
 */
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.CollectionComponent = (function(superClass) {
  extend(CollectionComponent, superClass);

  function CollectionComponent(options) {
    var base, base1, base2, base3, base4, base5, base6;
    this.options = options != null ? options : {};
    if ((base = this.options).amount == null) {
      base.amount = 16;
    }
    if ((base1 = this.options).columns == null) {
      base1.columns = 4;
    }
    if ((base2 = this.options).gutter == null) {
      base2.gutter = 2;
    }
    if ((base3 = this.options).cellWidth == null) {
      base3.cellWidth = 50;
    }
    if ((base4 = this.options).cellHeight == null) {
      base4.cellHeight = 50;
    }
    if ((base5 = this.options).cell == null) {
      base5.cell = function(cell) {};
    }
    if ((base6 = this.options).backgroundColor == null) {
      base6.backgroundColor = "transparent";
    }
    CollectionComponent.__super__.constructor.call(this, this.options);
    this.rows = Math.floor(this.options.amount / this.options.columns);
    this.width = this.options.cellWidth * this.options.columns + this.options.gutter * (this.options.columns - 1);
    this.height = this.options.cellHeight * this.options.rows + this.options.gutter * (this.rows - 1);
    this.defineCoords();
    this.render();
    if (typeof this.cell === !"function") {
      throw Error("cell is not a function");
    }
  }

  CollectionComponent.prototype.render = function() {
    var i, j, offsetX, offsetY, palette, ref, results;
    palette = this.randomPalette();
    results = [];
    for (i = j = 0, ref = this.options.amount; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      offsetX = i % this.options.columns;
      offsetY = Math.floor(i / this.options.columns);
      results.push(this.options.cell(new Layer({
        parent: this,
        name: "Cell " + i,
        width: this.options.cellWidth,
        height: this.options.cellHeight,
        x: offsetX * this.options.cellWidth + offsetX * this.options.gutter,
        y: offsetY * this.options.cellHeight + offsetY * this.options.gutter,
        backgroundColor: palette[i],
        coords: {
          x: offsetX + 1,
          y: offsetY + 1
        }
      })));
    }
    return results;
  };

  CollectionComponent.prototype.randomPalette = function() {
    var c1, c2, i, j, p, ref;
    c1 = Color.random();
    c2 = Color.random();
    p = [];
    for (i = j = 0, ref = this.options.amount; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      p.push(Color.mix(c1, c2, i * 0.03));
    }
    return p;
  };

  CollectionComponent.prototype.defineCoords = function() {
    try {
      return Layer.define("coords", {
        get: function() {
          return this._properties["coords"];
        },
        set: function(coords) {
          return this._properties["coords"] = coords;
        }
      });
    } catch (_error) {}
  };

  return CollectionComponent;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvQ29sbGVjdGlvbkNvbXBvbmVudC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMjI1xuXG5Nb2R1bGU6IENvbGxlY3Rpb25Db21wb25lbnRcbkF1dGhvcjogUmF5XG5XZWJzaXRlOiBodHRwOi8vcmF5cHMuY29tXG5SRUFETUU6IGh0dHBzOi8vZ2l0aHViLmNvbS9SYXlQUy9GcmFtZXItQ29sbGVjdGlvbkNvbXBvbmVudFxuXG4jIyNcblxuY2xhc3MgZXhwb3J0cy5Db2xsZWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zID0ge30pIC0+XG5cblx0XHRAb3B0aW9ucy5hbW91bnQgPz0gMTZcblx0XHRAb3B0aW9ucy5jb2x1bW5zID89IDRcblx0XHRAb3B0aW9ucy5ndXR0ZXIgPz0gMlxuXHRcdEBvcHRpb25zLmNlbGxXaWR0aCAgPz0gNTBcblx0XHRAb3B0aW9ucy5jZWxsSGVpZ2h0ID89IDUwXG5cdFx0QG9wdGlvbnMuY2VsbCA/PSAoY2VsbCkgLT5cblx0XHRAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPz0gXCJ0cmFuc3BhcmVudFwiXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QHJvd3MgPSBNYXRoLmZsb29yIEBvcHRpb25zLmFtb3VudCAvIEBvcHRpb25zLmNvbHVtbnNcblx0XHRAd2lkdGggPSBAb3B0aW9ucy5jZWxsV2lkdGggKiBAb3B0aW9ucy5jb2x1bW5zICsgQG9wdGlvbnMuZ3V0dGVyICogKEBvcHRpb25zLmNvbHVtbnMgLSAxKVxuXHRcdEBoZWlnaHQgPSBAb3B0aW9ucy5jZWxsSGVpZ2h0ICogQG9wdGlvbnMucm93cyArIEBvcHRpb25zLmd1dHRlciAqIChAcm93cyAtIDEpXG5cblx0XHRAZGVmaW5lQ29vcmRzKClcblx0XHRAcmVuZGVyKClcblxuXHRcdHRocm93IEVycm9yIFwiY2VsbCBpcyBub3QgYSBmdW5jdGlvblwiIGlmIHR5cGVvZiBAY2VsbCBpcyBub3QgXCJmdW5jdGlvblwiXG5cblx0cmVuZGVyOiAtPlxuXHRcdHBhbGV0dGUgPSBAcmFuZG9tUGFsZXR0ZSgpXG5cblx0XHRmb3IgaSBpbiBbMC4uLkBvcHRpb25zLmFtb3VudF1cblx0XHRcdG9mZnNldFggPSBpICUgQG9wdGlvbnMuY29sdW1uc1xuXHRcdFx0b2Zmc2V0WSA9IE1hdGguZmxvb3IgaSAvIEBvcHRpb25zLmNvbHVtbnNcblxuXHRcdFx0QG9wdGlvbnMuY2VsbCBuZXcgTGF5ZXJcblx0XHRcdFx0cGFyZW50OiBAXG5cdFx0XHRcdG5hbWU6IFwiQ2VsbCBcIiArIGlcblx0XHRcdFx0d2lkdGg6ICBAb3B0aW9ucy5jZWxsV2lkdGhcblx0XHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5jZWxsSGVpZ2h0XG5cdFx0XHRcdHg6IG9mZnNldFggKiBAb3B0aW9ucy5jZWxsV2lkdGggICsgb2Zmc2V0WCAqIEBvcHRpb25zLmd1dHRlclxuXHRcdFx0XHR5OiBvZmZzZXRZICogQG9wdGlvbnMuY2VsbEhlaWdodCArIG9mZnNldFkgKiBAb3B0aW9ucy5ndXR0ZXJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBwYWxldHRlW2ldXG5cdFx0XHRcdGNvb3JkczogeDogb2Zmc2V0WCArIDEsIHk6IG9mZnNldFkgKyAxXG5cblx0cmFuZG9tUGFsZXR0ZTogLT5cblx0XHRjMSA9IENvbG9yLnJhbmRvbSgpXG5cdFx0YzIgPSBDb2xvci5yYW5kb20oKVxuXHRcdHAgPSBbXVxuXHRcdHAucHVzaCBDb2xvci5taXggYzEsIGMyLCBpICogMC4wMyBmb3IgaSBpbiBbMC4uLkBvcHRpb25zLmFtb3VudF1cblx0XHRyZXR1cm4gcFxuXG5cdGRlZmluZUNvb3JkczogLT5cblx0XHR0cnkgTGF5ZXIuZGVmaW5lIFwiY29vcmRzXCIsXG5cdFx0XHRnZXQ6IC0+IEBfcHJvcGVydGllc1tcImNvb3Jkc1wiXVxuXHRcdFx0c2V0OiAoY29vcmRzKSAtPiBAX3Byb3BlcnRpZXNbXCJjb29yZHNcIl0gPSBjb29yZHNcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQ0FBOztBREFBOzs7Ozs7O0FBQUEsSUFBQTs7O0FBU00sT0FBTyxDQUFDOzs7RUFFQSw2QkFBQyxPQUFEO0FBRVosUUFBQTtJQUZhLElBQUMsQ0FBQSw0QkFBRCxVQUFXOztVQUVoQixDQUFDLFNBQVU7OztXQUNYLENBQUMsVUFBVzs7O1dBQ1osQ0FBQyxTQUFVOzs7V0FDWCxDQUFDLFlBQWM7OztXQUNmLENBQUMsYUFBYzs7O1dBQ2YsQ0FBQyxPQUFRLFNBQUMsSUFBRCxHQUFBOzs7V0FDVCxDQUFDLGtCQUFtQjs7SUFFNUIscURBQU0sSUFBQyxDQUFBLE9BQVA7SUFFQSxJQUFDLENBQUEsSUFBRCxHQUFRLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBQyxDQUFBLE9BQU8sQ0FBQyxNQUFU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
