import React from "react"
import BtcImage from "../images/btcimg.png"
import HeadBottom from "../images/headbottomimg.png";
import ExploreBtn from "../images/svg/exporebtn.svg"
import PartnerComp from "./Partner";
import Service from "./Service";
const HomeComp = () =>{
    return (<>
    <div className="relative">

  <Service/>
    <img srcSet={HeadBottom} alt="img pattern"/>
    </div>
    <PartnerComp/>
    </>
    );
}
export default HomeComp;