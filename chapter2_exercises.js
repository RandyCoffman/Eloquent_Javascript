function Triangle(num) {
    var printingVar = "#"
    while(printingVar.length <=num ){
        console.log(printingVar);
        printingVar = printingVar + "#";
    }
}


function FizzBuzz(){
    for (var i = 0; i <= 100; i++) {
        switch (true) {
            case (i % 5 === 0 && i % 3 === 0):
                console.log("FizzBuzz");
                break;
            case i % 5 === 0:
                console.log("Buzz");
                break;
            case i % 3 === 0:
                console.log("Fizz");
                break;
            default:
                console.log(i);
                break;
        }
    }
}

function Chessboard(boardSize){
    var size = boardSize;
    var character = "";
    
    for (var r = 0; r < size; r++) { // row
        for (var c = 0; c < size; c++) { // column
            if ((r + c) % 2 == 0){
                character += " ";
            }else{
                character += "#";
            }
        }
    character += "\n";
    }
    console.log(character);
}
