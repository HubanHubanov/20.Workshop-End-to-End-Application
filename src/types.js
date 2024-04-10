import page from "page";

/**
 * @typedef {Object} PageContext
 * @property {UserSession} user
 * @property {typeof page} page
 * @property {(templateResult) => void} render
 * @property {any=} data
 */ 

/**
 * @typedef {Object} UserSession
 * @property  {string}  objectId
 * @property {string} username
 * @property {string} sessionToken 
 */

/**
 * @typedef {Object} UserData
 * @property {string} email
 * @property {string} password
 * @property {string=} rePass
 */

/**
 * @typedef {Object} PointerData
 * @property {string} type
 * @property {string} colection
 * @property {string} ownerId
 */

