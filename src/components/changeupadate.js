import React from "react";
import { connect } from "react-redux";

class ChangeUpdate extends React.Component{
    render(){
        return(
            <div>
                
            </div>
        )
    }
}


const mapstateToProps = (state) => {
    return{
        countw : state.count
   }
}

export default connect(mapstateToProps,null)(ChangeUpdate);