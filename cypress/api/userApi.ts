export class UserApi {

    BASE_URL='https://api-tst.blockex.com/';

    public async getLangauages(): Promise<Cypress.Response> {
        const options = {
            method: 'GET',
            uri: this.BASE_URL + 'api/lookups/languages?ApiID=7c11fb8e-f744-47ee-aec2-9da5eb83ad84'
        };

        return cy.request(options.uri)
    }
}

export default UserApi;