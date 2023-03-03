const inquirer = require (`inquirer`)

const name =  async () => {
    let {userName} = await inquirer.prompt({
        name:"userName",
        type:"input",
        message:"Type in your name"
    })
    return userName
}
const chooseWeapon = async () => {
    let {weapon} =await inquirer.prompt({
        name:"weapon",
        type:"list",
        message:"which weapon would you like to choose?", 
        choices: [`rock`, `stick`, `skateboard`, `pack of cards`, `sword`]
    })
    return weapon
}
const chooseFood = async () => {
    let {food} = await inquirer.prompt({
        name:"food",
        type:"list",
         message:"What food do you want to take on the quest with you?",
         choices:[`apple`, `yogurt`,`pie`,`orange`]
    })
    return food
}
const directionOfTravel = async () => {
    let {direction} = await inquirer.prompt ({
        name:"direction",
        type:"list", 
        message:"Which direction do you want to travel?",
        choices:[`up the mountain`,`underground`]
    })
    return direction
}
const nameChange = async () => {
    let {decision} = await inquirer.prompt({
        name: "decision", 
        type:"list",
        message:"Would you like to change your name?",
        choices:[`yes`,`no`]
    })
    return decision
}
const restart = async () => {
    let {restartDecision} = await inquirer.prompt ({
        name:"restartDecision",
        type:"list",
        message:"Would you like to restart the game?",
        choices:[`restart`,`continue`]
    })
    return restartDecision
}
const finish = async () => {
    let {gameEnd} = await inquirer.prompt ({
        name:"gameEnd",
        type:"list",
        message:"Are you sure you want to end the game?",
        choices:[`yes`, `no`]

    })
    return gameEnd
}


    



module.exports = {
    name,
    chooseWeapon,
    chooseFood,
    directionOfTravel,
    nameChange, 
    restart,
    finish
   
}