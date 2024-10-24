import "./index.css";

const VisionSection = () => {
  const data = [
    {
      header: "Our Vision",
      description:
        "BLACK ONYX ENERGY & RESOURCES strives to be the customer’s first call when innovation and performance matters and to be the most desired service provider of choice in the energy, power & industrial sector in Nigeria.",
    },
    {
      header: "Our Vision",
      description:
        "We apply our industry expertise garnered over the years to solve complex challenges that help our clients operate safely, reliably, and at optimal efficiency, backed by unparalleled service and support.",
    },
  ];
  return (
    <div className="vision">
      <div className="responsive">
        <div>
          {data.map((item, index) => (
            <div className="vision-holder">
              <h4 className="normal-1 font-merge">{item.header}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionSection