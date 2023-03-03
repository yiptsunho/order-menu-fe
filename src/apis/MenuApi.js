import axios from '../utils/axiosInstance';
import * as ApiConst from '../utils/ApiConst';

export async function getAllItems(setState) {
    let responseData = null;

    try {
        responseData = await axios.get(ApiConst.ITEM);
    } catch (ex) {
        console.error(ex);
    }

    if (responseData && responseData.status === 200) {
        setState(responseData.data)

    }

}

export async function getItem(params, setState) {
    let responseData = null;

    try {
        responseData = await axios.get(ApiConst.ITEM + "/" + params.id);
    } catch (ex) {
        console.error(ex);
    }

    if (responseData && responseData.status === 200) {
        setState(responseData.data)

    }

}

export async function createItem(params, navigate) {
    let responseData = null;

    try {
        responseData = await axios.post(ApiConst.ITEM, params);
    } catch (ex) {
        console.error(ex);
    }

    if (responseData && responseData.status === 200) {
        navigate("/landing/manageitem")
    }

}

export async function updateItem(params, navigate) {
    let responseData = null;

    try {
        responseData = await axios.put(ApiConst.ITEM, params);
    } catch (ex) {
        console.error(ex);
    }

    if (responseData && responseData.status === 200) {
        navigate("/landing/manageitem")
    }

}

export async function deleteItem(params, navigate) {
    let responseData = null;

    try {
        responseData = await axios.delete(ApiConst.ITEM + "/" + params.id);
    } catch (ex) {
        console.error(ex);
    }

    if (responseData && responseData.status === 200) {
        // navigate("/landing/manageitem")
        window.location.reload()
    }

}

export async function getAllMenus(setState) {
    let responseData = null;

    try {
        responseData = await axios.get(ApiConst.MENU);
    } catch (ex) {
        console.error(ex);
    }

    if (responseData && responseData.status === 200) {
        setState(responseData.data)

    }

}

// export async function getMenu(params, setState) {
//     let responseData = null;

//     try {
//         responseData = await axios.get(ApiConst.MENU, { params: params });
//     } catch (ex) {
//         console.error(ex);
//     }

//     if (responseData && responseData.status === 200) {
//         setState(responseData.data)

//     }

// }

export async function createMenu(params, setState) {
    let responseData = null;

    try {
        responseData = await axios.post(ApiConst.MENU, { params: params });
    } catch (ex) {
        console.error(ex);
    }

    if (responseData && responseData.status === 200) {
        setState(responseData.data)

    }

}

export async function updateMenu(params, setState) {
    let responseData = null;

    try {
        responseData = await axios.put(ApiConst.MENU, { params: params });
    } catch (ex) {
        console.error(ex);
    }

    if (responseData && responseData.status === 200) {
        setState(responseData.data)

    }

}

export async function deleteMenu(params, setState) {
    let responseData = null;

    try {
        responseData = await axios.delete(ApiConst.MENU, { params: params });
    } catch (ex) {
        console.error(ex);
    }

    if (responseData && responseData.status === 200) {
        setState(responseData.data)

    }

}