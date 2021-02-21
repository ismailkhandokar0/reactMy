import SingleAboutCard from './singleAboutCard'



const AllAboutCard = () =>(
    <div class="tm-container-inner tm-persons">
        <div class="row">
            <SingleAboutCard img="image/about-02.jpg" name="Daisy Walker" title="Executive Chef" about="Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus." />
            <SingleAboutCard img="image/about-03.jpg" name="Florence Nelson" title="Kitchen Manager" about="Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae." />
            <SingleAboutCard img="image/about-04.jpg" name="Valentina Martin" title="Culinary Director" about="Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus." />
            <SingleAboutCard img="image/about-01.jpg" name="Jennifer Soft" title="Founder and CEO" about="Vivamus cursus leo nec sem feugiat sagittis.Duis ut feugiat odio, sit amet accumsan odio."/>
        </div>
    </div>
)

export default AllAboutCard