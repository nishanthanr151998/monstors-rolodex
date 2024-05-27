import { Component } from "react";
import './card-container.styles.css'


class CardContainer extends Component {
    render() {

        
        const {name, id, email } = this.props;
        return (
                <div 
                    className= {`card-container ${this.props.className}`}
                    >
                        <img 
                            alt={`monster ${name}`} 
                            src={`https://robohash.org/${id}?set=set2&size=180x180`}
                        />
                        <h2>{name}</h2>
                        <p>{email}</p>

                </div>
            

        )
    }
}

export default CardContainer;