// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', (event) => {
  planeIsReady();  
  planeIsLanding();
  abortMission();
  moveLeft();
  moveRight();
  moveUp();
  moveDown();

  console.log('page is fully loaded');
  });



  
  let rocket = document.getElementById("rocket");
  rocket.style.position ="absolute";
  rocket.style.left="0px";
  rocket.style.bottom="0px";
  
  
  

function planeIsReady() {
  let takeOff = document.getElementById("takeoff");
  console.log(typeof takeOff);
  takeOff.addEventListener("click", function(){
      
      if(window.confirm("ready for takeoff.")) {
        document.getElementById("flightStatus").innerHTML="Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor="blue";
        document.getElementById("spaceShuttleHeight").innerHTML+=10000;
    };
  });
};



  function planeIsLanding() {
    let land= document.getElementById("landing");
    console.log(typeof land);
    land.addEventListener("click", function(){
      if(window.confirm("ready to land.")) {
        document.getElementById("flightStatus").innerHTML="The flight is in landing";
        document.getElementById("shuttleBackground").style.backgroundColor="green";
        document.getElementById("spaceShuttleHeight").innerHTML=0;
      }
    });

  };



  function abortMission(){
    let missionabort = document.getElementById("missionAbort");
    console.log(typeof missionabort);
    missionabort.addEventListener("click", function() {
      if(window.confirm("mission abort.")) {
        document.getElementById("flightStatus").innerHTML="The mission is ended";
        document.getElementById("shutteBackground").style.backgroundColor="green";
        document.getElementById("spaceShuttleHeight").innerHTML=0;
      }

    });


  };



function moveLeft(){
  let leftButton = document.getElementById("left");
  leftButton.addEventListener("click", moveLeft);
  let counter = parseInt(rocket.style.left);
  counter-=10;
  rocket.style.left = counter+"px";



};



function moveRight(){
  let rightButton = document.getElementById("right");
  rightButton.addEventListener("click", moveRight);
  let counter = parseInt(rocket.style.left);
  counter+=10;
  rocket.style.left = counter+"px";
};


function moveUp(){
  
  let counter = parseInt(rocket.style.bottom);
  let upButton = document.getElementById("up");
  upButton.addEventListener("click",moveUp);
  
  let shuttleHeight = parseInt(document.getElementById('spaceShuttleHeight').innerHTML);
  shuttleHeight+=10000;
  counter+=10;
  rocket.style.bottom = counter+"px";
  document.getElementById('spaceShuttleHeight').innerHTML=shuttleHeight;
  
};

function moveDown(){
  let downButton = document.getElementById("down");
  downButton.addEventListener("click", moveDown);
  let counter = parseInt(rocket.style.bottom);
  let shuttleHeight = parseInt(document.getElementById('spaceShuttleHeight').innerHTML);
  shuttleHeight-=10000;
  counter-=10;
  rocket.style.bottom = counter+"px";
  document.getElementById('spaceShuttleHeight').innerHTML = shuttleHeight;
};










        


