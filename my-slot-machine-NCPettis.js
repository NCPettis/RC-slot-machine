// Slot Machine project ($5 and $50) start user off at $1000. 
// If you win you get some amt back (fixed amt). 
// Reels spinning need at least 5 options. Each Reel is randomized. 
// Need 3 reels. If all 3 match, you win. If 2 match, you get a smaller amt back.


// wallet starts with $1000
// let wallet = 1000

// when sum1 hits "Bet" take the value of #num and subtract it from the wallet.
let wallet = 1000 
let wins = 0

// function cannotStart(){
//     if (Number(document.getElementById(num).value) === 0){
//         bet.disabled = true
// }


document.getElementById("bet").addEventListener("click",walletDescrease);
function walletDescrease (){

    num = Number(document.querySelector('#num').value)
    wallet -= num
  
    document.querySelector('#wallet').innerText=wallet
}
// when sum1 hits "Bet" Randomize the Reels
document.getElementById("bet").addEventListener("click",randomizeReelOne);
function randomizeReelOne(){

    const slots = ['A', 'B', 'C', 'D', 'E'];
    const randomIndex = Math.floor(Math.random() * slots.length);
    const randomSlots = slots[randomIndex]

    // console.log(randomSlots)
    document.querySelector('#reelOne').innerText=randomSlots
    return randomSlots
}
document.getElementById("bet").addEventListener("click",randomizeReelTwo);
function randomizeReelTwo(){

    const slots = ['A', 'B', 'C', 'D', 'E'];
    const randomIndex = Math.floor(Math.random() * slots.length);
    const randomSlots = slots[randomIndex]

    // console.log(randomSlots)
    document.querySelector('#reelTwo').innerText=randomSlots
     return randomSlots
}
document.getElementById("bet").addEventListener("click",randomizeReelThree);
function randomizeReelThree(){

    const slots = ['A', 'B', 'C', 'D', 'E'];
    const randomIndex = Math.floor(Math.random() * slots.length);
    const randomSlots = slots[randomIndex]

    // console.log(randomSlots)
    document.querySelector('#reelThree').innerText=randomSlots
     return randomSlots
}
// When the 3 reels match you get - values based on bet amt - bet 5 to 25 win 50, bet 25 to 50 win 100
document.getElementById("bet").addEventListener("click",increaseCredits)

function increaseCredits(){
    let reel1 = randomizeReelOne() 
    let reel2 = randomizeReelTwo()
    let reel3 = randomizeReelThree()
    console.log( reel1, reel2, reel3)

    let bet = Number(document.querySelector("#num").value)
    console.log(typeof bet, bet)

    if (bet < 5 ){
         alert ("YOU MUST BET CREDITS")
    }else {

     if ((reel1 === reel2) && (reel2 === reel3) && (bet <= 20)) {
        wins += 100  
        
     let result = document.getElementById('wins')

     result.innerText = wins
     console.log(result, 25, wins, bet)

    } else if ((reel1 === reel2) && (reel2 === reel3) && (bet > 20)){
        wins += 1000  
        
     let result = document.getElementById('wins')

     result.innerText = wins
     console.log(result, "One Thousand", bet)

    }else if ((reel1 === reel2) && (bet <= 20)){
        wins += 20 
        
     let result = document.getElementById('wins')

     result.innerText = wins
    
}else if ((reel1 === reel2) && (bet > 20)){
        wins += 50 
        
     let result = document.getElementById('wins')

     result.innerText = wins
}
}
}

document.getElementById("cashOut").addEventListener("click",endGame)
function endGame(){


window.location.reload();
}
