const assert = require('assert');
const {When, Then} = require('@cucumber/cucumber');
const Greeter  = require('../../src/greeter');


When('the greeter says hello', function () {
    // Write code here that turns the phrase above into concrete actions
});


Then('I should have heard {string}', function (expectedValue) {
    // Write code here that turns the phrase above into concrete actions
    const actualValue = new Greeter().sayHello()
    assert.equal(actualValue, expectedValue);
});
