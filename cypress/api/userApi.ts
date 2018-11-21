export class UserApi {
    static BASE_ULR='https://api-tst.blockex.com/';

    public static async getLangauages(): Promise<Response> {
        const options = {
            method: 'GET',
            uri: this.BASE_ULR + 'api/lookups/languages?ApiID=7c11fb8e-f744-47ee-aec2-9da5eb83ad84'
        };
        return cy.request(options.uri)
        
    }
}

export default UserApi;