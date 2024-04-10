import { goTo } from "@src/app.js";
import { logout } from "@src/data/user.js";
import { getUserData } from "@src/util.js"

export function session() {
    document.getElementById("logoutBtn").addEventListener("click", onLogout)
    return function(ctx, next) {
        ctx.user = getUserData();

        next();
    }
}

function onLogout() {
    logout();
    goTo("/")
}