import API from './api';

export const signUp = async (email, password) => {
    try {
        const response = await API.post(`/account/new`, { email, password });
        return { status: 'success', message: response.data.message };
    } catch (error) {
        if (error.response.data) {
            return { status: 'error', message: error.response.data.message };
        } else {
            console.log(error);
        }
    }
};

export const confirmEmail = async (token) => {
    try {
        const response = await API.get(`/account/verify/${token}`);
        return { status: 'success', message: response.data.message };
    } catch (error) {
        if (error.response.data) {
            return { status: 'error', message: error.response.data.message };
        } else {
            console.log(error);
        }
    }
};

export const apiLogin = async (email, password) => {
    try {
        const response = await API.post(`/auth/login`, { email, password });
        if (response.data.access_token) {
            localStorage.setItem('sessKey', response.data.access_token);
            return { status: 'success', message: '' };
        } else {
            throw new Error('Unknown error.');
        }
    } catch (error) {
        if (error.response.data) {
            return { status: 'error', message: error.response.data.statusCode === 401 ? 'Your email or password is incorrect.' : error.response.data.message };
        } else {
            console.log(error);
        }
    }
};

export const apiIsLoggedIn = async () => {
    try {
        const sessKey = localStorage.getItem('sessKey');
        if (sessKey) {
            const response = await API.post(`/account/check-session`, {}, {
                headers: { 'Authorization': `Bearer ${sessKey}` }
            });
            if (response.status === 200) {
                return response.data;
            }
        }
        throw new Error();
    } catch (error) {
        return {};
    }
};
