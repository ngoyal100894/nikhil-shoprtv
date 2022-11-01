import { featureList } from '../data/data';
import FeatureCard from './FeatureCard';
import FeatureList from './FeatureList';
import UniqueOffering1 from './UniqueOffering1';
import UniqueOffering2 from './UniqueOffering2';
const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="pt-20 pb-20 pl-[calc(3vw)] pr-[calc(3vw)]">
        <FeatureList />
        <UniqueOffering1 />
        <UniqueOffering2 />
      </div>
    </section>
  );
};

export default FeatureSection;
