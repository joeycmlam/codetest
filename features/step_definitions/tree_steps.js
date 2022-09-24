const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');

Given("provide  {str}", function (arg1) {
    callback.pending();
});

When(/^run the program$/, function (callback) {
    // do nothing
});

Then("the result is {boolan}", function (expectedResult) {
    actualResult = false;
    assert.equal(actualResult, expectedResult);
});
