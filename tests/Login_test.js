const { LoginPageActions } = require("../actions");
const { I, MainLocators, UserData } = inject();

Feature('Login page tests');

let loginPageActions

Before(async () => {
    loginPageActions = new LoginPageActions(I)
    I.amOnPageAndAssertURL('/', MainLocators.constants.url)
})

Scenario('Validate login functionality', async () => {
    I.seeInTitle(MainLocators.constants.titleText);
    I.waitForText(MainLocators.constants.runNodeText);
    I.waitForElement(MainLocators.locators.getStartedButton, 1);
    I.waitForElement(MainLocators.locators.loginButton, 1);
    await loginPageActions.login(UserData)
    const userEmail = await I.grabTextFrom(MainLocators.locators.userAvatarEmail);
    I.assertEqual(userEmail, UserData.userData.username);
});
