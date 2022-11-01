const ComponentHeader = ({ headerDetails, alignText }) => {
  const { heading, description } = headerDetails;
  return (
    <div className={alignText}>
      <h2 className="section-heading-h2">{heading}</h2>
      <h3 className="section-subheading-h3">{description}</h3>
    </div>
  );
};

export default ComponentHeader;
