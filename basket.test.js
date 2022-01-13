const assertEquals = require('./test-framework');
const basket = require('../src/basket');

const emptyBasketTest = () => {
    //Arrange
    expectedOutput = [1];

    //Act
    actualOutput = basket.length;

    //Assert
    let result = assertEquals(actualOutput, expectedOutput)
    console.log(result)

}

basketTests = { emptyBasketTest }


module.exports = basketTests;

