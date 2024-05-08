const stack = require('../src/stack');

test('custom test: push and pop operations', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2); //ändrat till korrekt förväntat värde
    expect(stack.pop()).toBe(1); //ändrat till korrekt förväntat värde
});

test('custom test: peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('custom test: peek on stack with elements returns top element', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30);
});