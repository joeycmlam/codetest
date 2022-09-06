const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');
const challenge = require('../../src/solution');

Given('provide an array {string} and {int}', function (num_list, target) {
    // Given('provide an array {string} and {float}', function (string, float) {
    // Write code here that turns the phrase above into concrete actions
    this.sln = new challenge();
    this.nums = num_list.split(',').map(Number);
    this.target = target;
});


When('do the algo', function () {
    // Write code here that turns the phrase above into concrete actions

});

Then('get {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    const actualResult = this.sln.twoSum(this.nums, this.target);
    const expectedResult = string.split(',').map(Number);
    assert.deepEqual(actualResult, expectedResult);
});

