// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

  function init () {
      let takeOff = document.getElementById("takeoff");
      console.log(typeof takeOff);
      takeOff.addEventListener("click", function(event){
          
          if(window.confirm("ready for takeoff.")) {
            document.getElementById("flightStatus").innerHTML="Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor="blue";
            document.getElementById("spaceShuttleHeight").innerHTML=10000;
        };
      }) 
  }


        


