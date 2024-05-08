//importera stack-modulen som ska testas
const stack = require('../src/stack'); 

//test för push och pop
test('custom test: push and pop operations', () => {

    //lägger till två element i stacken
    stack.push(1);
    stack.push(2);

    //Kontrollera att det översta elementet i stacken är 2 efter att ha tagit bort ett element 
    expect(stack.pop()).toBe(2); //ändrat till korrekt förväntat värde
    
    //Kontrollera att det översta elementet i stacken är 1 efter att ha tagit bort nästa element 
    expect(stack.pop()).toBe(1); //ändrat till korrekt förväntat värde
});

//test för peek på en tom stack
test('custom test: peek on empty stack returns undefined', () => {
    //kontrollera att peek returnerar undefined när stacken är tom
    expect(stack.peek()).toBeUndefined();
});

//test för peek p åen stack med element
test('custom test: peek on stack with elements returns top element', () => {

    //lägg till några element i stacken
    stack.push(10);
    stack.push(20);
    stack.push(30);

    //Kontrollera att peek returnerar det översta elementet, som bör vara 30.
    expect(stack.peek()).toBe(30);
});