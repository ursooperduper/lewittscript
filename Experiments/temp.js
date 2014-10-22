// for (var x= 0; x < 30; x++) {
//   z = ZigzagLine({context: context, zigs: 40, startX: 0, startY: 20 * x, spacing: 20 * x, color: "purple", lineWidth: 1});
//   z.draw();
// }
// cx = LinearGen(0, 20);
// cy = LinearGen(50, 20);
// cr = LinearGen(50, 5);
//
// for (var x = 0; x < 50; x++) {
//   c = Circle({context: context, xPos: cx, yPos: cy, radius: cr, circleColor:"green", lineWidth: 1});
//   c.draw();
// }


// hand drawn line
// wavy line
// context.beginPath();
// context.strokeStyle = "orange";
// context.lineWidth = 1;
// context.moveTo(0, 300);
// context.bezierCurveTo(0, 295, 10, 298, 20, 300);
// context.bezierCurveTo(20, 303, 32, 297, 59, 298);
// context.bezierCurveTo(59, 298, 84, 301, 102, 300);
// context.bezierCurveTo(102, 300, 112, 303, 115, 302);
// context.bezierCurveTo(115, 302, 120, 295, 124, 300);
// context.bezierCurveTo(124, 300, 136, 303, 142, 299);
// context.bezierCurveTo(142, 299, 168, 302, 188, 300);
// context.bezierCurveTo(188, 300, 200, 297, 234, 299);
// context.bezierCurveTo(234, 299, 252, 294, 260, 299);
// context.bezierCurveTo(260, 299, 300, 302, 304, 302);
// context.bezierCurveTo(304, 302, 320, 306, 334, 300);
// context.bezierCurveTo(334, 300, 400, 303, 440, 300);
// context.bezierCurveTo(440, 300, 440, 296, 445, 302);
// context.bezierCurveTo(445, 302, 470, 298, 502, 303);
// context.bezierCurveTo(502, 303, 529, 297, 602, 300);
// context.bezierCurveTo(602, 300, 690, 305, 720, 302);
// context.bezierCurveTo(720, 302, 785, 297, 810, 300);
// context.stroke();

// simple wavy line
// context.beginPath();
// context.strokeStyle = "purple";
// context.lineWidth = 1;
// context.moveTo(0,400);
// context.bezierCurveTo(0, 400, 300, 402, 520, 398);
// context.bezierCurveTo(520, 398, 660, 400, 810, 397);
// context.stroke();

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



// var userInstruction = document.getElementById("userInstruction");

//   function handleInput() {
// // 43171409
//     // theSeed = masterRand.seed(_.random(1,100000000));
//     // theSeed = masterRand.seed(43171409);
//     // seed.innerHTML = theSeed;
//
//     // var userInput = "There is a big red circle.".toLowerCase();
//     // var inputTwo = "The background is black.".toLowerCase();
//
//     // var drawingInstruction1 = parse(userInput);
//     // var drawingInstruction2 = parse(inputTwo);
//
//     // take each instruction element and send it through parse().
//     // If there is a match, make art.
//     // If there is no match, give feedback to the user.
//
//
//     console.log("Called handleInput()");
//
//
