import Validator from '../app';
const validator = new Validator();

test('validate true', () => {
    const result = validator.validateUsername('cbfg_545df');

    expect(result).toBe(true);
})

test('validate false', () => {
    const result = validator.validateUsername('cbfg_5495df');

    expect(result).toBe(false);
})