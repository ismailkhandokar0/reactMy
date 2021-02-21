

const SingleCard = props => (
    <article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
        <figure>
            <img src={props.img} alt="Image" class="img-fluid tm-gallery-img" />
            <figcaption>
                <h4 class="tm-gallery-title">{props.title}</h4>
                <p class="tm-gallery-description">{props.des}</p>
                <p class="tm-gallery-price">{props.price}</p>
            </figcaption>
        </figure>
    </article>
)


export default SingleCard