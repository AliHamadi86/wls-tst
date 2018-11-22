import login from "../../../components/login"
import UserApi from "../../../api/userApi";


describe('login to the markets', function () {
    it('should be ok', function () {

        // const testapi = new UserApi();
        // await testapi.getLangauages().then(function (xhr) {
        //     const response = xhr.body
        //     expect(response[0]).to.have.property('id')

        //     const obj1Values = Cypress._.values(response[0])
        //     expect(obj1Values).to.deep.eq([1, "English", "English", 1033])
        // })
        
        cy.visit(Cypress.env('host'));
        login.clickSignInButton();
        login.typeUsername(Cypress.env('username'))
        login.typePassword(Cypress.env('password'));
        login.clickLoginButton();
    })
})
