import React from "react";
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import PorfolioCardList from "./PorfolioCardList";
import { clients } from "./clients";

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
                        <div className="clientsList">
                            <PorfolioCardList clients={clients} />
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Porfolio;