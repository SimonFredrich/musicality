import navmenuobj from './navmenu.js';
import specificpost from './specificpost.js';

window.onload = () => {
    //all sidemenu items
    const overlay = document.getElementById("sidemenuoverlay");
    const menutray = document.getElementById("sidemenu");
    const navmenu = new navmenuobj(overlay,menutray);
    const sidemenuclose = document.getElementById("sidemenuclose");

    //sidemenu trigger
    const menubtn = document.getElementById("menubtn");
    
    //sidemenu setting-up
    menubtn.addEventListener("click", navmenu.unwrapSideMenu);
    sidemenuclose.addEventListener("click", navmenu.wrapSideMenu);
    overlay.addEventListener("click", navmenu.wrapSideMenu);

    //card fetching
    specificpost();
}
