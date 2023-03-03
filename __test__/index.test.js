
let { name, chooseFood, directionOfTravel,restart,chooseWeapon,nameChange,finish} = require (`../functions/inq`)
const inquirer = require (`inquirer`)
jest.mock(`inquirer`)
describe("testing name function", () => {
    test("testing user input using the name `bob`", async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({userName : `bob`})

        await expect(name()).resolves.toEqual(`bob`)
    })

})
describe("testing food function", () => {
    test("testing user input using the food `pie`", async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({food: `pie`})
        await expect(chooseFood()).resolves.toEqual(`pie`)
    })
})

test("testing user input using the food `applw`", async () => {
    expect.assertions(1)
    inquirer.prompt = jest.fn().mockResolvedValue({food: `apple`})
    await expect(chooseFood()).resolves.toEqual(`apple`)
})
test("testing user input using the food `yogurt`", async () => {
    expect.assertions(1)
    inquirer.prompt = jest.fn().mockResolvedValue({food: `yogurt`})
    await expect(chooseFood()).resolves.toEqual(`yogurt`)
})
test("testing user input using the food `orange`", async () => {
    expect.assertions(1)
    inquirer.prompt = jest.fn().mockResolvedValue({food: `orange`})
    await expect(chooseFood()).resolves.toEqual(`orange`)
})



describe ("testing travel function", () => {
    test("testing input using the travel direction of `up the mountain`", async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({direction: `up the mountain`})
        await expect(directionOfTravel()).resolves.toEqual(`up the mountain`)
    })
    test("testing input using the travel direction of `underground`", async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({direction: `underground`})
        await expect(directionOfTravel()).resolves.toEqual(`underground`)
    })
})
describe("testing the restart function", () => {
    test("testing input with the restart option as `restart`", async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({restartDecision: `restart`})
        await expect (restart()).resolves.toEqual(`restart`)
    })
    test("testing input with the restart option as `continue`", async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({restartDecision: `continue`})
        await expect (restart()).resolves.toEqual(`continue`)
    })
})

describe("testing the weapons function", () => {
    test("testing input with the weapons option as `sword`", async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({weapon: `sword`})
        await expect (chooseWeapon()).resolves.toEqual(`sword`)
    })
    test("testing input with the weapons option as `rock`", async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({weapon: `rock`})
        await expect (chooseWeapon()).resolves.toEqual(`rock`)
    })
    test("testing input with the weapons option as `stick`", async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({weapon: `stick`})
        await expect (chooseWeapon()).resolves.toEqual(`stick`)
    })
    test("testing input with the weapons option as `skateboard`", async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({weapon: `skateboard`})
        await expect (chooseWeapon()).resolves.toEqual(`skateboard`)
    })
    test("testing input with the weapons option as `pack of cards`", async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({weapon: `pack of cards`})
        await expect (chooseWeapon()).resolves.toEqual(`pack of cards`)
    })
})
describe("testing the change name function", () => {
    test("testing input with the name change option as `yes`", async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({decision: `yes`})
        await expect (nameChange()).resolves.toEqual(`yes`)
    })
    test("testing input with the name change option as `no`", async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({decision: `no`})
        await expect (nameChange()).resolves.toEqual(`no`)
    })
})
describe("testing the finish function", () => {
    test("testing input with the finish option as `yes`", async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({gameEnd: `yes`})
        await expect (finish()).resolves.toEqual(`yes`)
    })
    test("testing input with the finish option as `no`", async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({gameEnd: `no`})
        await expect (finish()).resolves.toEqual(`no`)
    })
})