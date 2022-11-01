import Image from 'next/image';
import React, { lazy, useEffect, useState, Suspense } from 'react';
import DesktopIcon from './FeatureIcons/DesktopIcon';
import NetworkWiredIcon from './FeatureIcons/NetworkWired';
import ShieldCheckIcon from './FeatureIcons/ShieldCheckIcon';

// const importIcon = (feature) =>
//   lazy(() => import(`./FeatureIcons/${feature}Icon`));
const importIcon = (feature) => {
  React.lazy(() => import(`./FeatureIcons/${feature}Icon`));
};

const FeatureCard = (props) => {
  const [icon, setIcon] = useState();
  const { heading, description, iconToShow } = props.item;

  let iconElement;

  switch (iconToShow) {
    case 'Desktop':
      iconElement = <DesktopIcon />;
      break;
    case 'ShieldCheck':
      iconElement = <ShieldCheckIcon />;
      break;
    case 'Network':
      iconElement = <NetworkWiredIcon />;
      break;
    default:
      iconElement = <DesktopIcon />;
  }

  return (
    <div className=" feature-item mt-10">
      <div className="flex flex-row">
        <div className="mr-5 w-9 h-9 text-[#605DBA] pt-2">{iconElement}</div>
        <div>
          <h3 className="text-[22px] mb-1 leading-snug text-[#343f52]">
            {heading}
          </h3>
          <p className="text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
