import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const useApi = () => ({

    login: async (username: string, password: string) => {
        const response = await api.post('/login', {
            username: username,
            password: password
        }).catch((error) => {
            return error;
        });

        return response.data;
    },

    logout: async () => {
        return null;
    },

    signup: async (username: string, password: string) => {
        const response = await api.post('/sign-up', {
            username: username,
            password: password
        }).catch((error) => {
            return error.response;
        });

        return response;
    },

    getBalance: async (accountId: any) => {
        const token = localStorage.getItem('authToken');
        const reponse = await api.get('/get-balance', { 
            params : {accountId: accountId},
            headers: {Authorization: token}
        }).catch((error) => {
            return error.response;
        });

        return reponse;
    },

    getAllTransactions: async (accountId: any) => {
        const token = localStorage.getItem('authToken');
        const response = await api.get('/transactions/get-all-transactions', { 
            params : {accountId: accountId},
            headers: {Authorization: token}
        }).catch((error) => {
            return error.response;
        });

        return response;

    },

    filterCashInTransactions: async (accountId: any) => {
        const token = localStorage.getItem('authToken');
        const response = await api.get('/transactions/filter-cash-in-transactions', { 
            params : {accountId: accountId},
            headers: {Authorization: token}
        }).catch((error) => {
            return error.response;
        });

        return response;

    },

    filterCashOutTransactions: async (accountId: any) => {
        const token = localStorage.getItem('authToken');
        const response = await api.get('/transactions/filter-cash-out-transactions', { 
            params : {accountId: accountId},
            headers: {Authorization: token}
        }).catch((error) => {
            return error.response;
        });

        return response;

    },

    getUsernameList: async () => {
        const token = localStorage.getItem('authToken');
        const response = await api.get('/get-users', { 
            headers: {Authorization: token}
        }).catch((error) => {
            return error.response;
        });

        return response.data;
    },

    cashOut: async (debitedUsername: any, creditedUsername: string, value: number) => {
        const token = localStorage.getItem('authToken');
        const response = await api.post('/transactions/cash-out', { 
            debitedAccountUsername: debitedUsername,
            creditedAccountUsername: creditedUsername,
            value: value
        }, {headers: {Authorization: token}}).catch((error) => {
            return error.response;
        });

        return response;

    }

})