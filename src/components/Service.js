import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExploreBtn from "../images/svg/exporebtn.svg"
import BtcImage from "../images/btcimg.png"
import UnityLogo from "../images/uintyimg.png"
import Twitter from "../images/svg/twittter.svg"
import Fb from "../images/svg/fb.svg"
import Ig from "../images/svg/ig.svg"
import Line from "../images/svg/line.svg"
const settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
}
const Service = () => {
    return (<>
    <div className=" unityarea pb-6 leading-4 translate-x-2 translate-y-3 md:translate-x-6 md:translate-y-8 w-fit flex flex-col justify-center items-center md:visible">
    <div className="text-xxs1 text-white  text-center font-extralight md:text-xxs ">
        PK194-ABI<br/>San Francisco
    </div>
    <img className=" w-5 md:w-8" srcSet={UnityLogo} alt="unity"/>
    </div>
    <div className=" absolute right-4 md:right-8 space-y-7 translate-y-40  flex flex-col justify-center items-center md:translate-y-52">
        <img srcSet={Fb} alt="fb logo"/>
        <img srcSet={Ig} alt="ig logo"/>
        <img srcSet={Twitter} alt="twitter logo"/>
        <img srcSet={Line} alt="line logo"/>

    </div>
    <div className="carousel">
    <Slider {...settings}>
    <div className="pl-0 md:pl-28 items-center grid grid-cols-2 headarea md:grid-cols-2 md:justify-evenly">
            <h1 className="headtextShadow md:text-5xl text-2xl md:pt-44 text-white font-bold md:text-left md:pl-16 md:-translate-y-28 md:leading-normal tracking-wide text-center leading-normal pb-0">MERKLABS BLOCKCHAIN <br/>DEVELOPMENT AND <br/>SECURITY SOLUTIONS </h1>
            <img  className="explorebtn cursor-pointer text-center m-auto pt-6 w-1/3 md:pl-16 md:m-0 md:pb-0 md:mt-0 md:text-left md:pt-0" srcSet={ExploreBtn} />
    </div>
    <h1 className=" headtextShadow md:text-5xl text-2xl md:pt-44 text-white font-bold md:text-left md:pl-44 md:-translate-y-28 md:leading-normal tracking-wide text-center leading-normal pb-0">MERKLABS BLOCKCHAIN <br/>DEVELOPMENT AND <br/>SECURITY SOLUTIONS </h1>
    <h1 className=" headtextShadow md:text-5xl text-2xl md:pt-44 text-white font-bold md:text-left md:pl-44 md:-translate-y-28 md:leading-normal tracking-wide text-center leading-normal pb-0">SLIDE 3 </h1>
    <h1 className=" headtextShadow md:text-5xl text-2xl md:pt-44 text-white font-bold md:text-left md:pl-44 md:-translate-y-28 md:leading-normal tracking-wide text-center leading-normal pb-0">SLIDE 4 </h1>
    
    </Slider>
    </div>
    
    </>)
}
export default Service;