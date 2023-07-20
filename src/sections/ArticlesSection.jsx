import SmallCard from '../UI/Cards/SmallCard';
import H2Content from '../UI/H2/H2Content';
import classes from './css/ArticlesSection.module.css';

function ArticlesSection() {
    return (
        <section className={classes.articles_section}>
            <div className={classes.articles_info_container}>
                <div className={classes.info_heading}>
                    <H2Content></H2Content>
                    <h1 className={classes.info_h1}>Latest News &</h1>
                    <h1 className={classes.info_h1}>Articles</h1>
                </div>
                <button className={classes.info_btn}>Read More</button>
            </div>
            <div className={classes.articles_container}>
                <div className={classes.article_big_card}>
                    <img className={classes.big_card_img} src='/assets/controller.png' alt='controller'></img>
                    <span className={classes.big_card_date}>April 2, 2021</span>
                    <span className={classes.big_card_text}>Esports Group teams up with the Indianapolis Colts</span>
                </div>
                <div className={classes.small_cards_container}>
                    <SmallCard
                        img_url='/assets/simple.png'
                        date='April 2, 2021'
                        text='NAVI reveals s1mple fifth anniversary'
                        isText23px={true}
                    ></SmallCard>
                    <SmallCard
                        img_url='/assets/pc_hardware.png'
                        date='April 2, 2021'
                        text='A1esports Shares new picture'
                        isText23px={false}
                    ></SmallCard>
                    <SmallCard
                        img_url='/assets/keyboard.png'
                        date='April 2, 2021'
                        text='T1 unveil partnership with Razer'
                        isText23px={true}
                    ></SmallCard>
                    <SmallCard
                        img_url='/assets/pc_lights.png'
                        date='April 2, 2021'
                        text='RX secures content partnership with'
                        isText23px={false}
                    ></SmallCard>
                </div>
            </div>
        </section>
    );
}

export default ArticlesSection;
