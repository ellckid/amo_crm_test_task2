import H2Content from '../UI/H2/H2Content';
import classes from './css/CustomizeSection.module.css';

function MainSection() {
    return (
        <section className={classes.custom_section}>
            <img className={classes.custom_left_img} src='/assets/customize_img.png' alt='soldier on bright background'></img>
            <div className={classes.custom_section_content}>
                <H2Content></H2Content>
                <h1 className={classes.content_h1}>Customize your</h1>
                <h1 className={classes.content_h1}>Own Character</h1>
                <h3 className={classes.content_h3}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</h3>
                <div className={classes.content_img_container}>
                    <div className={classes.content_img_cover}><img className={classes.content_img} src='/assets/custom_img_1.png'></img></div>
                    <div className={classes.content_img_cover}><img className={classes.content_img} src='/assets/custom_img_2.png'></img></div>
                    <div className={classes.content_img_cover}><img className={classes.content_img} src='/assets/custom_img_3.png'></img></div>
                </div>
            </div>
        </section>
    );
}

export default MainSection;
