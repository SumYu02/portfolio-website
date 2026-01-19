import React, { useEffect } from 'react'

const Play = () => {

    useEffect(() => {
        console.log("rerender Play");
        return () => {
            console.log("unmount Play");
        }
    }, []);

    useEffect(() => {
        console.log("rerender Play All");
      });
  return (
    <div>Play</div>
  )
}

export default Play