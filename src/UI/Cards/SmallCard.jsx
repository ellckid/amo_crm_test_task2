import classes from './SmallCard.module.css';

function SmallCard({ img_url, date, text, isText23px }) {
    return (
        (isText23px)
            ?
            <div className={classes.card_container}>
                <img src={img_url} className={classes.card_img}></img>
                <span className={classes.card_date}>{date}</span>
                <span className={classes.card_text_23px}>{text}</span>
            </div>
            :
            <div className={classes.card_container}>
                <img src={img_url} className={classes.card_img}></img>
                <span className={classes.card_date}>{date}</span>
                <span className={classes.card_text_24px}>{text}</span>
            </div>

    );
}

export default SmallCard;
