import React from "react"
import BtcImage from "../images/btcimg.png"
import HeadBottom from "../images/headbottomimg.png";
import ExploreBtn from "../images/svg/exporebtn.svg"
import PartnerComp from "./Partner";
const HomeComp = () =>{
    return (<>
    <div className="relative">

    <div className="md:flex md:justify-evenly pl-4 items-center grid grid-cols-1 headarea">
        
        <div>
            <h1 className="headtextShadow md:text-5xl text-2xl md:pt-44 text-white font-bold md:text-left md:pl-16 md:-translate-y-28 md:leading-normal tracking-wide text-center leading-normal pb-0">MERKLABS BLOCKCHAIN <br/>DEVELOPMENT AND <br/>SECURITY SOLUTIONS </h1>
            <img  className="cursor-pointer text-center m-auto pt-6 w-1/3 md:pl-16 md:m-0 md:pb-0 md:mt-0 md:text-left md:pt-0" srcSet={ExploreBtn} />
        </div>
        <img className=" w-3/4 pl-12 self-start md:w-1/3 md:pr-20 md:self-center" srcSet={BtcImage} alt='btc-pic'/>
    </div>
    <img srcSet={HeadBottom} alt="img pattern"/>
    </div>
    <PartnerComp/>
    </>
    );
}
export default HomeComp;