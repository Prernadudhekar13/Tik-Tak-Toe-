let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turn0=true;
    // apn boxes ko enable krege jese hi reset krte h
    enable();
    msgcontainer.classList.add("hide");

}



//i have to add event listeneller in each boxes so
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        
        if(turn0==true){
            
            box.innerText="O";
            turn0=false;
        }
        else{
            
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
        
    })

})
const disable=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enable=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;

    msgcontainer.classList.remove("hide");
    disable();
};
const checkWinner= () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                
                showWinner(pos1Val);
            }
        }
    }
}

newgamebtn.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);