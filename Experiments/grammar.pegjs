// The background is orange.
// The rectangles are different colors.
// The rectangles are in opposite corners.
// The canvas is filled with circles.
// The canvas is filled with thick diagonal lines.
// There are 4 circles, one in each corner.
// There are 20 randomly spaced dots.
// There are lines radiating out from each dot.
// There is a large black square.
// There are 20 tiny crimson triangles.
// Each square has a dot in the middle of it.

start
 = sentences

sentences
 = s:sentence+ { return s; }
 / first:sentence rest:sentences
    { rest.append(first); return rest; }

sentence
 = bg:bgdescription { return bg; }
 / scc:initialShapeDescription { return scc; }
 / sm: shapeModifier { return sm; }


bgdescription
 = THE _ background _ TOBE _ col:COLOR[.]* { return col; }

initialShapeDescription
 = THE _ TOBE _ COUNT _? SIZE _? COLOR _? SHAPE[s]*[.]*

shapeModifier
 = THE _ SHAPE _ TOBE _ AA _ SIZE _? COLOR _? SHAPE _ LOCATION[.]*

background
 = 'background'

THE
 = "there"
 / "the"
 / "each"

AA
 = "a"

LOCATION
 = "in it"
 / "beside it"
 / "inside it"
 / "on top of it"
 / "under it"
 / "underneath it"

TOBE
 = "is a"
 / "is"
 / "are"
 / "will be"
 / "should be"
 / "must be"

COLOR
 = value: "pink" { return { color: value, hex: "#FFC0CB" }; }
 / value: "light pink" { return { color: value, hex: "#FFB6C1" }; }
 / value: "hot pink" { return { color: value, hex: "#FF69B4" }; }
 / value: "deep pink" { return { color: value, hex: "#FF1493" }; }
 / value: "pale violet red" { return { color: value, hex: "#DB7093" }; }
 / value: "medium violet red" { return { color: value, hex: "#C71585" }; }
 / value: "light salmon" { return { color: value, hex: "#FFA07A" }; }
 / value: "salmon" { return { color: value, hex: "#FA8072"}; }
 / value: "dark salmon" { return { color: value, hex: "#E9967A" }; }
 / value: "light coral" { return { color: value, hex: "#F08080" }; }
 / value: "indian red" { return { color: value, hex: "#CD5C5C" }; }
 / value: "crimson" { return { color: value, hex: "#DC143C" }; }
 / value: "fire brick" { return { color: value, hex: "#B22222" }; }
 / value: "dark red" { return { color: value, hex: "#8B0000" }; }
 / value: "red" { return { color: value, hex: "#FF0000" }; }
 / value: "orange red" { return { color: value, hex: "#FF4500" }; }
 / value: "tomato" { return { color: value, hex: "#FF6347" }; }
 / value: "coral" { return { color: value, hex: "#FF7F50" }; }
 / value: "dark orange" { return { color: value, hex: "#FF8C00" }; }
 / value: "orange" { return { color: value, hex: "#FFA500" }; }
 / value: "yellow" { return { color: value, hex: "#FFFF00" }; }
 / value: "light yellow" { return { color: value, hex: "#FFFFE0" }; }
 / value: "lemon chiffon" { return { color: value, hex: "#FFFACD" }; }
 / value: "light goldenrod yellow" { return { color: value, hex: "#FAFAD2" }; }
 / value: "papaya whip" { return { color: value, hex: "#FFEFD5" }; }
 / value: "moccasin" { return { color: value, hex: "#FFE4B5" }; }
 / value: "peach puff" { return { color: value, hex: "#FFDAB9" }; }
 / value: "pale goldenrod" { return { color: value, hex: "#EEE8AA" }; }
 / value: "khaki" { return { color: value, hex: "#F0E68C" }; }
 / value: "dark khaki" { return { color: value, hex: "#BDB76B" }; }
 / value: "gold" { return { color: value, hex: "#FFD700" }; }
 / value: "cornsilk" { return { color: value, hex: "#FFF8DC" }; }
 / value: "blanched almond" { return { color: value, hex: "#FFEBCD" }; }
 / value: "bisque" { return { color: value, hex: "#FFE4C4" }; }
 / value: "navajo white" { return { color: value, hex: "#FFDEAD" }; }
 / value: "wheat" { return { color: value, hex: "#F5DEB3" }; }
 / value: "burly wood" { return { color: value, hex: "#DEB887" }; }
 / value: "tan" { return { color: value, hex: "#D2B48C" }; }
 / value: "rosy brown" { return { color: value, hex: "#BC8F8F" }; }
 / value: "sandy brown" { return { color: value, hex: "#F4A460" }; }
 / value: "goldenrod" { return { color: value, hex: "#DAA520" }; }
 / value: "dark goldenrod" { return { color: value, hex: "#B8860B" }; }
 / value: "peru" { return { color: value, hex: "#CD853F" }; }
 / value: "chocolate" { return { color: value, hex: "#D2691E" }; }
 / value: "saddle brown" { return { color: value, hex: "#8B4513" }; }
 / value: "sienna" { return { color: value, hex: "#A0522D" }; }
 / value: "brown" { return { color: value, hex: "#A52A2A" }; }
 / value: "maroon" { return { color: value, hex: "#800000" }; }
 / value: "dark olive green" { return { color: value, hex: "#556B2F" }; }
 / value: "olive" { return { color: value, hex: "#808000" }; }
 / value: "olive drab" { return { color: value, hex: "#6B8E23" }; }
 / value: "yellow green" { return { color: value, hex: "#9ACD32" }; }
 / value: "lime green" { return { color: value, hex: "#32CD32" }; }
 / value: "lime" { return { color: value, hex: "#00FF00" }; }
 / value: "lawn green" { return { color: value, hex: "#7CFC00" }; }
 / value: "chartreuse" { return { color: value, hex: "#7FFF00" }; }
 / value: "green yellow" { return { color: value, hex: "#ADFF2F" }; }
 / value: "spring green" { return { color: value, hex: "#00FF7F" }; }
 / value: "medium spring green" { return { color: value, hex: "#00FA9A" }; }
 / value: "light green" { return { color: value, hex: "#90EE90" }; }
 / value: "pale green" { return { color: value, hex: "#98FB98" }; }
 / value: "dark sea green" { return { color: value, hex: "#8FBC8F" }; }
 / value: "medium sea green" { return { color: value, hex: "#3CB371" }; }
 / value: "sea green" { return { color: value, hex: "#2E8B57" }; }
 / value: "forest green" { return { color: value, hex: "#228B22" }; }
 / value: "green" { return { color: value, hex: "#008000" }; }
 / value: "dark green" { return { color: value, hex: "#006400" }; }
 / value: "medium aquamarine" { return { color: value, hex: "#66CDAA" }; }
 / value: "aqua" { return { color: value, hex: "#00FFFF" }; }
 / value: "cyan" { return { color: value, hex: "#00FFFF" }; }
 / value: "light cyan" { return { color: value, hex: "#E0FFFF" }; }
 / value: "pale turquoise" { return { color: value, hex: "#AFEEEE" }; }
 / value: "aquamarine" { return { color: value, hex: "#7FFFD4" }; }
 / value: "turquoise" { return { color: value, hex: "#40E0D0" }; }
 / value: "medium turquoise" { return { color: value, hex: "#48D1CC" }; }
 / value: "dark turquoise" { return { color: value, hex: "#00CED1" }; }
 / value: "light sea green" { return { color: value, hex: "#20B2AA" }; }
 / value: "cadet blue" { return { color: value, hex: "#5F9EA0" }; }
 / value: "dark cyan" { return { color: value, hex: "#008B8B" }; }
 / value: "teal" { return { color: value, hex: "#008080" }; }
 / value: "light steel blue" { return { color: value, hex: "#B0C4DE" }; }
 / value: "powder blue" { return { color: value, hex: "#B0E0E6" }; }
 / value: "light blue" { return { color: value, hex: "#ADD8E6" }; }
 / value: "sky blue" { return { color: value, hex: "#87CEEB" }; }
 / value: "light sky blue" { return { color: value, hex: "#87CEFA" }; }
 / value: "deep sky blue" { return { color: value, hex: "#00BFFF" }; }
 / value: "dodger blue" { return { color: value, hex: "#1E90FF" }; }
 / value: "cornflower blue" { return { color: value, hex: "#6495ED" }; }
 / value: "steel blue" { return { color: value, hex: "#4682B4" }; }
 / value: "royal blue" { return { color: value, hex: "#4169E1" }; }
 / value: "blue" { return { color: value, hex: "#0000FF" }; }
 / value: "medium blue" { return { color: value, hex: "#0000CD" }; }
 / value: "dark blue" { return { color: value, hex: "#00008B" }; }
 / value: "navy" { return { color: value, hex: "#000080" }; }
 / value: "midnight blue" { return { color: value, hex: "#191970" }; }
 / value: "lavender" { return { color: value, hex: "#E6E6FA" }; }
 / value: "thistle" { return { color: value, hex: "#D8BFD8" }; }
 / value: "plum" { return { color: value, hex: "#DDA0DD" }; }
 / value: "violet" { return { color: value, hex: "#EE82EE" }; }
 / value: "orchid" { return { color: value, hex: "#DA70D6" }; }
 / value: "fuchsia" { return { color: value, hex: "#FF00FF" }; }
 / value: "magenta" { return { color: value, hex: "#FF00FF" }; }
 / value: "medium orchid" { return { color: value, hex: "#BA55D3" }; }
 / value: "medium purple" { return { color: value, hex: "#9370DB" }; }
 / value: "blue violet" { return { color: value, hex: "#8A2BE2" }; }
 / value: "dark violet" { return { color: value, hex: "#9400D3" }; }
 / value: "dark orchid" { return { color: value, hex: "#9932CC" }; }
 / value: "dark magenta" { return { color: value, hex: "#8B008B" }; }
 / value: "purple" { return { color: value, hex: "#800080" }; }
 / value: "indigo" { return { color: value, hex: "#4B0082" }; }
 / value: "dark slate blue" { return { color: value, hex: "#483D8B" }; }
 / value: "slate blue" { return { color: value, hex: "#6A5ACD" }; }
 / value: "medium slate blue" { return { color: value, hex: "#7B68EE" }; }
 / value: "white" { return { color: value, hex: "#FFFFFF" }; }
 / value: "snow" { return { color: value, hex: "#FFFAFA" }; }
 / value: "honeydew" { return { color: value, hex: "#F0FFF0" }; }
 / value: "mint cream" { return { color: value, hex: "#F5FFFA" }; }
 / value: "azure" { return { color: value, hex: "#F0FFFF" }; }
 / value: "alice blue" { return { color: value, hex: "#F0F8FF" }; }
 / value: "ghost white" { return { color: value, hex: "#F8F8FF" }; }
 / value: "white smoke" { return { color: value, hex: "#F5F5F5" }; }
 / value: "seashell" { return { color: value, hex: "#FFF5EE" }; }
 / value: "beige" { return { color: value, hex: "#F5F5DC" }; }
 / value: "old lace" { return { color: value, hex: "#FDF5E6" }; }
 / value: "floral white" { return { color: value, hex: "#FFFAF0" }; }
 / value: "ivory" { return { color: value, hex: "#FFFFF0" }; }
 / value: "antique white" { return { color: value, hex: "#FAEBD7" }; }
 / value: "linen" { return { color: value, hex: "#FAF0E6" }; }
 / value: "lavender blush" { return { color: value, hex: "#FFF0F5" }; }
 / value: "misty rose" { return { color: value, hex: "#FFE4E1" }; }
 / value: "gainsboro" { return { color: value, hex: "#DCDCDC" }; }
 / value: "light grey" { return { color: value, hex: "#D3D3D3" }; }
 / value: "silver" { return { color: value, hex: "#C0C0C0" }; }
 / value: "dark gray" { return { color: value, hex: "#A9A9A9" }; }
 / value: "gray" { return { color: value, hex: "#808080" }; }
 / value: "dim gray" { return { color: value, hex: "#696969" }; }
 / value: "light slate gray" { return { color: value, hex: "#778899" }; }
 / value: "slate gray" { return { color: value, hex: "#708090" }; }
 / value: "dark slate gray" { return { color: value, hex: "#2F4F4F" }; }
 / value: "black" { return { color: value, hex: "#000000" }; }
 / value: "rebecca purple" { return { color: value, hex: "#663399" }; }
 / { return { color: "default", hex: "#000000" }; }

SIZE
 = value: "tiny" { return { size: value, num: 20 }; }
 / value: "small" { return { size: value, num: 50 }; }
 / value: "medium" { return { size: value, num: 100 }; }
 / value: "big" { return { size: value, num: 200 }; }
 / value: "large" { return { size: value, num: 200 }; }
 / value: "huge" { return { size: value, num: 300 }; }
 / { return { size: "default", num: 30 }; }

SHAPE
 = value: "circle" { return { shape: value }; }
 / value: "rectangle" { return { shape: value }; }
 / value: "triangle" { return { shape: value }; }
 / value: "spiral" { return { shape: value }; }
 / value: "wavy line" { return { shape: value }; }
 / value: "straight line" { return { shape: value }; }
 / value: "zigzag line" { return { shape: value }; }
 / value: "square" { return { shape: value }; }
 / value: "oval" { return { shape: value }; }
 / value: "dot" { return { shape: value }; }
 / value: "point" { return { shape: value }; }
 / { return { shape: "default" }; }

COUNT
 = value: integer { return { count: value }; }
 / { return { count: 0 }; }

integer
 = digits:[0-9]+ { return parseInt(digits.join(""), 10) }

hex "hexidecimal"
 = [0-9a-f]i

// Whitespace
_
 = [ \t\r\n]+
