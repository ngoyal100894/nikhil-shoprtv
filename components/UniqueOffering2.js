import offer2 from '../assets/offer2.jpeg';
import Image from 'next/image';
import ComponentHeader from './ComponentHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const UniqueOffering2 = () => {
  const headerDetails = {
    heading: 'What Makes Us Different?',
    description:
      'We make spending stress free so you have the perfect control.',
  };

  const browniePoints = [
    'Aenean quam ornare. Curabitur blandit.',
    'Nullam quis risus eget urna mollis ornare.',
    'Donec id elit non mi porta gravida at eget',
  ];
  return (
    <div className="unique-offerigng flex flex-row flex-wrap [&>*]:w-full [&>*]:shrink-0 [&>*]:max-w-full -mt-12 mb-24">
      <div className="offer-image mt-12">
        <figure>
          <Image
            src={offer2}
            alt="offer-2"
            className="w-auto h-auto max-w-full rounded-lg"
          ></Image>
        </figure>
      </div>
      <div className="offer-details mt-12">
        <div className="offer-heading"></div>
        <ComponentHeader headerDetails={headerDetails} />
        <div className="offer-paragraph mb-4">
          <p>
            Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
            nulla non metus auctor fringilla. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus.
            Integer posuere erat a ante venenatis dapibus posuere velit.
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

export default UniqueOffering2;
