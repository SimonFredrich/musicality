import navmenuobj from './navmenu.js';

window.onload = () => {
    const navmenu = new navmenuobj(document.getElementById("sidemenuoverlay"),document.getElementById("sidemenu"));
    const menubtn = document.getElementById("menubtn");
    const sidemenuclose = document.getElementById("sidemenuclose");
    menubtn.addEventListener("click", navmenu.unwrapSideMenu);
    sidemenuclose.addEventListener("click", navmenu.wrapSideMenu);
}
