import classes from './h2_content.module.css';

function H2Content() {
    return (
        <div className={classes.content_h2_container}>
            <img className={classes.content_h2_img} src='/assets/main_h2_fire.svg' alt='fire'></img>
            <h2 className={classes.content_h2}>Future of esports</h2>
        </div>
    );
}

export default H2Content;
