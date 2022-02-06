module.exports = {
    locators: {
        getStartedButton: '[class*="LandingPage_pageHeader"] [href="/onboarding"]',
        loginButton: '[href="/login"]',
        emailField: '[type=text]',
        passwordField: '[type=password]',
        loginSubmitButton: '[type="submit"]',
        userAvatarEmail: '[class*="TopBar_userEmail"]'
    },
    constants: {
        url: 'mystnodes',
        titleText: 'Mysterium Network',
        runNodeText: 'Run A Mysterium Node & Earn While You Sleep',
        signIntoPersonalDashboard: 'Sign into your personal dashboard to check up on your node & earnings.'
    }
};
