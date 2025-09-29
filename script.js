//  demo red rect
// let myRect = d3.select("body")
//   .append("svg")
//     .attr("width", 500)
//     .attr("height", 500)
//       .append("g")
//         .attr("transform", "translate(100, 50), rotate(10)")
//     .append("rect")
//         .attr("width", 100)
//         .attr("height", 100)
//         .attr("fill", "red")
//         ;
        
//Width and height
let w = 0.5 * window.innerWidth;
let h = 1 * window.innerHeight;

// Projection
let projection = d3.geo.mercator()
.center([17.109,48.132])
.translate([w/2,h/2])
.scale(h*2000);
        
//Create SVG
let svg = d3.select("#svganchor")
    .append("svg")
    .attr("id", "helo")
    .attr("width", w)
    .attr("height", h)
    ;

d3.csv("data_cut.csv", function(data){
    // Add circles:
    svg
        .selectAll("myCircle")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "cercle")

        .attr("cx", (d) => { return projection([+d.X, +d.Y])[0] })
        .attr("cy", (d) => { return projection([+d.X, +d.Y])[1] })

        // radius of circle
        .attr("r", 2)
        // id of each circle
        // .attr("id", (d) => {return "s_"+d.video})
        .attr("id", function(d,i) {return "cir" + i})
        // style
        .attr("stroke-width", 0)
        .attr("fill", '#ffffffff')
        .attr("fill-opacity", 1)

        .on('mouseover', function (d, i) {
            d3.select(this).transition()
            .duration('200')
            .attr("fill", "orange");
        })
        .on('mouseout', function (d) {
            d3.select(this).transition()
            .duration('200')
            .attr("fill", "white");
        })
        .on("click", function(d, i){
            alert(i);
            })
        ; 
    })

d3.csv("m1.csv", function(data){
// Add circles:
svg
    .selectAll("myCircle2")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "cercle")

    .attr("cx", (d) => { return projection([+d.X, +d.Y])[0] })
    .attr("cy", (d) => { return projection([+d.X, +d.Y])[1] })

    // radius of circle
    .attr("r", 2)
    // id of each circle
    // .attr("id", (d) => {return "s_"+d.video})
    .attr("id", function(d,i) {return "cir" + i})
    // style
    .attr("stroke-width", 0)
    .attr("fill", '#ffffffff')
    .attr("fill-opacity", 1)

    .on('mouseover', function (d, i) {
        d3.select(this).transition()
        .duration('200')
        .attr("fill", "orange");
    })
    .on('mouseout', function (d) {
        d3.select(this).transition()
        .duration('200')
        .attr("fill", "white");
    })
    .on("click", function(d, i){
        alert(i);
        })
    ; 
})

    