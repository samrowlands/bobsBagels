const assertEquals = require('./test-framework');
const Basket = require('../src/basket');

const emptyBasketTest = () => {
    //Arrange
    expectedOutput = 0;

    //Act
    let basket = new Basket();
    actualOutput = basket.items.length;


    //Assert
    let result = assertEquals(actualOutput, expectedOutput)
    console.log(`testing that basket is empty: ${result}`)

}

const addItemTest = () => {
    //Arrange
    input = 'bagel';
    expectedOutput = true;

    //Act
    let basket = new Basket();
    basket.add('bagel')
    actualOutput = basket.items.includes(input);

    //Assert
    let result = assertEquals(actualOutput, expectedOutput)
    console.log(`testing that basket has bagel: ${result}`)
}

const removeItemTest = () => {
    //Arrange
    input = 'bagel'
    expectedOutput = false;

    //Act

    let basket = new Basket()
    basket.add('bagel')
    basket.remove('bagel')
    actualOutput = basket.items.includes(input);

    //Assert
    let result = assertEquals(actualOutput, expectedOutput)
    console.log(`testing that item is removed: ${result}`)

}

const testIfBasketIsFull = () => {
    //Arrange
    expectedOutput = 'Error: Basket is full';
    input = 'bagel';

    //Act
    let basket = new Basket(0)
    
   actualOutput = basket.add('bagel')

    //Assert
    let result = assertEquals(actualOutput, expectedOutput)
    console.log(`testing that basket is full: ${result}`)

}

basketTests = { emptyBasketTest, addItemTest, removeItemTest, testIfBasketIsFull }


module.exports = basketTests

