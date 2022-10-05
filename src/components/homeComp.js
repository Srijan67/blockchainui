import HeadBottom from "../images/headbottomimg.png";
import PartnerComp from "./Partner";
import Slide from "./Slide";
const HomeComp = () => {
  return (
    <>
      <div className="relative">
        <Slide />
        <img srcSet={HeadBottom} alt="img pattern" />
      </div>
      <PartnerComp />
    </>
  );
};
export default HomeComp;
