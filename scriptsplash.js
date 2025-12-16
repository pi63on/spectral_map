function hideSplash() {
  let x = document.getElementById("splashDiv");
  
  if (x.style.display === "none") {
      x.style.display = "block";
    } else {
        x.style.display = "none";
    }

  // let mapa = document.getElementById("mapaDiv");
  // console.log(mapa.style.display);
  // console.log('none' == (mapa.style.display))

  // if (mapa.style.display == "none") {
  //   console.log('here');
  //   mapa.style.display = "block";
  // } else {
  //   mapa.style.display = "none";
  // }
} 