import offer1 from '../assets/offer1.png';
import Image from 'next/image';
import ComponentHeader from './ComponentHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const UniqueOffering1 = () => {
  const headerDetails = {
    heading: 'Have perfect control',
    description: 'We bring solutions to make life easier for our customers.',
  };
  const browniePoints = [
    'Aenean quam ornare. Curabitur blandit.',
    'Nullam quis risus eget urna mollis ornare.',
    'Etiam porta euismod malesuada mollis.',
    'Vivamus sagittis lacus vel augue rutrum.',
  ];
  return (
    <div className="unique-offerigng flex flex-row flex-wrap [&>*]:w-full [&>*]:shrink-0 [&>*]:max-w-full -mt-12 mb-24">
      <div className="offer-image mt-12">
        <figure>
          <Image
            src={offer1}
            alt="offer-1"
            className="w-auto h-auto max-w-full"
          ></Image>
        </figure>
      </div>
      <div className="offer-details mt-12">
        <div className="offer-heading"></div>
        <ComponentHeader headerDetails={headerDetails} />
        <div className="offer-paragraph mb-4">
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Vivamus sagittis lacus vel augue rutrum.
          </p>
        </div>
        <div className="offer-bullets flex flex-row flex-wrap">
          <div>
            <ul>
              {browniePoints.map((brownie) => {
                return (
                  <li className="mt-3" key={Math.random()}>
                    <span>
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="w-5 inline-block text-[#1f9ddc94]"
                      />
                      <span className="pl-2 text-base">{brownie}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueOffering1;
