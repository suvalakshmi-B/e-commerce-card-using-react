import React from "react";
import '../styles/css.css';
import { sidenavcnct } from "../datas/data";
import { share } from "../datas/data";

class Sidenav extends React.Component {

    Sncnct = sidenavcnct
    sharecnct = share

    constructor(props) {
        super(props);
    }

    render() {
        let HtmlString = sidenavcnct.map((item) => {
            return (
                <div className="sncnct-lists">
                    <h1>{item.head}</h1>
                    <h3>{item.li1}</h3>
                    <h3>{item.li2}</h3>
                    <h3>{item.li3}</h3>
                    <h3>{item.li4}</h3>
                    <h3>{item.li5}</h3>
                    <h3>{item.li6}</h3>
                    <h3>{item.li7}</h3>
                    <h3>{item.li8}</h3>
                </div>
            )
        })
 let HtmlString1 =share.map((item)=>{
    return(
        <div className="icons-sm">
         <img src={item.imgUrl1} className="icons-child"/>
         <img src={item.imgUrl2} className="icons-child"/>
         <img src={item.imgUrl3} className="icons-child"/>
         <img src={item.imgUrl4} className="icons-child"/>
        </div>
    )
 })

        return (
            <div >
                {HtmlString}
                {HtmlString1}
                </div>
                
            )
    }
}

export default Sidenav;