// alert(6);
// window.print();
d3.select("body")
  .append("svg")
    .attr("width", 500)
    .attr("height", 500)
      .append("g")
        .attr("transform", "translate(100, 50), rotate(10)")
    .append("rect")
        .attr("width", 100)
        .attr("height", 100)
        .attr("fill", "red")
        ;
        
        //Width and height
        let w = 500;
        let h = 500;
        // Projection
        let projection = d3.geo.mercator()
        .center([17.109,48.132])
        .translate([w/2,h/2])
        .scale(h*2000);
        
        //Create SVG
let svg = d3.select("#svganchor")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
        ;

// Add circles:
d3.csv("data_cut.csv", (data) => {
    // Add a scale for bubble size
    //let valueExtent = d3.extent(data, (d) => { return +d.n; })
    //let size = d3.scaleSqrt()
    //    .domain(valueExtent)  // What's in the data
    //    .range([1, 20])  // Size of circle in pixel

    // let tooltip = d3.select("body")
    //     .append("div")
    //     .style("position", "absolute")
    //     .style("text-align", "center")
    //     .style("padding", "15px")
    //     .style("font", "12px sans-serif")
    //     .style("background", "white")
    //     .style("border", "0px")
    //     .style("border-radius", "8px")
    //     .style("z-index", "10")
    //     .style("visibility", "hidden")
    //     .text("a simple tooltip");
    svg
        .selectAll("myCircles")
        .data(data)
        .enter()
        .append("circle")

        .attr("cx", (d) => { return projection([+d.X, +d.Y])[0] })
        .attr("cy", (d) => { return projection([+d.X, +d.Y])[1] })

        // radius of circle
        .attr("r", (d) => { return 2 })
        // id of each circle
        .attr("id", (d) => {return "s_"+d.video})
        // style
        .attr("stroke-width", 0)
        .attr("fill", '#ffffffff')
        .attr("fill-opacity", 1)

        .on("click", function(d){
            alert("hop klik");})
            // myPlayer.currentTime(d.video);})
        // .on("mouseover", (d) => {
        //     return d.attr("fill", "#ac4a4aff");
        //     // return tooltip.style("visibility", "visible");
        // })
        // .on("mousemove", (d) => {
        //     tooltip.text('Time: ' + d.video);
        //     return tooltip.style("top",
        //         (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
        // })

    });



    
    setInterval(function() {
        video_where = player.getCurrentTime() || 0;
        video_where = Math.round(video_where,0)
        video_where_2 = "s_" + video_where
        svg.selectAll('circle').attr('fill','#053b87')
        svg.select("#" + video_where_2).attr("fill", 'black')
        svg.select("#" + video_where_2).attr("fill-opacity", 1)
    }, 3000);