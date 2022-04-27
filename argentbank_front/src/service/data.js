import React, { useEffect, useState } from "react"

const Data = () => {
    // const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
          .then((response) => response.json())
          .then((messages) => {
            // setInitialState(messages)
            // const user = [];
            // messages.forEach((message) => user.push(message));
            // localStorage.setItem('userData', JSON.stringify(user))
          });
    },[])
}

export default Data;
