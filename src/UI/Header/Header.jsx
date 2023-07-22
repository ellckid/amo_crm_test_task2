import classes from './Header.module.css';

function Header() {

    function openMenu() {
        document.getElementById("menu_cross")?.classList.toggle(classes.header_menu_button_cross)
        document.getElementById("menu_svg")?.classList.toggle(classes.cross_margin)
        document.getElementById("menu")?.classList.toggle(classes.close_menu)
        document.getElementById("header")?.classList.toggle(classes.header_open)
        document.getElementById("header_nav")?.classList.toggle(classes.header_nav_open)
        document.getElementById("header_nav")?.classList.toggle(classes.header_nav)
        document.getElementById("contact_container")?.classList.toggle(classes.header_contact_container_open)
    }
    return (
        <header id='header' className={classes.header}>
            <svg className={classes.logo_img} >
                <image className={classes.logo_img} xlinkHref='/assets/logo.svg'></image>
            </svg>
            <nav id='header_nav' className={classes.header_nav}>
                <a href="" className={classes.header_nav_link}>Home</a>
                <a href="" className={classes.header_nav_link}>About</a>
                <a href="" className={classes.header_nav_link}>Team</a>
                <a href="" className={classes.header_nav_link}>Shop</a>
                <a href="" className={classes.header_nav_link}>Pages</a>
                <a href="" className={classes.header_nav_link}></a>

            </nav>
            <div id='contact_container' className={classes.header_contact_container}>
                <button className={classes.header_basket_container}>
                    <img className={classes.header_basket_img} src='assets/basket.svg'></img>
                    <div className={classes.header_basket_counter}>0</div>
                </button>
                <button className={classes.header_contact_btn}>Contact Us</button>
            </div>
            <button className={classes.header_menu_button} onClick={() => {
                openMenu()
            }}>
                <svg id='menu_svg' className={classes.header_menu_svg}>
                    <use id="menu_cross" className={classes.header_menu_button_cross} xlinkHref='/assets/header_menu_sprite.svg#cross'> </use>
                    <use id="menu" className={classes.header_menu_button_menu} xlinkHref='/assets/header_menu_sprite.svg#menu'> </use>
                </svg>
            </button>

        </header >
    );
}

export default Header;
