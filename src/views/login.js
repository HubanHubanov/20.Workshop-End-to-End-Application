import { html } from "@lit-html/lit-html.js";
import { goTo } from "@src/app.js";
import { login } from "@src/data/user.js";
import { createSubmitHandler } from "@src/util.js";

const loginTemp = (handler) => html` <article>
<h2>Login</h2>
<form @submit=${handler}>
    <label>E-mail: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <input type="submit" value="Login">
</form>
</article>
`;


/**
 * 
 * @param {import("@src/types").PageContext} ctx 
 */


export function showLogin(ctx) {
   ctx.render(loginTemp(createSubmitHandler(onLogin)));
}   

/**
 * @param {Object} data - data from form field.
 * @param {Object} form - Nnode element.
 */

async function onLogin(data, form) {
    const {email, password} = data;

    if(!email || !password) {
        return alert("Login Error");
    }

    login(email, password);
    form.reset();
    pageContext.updateUserNav()
    goTo("/")
}