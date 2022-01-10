import React from "react";
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

const Contact = () => {
    return (
        <div className='Contact'>
            <Header/>
            <main>
                <Banner/>
                <div className="wrapper">
                    <section className="article">
                        <h3>
                            Contact
                        </h3>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Contact;