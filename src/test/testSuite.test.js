/* eslint-disable no-undef */
const sum = require('./sum');

/* JEST JS TEST SUITE

    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    });

    toBeNull matches only null
    toBeUndefined matches only undefined
    toBeDefined is the opposite of toBeUndefined
    toBeTruthy matches anything that an if statement treats as true
    toBeFalsy matches anything that an if statement treats as false

    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });

    test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
    });
*/

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(1,2)).toEqual(3)
});
