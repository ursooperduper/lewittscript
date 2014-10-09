window.addEventListener("load", eventWindowLoaded, false);

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



var Color = {
  properties: {
    // pinks
    pink: "#FFC0CB",
    lightPink: "#FFB6C1",
    hotPink: "#FF69B4",
    deepPink: "#FF1493",
    paleVioletRed: "#DB7093",
    mediumVioletRed: "#C71585",
    // reds
    lightSalmon: "#FFA07A",
    salmon: "#FA8072",
    darkSalmon: "#E9967A",
    lightCoral: "F08080",
    indianRed: "#CD5C5C",
    crimson: "#DC143C",
    fireBrick: "#B22222",
    darkRed: "#8B0000",
    red: "#FF0000",
    // oranges
    orangeRed: "#FF4500",
    tomato: "#FF6347",
    coral: "#FF7F50",
    darkOrange: "#FF8C00",
    orange: "FFA500",
    // yellows
    yellow: "#FFFF00",
    lightYellow: "#FFFFE0",
    lemonChiffon: "#FFFACD",
    lightGoldenRod: "#FAFAD2",
    papayaWhip: "#FFEFD5",
  }

};



function leWittApp() {
  if (!canvasSupport()) {
    return;
  }

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
        circleColor : "red"
      };

      _.assign(props, config);

      function draw() {
          context.strokeStyle = props.circleColor;
          context.strokeWidth = 10;
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

      // var currX = props.startX.next();
      // var currY = props.startY.next();
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

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var seed = document.getElementById("seed");

  Debugger.log("Drawing Canvas");

  function drawScreen() {
// 43171409
    // theSeed = masterRand.seed(_.random(1,100000000));
    theSeed = masterRand.seed(43171409);
    seed.innerHTML = theSeed;

// document.getElementById("myspan").innerHTML="newtext";

    // for (var x= 0; x < 30; x++) {
    //   z = ZigzagLine({context: context, zigs: 40, startX: 0, startY: 20 * x, spacing: 20 * x, color: "purple", lineWidth: 8});
    //   z.draw();
    // }
    //



    cx = LinearGen(200, 20);
    cy = LinearGen(250, 20);
    cr = RandomGen(10, 400);

    for (var x = 0; x < 10; x++) {
      c = Circle({context: context, xPos: cx, yPos: cy, radius: cr, circleColor:"red"});
      c.draw();
    }


    //
    // l = StraightLine({context: context, startX: 0, startY: 100, endX: 300, endY: 100, lineColor: "green", lineWidth: 1});
    // l.draw();
    //
    // r = Rectangle({context: context, startX: 200, startY: 200, width: 50, height: 50, color: "yellow", lineWidth: 1});
    // r.draw();
    //
    // t = Triangle({context: context, startX: 300, startY: 100, width: 200, height: 300, color: "white", lineWidth: 1});
    // t.draw();
    //
    // s = Spiral({context: context, radius: 0, angle: 0, startX: 400, startY: 200, lineWidth: 10, color: "brown"});
    // s.draw();

    // x = ConstGen(0);
    // y = ConstGen(300);
    //
    // wl = WavyLine({startX: x, startY: y, endX: 800, endY: 300, color: "pink", lineWidth: 10, size: "small" });
    // wl.draw();
  }



  drawScreen();
}
