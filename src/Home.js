import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

function About() {
    return (
        <div className='About'>
            <Header/>
            <main>
                <Banner/>
                <div className="wrapper">
                <section className="index-links">
                    <a href="cases.html">
                        <div className="index-boxlink-square">
                            <h3>Cases</h3>
                        </div>
                    </a>
                    <a href="#">
                        <div className="index-boxlink-rectangle">
                            <h3>Porfolio</h3>
                        </div>
                    </a>
                    <a href="#">
                        <div className="index-boxlink-square">
                            <h3>roncloud</h3>
                        </div>
                    </a>
                    <a href="#">
                        <div className="index-boxlink-rectangle">
                            <h3>YouTube Channel</h3>
                        </div>
                    </a>
                    <a href="#">
                        <div className="index-boxlink-square">
                            <h3>About</h3>
                        </div>
                    </a>
                    <a href="#">
                        <div className="index-boxlink-square">
                            <h3>Contact</h3>
                        </div>
                    </a>
                </section>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
export default About;