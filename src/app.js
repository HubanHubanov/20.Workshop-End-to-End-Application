import  page  from '@page/page.mjs';

import { session } from '@src/middlewares/session.js';
import { renderer } from '@src/middlewares/render.js';
import { loading } from '@src/middlewares/loading.js';
import { preload } from '@src/middlewares/preload.js';

import { showCatalog } from '@src/views/catalog.js';
import { showRegister } from '@src/views/register.js';
import { showLogin } from '@src/views/login.js';
import { updateUserNav } from '@src/util.js';
import { showCreate } from '@src/views/create.js';
import { showDetails } from '@src/views/details.js';
import { showEdit } from '@src/views/edit.js';

page(session());
page(renderer(document.querySelector("main")));
page('/', loading(), preload('recipes'), showCatalog);
page("/register", showRegister);
page("/login", showLogin);
page("/create", showCreate);
page("/details/:id", loading(), preload("recipes"), showDetails);
page("/edit/:id", loading(), preload("recipes"), showEdit);


page.start();
updateUserNav()

export function goTo(path) {
     page.redirect(path);
}




