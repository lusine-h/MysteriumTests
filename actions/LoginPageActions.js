const { MainLocators } = inject();

module.exports = class LoginPageActions{

    constructor(actor) {
        this.actor = actor
        return this
    }

    login(userCreds) {
        this.actor.click(MainLocators.locators.loginButton);
        this.actor.waitForText(MainLocators.constants.signIntoPersonalDashboard);
        this.actor.fillField(MainLocators.locators.emailField, userCreds.userData.username);
        this.actor.fillField(MainLocators.locators.passwordField, secret(userCreds.userData.password));
        this.actor.click(MainLocators.locators.loginSubmitButton);
    }
}

