const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');
const calculator = require('../../src/calculator');


Given('the number {int} and {int}', function (x, y) {
    // Write code here that turns the phrase above into concrete actions
    this.cal = new calculator(x, y);
});



When('they are added together', function () {
    // Write code here that turns the phrase above into concrete actions
    this.cal.addNumber();
});


Then('the result should be {int}', function (expectedResult) {
    // Then('should the result be {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    const actualResult = this.cal.getResult();
    assert.equal(actualResult, expectedResult);
});


