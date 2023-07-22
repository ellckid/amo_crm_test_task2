import H2Content from '../UI/H2/H2Content';
import Header from '../UI/Header/Header';
import classes from './css/MainSection.module.css';

function MainSection() {
    return (
        <section className={classes.main_section}>
            <Header></Header>
            <nav className={classes.vert_nav}>
                <a href="" className={classes.vert_nav_link}>Facebook</a>
                <a href="" className={classes.vert_nav_link}>Instagram</a>
                <a href="" className={classes.vert_nav_link}>Twitch</a>
            </nav>
            <div className={classes.main_section_content}>
                <H2Content></H2Content>
                <h1 className={classes.content_h1}>Unleash the Next Generation of Gaming<img className={classes.content_h1_img} src='/assets/main_h1_underline.svg'></img></h1>
                <h3 className={classes.content_h3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</h3>
                <div className={classes.content_btn_container}>
                    <button className={classes.content_active_button}>Explore More</button>
                    <a href='' className={classes.content_inactive_button}>View our team</a>
                </div>
            </div>
            <div className={classes.section_right_container}>
                <div className={classes.section_right_img} ></div>
            </div>
        </section >
    );
}

export default MainSection;
