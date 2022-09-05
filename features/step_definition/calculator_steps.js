const assert = require('assert');
const {Given, Then, When} =require ( '@cucumber/cucumber');
const {Calculator} = require('../../src/calculator');

Given('the numbers {int} and {int}', function (x, y) {
    this.cal = new Calculator(x, y);

});

When('they are added together', function () {
    // Write code here that turns the phrase above into concrete actions
    this.cal.add();
});


Then('should the result be {int}', function (expectedResult) {
    // Then('should the result be {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.cal.getResult(), expectedResult);
});

