const isMobile = document.documentElement.clientWidth < 768;
const isTablet = document.documentElement.clientWidth < 1140;

function throttleDecorator(fun, time) {
    let wait = false;
    
    return () => {
        if(wait) {
            return;
        }
        wait = true;
        fun(arguments);
        
        
        setTimeout(() => {
            wait = false;
        }, time);
        
    }
}

class Navbar {
    constructor(root) {
        this.root = root;
        this.classHidden = 'main-slider__navbar_hidden';
        this.timeout = null;

        this.bindListeners();
    }

    show() {
        this.root.classList.remove(this.classHidden);
    }

    hide() {
        this.root.classList.add(this.classHidden);
    }

    update() {
        console.log('update');

        this.show();

        if(this.timeout !== null) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(this.hide.bind(this), 1500);
    }

    bindListeners() {
        document.addEventListener('mousemove', throttleDecorator(this.update.bind(this), 100))
    }
}

function initNavbar() {
    const navbarNode = document.querySelector('.main-slider__navbar');
    let navbar = new Navbar(navbarNode);
}

document.addEventListener('DOMContentLoaded', (event) => {
    initNavbar()
});