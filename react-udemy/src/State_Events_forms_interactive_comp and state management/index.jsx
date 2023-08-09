import { Fragment, useState } from "react";
import "./index.css";

const Comp1 = () => {
  return <div>Learn React ⚛️</div>;
};
const Comp2 = () => {
  return <div>Apply for jobs 💼</div>;
};

const Comp3 = () => {
  return <div>Invest your new income 🤑</div>;
};

// const Jsx1 = <div>Learn React ⚛️</div>
// const Jsx2 = <div>Apply for jobs 💼</div>
// const Jsx3 = <div>Invest your new income 🤑</div>

const messages = [<Comp1 key="1" />, <Comp2 key="2" />, <Comp3 key="3" />];

const Index = () => {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Fragment>
      <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((_, step) => (
              <div key={step} className={active >= step ? "active" : ""}>
                {step + 1}
              </div>
            ))}
          </div>

          <div className="message">
            Step {active + 1}
            {messages[active]}
          </div>
          <div className="buttons">
            <button
              disabled={active === 0}
              onClick={() => setActive((prev) => prev - 1)}
              className={active === 0 ? "disabled" : "active"}
            >
              Previous
            </button>
            <button
              disabled={messages.length - 1 === active}
              onClick={() => setActive((prev) => prev + 1)}
              className={active === messages.length - 1 ? "disabled" : "active"}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Index;
