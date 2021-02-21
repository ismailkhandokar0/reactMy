

const Single3card = props => (
    <div class="col-lg-4">
        <div class="tm-feature">
            <i className={props.clas}></i>
            <p class="tm-feature-description">{props.des}</p>
            <a href="index.html" className={props.cls}>{props.link}</a>
        </div>
    </div>
)

export default Single3card