
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import { Route, NavLink, BrowserRouter as Router } from '../../node_modules/react-router-dom'

const Nav = () => (
    <div className="container">

        {/* navgate all route  */}
        <Router>
            <div class="placeholder">
                <div class="parallax-window" style={{ backgroundImage: `url('image/simple-house-01.jpg')`, }} data-parallax="scroll" data-image-src="img/simple-house-01.jpg">
                    <div class="tm-header">
                        <div class="row tm-header-inner">
                            <div class="col-md-6 col-12">
                                <img src="image/simple-house-logo.png" alt="Logo" class="tm-site-logo" />
                                <div class="tm-site-text-box">
                                    <h1 class="tm-site-title">Simple House</h1>
                                    <h6 class="tm-site-description">new restaurant template</h6>
                                </div>
                            </div>
                            <nav class="col-md-6 col-12 tm-nav">
                                <ul className="tm-nav-ul">
                                    <li class="tm-nav-li"><NavLink exact to='/' className="tm-nav-link" >Home</NavLink></li>
                                    <li class="tm-nav-li"><NavLink exact to='/About' className="tm-nav-link" >About</NavLink></li>
                                    <li class="tm-nav-li"><NavLink exact to='/Contact' className="tm-nav-link" >Contact</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />

        </Router>

    </div>
)

export default Nav