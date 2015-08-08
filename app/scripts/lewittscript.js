var Debugger = function () { };
Debugger.log = function(message) {
  try {
    console.log(message);
  } catch (exception) {
    return;
  }
};

function canvasSupport() {
  return Modernizr.canvas;
}

function LeWittApp(inputs) {
  if (!canvasSupport()) {
    return;
  }

  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  var colors = {
    "pink"                    : "#FFC0CB",
    "light pink"              : "#FFB6C1",
    "hot pink"                : "#FF69B4",
    "deep pink"               : "#FF1493",
    "pale violet red"         : "#DB7093",
    "medium violet red"       : "#C71585",
    "light salmon"            : "#FFA07A",
    "salmon"                  : "#FA8072",
    "dark salmon"             : "#E9967A",
    "light coral"             : "#F08080",
    "indian red"              : "#CD5C5C",
    "crimson"                 : "#DC143C",
    "fire brick"              : "#B22222",
    "dark red"                : "#8B0000",
    "red"                     : "#FF0000",
    "orange red"              : "#FF4500",
    "tomato"                  : "#FF6347",
    "coral"                   : "#FF7F50",
    "dark orange"             : "#FF8C00",
    "orange"                  : "#FFA500",
    "yellow"                  : "#FFFF00",
    "light yellow"            : "#FFFFE0",
    "lemon chiffon"           : "#FFFACD",
    "light goldenrod yellow"  : "#FAFAD2",
    "papaya whip"             : "#FFEFD5",
    "moccasin"                : "#FFE4B5",
    "peach puff"              : "#FFDAB9",
    "pale goldenrod"          : "#EEE8AA",
    "khaki"                   : "#F0E68C",
    "dark khaki"              : "#BDB76B",
    "gold"                    : "#FFD700",
    "cornsilk"                : "#FFF8DC",
    "blanched almond"         : "#FFEBCD",
    "bisque"                  : "#FFE4C4",
    "navajo white"            : "#FFDEAD",
    "wheat"                   : "#F5DEB3",
    "burly wood"              : "#DEB887",
    "tan"                     : "#D2B48C",
    "rosy brown"              : "#BC8F8F",
    "sandy brown"             : "#F4A460",
    "goldenrod"               : "#DAA520",
    "dark goldenrod"          : "#B8860B",
    "peru"                    : "#CD853F",
    "chocolate"               : "#D2691E",
    "saddle brown"            : "#8B4513",
    "sienna"                  : "#A0522D",
    "brown"                   : "#A52A2A",
    "maroon"                  : "#800000",
    "dark olive green"        : "#556B2F",
    "olive"                   : "#808000",
    "olive drab"              : "#6B8E23",
    "yellow green"            : "#9ACD32",
    "lime green"              : "#32CD32",
    "lime"                    : "#00FF00",
    "lawn green"              : "#7CFC00",
    "chartreuse"              : "#7FFF00",
    "green yellow"            : "#ADFF2F",
    "spring green"            : "#00FF7F",
    "medium spring green"     : "#00FA9A",
    "light green"             : "#90EE90",
    "pale green"              : "#98FB98",
    "dark sea green"          : "#8FBC8F",
    "medium sea green"        : "#3CB371",
    "sea green"               : "#2E8B57",
    "forest green"            : "#228B22",
    "green"                   : "#008000",
    "dark green"              : "#006400",
    "medium aquamarine"       : "#66CDAA",
    "aqua"                    : "#00FFFF",
    "cyan"                    : "#00FFFF",
    "light cyan"              : "#E0FFFF",
    "pale turquoise"          : "#AFEEEE",
    "aquamarine"              : "#7FFFD4",
    "turquoise"               : "#40E0D0",
    "medium turquoise"        : "#48D1CC",
    "dark turquoise"          : "#00CED1",
    "light sea green"         : "#20B2AA",
    "cadet blue"              : "#5F9EA0",
    "dark cyan"               : "#008B8B",
    "teal"                    : "#008080",
    "light steel blue"        : "#B0C4DE",
    "powder blue"             : "#B0E0E6",
    "light blue"              : "#ADD8E6",
    "sky blue"                : "#87CEEB",
    "light sky blue"          : "#87CEFA",
    "deep sky blue"           : "#00BFFF",
    "dodger blue"             : "#1E90FF",
    "cornflower blue"         : "#6495ED",
    "steel blue"              : "#4682B4",
    "royal blue"              : "#4169E1",
    "blue"                    : "#0000FF",
    "medium blue"             : "#0000CD",
    "dark blue"               : "#00008B",
    "navy"                    : "#000080",
    "midnight blue"           : "#191970",
    "lavender"                : "#E6E6FA",
    "thistle"                 : "#D8BFD8",
    "plum"                    : "#DDA0DD",
    "violet"                  : "#EE82EE",
    "orchid"                  : "#DA70D6",
    "fuchsia"                 : "#FF00FF",
    "magenta"                 : "#FF00FF",
    "medium orchid"           : "#BA55D3",
    "medium purple"           : "#9370DB",
    "blue violet"             : "#8A2BE2",
    "dark violet"             : "#9400D3",
    "dark orchid"             : "#9932CC",
    "dark magenta"            : "#8B008B",
    "purple"                  : "#800080",
    "indigo"                  : "#4B0082",
    "dark slate blue"         : "#483D8B",
    "slate blue"              : "#6A5ACD",
    "medium slate blue"       : "#7B68EE",
    "white"                   : "#FFFFFF",
    "snow"                    : "#FFFAFA",
    "honeydew"                : "#F0FFF0",
    "mint cream"              : "#F5FFFA",
    "azure"                   : "#F0FFFF",
    "alice blue"              : "#F0F8FF",
    "ghost white"             : "#F8F8FF",
    "white smoke"             : "#F5F5F5",
    "seashell"                : "#FFF5EE",
    "beige"                   : "#F5F5DC",
    "old lace"                : "#FDF5E6",
    "floral white"            : "#FFFAF0",
    "ivory"                   : "#FFFFF0",
    "antique white"           : "#FAEBD7",
    "linen"                   : "#FAF0E6",
    "lavender blush"          : "#FFF0F5",
    "misty rose"              : "#FFE4E1",
    "gainsboro"               : "#DCDCDC",
    "light grey"              : "#D3D3D3",
    "silver"                  : "#C0C0C0",
    "dark gray"               : "#A9A9A9",
    "gray"                    : "#808080",
    "dim gray"                : "#696969",
    "light slate gray"        : "#778899",
    "slate gray"              : "#708090",
    "dark slate gray"         : "#2F4F4F",
    "black"                   : "#000000",
    "rebecca purple"          : "#663399"
  };

  var sizes = {
    tiny    : 20,
    small   : 50,
    medium  : 100,
    big     : 200,
    large   : 200,
    huge    : 300,
    random  : 40
  };

  // TODO Handle statements that include positions for shapes
  var positions = [
    "grid",
    "vertical",
    "horizontal",
    "random",
    "smile",
    "frown",
    "stack",
    "inside"
  ];

// -- Utilities ----------------------------------------------------------
  var makeProp = function(obj, props, name) {
    var setter = "set" + name;
    var getter = "get" + name;

    obj[setter] = function(v) {
      props[name] = v;
    };

    obj[getter] = function() {
      return props[name];
    };
  };

  var Random = function() {
    var m_w = _.random(0, 100000000);
    var m_z = 987654321;
    var mask = 0xffffffff;

    // Takes any integer
    function seed(i) {
        m_w = i;
        m_z = 987654321;
        return i;
    }
    // Returns number between 0 (inclusive) and 1.0 (exclusive),
    // just like Math.random().
    function random()
    {
        m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
        m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
        var result = ((m_z << 16) + m_w) & mask;
        result /= 4294967296;
        return result + 0.5;
    }

    function randInt(mv, xv) {
      return mv + Math.floor((xv - mv) * random());
    }

    return {
      seed    : seed,
      random  : random,
      randInt : randInt
    };
  };
  var masterRand = Random();

  var clearCanvas = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

// -- Generators --------------------------------------------------------------
  var ConstGen = function(k) {
    var value = k;

    return function() {
      return value;
    };
  };

  var LinearGen = function(start, increment) {
    var value = start;
    var inc   = increment;

    return function() {
      var retVal = value;
      value += inc;
      return retVal;
    };
  };

  var RandomGen = function(minVal, maxVal) {
    var mv = minVal;
    var xv = maxVal;

    return function() {
      return masterRand.randInt(mv, xv);
    };
  };

// -- Shapes ------------------------------------------------------------------
  var Circle = function(config) {
      var props = {
        color       : "grey",
        width       : ConstGen(50),
        height      : ConstGen(50),
        xPos        : ConstGen(0),
        yPos        : ConstGen(0),
        startAngle  : 0,
        endAngle    : 360,
        reverse     : false,
        lineWidth   : 1
      };

      _.assign(props, config);

      function draw() {
          context.fillStyle = colors[props.color];
          // context.strokeStyle = colors[props.color];
          context.lineWidth = props.lineWidth;
          context.beginPath();
          context.arc(
            props.xPos,
            props.yPos,
            props.width / 2,
            (Math.PI/180)*props.startAngle,
            (Math.PI/180)*props.endAngle,
            props.reverse,
            false
          );
          context.fill();
          // context.stroke();
      }

      return {
          draw: draw
      };
  };

  var Rectangle = function(config) {
    var props = {
      color     : "grey",
      width     : ConstGen(50),
      height    : ConstGen(50),
      xPos      : ConstGen(0),
      yPos      : ConstGen(0),
      lineWidth : 1
    };

    _.assign(props, config);

    function draw() {
      context.fillStyle = props.color;
      context.lineWidth = props.lineWidth;
      context.beginPath();
      // context.strokeStyle = props.color;
      context.rect(
        props.xPos,
        props.yPos,
        props.width,
        props.height
      );
      context.fill();
      // context.stroke();
    }

    return {
      draw: draw
    };
  };

  var Triangle = function(config) {
    var props = {
      color     : "grey",
      width     : ConstGen(50),
      height    : ConstGen(50),
      xPos      : 0,
      yPos      : 0,
      lineWidth : 1
    };

    _.assign(props, config);

    function draw() {
      context.beginPath();
      context.fillStyle = colors[props.color];
      context.moveTo(
        props.xPos,
        props.yPos
      );
      context.lineTo(
        props.xPos + props.width / 2,
        props.yPos + props.height
      );
      context.lineTo(
        props.xPos - props.width / 2,
        props.yPos + props.height
      );
      context.closePath();
      context.fill();
    }

    return {
      draw: draw
    };
  };

  var StraightLine = function(config) {
    var props = {
      lineColor   : "grey",
      startX      : ConstGen(0),
      startY      : ConstGen(0),
      endX        : ConstGen(0),
      endY        : ConstGen(0),
      lineWidth   : 1
    };

    _.assign(props, config);

    function draw() {
      context.lineWidth = props.lineWidth;
      context.strokeStyle = props.lineColor;
      context.beginPath();
      context.moveTo(props.startX, props.startY);
      context.lineTo(props.endX, props.endY);
      context.stroke();
    }

    return {
      draw: draw
    };
  };

  var ZigzagLine = function(config) {
    var props = {
      color     : "grey",
      zigs      : 10,
      startX    : 0,
      startY    : 0,
      spacing   : 10,
      lineWidth : 1
    };

    _.assign(props, config);

    function draw() {
      context.lineWidth = props.lineWidth;
      context.strokeStyle = props.color;
      context.beginPath();
      context.moveTo(props.startX, props.startY);

      for (var z = 0; z < props.zigs; z++) {
        var x = props.startX + ((z + 1) * props.spacing);
        var y;
        if (z % 2 === 0) {
          y = props.startY + props.spacing;
        } else {
          y = props.startY;
        }
        context.lineTo(x, y);
      }
      context.stroke();
    }

    return {
      draw: draw
    };
  };

  var Spiral = function(config) {
    var props = {
      color     : "grey",
      context   : null,
      radius    : 0,
      angle     : 0,
      startX    : 0,
      startY    : 0,
      lineWidth : 3,
    };

    _.assign(props, config);

    function draw() {
      var newRadius   = props.radius;
      var newAngle    = props.angle;

      context.lineWidth = props.lineWidth;
      context.strokeStyle = props.color;
      context.beginPath();
      context.moveTo(props.startX, props.startY);

      for (var z = 0; z < 150; z++) {
        newRadius += 0.75;
        newAngle += (Math.PI * 2) / 50;
        var x = props.startX + newRadius * Math.cos(newAngle);
        var y = props.startY + newRadius * Math.sin(newAngle);
        context.lineTo(x,y);
      }
      context.stroke();
    }

    return {
      draw: draw
    };
  };

  var WavyLine = function(config) {
    var props = {
      color     : "grey",
      startX    : ConstGen(0),
      startY    : ConstGen(0),
      endX      : 0,
      endY      : 0,
      lineWidth : 1,
    };

    var increments = {
      small   : 20,
      medium  : 50,
      large   : 100
    };

    _.assign(props, config);

    function draw() {

      context.lineWidth = props.lineWidth;
      context.strokeStyle = props.color;
      context.beginPath();
      context.moveTo(props.startX.next(), props.startY.next());

      var index = 0;
      var curveValues = [
        props.startY.next() - increments[props.size],
        props.startY.next() + increments[props.size]
      ];

      var firstX  = props.startX.next() + increments[props.size];
      var secondX = firstX + increments[props.size];

      for (var x = props.startX.next(); x < props.endX; x++ ) {
        curve = curveValues[index];
        index = 1 - index;
        context.quadraticCurveTo(
          firstX,
          curve,
          secondX,
          props.endY
        );
        firstX  = secondX + increments[props.size];
        secondX = firstX + increments[props.size];
      }
      context.stroke();
    }

    return {
      draw: draw
    };
  };

  var shapes = {
    "circle"        : Circle,
    "rectangle"     : Rectangle,
    "triangle"      : Triangle,
    "spiral"        : Spiral,
    "wavyline"      : WavyLine,
    "straightline"  : StraightLine,
    "zigzagline"    : ZigzagLine,
    "square"        : Rectangle,
    "oval"          : Circle,
    "dot"           : Circle,
    "point"         : Circle
  };

// -- Core  -------------------------------------------------------------------
  var BackgroundInstruction = function(config) {
    var props   = {};
    var retVal  = {};

    props = {
      description   : null,
      what          : "background",
      color         : colors.black
    };

    _.assign(props, config);

    makeProp(retVal, props, "description");
    makeProp(retVal, props, "what");
    makeProp(retVal, props, "color");

    return retVal;
  };

  var ShapeInstruction = function(config) {
    var props   = {};
    var retVal  = {};

    props = {
      description     : null,
      what            : "shape",
      number          : 1,
      shape           : "circle",
      size            : "small",
      position        : "center",
      color           : "black",
      fillColor       : "random",
      lineColor       : "random"
    };

      _.assign(props, config);

      makeProp(retVal, props, "description");
      makeProp(retVal, props, "what");
      makeProp(retVal, props, "number");
      makeProp(retVal, props, "shape");
      makeProp(retVal, props, "size");
      makeProp(retVal, props, "position");
      makeProp(retVal, props, "color");
      // makeProp(retVal, props, "fillColor");
      // makeProp(retVal, props, "lineColor");

    return retVal;
  };

  var instructionTypes = {
    "backgroundIns"  : BackgroundInstruction,
    "shapeIns"       : ShapeInstruction
  };

  // An object containing all the art description types (shapes, sizes, etc.)
  // This is passed to the parser to aid in evaluation of user input.
  var appAssets = {
    colors            : colors,
    sizes             : sizes,
    positions         : positions,
    shapes            : shapes,
    instructionTypes  : instructionTypes
  };

  var parseInput = function(inputs) {
    // TODO Handle both fill and line colors.

    var instructions = [];
    var backgroundInstructions = [];
    var shapeInstructions = [];
    var parsedInstructions;

    _.each(inputs, function(input) {
      parsedInstructions = parser.parse(input.toLowerCase().trim(), appAssets);

      if (parsedInstructions[0].getwhat() === "background") {
        backgroundInstructions.push(parsedInstructions[0]);
      } else {
        // This only supports basic draw shape instructions so far,
        // so this else statement is enough.
        // TODO: Support shape modifier instructions as well.
        shapeInstructions.push(parsedInstructions[0]);
      }
    });

    instructions.push(backgroundInstructions, shapeInstructions);

    // Debugger.log("Background instruction keys: " + _.keys(instructions[0][0]));
    return instructions;
  };

  var draw = function(instructions) {

    _.each(instructions[0], function(ins) {
      // This is a background, so we just need to draw a square
      // that fills the canvas.
      var color = ins.getcolor().name;
      var background = Rectangle({
        width   : canvas.width,
        height  : canvas.height,
        xPos    : 0,
        yPos    : 0,
        color   : colors[color]
      });

      background.draw();
    });

    _.each(instructions[1], function(ins) {

      var padding       = 5; // TODO Update padding when positioning works
      var shapeConfig   = {};
      var pointsStore   = [];
      var what          = ins.getwhat();
      var number        = ins.getnumber();
      var shape         = ins.getshape();
      var size          = ins.getsize().num;
      var position      = ins.getposition();
      var color         = ins.getcolor().name;
      var xPos;
      var yPos;
      var shapeToDraw;
      var totalWidth;

      if (what === "shape") {

        // FIXME Correct the positioning of shapes
        // triangles and circles are way off
        totalWidth  = size * number + padding * (number - 1);
        xPos        = (canvas.width - totalWidth) / 2;
        yPos        = (canvas.height - size) / 2;

        // If the width of the shapes to be drawn is wider than the canvas,
        // We need to draw the shapes in rows.
        if (totalWidth > canvas.width) {

        }

        Debugger.log("Total width of shapes: " + totalWidth);
        Debugger.log("Width of the canvas: " + canvas.width);

        for (var x = 0; x < number; x++) {
          switch (shape) {
          case "circle":
          case "square":
          case "triangle":
          case "rectangle":
            shapeConfig = {
              color   : color,
              xPos    : xPos,
              yPos    : yPos,
              width   : size,
              height  : size
            };
            Debugger.log("xPos: " + xPos);
            break;

          case "dot" :
            xPos   = RandomGen(0, canvas.width)();
            yPos   = RandomGen(0, canvas.height)();

            pointsStore.push([xPos, yPos]);

            shapeConfig = {
              color   : color,
              xPos    : xPos,
              yPos    : yPos,
              width   : 1,
              height  : 1
            };
            break;
          }
          shapeToDraw = shapes[shape](shapeConfig);
          shapeToDraw.draw();
          xPos += size + padding;
        }

        if (pointsStore.length) {
          // Sample statement to work with:
          // There are 10 dots.
          // Each dots has 100 lines radiating out from it.
          // There are 100 dots with 100 lines radiating out from each dot.

          for (var y = 0; y < pointsStore.length; y++) {
            for (var l = 0; l < 2; l++) {
              var randX = RandomGen (800,1000);
              var randY = RandomGen(0, -100);

              lineToDraw = StraightLine({
                startX  : pointsStore[y][0],
                startY  : pointsStore[y][1],
                endX    : randX(),
                endY    : randY()
              });
              lineToDraw.draw();
            }
          }
        }
      }
    });
  };

  clearCanvas();
  var instructions = parseInput(inputs);
  draw(instructions);
}

var handleInput = function() {

  // TODO Handle any number of user inputs.
  var userInputs = [];

  for (var x = 0; x < 2; x++ ) {
    var element = document.getElementById("input" + (x + 1));
    if (element.value.length > 0) {
      userInputs.push(element.value);
    }
  }

  if (userInputs.length > 0) {
    LeWittApp(userInputs);
  } else {
    // TODO Handle case where there are no entries
  }
};
