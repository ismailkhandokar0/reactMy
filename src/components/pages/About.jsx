
import Nav from '../nav'
import AllAboutCard from '../aboutCard/allAboutCard'
import All3card from '../aboutCard/all3card'

const About = () => (
    <div className="container">
        <main>
            <header class="row tm-welcome-section">
                <h2 class="col-12 text-center tm-section-title">About Simple House</h2>
                <p class="col-12 text-center">This is about page of simple house template.
                You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.</p>
            </header>

            {/* AllAboutCard here */}
            <AllAboutCard/>
            {/* AllAboutCard here */}

            <div class="tm-container-inner tm-featured-image">
                <div class="row">
                    <div class="col-12">
                        <div class="placeholder-2">
                            <div class="parallax-window-2" data-parallax="scroll" style={{backgroundImage:`url(image/about-05.jpg)`}} data-image-src="image/about-05.jpg"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* All3card here  */}
            <All3card/>
            {/* All3card here  */}

            <div class="tm-container-inner tm-history">
				<div class="row">
					<div class="col-12">
						<div class="tm-history-inner">
							<img src="image/about-06.jpg" alt="Image" class="img-fluid tm-history-img" />
							<div class="tm-history-text"> 
								<h4 class="tm-history-title">History of our restaurant</h4>
								<p class="tm-mb-p">Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.</p>
								<p>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to <a href="https://templatemo.com/contact">contact TemplateMo</a> for additional permissions about our templates. Thank you.</p>
							</div>
						</div>	
					</div>
				</div>
			</div>
        </main>
    </div>
)


export default About