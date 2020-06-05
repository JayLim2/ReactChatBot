/**
 * Checks credentials on server.
 * @param login
 * @param password
 * @return true - credentials are valid, false - else
 */
import {MESSAGES_API_LINK, USERS_API_LINK} from "../../configuration/ServerProperties";
import {MessageProps} from "../chats/messages/MessageProps";
import {NO_CONNECTION} from "../../configuration/Constants";

export const tryLogin = (login: string, password: string) => {
    //Put data into form
    const formData = new FormData();
    formData.append('login', login);
    formData.append('password', password);

    //Try to validate credentials
    let url = `${USERS_API_LINK}/validate/credentials`;

    return fetch(
        url,
        {
            method: 'POST',
            body: formData
        }
    ).then(response => {
        return response.json();
    }).then(isAuthenticated => {
        return isAuthenticated;
    }).catch(e => {
        return NO_CONNECTION;
    });
}

export const getAllMessages = () => {
    let url = `${MESSAGES_API_LINK}/get/all`;

    return fetch(
        url,
        {
            method: 'GET'
        }
    ).then(response => {
        return response.json();
    }).then(messagesJson => {
        return messagesJson;
    });
}

export const saveMessage = (message: MessageProps) => {
    let url = `${MESSAGES_API_LINK}/save`;

    return fetch(
        url,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        }
    ).then(response => {
        if(response.status !== 200) {
            throw new Error("HTTP ERROR: " + response.status);
        }
        return response.json();
    }).then(serverMessage => {
        return serverMessage;
    }).catch(e => {
        return "CLIENT_FAIL";
    });
}

export const saveAllMessages = (messages: MessageProps[]) => {
    let url = `${MESSAGES_API_LINK}/save/all`;

    return fetch(
        url,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messages)
        }
    ).then(response => {
        if(response.status !== 200) {
            throw new Error("HTTP ERROR: " + response.status);
        }
        return response.json();
    }).then(serverMessage => {
        return serverMessage;
    }).catch(e => {
        return "CLIENT_FAIL";
    });
}
