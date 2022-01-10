import React from "react";
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

const Porfolio = () => {
    return (
        <div className='Porfolio'>
            <Header/>
            <main>
                <Banner/>
                <div className="wrapper">
                    <section className="article">
                        <h3>
                            Porfolio
                        </h3>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Porfolio;