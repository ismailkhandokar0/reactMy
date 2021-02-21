

const SingleAboutCard = props => (
    <article class="col-lg-6">
        <figure class="tm-person">
            <img src={props.img} alt="Image" class="img-fluid tm-person-img" />
            <figcaption class="tm-person-description">
                <h4 class="tm-person-name">{props.name}</h4>
                <p class="tm-person-title">{props.title}</p>
                <p class="tm-person-about">{props.about}</p>
                <div>
                    <a href="https://fb.com" class="tm-social-link"><i class="fab fa-facebook tm-social-icon"></i></a>
                    <a href="https://twitter.com" class="tm-social-link"><i class="fab fa-twitter tm-social-icon"></i></a>
                    <a href="https://instagram.com" class="tm-social-link"><i class="fab fa-instagram tm-social-icon"></i></a>
                </div>
            </figcaption>
        </figure>
    </article>
)


export default SingleAboutCard