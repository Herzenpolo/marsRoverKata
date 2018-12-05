
// Rover Object Goes Here
var roverKata = { 
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]]
}

var roverSecond = { 
  direction: "N",
  x: 1,
  y: 1,
  travelLog: [[1,1]]
}

var grid = [
  [null, null, null, null, "obstacle", null, null, null, null, null],
  [null, null, null, null, null, null, null, null, "obstacle", null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, "obstacle", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, "obstacle", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "obstacle", null, null],
  [null, null, null, null, "obstacle", null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];

// ======================

// ======================


function turnLeft(){
  console.log("turnLeft was called!");
  switch(roverKata.direction) {
    case roverKata.direction = "N": roverKata.direction = "W";
    break;
    case roverKata.direction = "W": roverKata.direction = "S";
    break;
    case roverKata.direction = "S": roverKata.direction = "E";
    break;
    case roverKata.direction = "E": roverKata.direction = "N";
    break;
    default: roverKata.direction = "N";
  }
  console.log("Rover is now facing " + " " + roverKata.direction);
}

function turnRight(){
  console.log("turnRight was called!");
  switch(roverKata.direction) {
    case roverKata.direction = "N": roverKata.direction = "E";
    break;
    case roverKata.direction = "E": roverKata.direction = "S";
    break;
    case roverKata.direction = "S": roverKata.direction = "W";
    break;
    case roverKata.direction = "W": roverKata.direction = "N";
    break;
    default: roverKata.direction = "N";
  }
  console.log("Rover is now facing " + " " + roverKata.direction);
}

function moveForward(){
  console.log("moveForward was called");
  switch(roverKata.direction) {
    case roverKata.direction = "N": 
      if (roverKata.y === 0) {
        console.log("Warning! Rover is in the limit grid, Not Move");
        console.log("Rover continuos at the same point: x = " + roverKata.x + ", y = " + roverKata.y);
      } else if (grid[roverKata.y-1][roverKata.x] != null) {
        console.log("Warning! Rover can CRASH, Not Move");
        console.log("Rover continuos at the same point: x = " + roverKata.x + ", y = " + roverKata.y);
      } else if ((roverKata.y-1 == roverSecond.y) && (roverKata.x == roverSecond.x)) {
        console.log("Warning! Another Rover in that position, Not Move");
        console.log("Rover continuos at the same point: x = " + roverKata.x + ", y = " + roverKata.y);
      } else {
      roverKata.y--;
      roverKata["travelLog"].push([roverKata.x,roverKata.y]);
      console.log("travelLog: ");
      console.log(roverKata.travelLog);
      }
      break;

    case roverKata.direction = "S": 
      if (roverKata.y === 9) {
        console.log("Warning! Rover is in the limit grid, Not Move");
        console.log("Rover continuos at the same point");
      } else if (grid[roverKata.y+1][roverKata.x] != null) {
        console.log("Warning! Rover can CRASH, Not Move");
        console.log("Rover continuos at the same point");
      } else if ((roverKata.y+1 == roverSecond.y) && (roverKata.x == roverSecond.x)) {
        console.log("Warning! Another Rover in that position, Not Move");
        console.log("Rover continuos at the same point: x = " + roverKata.x + ", y = " + roverKata.y);      
      } else {
      roverKata.y++;
      roverKata["travelLog"].push([roverKata.x,roverKata.y]);
      console.log("travelLog:");
      console.log(roverKata.travelLog);
      }
      break;

    case roverKata.direction = "E": 
      if (roverKata.x === 9) {
        console.log("Warning! Rover is in the limit grid, Not Move");
        console.log("Rover continuos at the same point");
      } else if (grid[roverKata.y][roverKata.x+1] != null) {
        console.log("Warning! Rover can CRASH, Not Move");
        console.log("Rover continuos at the same point");
      } else if ((roverKata.y == roverSecond.y) && (roverKata.x+1 == roverSecond.x)) {
        console.log("Warning! Another Rover in that position, Not Move");
        console.log("Rover continuos at the same point: x = " + roverKata.x + ", y = " + roverKata.y);       
      } else {
      roverKata.x++;
      roverKata["travelLog"].push([roverKata.x,roverKata.y]);
      console.log("travelLog:");
      console.log(roverKata.travelLog);
      }
      break;

    case roverKata.direction = "W": 
      if (roverKata.x === 0) {
        console.log("Warning! Rover is in the limit grid, Not Move");
        console.log("Rover continuos at the same point");
      } else if (grid[roverKata.y][roverKata.x-1] != null) {
        console.log("Warning! Rover can CRASH, Not Move");
        console.log("Rover continuos at the same point");
      } else if ((roverKata.y == roverSecond.y) && (roverKata.x-1 == roverSecond.x)) {
        console.log("Warning! Another Rover in that position, Not Move");
        console.log("Rover continuos at the same point: x = " + roverKata.x + ", y = " + roverKata.y);        
      } else {
      roverKata.x--;
      roverKata["travelLog"].push([roverKata.x,roverKata.y]);
      console.log("travelLog:");
      console.log(roverKata.travelLog);
      }
      break;
  }
  console.log("Rover is now in: x = " + roverKata.x + ", y = " + roverKata.y);
  
}
//ITERATION 4: COMMANDS 
function commands(firstLetters) {
  for (var i=0; i<firstLetters.length; i++){
    switch (firstLetters[i]) {
      case "f":
      moveForward();
      break;
      case "r":
      turnRight();
      break;
      case "l":
      turnLeft();
      break;
      case "b":
      moveBackward();
      break;
      default:
      console.log("Please, you must enter: l, r, b or f");
      break;
    }
  } 
}

function moveBackward(){
  console.log("moveBackward was called");
  switch(roverKata.direction) {
    case roverKata.direction = "S": 
      if (roverKata.y === 0) {
        console.log("Warning! Rover is in the limit grid, Not Move");
        console.log("Rover continuos at the same point: x = " + roverKata.x + ", y = " + roverKata.y);
      } else if (grid[roverKata.y-1][roverKata.x] != null) {
        console.log("Warning! Rover can CRASH, Not Move");
        console.log("Rover continuos at the same point: x = " + roverKata.x + ", y = " + roverKata.y);
           
      } else {
      roverKata.y--;
      roverKata["travelLog"].push([roverKata.x,roverKata.y]);
      console.log("travelLog: ");
      console.log(roverKata.travelLog);
      }
      break;

    case roverKata.direction = "N": 
      if (roverKata.y === 9) {
        console.log("Warning! Rover is in the limit grid, Not Move");
        console.log("Rover continuos at the same point");
      } else if (grid[roverKata.y+1][roverKata.x] != null) {
        console.log("Warning! Rover can CRASH, Not Move");
        console.log("Rover continuos at the same point");
            
      } else {
      roverKata.y++;
      roverKata["travelLog"].push([roverKata.x,roverKata.y]);
      console.log("travelLog:");
      console.log(roverKata.travelLog);
      }
      break;

    case roverKata.direction = "W": 
      if (roverKata.x === 9) {
        console.log("Warning! Rover is in the limit grid, Not Move");
        console.log("Rover continuos at the same point");
      } else if (grid[roverKata.y][roverKata.x+1] != null) {
        console.log("Warning! Rover can CRASH, Not Move");
        console.log("Rover continuos at the same point");
             
      } else {
      roverKata.x++;
      roverKata["travelLog"].push([roverKata.x,roverKata.y]);
      console.log("travelLog:");
      console.log(roverKata.travelLog);
      }
      break;

    case roverKata.direction = "E": 
      if (roverKata.x === 0) {
        console.log("Warning! Rover is in the limit grid, Not Move");
        console.log("Rover continuos at the same point");
      } else if (grid[roverKata.y][roverKata.x-1] != null) {
        console.log("Warning! Rover can CRASH, Not Move");
        console.log("Rover continuos at the same point");       
      } else {
      roverKata.x--;
      roverKata["travelLog"].push([roverKata.x,roverKata.y]);
      console.log("travelLog:");
      console.log(roverKata.travelLog);
      }
      break;
  }
  console.log("Rover is now in: x = " + roverKata.x + ", y = " + roverKata.y);
}


