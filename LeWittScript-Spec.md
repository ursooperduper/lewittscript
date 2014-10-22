# LeWittScript Spec

## Status

This document is a work in progress. The basics of LeWittScript are still being envisioned and in an experimental stage. So this document can be expected to update often.

## Introduction

LeWittScript is a simple scripting language that allows anyone to create works of art based on the work of minimalist and conceptualist artist, Sol LeWitt.

Rather than requiring users to learn a scripting language, LeWittScript uses natural language to describe the artwork that's created.

This document provides examples of instructions that might be provided by an user, an explanation of the elements/keywords that make up an instruction, and the entire LeWittScript project.

## Terminology

**Instruction** - A parsed set of elements/keywords that the app can draw onto the canvas.

**Element** - An individual item (word or set of words) in an instruction that can be acted upon.

**Statement** - When the artist first enters input into the LeWittScript app, it is considered a statement.


## Instructions

Instructions are at the heart of LeWittScript. These are statements that consist of one or more keywords that can be processed and output as visual elements in the artwork that is generated.

### Instruction Examples

#### Simple Examples

```
There are 20 blue circles.
The background is yellow.
```

```
There is a red triangle.
There is a green square.
There is a blue circle.
The background is grey.
```

```
There are 10 random points.
10 lines radiate from each of the points.
```

#### More Challenging Examples

```
There are 10 tiny green rectangles.
They are surrounded by dots spaced randomly.
```

```
There are 100 dots spaced randomly.
There is a circle around each dot.
```

```
There is a grid with circles in each square.
Each circle is a different color.
```

```
There are 10 tiny squares.
They are smiling.
```
This will require drawing the squares along a path (arc).


```
The canvas is split in three pieces.
The first canvas background is red.
The second canvas background is blue.
The third canvas background is yellow.
There are 3 black triangles stacked vertically in each canvas.
```

```
There is a green triangle.
There is a blue circle.
There is a red square.
The shapes are next to each other.
The background is grey.
```

```
There is a green triangle inside a blue square.
The background is beige.
```

```
There is a red circle beside a green circle.
Underneath, there is an orange star next to a blue diamond.
```

```
There are 3 small blue triangles with thick green outlines.
Each triangle is rotated 10 degrees more than the previous one.
```

```
The canvas is split into three parts.
The first canvas has a black background and contains a red circle.
The second canvas has a grey background and contains a purple triangle.
The third canvas has a white background and contains an orange square.
```

```
There are white jittery lines drawn randomly.
The background is dark grey.
```

## LeWittScript Language Description

### Instruction Identifiers

```
There is ...
There are ...
The background is ...
The first canvas ...
The canvas is ...
```

Instruction Identifiers occur at the beginning of each instruction statement and define what sort of instruction is being called.

### Shapes

LeWittScript includes several different shapes and lines that can be drawn to the canvas.

  * Circle
  * Square
  * Rectangle
  * Triangle
  * Wavy Line
  * Straight Line
  * Zigzag Line
  * Spiral
  * Dot
  * Point

*Coming soon* -- Hand-drawn line, Polygon, Smile, Star, Box, Diamondx

### Colors

There are a pre-defined set of colors that can be used in an instruction, these correspond to the generally-supported colors values supported by most modern web-browsers.

The list of supported colors is as follows:

| Instruction Keyword         | Name                    | Hex Value | RGB Value   |
|-----------------------------|-------------------------|-----------|-------------|
| Pink                        | Pink                    | FF C0 CB  |	255 192 203 |
| LightPink                   | Light Pink              | FF B6 C1  |	255 182 193 |
| HotPink                     | Hot Pink                | FF 69 B4  |	255 105 180 |
| DeepPink                    | Deep Pink               | FF 14 93  |	255  20 147 |
| PaleVioletRed               | Pale Violet Red         | DB 70 93  |	219 112 147 |
| MediumVioletRed             | Medium Violet Red       | C7 15 85  |	199  21 133 |
| LightSalmon                 | Light Salmon            | FF A0 7A  |	255 160 122 |
| Salmon                      | Salmon                  | FA 80 72  |	250 128 114 |
| DarkSalmon                  | Dark Salmon             | E9 96 7A  |	233 150 122 |
| LightCoral                  | Light Coral             | F0 80 80  |	240 128 128 |
| IndianRed                   | Indian Red              | CD 5C 5C  |	205  92  92 |
| Crimson                     | Crimson                 | DC 14 3C  |	220  20  60 |
| FireBrick                   | Fire Brick              | B2 22 22  |	178  34  34 |
| DarkRed                     | Dark Red                | 8B 00 00  |	139   0   0 |
| Red                         | Red                     | FF 00 00  |	255   0   0 |
| OrangeRed                   | Orange Red              | FF 45 00  |	255  69   0 |
| Tomato                      | Tomato                  | FF 63 47  |	255  99  71 |
| Coral                       | Coral                   | FF 7F 50  |	255 127  80 |
| DarkOrange                  | Dark Orange             | FF 8C 00  |	255 140   0 |
| Orange                      | Orange                  |	FF A5 00  |	255 165   0 |
| Yellow                      | Yellow                  | FF FF 00  | 255 255   0 |
| LightYellow                 | Light Yellow             |	FF FF E0  |	255 255 224 |
| LemonChiffon                | Lemon Chiffon           | FF FA CD  |	255 250 205 |
| LightGoldenrodYellow        | Light Goldenrod Yellow  | FA FA D2  |	250 250 210 |
| PapayaWhip                  | Papaya Whip             | FF EF D5  |	255 239 213 |
| Moccasin                    | Moccasin                | FF E4 B5  |	255 228 181 |
| PeachPuff                   | Peach Puff              | FF DA B9  |	255 218 185 |
| PaleGoldenrod               | Pale Goldenrod          | EE E8 AA  |	238 232 170 |
| Khaki                       | Khaki                   |	F0 E6 8C  |	240 230 140 |
| DarkKhaki                   | Dark Khaki              |	BD B7 6B  |	189 183 107 |
| Gold                        | Gold                    | FF D7 00  |	255 215   0 |
| Cornsilk                    | Cornsilk                | FF F8 DC  |	255 248 220 |
| BlanchedAlmond              | Blanched Almond         | FF EB CD  | 255 235 205 |
| Bisque                      | Bisque                  | FF E4 C4  |	255 228 196 |
| NavajoWhite                 | Navajo White            | FF DE AD  |	255 222 173 |
| Wheat                       | Wheat                   | F5 DE B3  |	245 222 179 |
| BurlyWood                   | Burly Wood              | DE B8 87  |	222 184 135 |
| Tan                         | Tan                     | D2 B4 8C  | 210 180 140 |
| RosyBrown                   | Rosy Brown              | BC 8F 8F  |	188 143 143 |
| SandyBrown                  | Sandy Brown             | F4 A4 60  |	244 164  96 |
| Goldenrod                   | Goldenrod               | DA A5 20  |	218 165  32 |
| DarkGoldenrod               | Dark Goldenrod          | B8 86 0B  |	184 134  11 |
| Peru                        | Peru                    | CD 85 3F  | 205 133  63 |
| Chocolate                   | Chocolate               | D2 69 1E  |	210 105  30 |
| SaddleBrown                 | Saddle Brown            | 8B 45 13  |	139  69  19 |
| Sienna                      | Sienna                  | A0 52 2D  |	160  82  45 |
| Brown                       | Brown                   | A5 2A 2A  |	165  42  42 |
| Maroon                      | Maroon                  | 80 00 00  |	128   0   0 |
| DarkOliveGreen              | Dark Olive Green        | 55 6B 2F  |	 85 107  47 |
| Olive                       | Olive                   | 80 80 00  | 128 128   0 |
| OliveDrab                   | Olive Drab              | 6B 8E 23  |	107 142  35 |
| YellowGreen                 | Yellow Green            | 9A CD 32  |	154 205  50 |
| LimeGreen                   | Lime Green              | 32 CD 32  |	 50 205  50 |
| Lime                        | Lime                    | 00 FF 00  |	  0 255   0 |
| LawnGreen                   | Lawn Green              | 7C FC 00  |	124 252   0 |
| Chartreuse                  | Chartreuse              | 7F FF 00  |	127 255   0 |
| GreenYellow                 | Green Yellow            | AD FF 2F  | 173 255  47 |
| SpringGreen                 | Spring Green            | 00 FF 7F  |	  0 255 127 |
| MediumSpringGreen           | Medium Spring Green     | 00 FA 9A  |	  0 250 154 |
| LightGreen                  | Light Green             | 90 EE 90  |	144 238 144 |
| PaleGreen                   | Pale Green              | 98 FB 98  |	152 251 152 |
| DarkSeaGreen                | Dark Sea Green          | 8F BC 8F  | 143 188 143 |
| MediumSeaGreen              | Medium Sea Green        | 3C B3 71  |	 60 179 113 |
| SeaGreen                    | Sea Green               | 2E 8B 57  |	 46 139  87 |
| ForestGreen                 | Forest Green            | 22 8B 22  |	 34 139  34 |
| Green                       | Green                   | 00 80 00  |	  0 128   0 |
| DarkGreen                   | Dark Green              | 00 64 00  |	  0 100   0 |
| MediumAquamarine            | Medium Aquamarine       | 66 CD AA  |	102 205 170 |
| Aqua                        | Aqua                    | 00 FF FF  |	  0 255 255 |
| Cyan                        | Cyan                    | 00 FF FF  |	  0 255 255 |
| LightCyan                   | Light Cyan              | E0 FF FF |	224 255 255 |
| PaleTurquoise               | Pale Turquoise          | AF EE EE |	175 238 238 |
| Aquamarine                  | Aquamarine              | 7F FF D4 |	127 255 212 |
| Turquoise                   | Turquoise               | 40 E0 D0 |	 64 224 208 |
| MediumTurquoise             | Medium Turquoise        | 48 D1 CC |	 72 209 204 |
| DarkTurquoise               | Dark Turquoise          | 00 CE D1 |	  0 206 209 |
| LightSeaGreen               | Light Sea Green         | 20 B2 AA |	 32 178 170 |
| CadetBlue                   | Cadet Blue              | 5F 9E A0 |	 95 158 160 |
| DarkCyan                    | Dark Cyan               | 00 8B 8B |	  0 139 139 |
| Teal                        | Teal                    | 00 80 80 |	  0 128 128 |
| LightSteelBlue              | Light Steel Blue        | B0 C4 DE |	176 196 222 |
| PowderBlue                  | Powder Blue             | B0 E0 E6 |	176 224 230 |
| LightBlue                   | Light Blue              | AD D8 E6 |	173 216 230 |
| SkyBlue                     | Sky Blue                | 87 CE EB |	135 206 235 |
| LightSkyBlue                | Light Sky Blue          | 87 CE FA |	135 206 250 |
| DeepSkyBlue                 | Deep Sky Blue           | 00 BF FF |	  0 191 255 |
| DodgerBlue                  | Dodger Blue             | 1E 90 FF |	 30 144 255 |
| CornflowerBlue              | Cornflower Blue         | 64 95 ED |	100 149 237 |
| SteelBlue                   | Steel Blue              | 46 82 B4 |	 70 130 180 |
| RoyalBlue                   | Royal Blue              | 41 69 E1 |	 65 105 225 |
| Blue                        | Blue                    | 00 00 FF |	  0   0 255 |
| MediumBlue                  | Medium Blue             | 00 00 CD |	  0   0 205 |
| DarkBlue                    | Dark Blue               | 00 00 8B |	  0   0 139 |
| Navy                        | Navy                    | 00 00 80 |	  0   0 128 |
| MidnightBlue                | Midnight Blue           | 19 19 70 |	 25  25 112 |
| Lavender                    | Lavender                | E6 E6 FA |	230 230 250 |
| Thistle                     | Thistle                 | D8 BF D8 |	216 191 216 |
| Plum                        | Plum                    | DD A0 DD |	221 160 221 |
| Violet                      | Violet                  | EE 82 EE |	238 130 238 |
| Orchid                      | Orchid                  | DA 70 D6 |	218 112 214 |
| Fuchsia                     | Fuchsia                 | FF 00 FF |	255   0 255 |
| Magenta                     | Magenta                 | FF 00 FF |	255   0 255 |
| MediumOrchid                | Medium Orchid           | BA 55 D3 |	186  85 211 |
| MediumPurple                | Medium Purple           | 93 70 DB |	147 112 219 |
| BlueViolet                  | Blue Violet             | 8A 2B E2 |	138  43 226 |
| DarkViolet                  | Dark Violet             | 94 00 D3 |	148   0 211 |
| DarkOrchid                  | Dark Orchid             | 99 32 CC |	153  50 204 |
| DarkMagenta                 | Dark Magenta            | 8B 00 8B |	139   0 139 |
| Purple                      | Purple                  | 80 00 80 |	128   0 128 |
| Indigo                      | Indigo                  | 4B 00 82 |	 75   0 130 |
| DarkSlateBlue               | Dark Slate Blue         | 48 3D 8B |	 72  61 139 |
| SlateBlue                   | Slate Blue              | 6A 5A CD |	106  90 205 |
| MediumSlateBlue             | Medium Slate Blue       | 7B 68 EE |	123 104 238 |
| White                       | White                   | FF FF FF |	255 255 255 |
| Snow                        | Snow                    | FF FA FA |	255 250 250 |
| Honeydew                    | Honeydew                | F0 FF F0 |	240 255 240 |
| MintCream                   | Mint Cream              | F5 FF FA |	245 255 250 |
| Azure                       | Azure                   | F0 FF FF |	240 255 255 |
| AliceBlue                   | Alice Blue              | F0 F8 FF |	240 248 255 |
| GhostWhite                  | Ghost White             | F8 F8 FF |	248 248 255 |
| WhiteSmoke                  | White Smoke             | F5 F5 F5 |	245 245 245 |
| Seashell                    | Seashell                | FF F5 EE |	255 245 238 |
| Beige                       | Beige                   | F5 F5 DC |	245 245 220 |
| OldLace                     | Old Lace                | FD F5 E6 |	253 245 230 |
| FloralWhite                 | Flora lWhite            | FF FA F0 |	255 250 240 |
| Ivory                       | Ivory                   | FF FF F0 |	255 255 240 |
| AntiqueWhite                | Antique White           | FA EB D7 |	250 235 215 |
| Linen                       | Linen                   | FA F0 E6 |	250 240 230 |
| LavenderBlush               | Lavender Blush          | FF F0 F5 |	255 240 245 |
| MistyRose                   | Misty Rose              | FF E4 E1 |	255 228 225 |
| Gainsboro                   | Gainsboro               |	DC DC DC |	220 220 220 |
| LightGrey                   | Light Grey              | D3 D3 D3 |	211 211 211 |
| Silver                      | Silver                  | C0 C0 C0 |	192 192 192 |
| DarkGray                    | Dark Gray               | A9 A9 A9 |	169 169 169 |
| Gray                        | Gray                    | 80 80 80 |	128 128 128 |
| DimGray                     | Dim Gray                | 69 69 69 |	105 105 105 |
| LightSlateGray              | Light Slate Gray        | 77 88 99 |	119 136 153 |
| SlateGray                   | Slate Gray              | 70 80 90 |	112 128 144 |
| DarkSlateGray               | Dark Slate Gray         | 2F 4F 4F |	 47  79  79 |
| Black                       | Black                   | 00 00 00 |	  0   0   0 |
| RebeccaPurple               | Rebecca Purple          | 66 33 99 |  102  51 153 |

### Sizes

Currently supported sizes:

 * tiny
 * small
 * medium
 * big
 * large
 * huge
 * random(?)

Rather than having the artist think in terms of pixels or inches, for example, the sizing is simplified. *In the future, if more precision is required, it is conceivable that precise measurements could be given in an instruction.*

Each size given in an instruction corresponds to an internal measurement, represented in pixels. The measurements are as follows:

| Label    | Measurement |
|----------| ------------|  
| tiny     | 20          |
| small    | 50          |
| medium   | 10          |
| large    | 200         |
| big      | 200         |
| huge     | 300         |

### Positioning

Unless specified otherwise, objects in a LeWittScript drawing are spaced next to each other. This means that for a long string of shapes, some many render out of view.

It's possible to specify that objects should appear in random locations, in a grid, or inside of another shape.

You can imagine positioning being described in the following ways:

* Stacked
* Beside each other
* Horizontally
* Vertically
* Next to
* Alongside
* Underneath
* On top of
* In a grid
* Inside of

Positioning can be described for the canvas or for shapes. *Need some way to differentiate these instructions.*

For example, positioning can be indicated as:

```
There is a tiny green triangle. // No positioning, so defaults are used.
There is a tiny green triangle in the top right.
There are 10 tiny green triangles in the top right.
```

Canvas positioning can be indicated as follows:

<pre>
     Left         Center         Right
|------------|--------------|-------------|
|            |              |             | Top
|------------|--------------|-------------|
|            |              |             | Middle
|------------|--------------|-------------|
|            |              |             | Bottom
|------------|--------------|-------------|
</pre>

For example:

```
There is a large triangle in the top right.
There are 9 tiny triangles in the bottom left.
```

The default arrangement is middle center.

In order to place a group of shapes (say, 12 triangles) in the top right of the canvas, requires that shapes are grouped (possibly in a grid?).


## Parsing Order

In order to render correctly, there is a specific order that needs to be followed for parsing instructions. If a background is specified in a set of instructions, it must be drawn first otherwise it will cover the rest of the objects drawn onscreen.

Statements are parsed as instructions, and then added to the instruction stack.

When adding instructions to the stack, the instructions object is examined to look for instructions that deals with a background.

## Important Notes

* Depending on the size and position given in an instruction, there may be objects rendered out of view on a canvas.
