import classes from './App.module.css';
import MainSection from './sections/MainSection'
import CustomizeSection from './sections/CustomizeSection'
import ArticlesSection from './sections/ArticlesSection';
import Footer from './UI/Footer/Footer';

function App() {
    return (
        <>
            <div className={classes.app_container}>
                <MainSection></MainSection>
                <CustomizeSection></CustomizeSection>
                <ArticlesSection></ArticlesSection>
                <Footer></Footer>
            </div>
        </>
    );
}

export default App;
