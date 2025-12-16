//Width and height
let w = 0.5 * window.innerWidth;
let h = 0.9 * window.innerHeight;

let currentId = 0;
let currentSeries = 'm3';

let lastId = 0;
let lastSeries = 'm3';

let selfAnimation = 0;

// Projection
let projection = d3.geo.mercator()
.center([17.118795537867648 , 48.124901925367645])
.translate([w/2,h/2])
.scale(w*3500);
        
//Create SVG
let svg = d3.select("#svganchor")
    .append("svg")
    .attr("id", "helo")
    .attr("width", w)
    .attr("height", h)
    ;

// //  m1
// d3.csv("m1.csv", function(data){
// // Add circles:
// svg
//     .selectAll("myCircle2")
//     .data(data)
//     .enter()
//     .append("circle")
//     .attr("class", "cercle")

//     .attr("cx", (d) => { return projection([+d.X, +d.Y])[0] })
//     .attr("cy", (d) => { return projection([+d.X, +d.Y])[1] })

//     // radius of circle
//     .attr("r", 2)
//     // id of each circle
//     // .attr("id", (d) => {return "s_"+d.video})
//     .attr("id", function(d,i) {return "cir" + i})
//     // style
//     .attr("stroke-width", 0)
//     .attr("fill", '#ffffffff')
//     .attr("fill-opacity", 1)

//     .on('mouseover', function (d, i) {
//         d3.select(this).transition()
//         .duration('200')
//         .attr("fill", "orange");
//     })
//     .on('mouseout', function (d) {
//         d3.select(this).transition()
//         .duration('200')
//         .attr("fill", "white");
//     })
//     .on("click", function(d, i){
//         alert(i);
//         })
//     ; 
// })

    
// m2 map

d3.csv("m2/m2_map.csv", function(data){
// Add circles:
svg
    .selectAll("myCircle2")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "cercle")

    .attr("cx", (d) => { return projection([+d.X, +d.Y])[0] })
    .attr("cy", (d) => { return projection([+d.X, +d.Y])[1] })

    .attr("r", 2)
    .attr("id", function(d,i) {return "m2" + "cir" + i})
    .attr("stroke-width", 0)
    .attr("fill", '#ffffffff')
    .attr("fill-opacity", 1)

    .on('mouseover', function (d, i) {
        d3.select(this).transition()
        .duration('200')
        .attr("r", 4)
        .attr("fill", "orange");
    })
    .on('mouseout', function (d) {
        d3.select(this).transition()
        .duration('200')
        .attr("r", 2)
        .attr("fill", "white");
    })
    .on("click", function(d, i){
        currentId = i;
        currentSeries = 'm2';
        selfAnimation = 0;
        })
    ; 
})
    
// m3 map

d3.csv("m3/m3_map.csv", function(data){
// Add circles:
svg
    .selectAll("myCircle3")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "cercle")

    .attr("cx", (d) => { return projection([+d.X, +d.Y])[0] })
    .attr("cy", (d) => { return projection([+d.X, +d.Y])[1] })

    .attr("r", 2)
    .attr("id", function(d,i) {return "m3" + "cir" + i})
    .attr("stroke-width", 0)
    .attr("fill", '#ffffffff')
    .attr("fill-opacity", 1)

    .on('mouseover', function (d, i) {
        d3.select(this).transition()
        .duration('200')
        .attr("r", 4)
        .attr("fill", "orange");
    })
    .on('mouseout', function (d) {
        d3.select(this).transition()
        .duration('200')
        .attr("r", 2)
        .attr("fill", "blue");
    })
    .on("click", function(d, i){
        currentId = i;
        currentSeries = 'm3';
        selfAnimation = 0;
        })
    ; 
});
