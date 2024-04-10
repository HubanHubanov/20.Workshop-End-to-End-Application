import { html } from "@lit-html/lit-html.js";
import { goTo } from "@src/app.js";
import { register } from "@src/data/user.js";
import { createSubmitHandler } from "@src/util.js";

const registerTemp = (handler) => html` <section id="register">
<article>
    <h2>Register</h2>
    <form @submit=${handler}>
        <label>E-mail: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <label>Repeat: <input type="password" name="rePass"></label>
        <input type="submit" value="Register">
    </form>
</article>
</section>
`;



/**
 * 
 * @param {import("@src/types").PageContext} ctx 
 */

export function showRegister(ctx) {
    ctx.render(registerTemp(createSubmitHandler(onRegister)))
}

/**
 * 
 * @param {import("@src/types").UserData} data 
 * @param {Object} form 
 * @returns 
 */

async function onRegister(data, form) {
  const {email, password, rePass} = data;
  if(!email || !password || password !== rePass) {
    return alert("Register error")
  } 

  await register(email, password);
  form.reset();
  goTo("/")
}