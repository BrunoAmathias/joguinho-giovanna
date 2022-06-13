const FRONT = "card_front"
const BACK = "card_back"
const icon = "icon"


let matchCard = document.getElementById("matchcard")
let cardFlip = document.getElementById("cardFlip")
let winGame = document.getElementById("wingame")
let div_move = document.getElementById("div-move")
let moves = 0;
let music = document.getElementById("musicGame")
let btnStart = document.getElementById("container-start")
let jogo = document.getElementById("jogo")
let container_quiz = document.getElementById("container-quiz")
let gameOverLayer = document.getElementById("gameOver")


startGame();

function startGame(){
    

    initializeCards(game.createCardsFromTechs())
}

function initializeCards(cards){
    let gameBoard = document.getElementById("gameBoard")
    gameBoard.innerHTML= "";
    game.cards.forEach(card=>{

        let cardElement = document.createElement("div");
        cardElement.id = card.id;
        cardElement.classList.add("card");
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement)

        cardElement.addEventListener("click", flipCard)
        gameBoard.appendChild(cardElement);
        
        
    })
}

function createCardContent(card, cardElement){

    createCardFace(FRONT, card, cardElement)
    createCardFace(BACK, card, cardElement)
}

function createCardFace(face, card , element){
    let cardElementFace = document.createElement("div")
    cardElementFace.classList.add(face)
    if(face === FRONT){
        let iconElement = document.createElement("img")
        iconElement.classList.add(icon)
        iconElement.src="./images/" + card.icon +".png";
        iconElement.style.width ="100%"
        iconElement.style.height ="100%"
        iconElement.style.borderRadius = "20px"

        
        cardElementFace.appendChild(iconElement)
    }else{
        cardElementFace.innerHTML= "&lt/&gt";
    }
    element.appendChild(cardElementFace)
}







function flipCard(){
   if (game.setCard(this.id)){
        cardFlip.play();
    this.classList.add("flip")
    if(game.secondCard){
        moves++;
        div_move.innerHTML = "Moves: " + moves
    if (game.checkMatch()){
        
       setTimeout(()=>{
        matchCard.play();
        matchCard.currentTime = 0
        }, 800)
        game.clearCards();
       if(game.checkGameOver()) {
           
           setTimeout(()=>{
            music.pause();
            music.currentTime = 0;
            winGame.play();     
           gameOverLayer.style.display = "flex"
           
        }, 1000)
       }
    }else {
        setTimeout(()=>{
        let firstCardView = document.getElementById(game.firstCard.id)
        let secondCardView = document.getElementById(game.secondCard.id)

        firstCardView.classList.remove("flip")
        secondCardView.classList.remove("flip")
        game.unFlipCards()
        }, 1000);
    }
}
}
}

function restart(){
    game.clearCards()
    startGame()
    
    gameOverLayer.style.display = "none"
    jogo.style.display = "none"
    btnStart.style.display = "flex"
}



btnStart.addEventListener("click", btnStartGame)

function btnStartGame() {
    
    music.play();
    music.volume = 0.06
    music.loop = true;
jogo.style.display = "block"
btnStart.style.display = "none"

}


function quiz(){
    container_quiz.style.display = "block"
    gameOverLayer.style.display = "none"
    jogo.style.display ="none"
}

 
// -----PARTE QUIZ--------------- //
let inputpg1rp1 = document.getElementById("inputpg1rp1")
let inputpg1rp2 = document.getElementById("inputpg1rp2")
let inputpg1rp4 = document.getElementById("inputpg1rp4")
let inputpg1rp5 = document.getElementById("inputpg1rp5")
let inputpg2rp1 = document.getElementById("inputpg2rp1")
let inputpg2rp3 = document.getElementById("inputpg2rp3")
let inputpg2rp4 = document.getElementById("inputpg2rp4")
let inputpg2rp5 = document.getElementById("inputpg2rp5")
let inputpg3rp1 = document.getElementById("inputpg3rp1")
let inputpg3rp2 = document.getElementById("inputpg3rp2")
let inputpg3rp3 = document.getElementById("inputpg3rp3")
let inputpg3rp5 = document.getElementById("inputpg3rp5")
let inputpg4rp2 = document.getElementById("inputpg4rp2")
let inputpg4rp3 = document.getElementById("inputpg4rp3")
let inputpg4rp4 = document.getElementById("inputpg4rp4")
let inputpg4rp5 = document.getElementById("inputpg4rp5")
let inputpg5rp1 = document.getElementById("inputpg5rp1")
let inputpg5rp2 = document.getElementById("inputpg5rp2")
let inputpg5rp3 = document.getElementById("inputpg5rp3")
let inputpg5rp4 = document.getElementById("inputpg5rp4")
let inputpg6rp1 = document.getElementById("inputpg6rp1")
let inputpg6rp3 = document.getElementById("inputpg6rp3")
let inputpg6rp4 = document.getElementById("inputpg6rp4")
let inputpg6rp5 = document.getElementById("inputpg6rp5")




let erradopg1rp1 = document.getElementById("erradopg1rp1")
let erradopg1rp2 = document.getElementById("erradopg1rp2")
let erradopg1rp4 = document.getElementById("erradopg1rp4")
let erradopg1rp5 = document.getElementById("erradopg1rp5")
let erradopg2rp1 = document.getElementById("erradopg2rp1")
let erradopg2rp3 = document.getElementById("erradopg2rp3")
let erradopg2rp4 = document.getElementById("erradopg2rp4")
let erradopg2rp5 = document.getElementById("erradopg2rp5")
let erradopg3rp1 = document.getElementById("erradopg3rp1")
let erradopg3rp2 = document.getElementById("erradopg3rp2")
let erradopg3rp3 = document.getElementById("erradopg3rp3")
let erradopg3rp5 = document.getElementById("erradopg3rp5")
let erradopg4rp2 = document.getElementById("erradopg4rp2")
let erradopg4rp3 = document.getElementById("erradopg4rp3")
let erradopg4rp4 = document.getElementById("erradopg4rp4")
let erradopg4rp5 = document.getElementById("erradopg4rp5")
let erradopg5rp1 = document.getElementById("erradopg5rp1")
let erradopg5rp2 = document.getElementById("erradopg5rp2")
let erradopg5rp3 = document.getElementById("erradopg5rp3")
let erradopg5rp4 = document.getElementById("erradopg5rp4")
let erradopg6rp1 = document.getElementById("erradopg6rp1")
let erradopg6rp3 = document.getElementById("erradopg6rp3")
let erradopg6rp4 = document.getElementById("erradopg6rp4")
let erradopg6rp5 = document.getElementById("erradopg6rp5")




inputpg1rp1.addEventListener("click", function(){
erradopg1rp1.style.color ="red"
})

inputpg1rp2.addEventListener("click", function(){
    erradopg1rp2.style.color ="red"
    })

inputpg1rp4.addEventListener("click", function(){
    erradopg1rp4.style.color ="red"
    })
inputpg1rp5.addEventListener("click", function(){
        erradopg1rp5.style.color ="red"
        })
        
inputpg2rp1.addEventListener("click", function(){
erradopg2rp1.style.color ="red"
})

inputpg2rp3.addEventListener("click", function(){
    erradopg2rp3.style.color ="red"
    })

inputpg2rp4.addEventListener("click", function(){
erradopg2rp4.style.color ="red"
})
inputpg2rp5.addEventListener("click", function(){
    erradopg2rp5.style.color ="red"
    })
inputpg3rp1.addEventListener("click", function(){
        erradopg3rp1.style.color ="red"
        })        
inputpg3rp2.addEventListener("click", function(){
        erradopg3rp2.style.color ="red"
})
            
inputpg3rp3.addEventListener("click", function(){
erradopg3rp3.style.color ="red"
})
inputpg3rp5.addEventListener("click", function(){
    erradopg3rp5.style.color ="red"
    })
function correta(){
let correto = document.getElementById("correto")    
correto.style.color ="green"
}
inputpg4rp2.addEventListener("click", function(){
    erradopg4rp2.style.color ="red"
})
inputpg4rp3.addEventListener("click", function(){
    erradopg4rp3.style.color ="red"
})
inputpg4rp4.addEventListener("click", function(){
    erradopg4rp4.style.color ="red"
})
inputpg4rp5.addEventListener("click", function(){
    erradopg4rp5.style.color ="red"
})

inputpg5rp1.addEventListener("click", function(){
    erradopg5rp1.style.color ="red"
})
inputpg5rp2.addEventListener("click", function(){
    erradopg5rp2.style.color ="red"
})
inputpg5rp3.addEventListener("click", function(){
    erradopg5rp3.style.color ="red"
})
inputpg5rp4.addEventListener("click", function(){
    erradopg5rp4.style.color ="red"
})

inputpg6rp1.addEventListener("click", function(){
    erradopg6rp1.style.color ="red"
})
inputpg6rp3.addEventListener("click", function(){
    erradopg6rp3.style.color ="red"
})
inputpg6rp4.addEventListener("click", function(){
    erradopg6rp4.style.color ="red"
})
inputpg6rp5.addEventListener("click", function(){
    erradopg6rp5.style.color ="red"
})

function correta2(){
    let correto2 = document.getElementById("correto2")    
    correto2.style.color ="green"
    }
function correta3(){
let correto3 = document.getElementById("correto3")    
correto3.style.color ="green"

}
function correta4(){
    let correto4 = document.getElementById("correto4")    
    correto4.style.color ="green"
    
    }
function correta5(){
        let correto5 = document.getElementById("correto5")    
        correto5.style.color ="green"
        
        }
function correta6(){
let correto6 = document.getElementById("correto6")    
correto6.style.color ="green"
            
}    