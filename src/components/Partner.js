import Partner from "../images/svg/partner.svg"
import Dots from "../images/dots.png"
const PartnerComp = () => {
    return (<>
    <div className="partner">

    <img className="absolute right-0 md:w-1/6 w-1/6 " srcSet={Dots} alt="Dots pattern"/>

    <img className=" md:w-5/6 md:m-auto relative z-30 md:-translate-y-12 -translate-y-5 w-11/12 m-auto" srcSet={Partner} alt="partners"/>
    </div>

    </>)
}

export default PartnerComp;