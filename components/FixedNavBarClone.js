import Image from 'next/image';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

const FixedNavBarClone = (props) => {
  return (
    <header className="wrapper">
      <nav className="w-full bg-white/95 shadow-[0_0_20px_rgb(30,34,40,0.06)] z-[10000] top-0 left-0 flex flex-wrap items-center justify-between">
        <div className="flex flex-no-wrap items-center justify-between relative pr-[calc(3vw)] pl-[calc(3vw)] md:pr-[calc(6vw)]  md:pl-[calc(6vw)] w-full mr-auto ml-auto ">
          <div className="pt-6 pb-6 w-full whitespace-no-wrap">
            <a className="text-indigo-700 no-underline">
              <Image
                src={logo}
                alt="Sandbox"
                className="text-indigo-700 no-underline w-32 h-6"
              />
            </a>
          </div>
          <div className="collapsibleItems"></div>
          <div className="ml-auto w-full flex">
            <ul className=" items-center flex-row flex pl-0 ml-auto mb-0 mt-0list-none">
              <li className="basis-4/5">
                <nav className="flex w-full text-gray-800">
                  <a href="" className="basis-1/4 ml-3">
                    <FontAwesomeIcon icon={faTwitter} className="w-5" />
                  </a>
                  <a href="" className="basis-1/4 ml-3 text-base">
                    <FontAwesomeIcon icon={faFacebook} className="w-5" />
                  </a>
                  <a href="" className="basis-1/4 ml-3 text-base">
                    <FontAwesomeIcon icon={faDribbble} className="w-5" />
                  </a>
                  <a href="" className="basis-1/4 ml-3 text-base">
                    <FontAwesomeIcon icon={faInstagram} className="w-5" />
                  </a>
                </nav>
              </li>
              <li className="ml-3">
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-6 ml-1"
                  onClick={props.onShowMenu}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default FixedNavBarClone;
