window.addEventListener("load", eventWindowLoaded, false);

var Debugger = function () { };
Debugger.log = function(message) {
  try {
    console.log(message);
  } catch (exception) {
    return;
  }
};

function eventWindowLoaded() {
  leWittApp();
}

function canvasSupport() {
  return Modernizr.canvas;
}

function leWittApp() {
  if (!canvasSupport()) {
    return;
  }

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
      seed: seed,
      random: random,
      randInt: randInt
    };
  };

  var masterRand = Random();

  var ConstGen = function(k) {
    var value = k;

    return function() {
      return value;
    };
  };

  var LinearGen = function(start, increment) {
    var value = start;
    var inc = increment;

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

  var Circle = function(config) {
      var props = {
        context : null,
        radius : ConstGen(100),
        xPos : ConstGen(0),
        yPos : ConstGen(0),
        startAngle : 0,
        endAngle : 360,
        reverse : false,
        lineWidth: 3,
        circleColor : "red"
      };

      _.assign(props, config);

      function draw() {
          context.strokeStyle = props.circleColor;
          context.lineWidth = props.lineWidth;
          context.beginPath();
          context.arc(
            props.xPos(),
            props.yPos(),
            props.radius(),
            (Math.PI/180)*props.startAngle,
            (Math.PI/180)*props.endAngle,
            props.reverse
          );
          context.stroke();
      }

      return {
          draw: draw
      };
  };

  var StraightLine = function(config) {
    var props = {
      context : null,
      startX : 0,
      startY : 0,
      endX : 0,
      endY : 0,
      lineColor : "red",
      lineWidth : 1
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
      context: null,
      zigs: 10,
      startX: 0,
      startY: 0,
      spacing: 10,
      color: "red",
      lineWidth: 1
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

  var Rectangle = function(config) {
    var props = {
      context: null,
      startX: 0,
      startY: 0,
      width: 10,
      height: 10,
      color: "red",
      lineWidth: 5
    };

    _.assign(props, config);

    function draw() {
      context.rect(props.startX, props.startY, props.width, props.height);
      context.lineWidth = props.lineWidth;
      context.strokeStyle = props.color;
      context.stroke();
    }

    return {
      draw: draw
    };
  };

  var Triangle = function(config) {
    var props = {
      context : null,
      startX : 0,
      startY : 0,
      width : 10,
      height: 10,
      color: "black",
      lineWidth: 3
    };

    _.assign(props, config);

    function draw() {
      context.beginPath();
      context.lineStyle = props.color;
      context.lineWidth = props.lineWidth;
      context.moveTo(props.startX, props.startY);
      context.lineTo(props.startX + props.width / 2, props.startY + props.height);
      context.lineTo(props.startX - props.width / 2, props.startY + props.height);
      context.closePath();
      context.fillStyle = props.color;
      context.fill();
    }

    return {
      draw: draw
    };
  };

  var Spiral = function(config) {
    var props = {
      context : null,
      radius : 0,
      angle : 0,
      startX: 0,
      startY: 0,
      lineWidth: 3,
      color: "brown"
    };

    _.assign(props, config);

    function draw() {
      var newRadius = props.radius;
      var newAngle = props.angle;

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
      startX: ConstGen(0),
      startY: ConstGen(0),
      endX: 0,
      endY: 0,
      color: "purple",
      lineWidth: 4,
      size: "small",
    };

    var increments = {
      small: 20,
      medium: 50,
      large: 100
    };

    _.assign(props, config);

    function draw() {

      console.log("draw()");
      context.lineWidth = props.lineWidth;
      context.strokeStyle = props.color;
      context.beginPath();
      context.moveTo(props.startX.next(), props.startY.next());

      var index = 0;
      var curveValues = [
        props.startY.next() - increments[props.size],
        props.startY.next() + increments[props.size]
      ];

      var firstX = props.startX.next() + increments[props.size];
      var secondX = firstX + increments[props.size];


      for (var x = props.startX.next(); x < props.endX; x++ ) {

        console.log("firstX: ", firstX);
        console.log("secondX: ", secondX);

        curve = curveValues[index];
        index = 1 - index;
        context.quadraticCurveTo(
          firstX,
          curve,
          secondX,
          props.endY
        );
        firstX = secondX + increments[props.size];
        secondX = firstX + increments[props.size];
      }
      context.stroke();
    }

    return {
      draw: draw
    };

  };

  var Instruction = function(config) {
    var props = {
      description : null,
      what: null,
      shape: null,
      size: null,
      position: null,
      fillColor: null,
      lineColor: null
    };

    _.assign(props, config);

    var retVal = {};
    makeProp(retVal, props, "description");

    Debugger.log("Description: " + props.description);
    Debugger.log("What: " + props.what);
    Debugger.log("Shape: " + props.shape);
    Debugger.log("Size: " + props.size);
    Debugger.log("Position: " + props.position);
    Debugger.log("fillColor: " + props.fillColor);
    Debugger.log("lineColor: " + props.lineColor);

    return retVal;
  };

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var seed = document.getElementById("seed");
  var userInstruction = document.getElementById("userInstruction");

  Debugger.log("Drawing Canvas");

  function drawScreen() {
// 43171409
    theSeed = masterRand.seed(_.random(1,100000000));
    // theSeed = masterRand.seed(43171409);
    seed.innerHTML = theSeed;


    var shapes = ["circle", "rectangle", "triangle", "spiral", "wavy line",
                  "straight line", "zigzag line"];

    var colors = ["black", "red", "blue", "yellow", "green", "orange",
                  "white", "purple", "brown", "random"];

    var sizes = ["big", "small", "medium", "huge", "random"];

    var positions = ["grid", "vertical", "horizontal", "random"];

    var inputOne = "There is a big red circle.".toLowerCase();
    var inputTwo = "The background is black.".toLowerCase();

    var patternOne = RegExp("(there is|there are) (a|[0-9]+) *([a-zA-Z]+)? *([a-zA-Z]+)? *([a-zA-Z]+)? *([a-zA-Z]+)? *([a-zA-Z]+)? +(" + shapes.join('|') + ")(?:.)", "i");

    var resultArray = patternOne.exec(inputOne);
    resultArray = _.compact(resultArray);

    var names = ["description", "what", "number", "size", "color", "shape"];
    var blanks = "          ";

    var resultDescription = resultArray[0];
    var resultColor;
    var resultShape;
    var resultSize;
    var resultWhat;
    var resultNum = 0;

    _.each(resultArray, function(item) {
      var color = _.indexOf(colors, item);
      var shape = _.indexOf(shapes, item);
      var size = _.indexOf(sizes, item);
      if (item == "there is" || item == "there are") {
        resultWhat = item;
      }
      if (item == "a" || _.isNumber(item) ) {
        resultNum = item;
        if (item == "a") {
          resultNum = 1;
        }
      }
      if (color != -1) {
        resultColor = colors[color];
      }
      if (shape != -1) {
        resultShape = shapes[shape];
      }
      if (size != -1) {
        resultSize = sizes[size];
      }
    });

    var ins = Instruction({description: resultDescription, what: resultWhat, shape: resultShape, size: resultSize});



  }

  drawScreen();
}
