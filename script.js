//Width and height
let w = 0.5 * window.innerWidth;
let h = 0.9 * window.innerHeight;

// let currentIndex = 0;
let currentId = 10;
let currentSeries = 'm3';

let lastId = 0;
let lastSeries = 'm3';

let selfAnimation = 0;

// Projection
let projection = d3.geo.mercator()
.center([17.11979553786765 , 48.124901925367645])
.translate([w/2,h/2])
.scale(w*4500);
        
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

    .attr("r", 4)
    .attr("id", function(d,i) {return "m2" + "cir" + i})
    .attr("stroke-width", 0)
    .attr("fill", '#ffffffff')
    .attr("fill-opacity", 1)

    .on('mouseover', function (d, i) {
        d3.select(this).transition()
        .duration('200')
        .attr("r", 10)
        .attr("fill", "orange");
    })
    .on('mouseout', function (d) {
        d3.select(this).transition()
        .duration('200')
        .attr("r", 4)
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

    .attr("r", 4)
    .attr("id", function(d,i) {return "m3" + "cir" + i})
    .attr("stroke-width", 0)
    .attr("fill", '#ffffffff')
    .attr("fill-opacity", 1)

    .on('mouseover', function (d, i) {
        d3.select(this).transition()
        .duration('200')
        .attr("r", 10)
        .attr("fill", "orange");
    })
    .on('mouseout', function (d) {
        d3.select(this).transition()
        .duration('200')
        .attr("r", 4)
        .attr("fill", "white");
    })
    .on("click", function(d, i){
        currentId = i;
        currentSeries = 'm3';
        selfAnimation = 0;
        })
    ; 
});


let transfer = 
['m3',
 '24',
 'm3',
 '23',
 'm3',
 '22',
 'm3',
 '21',
 'm3',
 '20',
 'm3',
 '19',
 'm3',
 '18',
 'm3',
 '17',
 'm3',
 '16',
 'm3',
 '15',
 'm3',
 '14',
 'm3',
 '13',
 'm3',
 '12',
 'm3',
 '11',
 'm3',
 '10',
 'm3',
 '9',
 'm3',
 '8',
 'm3',
 '7',
 'm3',
 '6',
 'm3',
 '5',
 'm3',
 '4',
 'm3',
 '3',
 'm3',
 '2',
 'm3',
 '1',
 'm3',
 '0',
 'm2',
 '5',
 'm2',
 '4',
 'm2',
 '3',
 'm2',
 '2',
 'm2',
 '1',
 'm2',
 '0',
 'm2',
 '6',
 'm2',
 '7',
 'm2',
 '8',
 'm2',
 '9',
 'm2',
 '11',
 'm2',
 '10',
 'm2',
 '12',
 'm2',
 '13',
 'm2',
 '14',
 'm2',
 '15',
 'm2',
 '16',
 'm2',
 '17',
 'm2',
 '18',
 'm2',
 '19',
 'm2',
 '20',
 'm2',
 '21',
 'm2',
 '22',
 'm2',
 '24',
 'm2',
 '23',
 'm2',
 '25',
 'm2',
 '26',
 'm2',
 '27',
 'm2',
 '28',
 'm2',
 '29',
 'm2',
 '30',
 'm2',
 '31',
 'm2',
 '33',
 'm2',
 '32',
 'm2',
 '34',
 'm2',
 '35',
 'm2',
 '36',
 'm2',
 '37',
 'm2',
 '38',
 'm2',
 '39',
 'm2',
 '40',
 'm2',
 '41',
 'm2',
 '42',
 'm2',
 '43',
 'm2',
 '44',
 'm2',
 '45',
 'm2',
 '46',
 'm2',
 '47',
 'm2',
 '48',
 'm2',
 '49',
 'm2',
 '50',
 'm2',
 '51',
 'm2',
 '52',
 'm2',
 '53',
 'm2',
 '54',
 'm2',
 '55',
 'm2',
 '56',
 'm2',
 '57',
 'm2',
 '58',
 'm2',
 '59',
 'm2',
 '60',
 'm2',
 '61',
 'm2',
 '62',
 'm2',
 '63',
 'm2',
 '64',
 'm2',
 '65',
 'm2',
 '66',
 'm2',
 '67',
 'm2',
 '68',
 'm2',
 '69',
 'm2',
 '71',
 'm2',
 '70',
 'm2',
 '72',
 'm2',
 '73',
 'm2',
 '74',
 'm2',
 '75',
 'm2',
 '76',
 'm2',
 '77',
 'm2',
 '78',
 'm2',
 '79',
 'm3',
 '33',
 'm3',
 '32',
 'm3',
 '31',
 'm3',
 '25',
 'm3',
 '30',
 'm3',
 '29',
 'm3',
 '28',
 'm3',
 '27',
 'm3',
 '26'];

function setup(){
    frameRate(40);
    noCanvas();
}

function draw() {
    selfAnimation++;
    // currentIndex++;
    // currentSeries = transfer[currentIndex * 2];
    // currentId = transfer[currentIndex * 2 + 1];

    // 5 seconds waiting for splash screen
    if ((selfAnimation > (40*5)) && (frameCount % (40*3) == 0)) { // 3 seconds inbetween steps for animation
        // console.log('animating again');
        addStep();
    }
    if ((selfAnimation > (40 * 20)) && (document.getElementById("main-container") == "block")) {
        showSplash();
    }
    
    // console.log(currentSeries, currentId);
    if ((lastId != currentId) || (lastSeries != currentSeries)){
        document.getElementById(lastSeries + "cir" + lastId).style.fill = 'white';
        document.getElementById(lastSeries + "cir" + lastId).style.r = 4;
    }
    
    document.getElementById('img-spectrum').src = currentSeries + '/spektra_evals_color/' + currentId + '_eval_spectrum.png';
    document.getElementById('img-photo').src = currentSeries + '/photos_compressed/' + currentId + '_photo.jpg';
    // document.getElementById('annotation-text').innerHTML = 'M3 #' + currentId + ': ' + d.txt;
    document.getElementById(currentSeries + "cir" + currentId).style.fill = 'orange';
    document.getElementById(currentSeries + "cir" + currentId).style.r = 10;

    lastId = currentId;
    lastSeries = currentSeries;
}

function keyPressed(){
    // console.log(currentSeries, currentId);
//   if (key == ' '){
//     selfAnimation = !selfAnimation;
//   }
  if (key == 'f') {
    // console.log('fis');
    let fs = fullscreen();
    fullscreen(!fs);
  }
  if (key == 'ArrowUp'){
    selfAnimation = 0;
    addStep();
}
if (key == 'ArrowRight'){
    selfAnimation = 0;
    addStep();
    }
    if (key == 'ArrowDown') {
    selfAnimation = 0;
    subtractStep();
    }
    if (key == 'ArrowLeft') {
    selfAnimation = 0;
    subtractStep();
  }
}

function addStep(){
    if (currentSeries == 'm3' && currentId == 0){
        currentSeries = 'm2';
        currentId = 0;
    } else if (currentSeries == 'm2' && currentId == 79) {
        currentSeries = 'm3';
        currentId = 33;
    } else if (currentSeries == 'm3') {
        currentId -= 1;
    } else {
        currentId++;
    }
}
function subtractStep(){
    if (currentSeries == 'm3' && currentId == 33){
        currentSeries = 'm2';
        currentId = 79;
    } else if (currentSeries == 'm2' && currentId == 0) {
        currentSeries = 'm3';
        currentId = 0;
    } else if (currentSeries == 'm3') {
        currentId++;
    } else {
        currentId--;
    }
}



function hideSplash() {
    selfAnimation = 0;
  let x = document.getElementById("splashSVG");
  x.style.display = "none";
  let mapa = document.getElementById("main-container");
  mapa.style.display = "block";
  let english = document.getElementById("splashEng");
  english.style.display = "none";
}

function showSplash() {
    selfAnimation = 0;
  let x = document.getElementById("splashSVG");
  x.style.display = "block";
  let mapa = document.getElementById("main-container");
  mapa.style.display = "none";
  let english = document.getElementById("splashEng");
  english.style.display = "none";
}

function showEnglish(){
    selfAnimation = 0;
  let x = document.getElementById("splashSVG");
  x.style.display = "none";
  let mapa = document.getElementById("main-container");
  mapa.style.display = "none";
  let english = document.getElementById("splashEng");
  english.style.display = "block";
}
// function showSk(){
//   let x = document.getElementById("splashSVG");
//   x.style.display = "block";
//   let mapa = document.getElementById("main-container");
//   mapa.style.display = "none";
//   let english = document.getElementById("splashEng");
//   english.style.display = "none";
// }