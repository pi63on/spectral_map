
function setup(){
    frameRate(40);
    noCanvas();
}

function draw() {
    selfAnimation++;
    // 5 seconds waiting for splash screen
    if ((selfAnimation > (frameRate()*5)) && (frameCount % (parseInt(frameRate())*3) == 0)) { // 3 seconds inbetween steps for animation
        console.log('animating again');
        if ((currentSeries == 'm3') && (currentId >= 33)){
            currentSeries = 'm2';
            currentId = 0;
        } else if ((currentSeries == 'm2') && (currentId >= 79)) {
                currentSeries = 'm3';
                currentId = 0;
        } else {
                currentId++;
        }
    }
    // console.log(currentSeries, currentId);
    if ((lastId != currentId) || (lastSeries != currentSeries)){
        document.getElementById(lastSeries + "cir" + lastId).style.fill = 'white';
    }
    
    document.getElementById('img-spectrum').src = currentSeries + '/spectra_evals/' + currentId + '_eval_spectrum.png';
    document.getElementById('img-photo').src = currentSeries + '/photos_compressed/' + currentId + '_photo.jpg';
    // document.getElementById('annotation-text').innerHTML = 'M3 #' + currentId + ': ' + d.txt;
    document.getElementById(currentSeries + "cir" + currentId).style.fill = 'orange';

    lastId = currentId;
    lastSeries = currentSeries;
}

function keyPressed(){
  if (key == ' '){
    selfAnimation = !selfAnimation;
  }
  if (key == 'f') {
    let fs = fullscreen();
    fullscreen(!fs);
  }
  if (key == 'ArrowUp'){
    selfAnimation = 0;
    if ((currentSeries == 'm3') && (currentId >= 33)){
        currentSeries = 'm2';
        currentId = 0;
    } else if ((currentSeries == 'm2') && (currentId >= 79)) {
        currentSeries = 'm3';
        currentId = 0;
    } else {
        currentId++;
    }
}
if (key == 'ArrowRight'){
    selfAnimation = 0;
      if ((currentSeries == 'm3') && (currentId >= 33)){
          currentSeries = 'm2';
          currentId = 0;
        } else if ((currentSeries == 'm2') && (currentId >= 79)) {
            currentSeries = 'm3';
            currentId = 0;
        } else {
            currentId++;
        }
    }
    if (key == 'ArrowDown') {
    selfAnimation = 0;
      if (currentId == 0){
          if (currentSeries == 'm3'){
              currentSeries = 'm2';
            } else {
                currentSeries = 'm3';
            }
        } else {
            currentId -= 1;
        }
    }
    if (key == 'ArrowLeft') {
    selfAnimation = 0;
    if (currentId == 0){
        if (currentSeries == 'm3'){
            currentSeries = 'm2';
        } else {
            currentSeries = 'm3';
        }
    } else {
        currentId -= 1;
    }
  }
}