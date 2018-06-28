const service = {
    uri: 'http://localhost:',
    port: 9000
};

export default class AccountsApi {

    static getAccounts() {
        return fetch(service.uri + service.port + '/accounts', {}).then(res => {
            if (res.status === 200) {
                return res.json();
            }
            throw Error('Invalid response: ' + res.status);
        });
    }

    static getAccount(id) {
        return fetch(service.uri + service.port + `/account/${id}`, {}).then(res => {
            if (res.status === 200) {
                return res.json();
            }
            throw Error('Invalid response: ' + res.status);
        });
    }

    // static createAccount(payload) {
    //     return fetch(`/account/`).then(res => {
    //         if (res.status === 200) {
    //             return res.json();
    //         }
    //         throw Error('Invalid response: ' + res.status);
    //     });
    // }
    //
    // static updateAccount(payload) {
    //     return fetch(`/account/`).then(res => {
    //         if (res.status === 200) {
    //             return res.json();
    //         }
    //         throw Error('Invalid response: ' + res.status);
    //     });
    // }
    //
    // static deleteAccount(id) {
    //     return fetch(`/account/${id}`).then(res => {
    //         if (res.status === 200) {
    //             return res.json();
    //         }
    //         throw Error('Invalid response: ' + res.status);
    //     });
    // }
}
