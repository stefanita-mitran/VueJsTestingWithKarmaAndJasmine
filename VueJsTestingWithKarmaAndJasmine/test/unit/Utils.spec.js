import sumOfTwoNumbers from '../../src/Utils.js'

describe('Utils should', function(){
    it('sum of 1 and 2 should return 3', function(){
        var numbers = [1, 2];

        // Act
        var actualResult = sumOfTwoNumbers(...numbers);

        // Assert
        expect(actualResult).toEqual(3);
    });
});