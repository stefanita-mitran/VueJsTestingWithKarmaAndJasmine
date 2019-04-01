function sumOfThreeNumbers(firstNumber, secondNumber, thirdNumber) {
	return firstNumber + secondNumber + thirdNumber;
}

describe('Sum should', function(){
	it('return 6 given 1, 2, 3 as inputs', function(){
		// Arrange
		var numbers = [1, 2, 3];

		// Act
		var actualResult = sumOfThreeNumbers(...numbers);

		// Assert
		expect(actualResult).toEqual(6);
	});
});