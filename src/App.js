export default function App() {
  const handleClick = () => {
    console.log("Button was clicked");
  };
  // return (
  //   <div>
  //     <button
  //       onClick={function () {
  //         console.log("Button was clicked");
  //       }}
  //     >
  //       Add Animal
  //     </button>
  //   </div>
  // );

  return (
    <div>
      <button
        onClick={() => {
          console.log("Button was clicked");
        }}
      >
        Add Animal
      </button>
    </div>
  );
}
