export default class AccountsApi {

    static getAccounts() {
        return fetch('http://localhost:8000/accounts', {}).then(res => {
            if (res.status === 200) {
                return res.json();
            }
            throw Error('Invalid response: ' + res.status);
        });
    }

    static getAccount(id) {
        return fetch(`/account/${id}`, {}).then(res => {
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
