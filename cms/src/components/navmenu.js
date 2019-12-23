//this file needs sidemenu.css to work
export default class navmenu {
    constructor(Overlay,Menu){
        this.Overlay=Overlay;
        this.Menu=Menu;
        this.unwrapSideMenu = () => {
            this.Overlay.style.animationName = "sideMenOverAnimation";
            this.Overlay.style.animationDuration = "0.3s"
            this.Overlay.style.width= "100%";
            this.Menu.style.animationName = "sideMenAnimation";
            this.Menu.style.animationDuration = "0.2s"
            this.Menu.style.width= "200px";
        }
        this.wrapSideMenu = () => {     
            this.Overlay.style.animationName = "sideMenOverAnimationWrap";
            this.Overlay.style.animationDuration = "0.2s"
            this.Overlay.style.width= "0%";
            this.Menu.style.animationName = "sideMenAnimationWrap";
            this.Menu.style.animationDuration = "0.2s"
            this.Menu.style.width= "0%";
        }
    }  
}

