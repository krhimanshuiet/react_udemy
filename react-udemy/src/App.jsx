import { Fragment } from "react";
// import PropTypes from "prop-types";
// import { Application } from "../src/Working_with_components_props_jsx/index";
// import ProfileCard from "./Working_with_components_props_jsx/ProfileCard";
// import Index from "./State_Events_forms_interactive_comp and state management/index";
// import Challenge from './State_Events_forms_interactive_comp and state management/challenge'
import TravelList from "./State_Events_forms_interactive_comp and state management/TravelList";

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// pizzas project
// function App() {
//   return (
//     <Fragment>
//       <Application />
//       <ProfileCard/>
//     </Fragment>
//   );
// }

// export default App;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Far away project
function App() {
  return (
    <Fragment>
      {/* <Index/> */}
      {/* <Challenge/> */}
      <TravelList />
    </Fragment>
  );
}

export default App;

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// function App() {
//   return (
//     <Fragment>

//     </Fragment>
//   );
// }

// export default App;

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//----------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-----------------------------------------------------xxxxxxxxxx
// function Parent() {
//   const [count , setCount] = useState(0)
//   function getText(text){

//     return (
//       <div>
//         <h1>Text is : {text}</h1>
//       </div>
//     )

//   }
//   return (
//     <>
//     <div>parent component</div>
//     <h1>count from parent {count}</h1>
//     <Child count={count} updateCount={setCount} getText={getText}/>
//     </>
//   )
// }

// // eslint-disable-next-line react/prop-types
// function Child({count , updateCount , getText}){

//   return (
//     <>
//     <h1>count from child {count}</h1>
//     <div>child component {getText(`${count}`)}</div>
//     <button onClick={() => updateCount(prev => prev+1)}>update count</button>
//     </>
//   )

// }

// const Avatar = ({ person, size, name }) => {
//   return (
//     <img
//       className="avatar"
//       src={person}
//       alt={name}
//       width={size}
//       height={size}
//     />
//   );
// };

// Avatar.propTypes = {
//   person: PropTypes.string,
//   size: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
// };
