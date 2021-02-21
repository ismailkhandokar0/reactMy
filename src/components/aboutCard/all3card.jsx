
import Single3card from './single3card'

const All3card =() =>(
    <div class="tm-container-inner tm-features">
        <div className="row">
            <Single3card clas="fas fa-4x fa-pepper-hot tm-feature-icon" cls="tm-btn tm-btn-primary" link="Read More"  des="Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante." />
            <Single3card clas="fas fa-4x fa-seedling tm-feature-icon" cls="tm-btn tm-btn-success"  link="Read More" des="Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget." />
            <Single3card clas="fas fa-4x fa-cocktail tm-feature-icon" cls="tm-btn tm-btn-danger"  link="Read More"  des="Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit." />
        </div>
    </div>
)

export default All3card