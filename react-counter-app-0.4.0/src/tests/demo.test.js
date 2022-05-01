test('the string should be equals', () => { 
    const message = 'Hello World';
    const message2 = `Hello World`;

    expect(message).toBe(message2);
 })