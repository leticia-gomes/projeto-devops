const soma = require('./index');

test('soma 5 + 5 = 10', () => {
    expect(soma(5, 5)).toBe(10);
});
