import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./request.js";

//TODO Adapt user profile to exam requirements(identity, extra properties, etc.)

const endpoints = {
    login: "/login",
    register: "/users", 
    logout: "/logout",
}

/**
 * 
 * @param {string} username 
 * @param {string} password 
 */

export async function login(username, password) {
     const result = await post(endpoints.login, {username, password});
     setUserData(result);
}

/**
 * 
 * @param {string} username 
 * @param {string} password 
 */

export async function register(username, password) {
    const result = await post(endpoints.register, {username, password});
     setUserData(result);
}

export async function logout() {
   const promise = post(endpoints.logout);
   
   await promise  
   clearUserData();
}