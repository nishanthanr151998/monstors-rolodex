// import { Component } from "react";
import './card.styles.css'

const CardContainer = ({monster: {id, name, email}, className}) =>  (
        <div 
            className= {`card-container ${className}`}
            >
                <img 
                    alt={`monster ${name}`} 
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>

        </div> 
    )


// class CardContainer extends Component {
//     render() {
        
//         const {name, id, email } = this.props.monster;
//         return (
//                 <div 
//                     className= {`card-container ${this.props.className}`}
//                     >
//                         <img 
//                             alt={`monster ${name}`} 
//                             src={`https://robohash.org/${id}?set=set2&size=180x180`}
//                         />
//                         <h2>{name}</h2>
//                         <p>{email}</p>

//                 </div> 

//         )
//     }
// }

export default CardContainer;