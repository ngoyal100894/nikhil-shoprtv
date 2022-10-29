import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

const MobileNav = (props) => {
  const backdropCloseHandler = (event) => {
    if (event.target.id === 'wrapper') {
      props.onHideMenu();
    }
  };

  return (
    <div
      className="navbar-collapse fixed inset-0  bg-black bg-opacity-50 z-[10000] backdrop-blur-sm"
      id="wrapper"
      onClick={backdropCloseHandler}
    >
      <div className="flex-col flex h-full top-0 left-0 w-3/4   bg-gray-900/95">
        <div className="pt-6 pb-6 pl-6 pr-6 flex flex-row items-center justify-between ">
          <h3>Sandbox</h3>
          <button>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="w-8"
              onClick={props.onHideMenu}
            />
          </button>
        </div>

        <div className="w-full flex-grow-0 pt-0 pb-0 flex-col h-full flex pl-7 pr-7 ">
          <ul className="flex flex-col text-white text-[17px]">
            <li className="block relative">
              <a
                href="#"
                className="pt-1 pb-1  hover:bg-gray-600 text-white text-[17px] after:content-['\2304'] after:absolute after:right-1"
              >
                Demos
              </a>
            </li>
            <li className="block relative group/one">
              <a
                href="#"
                className="pt-1 pb-1  hover:bg-gray-600 text-white text-[17px] after:content-['\2304'] after:absolute after:right-1"
              >
                Pages
              </a>
              <ul className="hidden group-hover/one:block">
                <li>
                  <a href="#" className="pl-6 pr-8 pt-1 pb-1 w-full">
                    Plumbing
                  </a>
                </li>
                <li className="block group/two">
                  <a
                    href="#"
                    className="text-white pl-6 pr-8 pt-1 pb-1 w-full text-[17px] after:content-['\2304'] after:absolute after:right-1"
                  >
                    Heating
                  </a>
                  <ul className="hidden group-hover/two:block ml-4">
                    <li>
                      <a
                        href="#"
                        className="text-white pl-6 pr-8 pt-1 pb-1 w-full"
                      >
                        Residential
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white pl-6 pr-8 pt-1 pb-1 w-full"
                      >
                        Commercial
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white pl-6 pr-8 pt-1 pb-1 w-full"
                      >
                        Industrial
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="pl-6 pr-8 pt-1 pb-1 w-full">
                    Electrical
                  </a>
                </li>
              </ul>
            </li>
            <li className="block relative">
              <a
                href="#"
                className="pt-1 pb-1 flex hover:bg-gray-600 text-white text-[17px] after:content-['\2304'] after:absolute after:right-1"
              >
                Projects
              </a>
            </li>

            <li className="block relative">
              <a
                href="#"
                className="pt-1 pb-1  hover:bg-gray-600 text-white text-[17px] after:content-['\2304'] after:absolute after:right-1"
              >
                Blog
              </a>
            </li>
            <li className="block relative">
              <a
                href="#"
                className="pt-1 pb-1  hover:bg-gray-600 text-white text-[17px] after:content-['\2304'] after:absolute after:right-1"
              >
                Blocks
              </a>
            </li>
            <li className="block relative">
              <a
                href="#"
                className="pt-1 pb-1  hover:bg-gray-600 text-white text-[17px] after:content-['\2304'] after:absolute after:right-1"
              >
                Documentation
              </a>
            </li>
          </ul>

          <div className="flex flex-shrink-0 mt-auto pt-6 pb-6 text-white text-[17px]">
            <div>
              <a>info@email.com</a>
              00 (123) 456 78 90
              <br></br>
              <nav className="flex w-full mt-4">
                <a href="" className="basis-1/4 mr-4">
                  <FontAwesomeIcon icon={faTwitter} className="w-5" />
                </a>
                <a href="" className="basis-1/4 mr-4 text-base">
                  <FontAwesomeIcon icon={faFacebook} className="w-5" />
                </a>
                <a href="" className="basis-1/4 mr-4 text-base">
                  <FontAwesomeIcon icon={faDribbble} className="w-5" />
                </a>
                <a href="" className="basis-1/4 mr-4 text-base">
                  <FontAwesomeIcon icon={faInstagram} className="w-5" />
                </a>
                <a href="" className="basis-1/4 mr-4 text-base">
                  <FontAwesomeIcon icon={faYoutube} className="w-5" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
