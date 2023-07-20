import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <img className={classes.logo_img} src='assets/logo.svg'></img>
            <nav className={classes.header_nav}>
                <a href="" className={classes.header_nav_link}>Home</a>
                <a href="" className={classes.header_nav_link}>About</a>
                <a href="" className={classes.header_nav_link}>Team</a>
                <a href="" className={classes.header_nav_link}>Shop</a>
                <a href="" className={classes.header_nav_link}>Pages</a>
                <a href="" className={classes.header_nav_link}></a>
            </nav>
            <div className={classes.header_contact_container}>
                <button className={classes.header_basket_container}>
                    <img className={classes.header_basket_img} src='assets/basket.svg'></img>
                    <div className={classes.header_basket_counter}>0</div>
                </button>
                <button className={classes.header_contact_btn}>Contact Us</button>
            </div>
        </header>
    );
}

export default Header;
