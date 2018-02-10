// Write your JavaScript code here!

var planets = [                                              //given array listing all "planets" + associated gravity multipliers
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

  planets.reverse();
 
  var solar = document.getElementById('planets');           //gets <select/> dropdown list element id = planets & assigns to var solar
  
  function newPlanetAdd() {
    var newPlanet = document.getElementById('newPlanet').value;
    var newMult = Number(document.getElementById('newMultiplier').value);
    planets [planets.length] = [newPlanet, newMult];
    //console.log(planets);
    var hodl = newPlanet;                                   //var hodl = planets array index 0 (planet names)
    //console.log(hodl);
    var newE1 = document.createElement('option');            //creates new <option/> element
    newE1.value = newPlanet;                                 //sets the 'VALUE' of each <option/> to var planets[0] (the planet names)
    newE1.id = newPlanet;                                     //sets the 'ID' of each <option/> to its' 'VALUE' (the planet names)
    console.log(newE1);
    var newNode = document.createTextNode(hodl);            //creates a new text node and stores planets index 0 (planet names)
                                                            //as content to be passed to the DOM
    //console.log(newNode);
    newE1.appendChild(newNode);                             //attach newNode to <option/> element var newE1
    //console.log(newE1);
    solar.appendChild(newE1);   
    
    //document.getElementById('planets').appendChild('');
  }


  planets.forEach(function(item) {                          //required 'forEach()' function to loop through each var planets array item
    var hodl = item[0];                                     //var hodl = planets array index 0 (planet names)
    //console.log(item);
    var newE1 = document.createElement('option');           //creates new <option/> element
    newE1.value = item[0];                                  //sets the 'VALUE' of each <option/> to var planets[0] (the planet names)
    newE1.id = item[0];                                     //sets the 'ID' of each <option/> to its' 'VALUE' (the planet names)
    //console.log(newE1);
    var newNode = document.createTextNode(hodl);            //creates a new text node and stores planets index 0 (planet names)
                                                            //as content to be passed to the DOM
    //console.log(newNode);
    newE1.appendChild(newNode);                             //attach newNode to <option/> element var newE1
    //console.log(newE1);
    solar.appendChild(newE1);                               //pass array planets via var newE1 to <select/> dropdown menu
   
    });

    function plutoForever()  {
      document.getElementById('Pluto').disabled = false;
      document.getElementById('Pluto').style.display = 'block';
    }
    
    function plutoGone()  {
      document.getElementById('Pluto').disabled = true;
      document.getElementById('Pluto').style.display = 'none';  
    }
    
    function calculateWeight(weight, planetName) {
      return ( weight * planetName ); 
    }
    
    function handleClickEvent(e) 
    {
      var userWeight = document.getElementById('user-weight').value;
        if(!/\D/.test(userWeight))                                                   //check user input to ensure it is a numeric value
         {  
                var planetName = document.getElementById('planets');                  //setting <select/> element #planets to var planetName
                var choice = document.getElementById('planets').selectedIndex;        //gets the index position of the selected planet so its multiplier can be obtained
                var result = calculateWeight(userWeight, planets[choice-1][1] );        //call the fucntion 'calculateWeight' and return the result to var result
                
                document.getElementById('output').innerHTML = "If you were on " + planetName.value + ", you would weigh " + result + "lbs!";
          }        

              else  {                                     //prompt user to enter numeric value
                    document.getElementById('output').innerHTML = "Please enter a numeric value for weight and try again. Thank you."
          }
      
        }

        function clearFields()  {
          document.getElementById('newPlanet').value = "";
          document.getElementById('newMultiplier').value = "";
          
        }

    //document.getElementById('calculate-button').onclick = function()  { handleClickEvent() };

   
  
  
