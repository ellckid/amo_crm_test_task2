import classes from './Footer.module.css';

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer_container}>
                <div className={classes.footer_info_container}>
                    <img className={classes.info_logo} alt='logo' src='/assets/logo.svg'></img>
                    <h4 className={classes.info_h4}>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .</h4>
                </div>
                <nav className={classes.footer_nav}>
                    <a className={classes.nav_title}>Menu Items</a>
                    <a href='' className={classes.nav_link}>About</a>
                    <a href='' className={classes.nav_link}>Blog</a>
                    <a href='' className={classes.nav_link}>Shop</a>
                    <a href='' className={classes.nav_link}>Contact us</a>
                </nav>
                <nav className={classes.footer_nav}>
                    <a className={classes.nav_title}>Other Pages</a>
                    <a href='' className={classes.nav_link}>Styleguide</a>
                    <a href='' className={classes.nav_link}>Changelog</a>
                    <a href='' className={classes.nav_link}>licenses</a>
                    <a href='' className={classes.nav_link}>Team</a>
                </nav>
                <div className={classes.footer_empty}></div>
            </div>
        </footer>
    );
}

export default Footer;
