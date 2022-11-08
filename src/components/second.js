import React from "react";


class  Second extends  React.Component{

    constructor(props){
    super (props);
    }

    render(){
        return(
            <div>
                <h3>From Second Component </h3>
                {this.props.tochild}
            </div>
        )
    }
}

export default Second;