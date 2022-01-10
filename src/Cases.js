import React from "react";
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

const Cases = () => {
    return (
        <div className='Cases'>
            <Header/>
            <main>
                <Banner/>
                <div className="wrapper">
                    <section className="article">
                        <h3>
                            Cases
                        </h3>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Cases;