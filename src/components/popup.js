import React from "react";
import dispatch from "./dispatch";
import { connect } from 'react-redux';

class PopupComp extends React.Component {

    constructor(props) {
        super(props);
        
    }
    sendDataToProp = () => {
        this.props.changepopup();
    }

    render() {
        let HtmlString = this.props.cardDetailsAsProps.map((value) => {
            return <div >

                {value.ordered_quantity > 0 && this.props.popup > 0 &&
                    <div className="popup">
                        <div className="popup-content">
                            <div className="pop_val">
                                <h2>Your Cart Items:</h2>
                                <h4>Item:{value.heading}</h4><h4>Quantity:{value.quantity}kg</h4><span>Total Quantity:{value.ordered_quantity}kg</span>
                                <button className="closepopup" onClick={this.sendDataToProp}>X</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        })
        return (
            <div>
                <div className="props-value">
                    <h2>{this.props.popup}</h2>
                </div>
                {HtmlString}
            </div>
        )
    }
}
const mapstateToProps = (state) => {
    return {
        popup: state.showPopup
    }
}

const mapsPropsToState = (dispatch) => {
    return {
        changepopup: () => {
            dispatch({ type: 'closepopup' })
        }
    }
}

export default connect(mapstateToProps, mapsPropsToState)(PopupComp);

