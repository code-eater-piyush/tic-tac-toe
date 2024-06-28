let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGameBtn = document.querySelector(".butt");
let mc = document.querySelector(".m-c");
let www = document.querySelector("#www");
let turn0 = true ;
let count = 0 ;

const winPattern = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetl = () => {
    turn0 = true ;
    count = 0 ;
    enableBoxes();
    mc.classList.add("hide");


};


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");

        if ( turn0 === true) {
            box.innerText = "O" ;
            turn0 = false ;


        }
        else {
            box.innerText = "X" ; 
        turn0 = true   ;
        }
        box.disabled = true ;
        count++ ;

        checkwinner () ;
        let iswinner = checkwinner() ;
        if (count === 9 && !iswinner){
            gamedraw();

        }


    });



});

const gamedraw = () => {
    www.innerText =  `game draw` ;
    mc.classList.remove("hide");
    disableBoxes();
    
};

const disableBoxes = () => {
    for (let box of boxes ) {
        box.disabled = true ;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false ;
        box.innerText = "" ;
    }
};

const showWinner = (winner)  => {
    www.innerText = `winner is ${winner}`;
    mc.classList.remove("hide");
    disableBoxes();



};
  const checkwinner = () => {
    for( let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText ;
        let pos2 = boxes[pattern[1]].innerText ;
        let pos3 = boxes[pattern[2]].innerText ;
    
    if (pos1 != "" && pos2 != "" && pos3 != ""){

    if(pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        return true;
        
    }}
}


  };

  newGameBtn.addEventListener("click", resetl);

  reset.addEventListener("click",resetl);

