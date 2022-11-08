import React from "react";
import '../styles/css.css';
import { cardDetails } from "../datas/data";
import '../styles/card.css';
import dispatch from "./dispatch";
import {connect} from "react-redux";
import PopupComp from "../components/popup";


class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            CardDetails : cardDetails
        }
    }

  fnAddCardValue(cardValue){
    this.setState((prevstate)=> ({
        CardDetails:prevstate.CardDetails.map(items => items.heading === cardValue.heading ?{...items,ordered_quantity: items.ordered_quantity + 1}:items)
    }))
  }

  fnRemoveCardValue(cardValue){
    this.setState((prevstate)=>({
        CardDetails:prevstate.CardDetails.map(items => items.heading === cardValue.heading ? {...items,ordered_quantity:items.ordered_quantity - 1}:items)
    }))
  }
addplus =()=>{
    return(
        <div>
            <button type="button">click me</button>
        </div>
    );
};
    addAmountToHeader=()=>{
        let totalAmount = 0;
        this.state.CardDetails.forEach((obj)=>{
            if(obj.ordered_quantity > 0){
                totalAmount += obj.ordered_quantity * obj.price;
            }
        })
        this.props.sendDataToHeader(totalAmount);
    }


    render() {
        let HtmlString = this.state.CardDetails.map((items)=>{
            return<div className='card1' key={items.heading}>
                <img src={items.imgUrl} alt="feature image"/>
                <h2>{items.heading}</h2>
                <div className="items">< button  className="minus" onClick={()=>{this.fnAddCardValue(items)}}>+</button><p>rs{items.price*items.ordered_quantity}</p>< button  className="minus" onClick={()=>{this.fnRemoveCardValue(items)}}>-</button><p><span>{items.quantity*items.ordered_quantity}kg</span></p></div>
               <button class="button-57" onClick={this.addAmountToHeader} role="button"><span class="text">Add</span><span>< img src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png"/></span></button>
            </div>
          
        })
        return (
            <div className="card-parent">
                {HtmlString}
                <PopupComp cardDetailsAsProps = {this.state.CardDetails}  />
            </div>
        )
    }
}

const mapsPropsToState =(dispatch)=>{
    return{
        sendDataToHeader : (ta) => {
            dispatch ({type : 'increment',amount : ta})
        }
    }
}

export default connect(null,mapsPropsToState)(Card);