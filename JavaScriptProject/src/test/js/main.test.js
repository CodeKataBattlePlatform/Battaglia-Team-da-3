const { logHelloWorld, sum} = require('../../main/js/main');
test('should log "Hello, World in JS!"', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    logHelloWorld();
    expect(consoleLogSpy).toHaveBeenCalledWith('Hello, World in JS!');
    consoleLogSpy.mockRestore();
});

test('should calculate the sum of two numbers', () => {
    const risultato = sum(2, 3);
    expect(risultato).toBe(5);

    const risultatoFloat = sum(2.5, 3.14);
    expect(risultatoFloat).toBeCloseTo(5.64);
});