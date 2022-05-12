import Bound from "../images/introimg.png";
import CImg1 from "../images/contentArea/c1.png";
import CImg2 from "../images/contentArea/c2.png";
import CImg3 from "../images/contentArea/c3.png";
import BlurCircle from "../images/blur-circle.png";
import Neon from "../images/neon1.png";
import Neon2 from "../images/neon2.png";
const Intro = () => {
  return (
    <>
      <div className="intro-content grid p-12 pt-8 w-full mt-20">
        <div className="intro-text relative blur-circle text-left text-white">
          <h2 className="md:font-bold md:mb-3 md:text-4xl md:leading-snug">
            We provide The Best To Protect Your <br />
            Users And Their Investments
          </h2>
          <h3 className="md:font-bold md:text-3xl pr-4 md:leading-snug">
            Merklabs is a reputed name in the field of blockchain technology
            encompassing all the segments of this revolutionary field.
            Pioneering the essence of blockchain security and audits, we secure
            your present and future through the parameters of technology.
          </h3>
          <img
            className="blurcircleimg absolute top-0 rounded-full"
            srcSet={BlurCircle}
            alt="blue circle png"
          />
        </div>
        <div className="boxIntro relative">
          <img className="boxIntroImg " srcSet={Bound} alt="boundary" />
          <div className="stats text-white absolute top-0">
            <div className="stat md:mb-16">
              <h2 className="md:font-bold md:text-4xl">100+</h2>
              <p className="md:font-semibold md:text-2xl">
                blockchain companies protected
              </p>
            </div>
            <div className="stat md:mb-20">
              <h2 className="md:font-bold md:text-4xl">200+</h2>
              <p className="md:font-semibold md:text-2xl">issues discovered</p>
            </div>
            <div className="stat md:mb-8">
              <h2 className="md:font-bold md:text-4xl">1000+</h2>
              <p className="md:font-semibold md:text-2xl">
                analysis available per month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contentArea">
        <div className="relative">
          <img className="md:w-3/4 m-auto" srcSet={CImg1} alt="first C" />
          <img className=" absolute neon1" srcSet={Neon} alt="first C" />
        </div>
        <div className="text-white m-auto md:w-4/5">
          <h2 className="text-3xl text-pink-500 -tracking-tighter">DEFI</h2>
          <h1 className="text-5xl font-bold leading-snug">
            Scale the world of DeFi
          </h1>
          <p className="text-3xl leading-snug opacity-60">
            Being the veterans in the blockchain industry, we understand the
            hype of decentralized finance and the contemporary optimizations in
            the financial sector and hence taking the grasp of the moment , we
            have developed exceptional projects in the world of DeFi.
          </p>
        </div>
      </div>
      <div className="contentArea md:mt-8">
        <div className="text-white md:w-4/5 m-auto pt-44">
          <h2 className="text-3xl text-yellow-500 -tracking-tighter">DAPPS</h2>
          <h1 className="text-5xl font-bold leading-snug">
            Technology made easier
          </h1>
          <p className="text-3xl leading-snug opacity-60">
            Decentralized applications have found a huge user base right in the
            initial stage , and therefore we as a team have gained extensive
            expertise into the creation of dapps.
          </p>
        </div>
        <div className="relative">
          <img className="md:w-4/5" srcSet={CImg2} alt="SEC C" />
        </div>
      </div>
      <div className="contentArea md:mt-36">
        <div className="relative">
          <img className="md:w-2/3 m-auto" srcSet={CImg3} alt="first C" />
        </div>
        <div className="text-white m-auto md:w-4/5">
          <h2 className="text-3xl text-green-500 -tracking-tighter">AUDIT</h2>
          <h1 className="text-5xl font-bold leading-snug">
            Stay secure and safe
          </h1>
          <p className="text-3xl leading-snug opacity-60">
            Above all that matters is a secure and safe smart contract that is
            free from any vulnerability and does not hamper the investment of
            the various people who have trusted you. We also provide auditing
            services , so that you can stay assured of the security as we are
            quick in auditing and exposing the bugs of your smart contract.
          </p>
          <img className="neon2" srcSet={Neon2} alt="thrid C" />
        </div>
      </div>
    </>
  );
};
export default Intro;
