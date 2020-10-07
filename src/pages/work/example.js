import React, { useState, useEffect } from 'react';

function Example() {
        // Apply a class to the body element for easier specific styling
        const [pageId] = useState('work');
        useEffect(() => {
            document.body.classList.add(pageId);
            return() => {
                document.body.classList.remove(pageId);
            }
        }, [pageId]);
    
        return (
            <React.Fragment>
                <h1>Hello world!</h1>
            </React.Fragment>
        )
}

export default Example;
