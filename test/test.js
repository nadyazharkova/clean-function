import { checkLifes } from '../src/lifesCheck';

test ('checkLifes more than 50', () => {
    const character = {
            name: 'Marta',
            health: 90
        }

    let result = checkLifes(character)

    expect(result).toBe("healthy")
})

test ('checkLifes more than 50', () => {
    const character = {
            name: 'Holly',
            health: 50
        }

    let result = checkLifes(character)

    expect(result).toBe("wounded")
})

test ('checkLifes more than 50', () => {
    const character = {
            name: 'Nasty',
            health: 14
        }

    let result = checkLifes(character)

    expect(result).toBe("critical")
})