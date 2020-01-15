
//                    Game

 
var side = 20;


 
  let grassArr = [];
  let grassEaterArr = [];
  let predatorArr = [];
  let predatorEaterArr = [];
  let animalArr = [];


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let n = parseInt(prompt("Input number of area"));
let m = n;
let matrix = [];

function setup() {
    function pull_array(n){
        let a = []
        while(n > 0){
            a.push(random([0,5,1,1,1,3,1,1,1,1,1,1,2,1,4,1]));
            n--;
        }
        return a;
    }
    while(m > 0){
        matrix.push(pull_array(n));
        m--;
    }
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for(var y = 0; y < matrix.length; ++y){
        for(var x = 0; x < matrix[y].length; ++x){
            if(matrix[y][x] == 1){
                var gr = new Grass(x,y,1);
                grassArr.push(gr);
            }
            else if(matrix[y][x] == 2){
                var grassEater = new GrassEater(x,y,2);
                grassEaterArr.push(grassEater);
            }
            else if(matrix[y][x] == 3){
                var predator = new Predator(x,y,3);
                predatorArr.push(predator);
            }
            else if(matrix[y][x] == 4){
                var predatorEater = new PredatorEater(x,y,4);
                predatorEaterArr.push(predatorEater);
            }
            else if(matrix[y][x] == 5){
                var animal = new Animal(x,y,5);
                animalArr.push(animal);
            }
        }
     }     
    
}


function draw() {
    frameRate(5);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            rect(x * side, y * side, side, side);
              
     /*
     fill("blue")
     text(x+" "+y, x*side+side/2,y*side+side/2)
     */	
        }
    }
    for(let i in grassArr){
        grassArr[i].mul();
    }
    for(let k in grassEaterArr){
        grassEaterArr[k].move();
        grassEaterArr[k].eat();
        grassEaterArr[k].mul();
        grassEaterArr[k].die();
        
    }
    for(let l in predatorArr){
        predatorArr[l].move();
        predatorArr[l].eat();
        predatorArr[l].mul();
        predatorArr[l].die();
        
    }
    for(let m in predatorEaterArr){
        predatorEaterArr[m].move();
        predatorEaterArr[m].eat();
        predatorEaterArr[m].mul();
        predatorEaterArr[m].die();
        
    }
    for(let n in animalArr){
        animalArr[n].move();
        animalArr[n].eat();
        animalArr[n].mul();
        animalArr[n].die();
        
    }
 }
 
