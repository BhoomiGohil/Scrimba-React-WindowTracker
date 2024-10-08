import React from "react";

// Component to track and display the window width
function WindowTracker() {
  // State to hold the current width of the window
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    // Function to update state with the new window width
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    // Add an event listener to watch for window resize events
    window.addEventListener("resize", watchWidth);

    // Cleanup function to remove the event listener when component unmounts
    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  // Render the current window width
  return <h1>Window width: {windowWidth}</h1>;
}

// Main component to toggle the WindowTracker component
export default function MainContent() {
  // State to track whether to show or hide the WindowTracker
  const [show, setShow] = React.useState(true);

  // Toggle function to switch the show state
  function toggle() {
    setShow((prevState) => !prevState);
  }

  return (
    <div className="container">
      {/* Button to toggle the visibility of WindowTracker */}
      <button onClick={toggle}>Toggle WindowTracker</button>

      {/* Conditionally render WindowTracker based on the show state */}
      {show && <WindowTracker />}
    </div>
  );
}
