// The background is orange. [/]
// There are 4 circles. [/]
// There are 20 tiny crimson triangles. [/]
// Each square has a dot inside it. [/]
// There is a large black square. [/]
// Each rectangles are different colors. [ ]
// Each rectangles are in opposite corners. [ ]
// There are 20 dots radonly spaced. [ ]
// There are lines radiating out from each dot. [ ]
// There is a green triangle beside the blue square. [ ]

start
 = sentences

sentences
 = s:sentence+ { return s; }
 /*/ first:sentence rest:sentences
    { rest.append(first); return rest; }*/

sentence
 = bg: backgroundDescription { return bg; }
 / sd: initialShapeDescription { return sd; }
 / sm: shapeModifier { return sm; }

backgroundDescription
 = the _ background _ toBe _ col:color[.]*
 {
   return options.instructionTypes.backgroundIns( { color: col, what: "background" } );
 }

initialShapeDescription
 = the _ toBe _ cnt:count _? siz:size _? col:color _? sh:shape[s]*[.]*
 {
   return options.instructionTypes.shapeIns( { number: cnt, shape: sh, size: siz, color: col, what: "shape" } );
 }

// Not implemented yet.
shapeModifier
 = the _ shape _ toBe _ count _? size _? color _? shape _ location[.]*

background
 = 'background'

the
 = "there"
 / "the"
 / "each"

aa
 = "a"

location
 = "in it"
 / "beside it"
 / "inside it"
 / "on top of it"
 / "under it"
 / "underneath it"

toBe
 = "is"
 / "are"
 / "will be"
 / "should be"
 / "must be"
 / "has a"

// TODO: No alignment options have been implemented yet. Needs more thought.
alignment
 = "grid"
 / "right diagonal"
 / "left diagonal"
 / "random"
 / "smile"
 / "frown"
 / "stack"
 / "randomly"

color
 = value: "pink"                    { return { name: value, hex: options.colors[value] }; }
 / value: "light pink"              { return { name: value, hex: options.colors[value] }; }
 / value: "hot pink"                { return { name: value, hex: options.colors[value] }; }
 / value: "deep pink"               { return { name: value, hex: options.colors[value] }; }
 / value: "pale violet red"         { return { name: value, hex: options.colors[value] }; }
 / value: "medium violet red"       { return { name: value, hex: options.colors[value] }; }
 / value: "light salmon"            { return { name: value, hex: options.colors[value] }; }
 / value: "salmon"                  { return { name: value, hex: options.colors[value] }; }
 / value: "dark salmon"             { return { name: value, hex: options.colors[value] }; }
 / value: "light coral"             { return { name: value, hex: options.colors[value] }; }
 / value: "indian red"              { return { name: value, hex: options.colors[value] }; }
 / value: "crimson"                 { return { name: value, hex: options.colors[value] }; }
 / value: "fire brick"              { return { name: value, hex: options.colors[value] }; }
 / value: "dark red"                { return { name: value, hex: options.colors[value] }; }
 / value: "red"                     { return { name: value, hex: options.colors[value] }; }
 / value: "orange red"              { return { name: value, hex: options.colors[value] }; }
 / value: "tomato"                  { return { name: value, hex: options.colors[value] }; }
 / value: "coral"                   { return { name: value, hex: options.colors[value] }; }
 / value: "dark orange"             { return { name: value, hex: options.colors[value] }; }
 / value: "orange"                  { return { name: value, hex: options.colors[value] }; }
 / value: "yellow"                  { return { name: value, hex: options.colors[value] }; }
 / value: "light yellow"            { return { name: value, hex: options.colors[value] }; }
 / value: "lemon chiffon"           { return { name: value, hex: options.colors[value] }; }
 / value: "light goldenrod yellow"  { return { name: value, hex: options.colors[value] }; }
 / value: "papaya whip"             { return { name: value, hex: options.colors[value] }; }
 / value: "moccasin"                { return { name: value, hex: options.colors[value] }; }
 / value: "peach puff"              { return { name: value, hex: options.colors[value] }; }
 / value: "pale goldenrod"          { return { name: value, hex: options.colors[value] }; }
 / value: "khaki"                   { return { name: value, hex: options.colors[value] }; }
 / value: "dark khaki"              { return { name: value, hex: options.colors[value] }; }
 / value: "gold"                    { return { name: value, hex: options.colors[value] }; }
 / value: "cornsilk"                { return { name: value, hex: options.colors[value] }; }
 / value: "blanched almond"         { return { name: value, hex: options.colors[value] }; }
 / value: "bisque"                  { return { name: value, hex: options.colors[value] }; }
 / value: "navajo white"            { return { name: value, hex: options.colors[value] }; }
 / value: "wheat"                   { return { name: value, hex: options.colors[value] }; }
 / value: "burly wood"              { return { name: value, hex: options.colors[value] }; }
 / value: "tan"                     { return { name: value, hex: options.colors[value] }; }
 / value: "rosy brown"              { return { name: value, hex: options.colors[value] }; }
 / value: "sandy brown"             { return { name: value, hex: options.colors[value] }; }
 / value: "goldenrod"               { return { name: value, hex: options.colors[value] }; }
 / value: "dark goldenrod"          { return { name: value, hex: options.colors[value] }; }
 / value: "peru"                    { return { name: value, hex: options.colors[value] }; }
 / value: "chocolate"               { return { name: value, hex: options.colors[value] }; }
 / value: "saddle brown"            { return { name: value, hex: options.colors[value] }; }
 / value: "sienna"                  { return { name: value, hex: options.colors[value] }; }
 / value: "brown"                   { return { name: value, hex: options.colors[value] }; }
 / value: "maroon"                  { return { name: value, hex: options.colors[value] }; }
 / value: "dark olive green"        { return { name: value, hex: options.colors[value] }; }
 / value: "olive"                   { return { name: value, hex: options.colors[value] }; }
 / value: "olive drab"              { return { name: value, hex: options.colors[value] }; }
 / value: "yellow green"            { return { name: value, hex: options.colors[value] }; }
 / value: "lime green"              { return { name: value, hex: options.colors[value] }; }
 / value: "lime"                    { return { name: value, hex: options.colors[value] }; }
 / value: "lawn green"              { return { name: value, hex: options.colors[value] }; }
 / value: "chartreuse"              { return { name: value, hex: options.colors[value] }; }
 / value: "green yellow"            { return { name: value, hex: options.colors[value] }; }
 / value: "spring green"            { return { name: value, hex: options.colors[value] }; }
 / value: "medium spring green"     { return { name: value, hex: options.colors[value] }; }
 / value: "light green"             { return { name: value, hex: options.colors[value] }; }
 / value: "pale green"              { return { name: value, hex: options.colors[value] }; }
 / value: "dark sea green"          { return { name: value, hex: options.colors[value] }; }
 / value: "medium sea green"        { return { name: value, hex: options.colors[value] }; }
 / value: "sea green"               { return { name: value, hex: options.colors[value] }; }
 / value: "forest green"            { return { name: value, hex: options.colors[value] }; }
 / value: "green"                   { return { name: value, hex: options.colors[value] }; }
 / value: "dark green"              { return { name: value, hex: options.colors[value] }; }
 / value: "medium aquamarine"       { return { name: value, hex: options.colors[value] }; }
 / value: "aqua"                    { return { name: value, hex: options.colors[value] }; }
 / value: "cyan"                    { return { name: value, hex: options.colors[value] }; }
 / value: "light cyan"              { return { name: value, hex: options.colors[value] }; }
 / value: "pale turquoise"          { return { name: value, hex: options.colors[value] }; }
 / value: "aquamarine"              { return { name: value, hex: options.colors[value] }; }
 / value: "turquoise"               { return { name: value, hex: options.colors[value] }; }
 / value: "medium turquoise"        { return { name: value, hex: options.colors[value] }; }
 / value: "dark turquoise"          { return { name: value, hex: options.colors[value] }; }
 / value: "light sea green"         { return { name: value, hex: options.colors[value] }; }
 / value: "cadet blue"              { return { name: value, hex: options.colors[value] }; }
 / value: "dark cyan"               { return { name: value, hex: options.colors[value] }; }
 / value: "teal"                    { return { name: value, hex: options.colors[value] }; }
 / value: "light steel blue"        { return { name: value, hex: options.colors[value] }; }
 / value: "powder blue"             { return { name: value, hex: options.colors[value] }; }
 / value: "light blue"              { return { name: value, hex: options.colors[value] }; }
 / value: "sky blue"                { return { name: value, hex: options.colors[value] }; }
 / value: "light sky blue"          { return { name: value, hex: options.colors[value] }; }
 / value: "deep sky blue"           { return { name: value, hex: options.colors[value] }; }
 / value: "dodger blue"             { return { name: value, hex: options.colors[value] }; }
 / value: "cornflower blue"         { return { name: value, hex: options.colors[value] }; }
 / value: "steel blue"              { return { name: value, hex: options.colors[value] }; }
 / value: "royal blue"              { return { name: value, hex: options.colors[value] }; }
 / value: "blue"                    { return { name: value, hex: options.colors[value] }; }
 / value: "medium blue"             { return { name: value, hex: options.colors[value] }; }
 / value: "dark blue"               { return { name: value, hex: options.colors[value] }; }
 / value: "navy"                    { return { name: value, hex: options.colors[value] }; }
 / value: "midnight blue"           { return { name: value, hex: options.colors[value] }; }
 / value: "lavender"                { return { name: value, hex: options.colors[value] }; }
 / value: "thistle"                 { return { name: value, hex: options.colors[value] }; }
 / value: "plum"                    { return { name: value, hex: options.colors[value] }; }
 / value: "violet"                  { return { name: value, hex: options.colors[value] }; }
 / value: "orchid"                  { return { name: value, hex: options.colors[value] }; }
 / value: "fuchsia"                 { return { name: value, hex: options.colors[value] }; }
 / value: "magenta"                 { return { name: value, hex: options.colors[value] }; }
 / value: "medium orchid"           { return { name: value, hex: options.colors[value] }; }
 / value: "medium purple"           { return { name: value, hex: options.colors[value] }; }
 / value: "blue violet"             { return { name: value, hex: options.colors[value] }; }
 / value: "dark violet"             { return { name: value, hex: options.colors[value] }; }
 / value: "dark orchid"             { return { name: value, hex: options.colors[value] }; }
 / value: "dark magenta"            { return { name: value, hex: options.colors[value] }; }
 / value: "purple"                  { return { name: value, hex: options.colors[value] }; }
 / value: "indigo"                  { return { name: value, hex: options.colors[value] }; }
 / value: "dark slate blue"         { return { name: value, hex: options.colors[value] }; }
 / value: "slate blue"              { return { name: value, hex: options.colors[value] }; }
 / value: "medium slate blue"       { return { name: value, hex: options.colors[value] }; }
 / value: "white"                   { return { name: value, hex: options.colors[value] }; }
 / value: "snow"                    { return { name: value, hex: options.colors[value] }; }
 / value: "honeydew"                { return { name: value, hex: options.colors[value] }; }
 / value: "mint cream"              { return { name: value, hex: options.colors[value] }; }
 / value: "azure"                   { return { name: value, hex: options.colors[value] }; }
 / value: "alice blue"              { return { name: value, hex: options.colors[value] }; }
 / value: "ghost white"             { return { name: value, hex: options.colors[value] }; }
 / value: "white smoke"             { return { name: value, hex: options.colors[value] }; }
 / value: "seashell"                { return { name: value, hex: options.colors[value] }; }
 / value: "beige"                   { return { name: value, hex: options.colors[value] }; }
 / value: "old lace"                { return { name: value, hex: options.colors[value] }; }
 / value: "floral white"            { return { name: value, hex: options.colors[value] }; }
 / value: "ivory"                   { return { name: value, hex: options.colors[value] }; }
 / value: "antique white"           { return { name: value, hex: options.colors[value] }; }
 / value: "linen"                   { return { name: value, hex: options.colors[value] }; }
 / value: "lavender blush"          { return { name: value, hex: options.colors[value] }; }
 / value: "misty rose"              { return { name: value, hex: options.colors[value] }; }
 / value: "gainsboro"               { return { name: value, hex: options.colors[value] }; }
 / value: "light grey"              { return { name: value, hex: options.colors[value] }; }
 / value: "silver"                  { return { name: value, hex: options.colors[value] }; }
 / value: "dark gray"               { return { name: value, hex: options.colors[value] }; }
 / value: "gray"                    { return { name: value, hex: options.colors[value] }; }
 / value: "dim gray"                { return { name: value, hex: options.colors[value] }; }
 / value: "light slate gray"        { return { name: value, hex: options.colors[value] }; }
 / value: "slate gray"              { return { name: value, hex: options.colors[value] }; }
 / value: "dark slate gray"         { return { name: value, hex: options.colors[value] }; }
 / value: "black"                   { return { name: value, hex: options.colors[value] }; }
 / value: "rebecca purple"          { return { name: value, hex: options.colors[value] }; }
 /                                  { return { color: "default", hex: "#000000" }; }

size
 = value: "tiny"            { return { size: value, num: options.sizes[value] }; }
 / value: "small"           { return { size: value, num: options.sizes[value] }; }
 / value: "medium"          { return { size: value, num: options.sizes[value] }; }
 / value: "big"             { return { size: value, num: options.sizes[value] }; }
 / value: "large"           { return { size: value, num: options.sizes[value] }; }
 / value: "huge"            { return { size: value, num: options.sizes[value] }; }
 /                          { return { size: "default", num: 30 }; }

shape
= value: "circle"          { return value; }
/ value: "rectangle"       { return value; }
/ value: "triangle"        { return value; }
/ value: "spiral"          { return value; }
/ value: "wavy line"       { return value; }
/ value: "straight line"   { return value; }
/ value: "zigzag line"     { return value; }
/ value: "square"          { return value; }
/ value: "oval"            { return value; }
/ value: "dot"             { return value; }
/ value: "point"           { return value; }
/                          { return "square"; }
/*
 = value: "circle"          { return options.shapes[value]; }
 / value: "rectangle"       { return options.shapes[value]; }
 / value: "triangle"        { return options.shapes[value]; }
 / value: "spiral"          { return options.shapes[value]; }
 / value: "wavy line"       { return options.shapes[value]; }
 / value: "straight line"   { return options.shapes[value]; }
 / value: "zigzag line"     { return options.shapes[value]; }
 / value: "square"          { return options.shapes[value]; }
 / value: "oval"            { return options.shapes[value]; }
 / value: "dot"             { return options.shapes[value]; }
 / value: "point"           { return options.shapes[value]; }
 /                          { return options.shapes["square"]; }
*/


count
 = value: integer           { return value }
 / value: "a"               { return 1 }
 /                          { return 0 }

integer
 = digits:[0-9]+            { return parseInt(digits.join(""), 10) }

hex "hexidecimal"
 = [0-9a-f]i

_ "whitespace"
 = [ \t\r\n]+
