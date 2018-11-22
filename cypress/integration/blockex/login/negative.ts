import login from "../../../components/login"

describe('can\'t login to the markets', function () {
    it('should require username', function () {

        cy.visit(Cypress.env('host'));
        login.clickSignInButton();
        login.typePassword(Cypress.env('password'));
        login.clickLoginButton();

        login.errorMessage().should('contain', 'Invalid credentials have been entered.');
    })

    it('should require password', function () {

        cy.visit(Cypress.env('host'));
        login.clickSignInButton();
        login.typeUsername(Cypress.env('username'));
        login.clickLoginButton();

        login.errorMessage().should('contain', 'Invalid credentials have been entered.');
    })
})