import React from 'react';
import SingleCard from './singleCard'



class Salad extends React.Component{
    render(){
        return (
            <div class="row tm-gallery">
                <SingleCard img="image/gallery/08.jpg" title="8 is ready" price="76$ / 81$" des="Yes This is Eight elit. Ea, est consectetur adipisicing elit. Ea,!"/>
                <SingleCard img="image/gallery/06.jpg" title="6 is ready" price="$21 / 93$" des="six is not god sit amet, consectetur adipisicing elit. Ea, est consectetur adipisicing elit. Ea,!" />
                <SingleCard img="image/gallery/01.jpg" title="This is First" price="10$ / 45$" des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,consectetur adipisicing elit.  est!" />
                <SingleCard img="image/gallery/07.jpg" title="7 is ready" price="$44 / 88$ / 99$" des="7&7 are ready sit amet, consectetur adip elit. Ea, est consectetur adipisicing elit. Ea,!"/>
                <SingleCard img="image/gallery/05.jpg" title="fifth is ready" price="61$ / 88$" des="5&5 are ready sit amet, consectetur adipisicing elit. Ea, est consectetur adipisicing elit. Ea,!"/>
                <SingleCard img="image/gallery/04.jpg" title="4th is Complite" price="71$ / 99$" des="4th descrive sit amet, consectetur adipisicing elit. Ea, est consectetur adipisicing elit. Ea,!" />
                
            </div>
        )
    }
}





export default Salad;