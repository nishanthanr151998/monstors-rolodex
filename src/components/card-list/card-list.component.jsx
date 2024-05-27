import { Component } from "react";
import './card-list.styles.css';
import CardContainer from "../card-container/card-container.component";

class CardList extends Component {
    render() {

        console.log('rendering cardlist')
        const { monsters} = this.props;

        return (             
                <div className='card-list'>
                 {monsters.map((monster) => {

                    const {name, id, email } = monster;
                    return (
                        <CardContainer
                            name = {name}
                            email = {email}
                            id = {id}
                            className='monster-card-container'
                            key={id}
                        />
                 )
                 })}
            </div>
    )}
}

export default CardList;