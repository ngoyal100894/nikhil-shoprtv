import { featureList } from '../data/data';
import FeatureCard from './FeatureCard';
const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="pt-20 pb-20 pl-[calc(3vw)] pr-[calc(3vw)]">
        <div className="flex flex-row flex-wrap [&>*]:w-full [&>*]:shrink-0 [&>*]:max-w-full">
          {' '}
          <div className="text-center">
            <h2 className="section-heading-h2">Our Features</h2>
            <h3 className="section-subheading-h3">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
          <div className="feature-list flex flex-row flex-wrap [&>*]:w-full [&>*]:shrink-0 [&>*]:max-w-full -mt-10 mb-36 \">
            {featureList.map((featureItem) => {
              return (
                <FeatureCard key={featureItem.heading} item={featureItem} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
