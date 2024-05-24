export default function App() {
  const stateConfig = useState(0);

  function makeArray() {
    return [0, 1, 2, 4, 6];
  }

  //Normal way of assigning
  const myArray = makeArray();
  const firstElement = myArray[0];
  const secondElement = myArray[1];

  console.log(firstElement, secondElement);

  //Using simple array destructuring
  const [fElement, sElement] = makeArray();
  console.log(fElement, sElement);
}

//This is how useState Works internally
function useState(defaultValue) {
  return {
    yourState: defaultValue,
    yourSetter: () => {},
  };
}

//Internal workflow
// let render = -1;
// const states = {};

// const useState = (value) => {
//   const id = ++render;

//   const setValue = (newValue) => {
//     value = newValue;
//     manualRerender();
//   };
//   const state = [value, setValue];
//   states[id] = state;
//   console.log(states);
//   return state;
// };
