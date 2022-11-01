import Image from 'next/image';
import hero from '../assets/hero-image.png';

const HeroSection = () => {
  return (
    <div className="container-card">
      <div className=" bg-cover bg-gradient-to-b from-[#E1DEFC] to-[#a9cdf2] bg-no-repeat bg-scroll mb-5 mt-2 flex flex-col min-w-0 ">
        <div className="relative pt-16 pb-16 z-[2] flex grow shrink basis-auto">
          <div className="max-w-[540px] relative z-[2] pr-[calc(3vw)] pl-[calc(3vw)] ">
            <div className=" relative z-[2] w-full text-center items-center flex flex-wrap">
              <div className="mt-[50px] w-full shrink-0 max-w-full">
                <h1 className="text-3xl leading-tight font-semibold mb-5 break-words text-[#343f52]">
                  Networking
                  <span className="text-[#f857a6]"> solutions</span> for
                  worldwide communication
                </h1>
                <p className="mb-10 text-[23px] leading-normal font-normal">
                  We're a company that focuses on establishing long-term
                  relationships with customers.
                </p>
                <div>
                  <a className="pt-4 pb-4 pr-7 pl-7 text-base font-semibold inline-flex items-center justify-center rounded-md text-center whitespace-no-wrap align-middle cursor-pointer bg-gradient-to-b from-pink-500/90 to-[#ef3f6e] text-white">
                    Explore Now
                  </a>
                </div>
              </div>
              <div className="mt-[50px] w-full shrink-0 max-w-full  ">
                <Image className="-mb-32" alt="" src={hero} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
