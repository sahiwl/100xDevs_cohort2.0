import React, { useState, useCallback, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [force, forceRender] = useState(0);
const divRef= useRef();
    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
        divRef.current.innerHTML = parseInt(divRef.current.innerHTML)+1;
    };

    return (
        <div>
            <p>This component has rendered <span ref={divRef}> {force}</span>  times.</p>
            <button  onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};