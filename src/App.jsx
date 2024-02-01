import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

const App = () => {
    const [name, setName] = useState("");
    const renderCount = useRef(1);
    const inputRef = useRef(0);

    const handleFocus = () => {
      inputRef.current.focus();
      inputRef.current.value = "Some value";
    }

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    const handleInput = (
        <>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name=""
                id=""
                style={{ padding: "12px" }}
            />
            <h2>My Name is {name}</h2>
            <div>
                <h1>I rendered {renderCount.current} times</h1>
            </div>
        </>
    );

    const handleButton = (
        <>
            <input ref={inputRef} type="text" name="" id="" style={{ padding: "12px" }} />
            <button onClick={handleFocus}>Button</button>
        </>
    );

    return (
        <div>
            {handleInput}
            {handleButton}
        </div>
    );
};

export default App;
