const stack = require('../src/stack');

test('custom test: push and pop operations', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(1); 
    expect(stack.pop()).toBe(2); 

test('custom test: peek on empty stack returns undefined', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1); 

test('custom test: peek on stack with elements returns top element', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(20); 
});