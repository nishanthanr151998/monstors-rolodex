// import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

const CardList = ({monsters}) => (
 
    <div className='card-list'>
        {monsters.map((monster) => {

        return (
            <Card
                monster = {monster}
                className='monster-card'
                key = {monster.id}
            />
        )
        })}
    </div>
)

// class CardList extends Component {
//     render() {

//         console.log('rendering cardlist')
//         const { monsters} = this.props;

//         return (             
//                 <div className='card-list'>
//                  {monsters.map((monster) => {

//                     return (
//                         <Card
//                             monster = {monster}
//                             className='monster-card'
//                             key = {monster.id}
//                         />
//                  )
//                  })}
//             </div>
//     )}
// }

export default CardList;