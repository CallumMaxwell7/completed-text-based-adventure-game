const {name} = require(`./functions/inq`)
const {chooseWeapon} = require (`./functions/inq`)
const {chooseFood} = require (`./functions/inq`)
const {directionOfTravel} = require (`./functions/inq`)
const {nameChange} = require (`./functions/inq`)
const {restart} = require (`./functions/inq`)
const {finish} = require (`./functions/inq`)

let player = {
    playerName : "",
    hungerLevel: 5,
    playerHealth:100,
    playerWeapon:"",
    playerFood:"",
    travelDirection:"",
    changeName:"", 
    playerRestart:""
}
let finalEnemy ={
    name: "The Boss", 
    health: 100,
    weapon:"sword"
}
const start = async () => {
    console.log("Hello what is your name?")
    player.playerName = await name()
    console.log(`Welcome to the game ${player.playerName}`)
    stage2()
} 
const stage2 = () => {
    console.log(`${player.playerName} has woken up in the woods, they notice they have no food or weapons in their quest to defeat their final enemy`)
    console.log(`before they start their quest, they must first choose a weapon and then decide which food they want to take on their quest later`)
 stage3()
}
const stage3 = async () => {
    console.log(`${player.playerName} now has the choice of which weapon they would like to use `)
    player.playerWeapon = await chooseWeapon()
    console.log(`${player.playerName} has chosen the weapon ${player.playerWeapon}`)
    console.log(`${player.playerName}'s current health is ${player.playerHealth}`)
    stage4()
}
const stage4 = async () => {
    console.log(`${player.playerName} has now chosen their weapon which is ${player.playerWeapon}, they must now choose their food to take on their quest`)
    player.playerFood = await chooseFood()
    console.log(`${player.playerName} has chosen ${player.playerFood}`)
    player.hungerLevel = player.hungerLevel - 1
    console.log(`${player.playerName}'s new hunger level is ${player.hungerLevel} after they chose to eat a bit of ${player.playerFood}`)
    stage5()
}
const stage5 = async () => {
    console.log(`${player.playerName} have now chosen their weapon and food, they must now choose their direction of travel from the given options below `)
    player.travelDirection = await directionOfTravel()
    console.log(`${player.playerName} has chosen to travel in the direction of ${player.travelDirection}`)
    stage6()
}
const stage6 = async () => {
    
    if (player.travelDirection == "underground" ){
        console.log(`${player.playerName} has travelled underground and has ran into a set of rabid dogs who have knocked them to the floor and chewed at them, resulting in their arm being chewed and now his health has decreased`)
        player.playerHealth = player.playerHealth - 25 
        console.log(`${player.playerName}'s new health is now ${player.playerHealth} after the attack`)
    }
    else if (player.travelDirection == "up the mountain") {
        console.log(`${player.playerName} has chosen to travel up the mountain and has encountered some strangers who ask them what their name is`)
        console.log(`Stranger:"Hello, what is your name?"`)
        player.playerName = await name()
        player.changeName = await nameChange()
    }
    stage7()
}
const stage7 = async () => {
    if (player.changeName == "yes"){
        player.playerName = await name()
        console.log(`Stranger: hello ${player.playerName}, good luck with your quest`)
    }
    else if (player.changeName =="no") {
        console.log(`continue game as ${player.playerName}`)
        console.log(`Stranger: good luck with your quest ${player.playerName}, you are going to need it (laughs)`)
    }
    stage8()
    }

const stage8 = async () => {
    
    if (player.changeName == "yes"){
        console.log(`${player.playerName} has now reached the top of the mountain and has encountered their final enemy, they must now decide which weapon they would like to use in the final battle`)
        player.playerWeapon = await chooseWeapon()
        console.log(`${player.playerName} has chosen the weapon ${player.playerWeapon} for the final battle`)
}
else if (player.changeName =="no") {
   player.playerHealth = player.playerHealth - 75
    console.log(`${player.playerName} has failed to reach the top of the mountain and has now frozen, decreasing their health t0 ${player.playerHealth}`)
    player.playerRestart = await restart()
   if(player.playerRestart == "restart") {
    console.log(`${player.playerName} has chosen to restart the game and will now have to restart the game again from the beginning `)
   }
   else if (player.playerRestart == "continue") {
    player.playerHealth = player.playerHealth - 25
    console.log(`${player.playerName} now has the health of ${player.playerHealth} and has frozen halfway up the mountain, they will need to restart the game`)
   }

}
finalStage()
}
const finalStage = async () => {
    if (player.changeName == "yes"){
       
        console.log(`${player.playerName} has now reached the top of the mountain and has encountered their final enemy, they must now decide which weapon they would like to use in the final battle`)
       
        console.log(`${player.playerName} has chosen the weapon ${player.playerWeapon} for the final battle`)
        player.playerHealth = player.playerHealth - 10
        console.log(`all of a sudden, ${player.playerName}'s enemy ${finalEnemy.name} appears from out of nowhere and takes a swipe at ${player.playerName} using ${finalEnemy.weapon} decreasing their health to ${player.playerHealth}`)
       finalEnemy.health = finalEnemy.health - 25
       console.log(`${player.playerName} swipes back at ${finalEnemy.name} dislodging their weapon from their hand and decreasing their health to ${finalEnemy.health}`)
       player.hungerLevel = player.hungerLevel -4 
       player.playerHealth = player.playerHealth + 5
       console.log(`${player.playerName} has eaten the rest of ${player.playerFood} and decreased their hunger level to ${player.hungerLevel} as well as increasing their health to ${player.playerHealth}`)
       console.log(`${player.playerName} then picks up ${finalEnemy.name}'s ${finalEnemy.weapon} meaning they now have two ${player.playerWeapon} to use against ${finalEnemy.name}`)
       finalEnemy.health = finalEnemy.health - 50 
       console.log(`${player.playerName} takes a swing at ${finalEnemy.name} using the two swords and hits, causing ${finalEnemy.name}'s health to decrease to ${finalEnemy.health}`)
       finalEnemy.health = finalEnemy.health - 25 
       console.log(`${player.playerName} then takes a final swipe at ${finalEnemy.name} and decreases their health to ${finalEnemy.health} meaning that the fight is over and ${player.playerName} has completed their quest and the world is now saved`)
}
end()
}
const end = async () => {
    console.log(`${player.playerName} has won the final battle and has now saved the world from ${finalEnemy.name}`)
    let endOfGame = await finish()
    if (finish == "yes") {
        console.log(`game has been chosen to end, congratulations on winning your quest`)
        window.close()
    }
    else if (finish == "n0") {
        console.log(`User has decided not to finish the game and would like to restart`)
    }
    
}
start()