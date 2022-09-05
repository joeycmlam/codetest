const assert = require('assert');
const {Then, When} = require('@cucumber/cucumber');
const {Greeter} = require('../../src/greeter.js');


When('the greeter say hello', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    this.whatIheard = new Greeter().sayHello()
});


Then('I should have heard {string}', function (expectedResult) {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    assert.equal(this.whatIheard, expectedResult);
});

