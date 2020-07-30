const testModule = require('./hw2');

test('getPath', () => { 
    const result = testModule('testSearch'); 
    expect(result).toBe(1);
});