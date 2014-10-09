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

  var Circle = function(config) {
      var props = {
        context : null,
        radius : 100,
        xPos : 0,
        yPos : 0,
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
            props.xPos,
            props.yPos,
            props.radius,
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
      startX: 0,
      startY: 0,
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
      context.lineWidth = props.lineWidth;
      context.strokeStyle = props.color;
      context.beginPath();
      context.moveTo(props.startX, props.startY);

      var currX = props.startX;
      var currY = props.startY;
      var curveUp = props.startY - increments[props.size];
      var curveDown = props.startY + increments[props.size];
      var curve = curveUp;
      //x = 0, y = 350

      for (var x = props.startX; x < props.endX; x++ ) {
        curve = (curve == curveDown ? curveUp : curveDown);
        context.quadraticCurveTo(currX += increments[props.size], curve, currX += increments[props.size], props.endY);

      }
      context.stroke();
    }

    return {
      draw: draw
    };

  };

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  Debugger.log("Drawing Canvas");

  function drawScreen() {
    for (var x= 0; x < 30; x++) {
      z = ZigzagLine({context: context, zigs: 40, startX: 0, startY: 20 * x, spacing: 20 * x, color: "purple", lineWidth: 8});
      z.draw();
    }

    c = Circle({context: context, xPos: 200, yPos:250, startAngle:0, endAngle:240, reverse:false, circleColor:"red"});
    c.draw();

    l = StraightLine({context: context, startX: 0, startY: 100, endX: 300, endY: 100, lineColor: "green", lineWidth: 1});
    l.draw();

    r = Rectangle({context: context, startX: 200, startY: 200, width: 50, height: 50, color: "yellow", lineWidth: 1});
    r.draw();

    t = Triangle({context: context, startX: 300, startY: 100, width: 200, height: 300, color: "white", lineWidth: 1});
    t.draw();

    s = Spiral({context: context, radius: 0, angle: 0, startX: 400, startY: 200, lineWidth: 10, color: "brown"});
    s.draw();

    wl = WavyLine({startx: 0, startY: 300, endX: 810, endY: 300, color: "pink", lineWidth: 10, size: "small" });
    wl.draw();
  }

  drawScreen();
}
