import * as request from "request-promise"
export class UserApi {

    public async getLangauages(): Promise<void> {
        const options = {
            method: 'GET',
            uri: 'https://httpbin.org/get'
        };
        return request(options).then((Response) => {
            console.log(Response)
        });


    }
}

export default UserApi;