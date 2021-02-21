import Pizza from '../homeCard/pizza'
import Salad from '../homeCard/salad'
import Noddle from '../homeCard/noddle'
import Footer from '../footer'
import Nav from '../nav'

import { Route, Link, NavLink, BrowserRouter as Router } from '../../../node_modules/react-router-dom'



const Home = () => (
    
        <main>

            <div className="container">
                <header class="row tm-welcome-section">
                    <h2 class="col-12 text-center tm-section-title">Welcome to Simple House</h2>
                    <p class="col-12 text-center">Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
                </header>

                <div class="tm-paging-links">
                    <nav className="tm-paging-nav">
                        {/* Pizza navigation start  */}

                        <Router>

                            <ul>
                                <NavLink exact activeClassName="pizza-link-active" to="/"><li class="tm-paging-item"><a href="" class="tm-paging-link ">Pizza</a></li></NavLink>
                                <NavLink activeClassName="pizza-link-active" to="/Salad"><li class="tm-paging-item"><a href="" class="tm-paging-link">Salad</a></li></NavLink>
                                <NavLink activeClassName="pizza-link-active" to="/Noddle"><li class="tm-paging-item"><a href="" class="tm-paging-link">Noodle</a></li></NavLink>
                            </ul>

                            <Route exact path="/" component={Pizza} />
                            <Route path="/Salad" component={Salad} />
                            <Route path="/Noddle" component={Noddle} />

                        </Router>

                        {/* Pizza navigation end  */}

                    </nav>
                </div>

                {/* use reuseable component  */}
                {/* <Pizza />     */}
                {/* use reuseable component end  */}


                <div class="tm-section tm-container-inner">
                    <div class="row">
                        <div class="col-md-6">
                            <figure class="tm-description-figure">
                                <img src="image/img-01.jpg" alt="Image" class="img-fluid" />
                            </figure>
                        </div>
                        <div class="col-md-6">
                            <div class="tm-description-box">
                                <h4 class="tm-gallery-title">Maecenas nulla neque</h4>
                                <p class="tm-mb-45">Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to <a rel="nofollow" href="https://templatemo.com/contact">talk to us</a> for additional permissions about our templates. Thank you.</p>
                                <a href="about.html" class="tm-btn tm-btn-default tm-right">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </main>


)

export default Home