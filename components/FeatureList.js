import ComponentHeader from './ComponentHeader';
import FeatureCard from './FeatureCard';
import { featureList } from '../data/data';
const FeatureList = () => {
  const headerDetails = {
    heading: 'Our Features',
    description:
      'The service we offer is specifically designed to meet your needs.',
  };
  return (
    <>
      <ComponentHeader headerDetails={headerDetails} alignText="text-center" />
      <div className="feature-list flex flex-row flex-wrap [&>*]:w-full [&>*]:shrink-0 [&>*]:max-w-full -mt-10 mb-36 ">
        {featureList.map((featureItem) => {
          return <FeatureCard key={featureItem.heading} item={featureItem} />;
        })}
      </div>
    </>
  );
};

export default FeatureList;
