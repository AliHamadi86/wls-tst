export class Login {

    public static signInButtonSelector: string = ':nth-child(12) > .button';
    public static usernameTxtSelector: string = '#username';
    public static passwordTxtSelector: string = '#password';
    public static loginButtonSelector: string = '.login-btn';
    public static errorMessageSelector: string = '.error-msg';

    public static clickSignInButton() {
        return cy.get(Login.signInButtonSelector).click();
    }

    public static typeUsername(username: string) {
        return cy.get(Login.usernameTxtSelector).type(username);
    }

    public static typePassword(password: string) {
        return cy.get(Login.passwordTxtSelector).type(password);
    }

    public static clickLoginButton() {
        return cy.get(Login.loginButtonSelector).click();
    }

    public static errorMessage() {
        return cy.get(Login.errorMessageSelector).invoke('text');
    }

}

export default Login;