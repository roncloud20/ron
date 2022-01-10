import { Link, NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

function About() {
    return (
        <div className='Home'>
            <Header/>
            <main>
                <Banner/>
                <div className="wrapper">
                    <section className="index-links">
                        <NavLink to='/cases'>
                            <div className="index-boxlink-square">
                                <h3>Cases</h3>
                            </div>
                        </NavLink>
                        <NavLink to='/porfolio'>
                            <div className="index-boxlink-rectangle">
                                <h3>Porfolio</h3>
                            </div>
                        </NavLink>
                        <Link to='www.roncloud.com.ng'>
                            <div className="index-boxlink-square">
                                <h3>roncloud</h3>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className="index-boxlink-rectangle">
                                <h3>YouTube Channel</h3>
                            </div>
                        </Link>
                        <NavLink to='/about'>
                            <div className="index-boxlink-square">
                                <h3>About</h3>
                            </div>
                        </NavLink>
                        <NavLink to='/contact'>
                            <div className="index-boxlink-square">
                                <h3>Contact</h3>
                            </div>
                        </NavLink>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
export default About;