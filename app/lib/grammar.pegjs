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
 = bg: backgroundDescription        { return bg; }
 / bd: backgroundBorderDescription  { return bd; }
 / sd: initialShapeDescription      { return sd; }
 // sm: shapeModifier                { return sm; }

backgroundDescription
 = the _ background _ toBe _ col:color[.]*
 { return options.instructionTypes.backgroundIns({ what : "background", color : col});}

backgroundBorderDescription
 = the _ toBe _ aa _ th:thickness _? cl:color _? border[.]*
 { return options.instructionTypes.bgBorderIns({ what : "bgborder", color : cl, thickness : th }); }

initialShapeDescription
 = the _ toBe _ cnt:count _? siz:size _? col:color _? sh:shape[s]*[.]*
 { return options.instructionTypes.shapeIns({ number : cnt, shape : sh, size : siz, color : col, what : "shape" }); }

// Not implemented yet.
shapeModifier
 = the _ shape _ toBe _ count _? size _? color _? shape _ location[.]*

background
 = 'background'

border
 = 'border'

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
 = value: "pink"                    { return value; }
 / value: "light pink"              { return value; }
 / value: "hot pink"                { return value; }
 / value: "deep pink"               { return value; }
 / value: "pale violet red"         { return value; }
 / value: "medium violet red"       { return value; }
 / value: "light salmon"            { return value; }
 / value: "salmon"                  { return value; }
 / value: "dark salmon"             { return value; }
 / value: "light coral"             { return value; }
 / value: "indian red"              { return value; }
 / value: "crimson"                 { return value; }
 / value: "fire brick"              { return value; }
 / value: "dark red"                { return value; }
 / value: "red"                     { return value; }
 / value: "orange red"              { return value; }
 / value: "tomato"                  { return value; }
 / value: "coral"                   { return value; }
 / value: "dark orange"             { return value; }
 / value: "orange"                  { return value; }
 / value: "yellow"                  { return value; }
 / value: "light yellow"            { return value; }
 / value: "lemon chiffon"           { return value; }
 / value: "light goldenrod yellow"  { return value; }
 / value: "papaya whip"             { return value; }
 / value: "moccasin"                { return value; }
 / value: "peach puff"              { return value; }
 / value: "pale goldenrod"          { return value; }
 / value: "khaki"                   { return value; }
 / value: "dark khaki"              { return value; }
 / value: "gold"                    { return value; }
 / value: "cornsilk"                { return value; }
 / value: "blanched almond"         { return value; }
 / value: "bisque"                  { return value; }
 / value: "navajo white"            { return value; }
 / value: "wheat"                   { return value; }
 / value: "burly wood"              { return value; }
 / value: "tan"                     { return value; }
 / value: "rosy brown"              { return value; }
 / value: "sandy brown"             { return value; }
 / value: "goldenrod"               { return value; }
 / value: "dark goldenrod"          { return value; }
 / value: "peru"                    { return value; }
 / value: "chocolate"               { return value; }
 / value: "saddle brown"            { return value; }
 / value: "sienna"                  { return value; }
 / value: "brown"                   { return value; }
 / value: "maroon"                  { return value; }
 / value: "dark olive green"        { return value; }
 / value: "olive"                   { return value; }
 / value: "olive drab"              { return value; }
 / value: "yellow green"            { return value; }
 / value: "lime green"              { return value; }
 / value: "lime"                    { return value; }
 / value: "lawn green"              { return value; }
 / value: "chartreuse"              { return value; }
 / value: "green yellow"            { return value; }
 / value: "spring green"            { return value; }
 / value: "medium spring green"     { return value; }
 / value: "light green"             { return value; }
 / value: "pale green"              { return value; }
 / value: "dark sea green"          { return value; }
 / value: "medium sea green"        { return value; }
 / value: "sea green"               { return value; }
 / value: "forest green"            { return value; }
 / value: "green"                   { return value; }
 / value: "dark green"              { return value; }
 / value: "medium aquamarine"       { return value; }
 / value: "aqua"                    { return value; }
 / value: "cyan"                    { return value; }
 / value: "light cyan"              { return value; }
 / value: "pale turquoise"          { return value; }
 / value: "aquamarine"              { return value; }
 / value: "turquoise"               { return value; }
 / value: "medium turquoise"        { return value; }
 / value: "dark turquoise"          { return value; }
 / value: "light sea green"         { return value; }
 / value: "cadet blue"              { return value; }
 / value: "dark cyan"               { return value; }
 / value: "teal"                    { return value; }
 / value: "light steel blue"        { return value; }
 / value: "powder blue"             { return value; }
 / value: "light blue"              { return value; }
 / value: "sky blue"                { return value; }
 / value: "light sky blue"          { return value; }
 / value: "deep sky blue"           { return value; }
 / value: "dodger blue"             { return value; }
 / value: "cornflower blue"         { return value; }
 / value: "steel blue"              { return value; }
 / value: "royal blue"              { return value; }
 / value: "blue"                    { return value; }
 / value: "medium blue"             { return value; }
 / value: "dark blue"               { return value; }
 / value: "navy"                    { return value; }
 / value: "midnight blue"           { return value; }
 / value: "lavender"                { return value; }
 / value: "thistle"                 { return value; }
 / value: "plum"                    { return value; }
 / value: "violet"                  { return value; }
 / value: "orchid"                  { return value; }
 / value: "fuchsia"                 { return value; }
 / value: "magenta"                 { return value; }
 / value: "medium orchid"           { return value; }
 / value: "medium purple"           { return value; }
 / value: "blue violet"             { return value; }
 / value: "dark violet"             { return value; }
 / value: "dark orchid"             { return value; }
 / value: "dark magenta"            { return value; }
 / value: "purple"                  { return value; }
 / value: "indigo"                  { return value; }
 / value: "dark slate blue"         { return value; }
 / value: "slate blue"              { return value; }
 / value: "medium slate blue"       { return value; }
 / value: "white"                   { return value; }
 / value: "snow"                    { return value; }
 / value: "honeydew"                { return value; }
 / value: "mint cream"              { return value; }
 / value: "azure"                   { return value; }
 / value: "alice blue"              { return value; }
 / value: "ghost white"             { return value; }
 / value: "white smoke"             { return value; }
 / value: "seashell"                { return value; }
 / value: "beige"                   { return value; }
 / value: "old lace"                { return value; }
 / value: "floral white"            { return value; }
 / value: "ivory"                   { return value; }
 / value: "antique white"           { return value; }
 / value: "linen"                   { return value; }
 / value: "lavender blush"          { return value; }
 / value: "misty rose"              { return value; }
 / value: "gainsboro"               { return value; }
 / value: "light grey"              { return value; }
 / value: "silver"                  { return value; }
 / value: "dark gray"               { return value; }
 / value: "gray"                    { return value; }
 / value: "dim gray"                { return value; }
 / value: "light slate gray"        { return value; }
 / value: "slate gray"              { return value; }
 / value: "dark slate gray"         { return value; }
 / value: "black"                   { return value; }
 / value: "rebecca purple"          { return value; }
 /                                  { return "black"; }

size
 = value: "tiny"            { return value; }
 / value: "small"           { return value; }
 / value: "medium"          { return value; }
 / value: "big"             { return value; }
 / value: "large"           { return value; }
 / value: "huge"            { return value; }
 /                          { return "small"; }

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

thickness
 = value: "thick"           { return value; }
 / value: "wide"            { return value; }
 / value: "thin"            { return value; }
 / value: "narrow"          { return value; }
 /                          { return "default"; }

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
