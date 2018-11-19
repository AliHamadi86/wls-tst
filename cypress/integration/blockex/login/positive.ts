import login from "../../../components/login"
import UserApi from "../../../api/userApi";


describe('login to the markets', () => {
    it('should be ok', async () => {
        const testapi = new UserApi();
        await testapi.getLangauages();
        //cy.visit(Cypress.env('host'));
        // login.clickSignInButton();
        // login.typeUsername('ali.hamadi');
        // login.typePassword('Blockex2016!');
        // login.clickLoginButton();
    })
});