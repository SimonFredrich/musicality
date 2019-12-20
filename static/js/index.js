import navmenuobj from './navmenu.js';

window.onload = () => {
    const overlay = document.getElementById("sidemenuoverlay");
    const menutray = document.getElementById("sidemenu");
    const navmenu = new navmenuobj(overlay,menutray);
    const menubtn = document.getElementById("menubtn");
    const sidemenuclose = document.getElementById("sidemenuclose");
    menubtn.addEventListener("click", navmenu.unwrapSideMenu);
    sidemenuclose.addEventListener("click", navmenu.wrapSideMenu);
    overlay.addEventListener("click", navmenu.wrapSideMenu);
}
