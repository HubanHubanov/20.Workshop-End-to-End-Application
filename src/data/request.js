import { clearUserData, getUserData } from "../util.js";

const host = "https://parseapi.back4app.com";
const appId = "wQBu4Oaa3tbbNVkhEGYGpIUzQmeJ3aV1cB0CucJi";
const apiKey = "HVblURgFSfZ0mTaOuNMUFy3CC5lZXLbu2nQifCwi";

async function request(method, url, data) {
  // /**@type {{method: string, headers: {}, body: any}} */
      const options = {
        method,
        headers : {
          "X-Parse-Application-Id": appId,
          "X-Parse-JavaScript-Key": apiKey
        }
      };

      if(data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data); 
      }

      const userData = getUserData();

      if(userData) {
        options.headers["X-Parse-Session-Token"] = userData.sessionToken
      }

      try {
          const response = await fetch(host + url, options);

          if(!response.ok) {
              //  if(response.status == 403) {
              //     clearUserData();
              //  }

            const err = await response.json();
            throw new Error(err.message)
          }

          if(response.status == 204) {
            return response
          } else {
            return response.json()
          }


        
      } catch (err) {
        //TODO Add custom error handling and visualization based on exam requirements
        alert(err.message);
        throw err
      }

}

/**@type {(url: string) => Promise<any>} */
export const get = (url) => request("get", url);
/**@type {(url: string, data: any) => Promise<any>} */
export const post = (url, data) => request("post", url, data);
/**@type {(url: string, data : any) => Promise<any>} */
export const put = (url, data) => request("put", url, data);
/**@type {(url: string) => Promise<any>} */
export const del = (url) => request("delete", url);


/**
 * @typedef {Object} Pointer
 * @property {string} __type
 * @property {string} className
 * @property {string} objectId
 */
