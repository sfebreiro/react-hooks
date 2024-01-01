import React, { useLayoutEffect, useRef, useState } from 'react';

export const Block = ({ name, url, species }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0 });

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({ width });
    }, [species])

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className='mb-1'> {species} </p>
                {/* <p className='mb-1'> { url } </p> */}
                <footer className='blockquote-footer'> {name} </footer>
            </blockquote>

            <code>
                { JSON.stringify(boxSize) };
            </code>
        </>

    )

}