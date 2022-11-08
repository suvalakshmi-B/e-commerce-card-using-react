import React from "react";
import {connect} from "react-redux";

class DispatchMethod extends React.Component{
    render(){
        return(
            <div>
              
            </div>
        )
    }
}


const mapsPropsToState = (dispatch) => {
    return{
        increment: () => {
            dispatch({type: 'increment'});
            
        }
    }
}

export default connect(null,mapsPropsToState)(DispatchMethod);