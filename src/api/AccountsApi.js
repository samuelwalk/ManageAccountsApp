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

    static forgetAccount(id) {
        return fetch(service.uri + service.port + `/forget/${id}`, {}).then(res => {
            if (res.status === 200) {
                return res.json();
            }
            throw Error('Invalid response: ' + res.status);
        });
    }
}
