import Cookies from "js-cookie";
import { notification } from 'antd'
import moment from 'moment';

export const checkRes = (param) => {
    if (param === 200 || param === 201 || param === 212) {
        return true;
    } else if (param === 401) {
        Cookies.remove("ProjectToken");
        window.location = process.env.REACT_APP_LOGIN_PAGE;
    } else if (param === 403) {
        Cookies.remove("ProjectToken");
        window.location = process.env.REACT_APP_LOGIN_PAGE;
    } else {
        return false;
    }
};

export const alertPop = (type, data, title = null) => {
    notification[type]({
        placement: 'bottomRight',
        message: title || `${type[0].toUpperCase()}${type.slice(1)}`,
        description:
            data
    })
}

export const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export const dateFormat = (date) => {
    if (date) {
        return moment(date).format('YYYY/MM/DD - h:mm a');
    } else return null
}

export const checkUserPermission = (allow, permissions) => {
    if (allow && permissions?.length) {
        let array = permissions.map(per => per.name);
        return array.includes(allow);
    } else return false
}

export const buildSearchQuery = (object = {}) => {
    let query = "";

    for (const [key, value] of Object.entries(object)) {
        if (value) query = query + `&${key}=${value}`;
    }

    return query;
}

export const logout = () => {
    Cookies.remove("ProjectToken");
    window.location = process.env.REACT_APP_LOGIN_PAGE;
}

export const queryBuilder = (data) => {
    if (data) {
        let query = "";

        for (const property in data) {
            if (data[property]) {
                query = query + `&${property}=${data[property]}`
            }
        }

        return query;
    }
}

export const canAccess = (permissions, context) => {
    if (permissions?.length) {
        return permissions.includes(context);
    }
}

export const priceNumber = (val) => {
    let result = val;

    if (val) {
        let numStr = val.toString();

        if (numStr.includes('.')) {
            let arr = numStr.split('.'),
                first = arr[0],
                sec = arr[1];
            if (first?.length >= 11) {
                result = first.slice(0, 11) + "." + sec.slice(0, 3);
            } else {
                result = first + "." + sec.slice(0, 3);
            }
        } else if (!numStr.includes('.') && numStr.length >= 11) {
            result = numStr.slice(0, 11);
        }
    }

    return result;
}

export const unitNumber = (val) => {
    let result = val;

    if (val) {
        result = parseInt(val)
    }

    return result;
}

export const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export const getCurrentYear = () => {
    return moment().year();
}
