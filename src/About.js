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
                    <section className="article">
                        <h3>
                            About RON
                        </h3>
                        <p>
                            Hi. Thanks for checking out my website and project work. 
                            My names are <b>Raymond Olugbenga Nicholas,</b> 
                            I’m a freelance web developer and educator with a background in graphic design, UI &amp; UX, web development and training. 
                            I live and work in Lagos, Nigeria.
                        </p>
                        <p>
                            Quick notes, in case you don’t feel like reading all of this: I design and build websites. 
                            I work closely with clients to articulate their vision in a design, using Corel Draw, Adobe Photoshop or Illustrator to create eye catchy graphics, Adobe XD or Figma to design mockups for web and mobile projects, and then I develop a custom/CMS (WordPress) website to match the design and desired functionality. 
                            I am fluent in HTML and CSS and pretty handy with Javascript and React Library. I provide my clients with full web strategy consultancy, including SEO and social media strategy. Outside of the web, the fields I’m most interested in are educating and managing projects, and I also enjoy learning and improving businesses and organizations with my skills and experience.
                        </p>
                        <p>    
                            My focus lately has been helping small businesses get started on the internet by designing and building websites that are professional and clean, with a content-management system for their website that allows them to take control of their brand’s narrative. 
                            Also training people in becoming tech-savvy and developers.  Recent examples of websites include Glonny Care Foundation, Aliu Habeeb, Folosmart and Articonnect. The sites I build are up to the moment in SEO best practices, and I provide consultation on social media strategy to create a seamless brand experience across multiple platforms. I also work for larger companies and organisations, including Urchnac International Limited(A building material supplier), and the Transforming Ajegunle Project(TAP). 
                        </p>
                        <p>    
                            I also have over 10 years of professional experience designing graphics works and printed apparel. Since 2012 I’ve been designing flyers, banners for Paragang Entertainment, Transforming Ajegnle Project, Urchnac, 120 &amp; 1 Gadget and Accessories, NYCN Ifelodun LCDA Branch Lagos and many others. Before this engagement, I designed and print flyers for my own company Roncloud Technologies.
                        </p>
                        <p>    
                            My Teaching experience also began in 2011, at GAIS, BDCL. I also volunteer as head of IT/Media and ICT trainer to the Transforming Ajegunle Project.
                        </p>
                        <p>    
                            I worked as Lead Trainer/Developer at my company Roncloud Technologies, where I am responsible for the company public image. 
                            My job included producing day to day operations of the company, drafting yearly aims and objectives, supervising staff and managing the affairs of the company. 
                        </p>   
                        <p> 
                            I studied Computer Science at Ogun State Institute of Technology, Igbesa. My first web experience was in school when I had to practice and work with PHP and MySQL on building user management system e-commerce websites and building micro-sites.
                        </p>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
export default About;