import React from "react";
import Login from "./Login";

var isLoggedIn = true;

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    // Ternary operator
    // <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
    // currentTime === 16 ? <h1>hello</h1> : <h1>bye</h1>
    // currentTime < 16 && currentTime <17 ? <h1>hello</h1> : <h1>bye</h1>

    // AND operator
    // dont get confused, the left side checks if its true and renders the right side, if not, it wont even bother to check
    // currentTime < 12 && <h1>why u still working</h1>

  );
}

export default App;
