var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^provide  "([^"]*)"$/, function (arg1, callback) {
        callback.pending();
    });
    When(/^run the program$/, function (callback) {
        callback.pending();
    });
    Then(/^out is "([^"]*)"$/, function (arg1, callback) {
        callback.pending();
    });
});
