import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";

export default function Details(props) {
  const { friendId, close } = props;
  const [details, setDetails] = useState(null);

  // TASK 4 - Create a side effect 🥇 that runs only after first render.

  useEffect(() => {
    console.log(`🥇 EFFECT after first DOM surgery`);
    return () => console.log(`🥇 CLEANUP of effect from first DOM surgery`);
  }, []);

  // TASK 5 - Create a side effect 👻 that runs only after first render
  // and puts a 'click' event handler on document.
  // See what happens if we don't clean up.

  useEffect(() => {
    console.log("👻 adding silly listener");
    const sillyClickHandler = (evt) => {
      // console.log(`Here's a random number: ${Math.random()}`);
    };
    document.addEventListener("click", sillyClickHandler);
    return () => {
      console.log("👻 CLEANING UP SILLY LISTENER");
      document.removeEventListener("click", sillyClickHandler);
    };
  }, []);

  // TASK 6 - Create a side effect 🥵 that runs after every render.
  useEffect(() => {
    console.log("🥵 effect after every DOM surgery");
    return () => {
      console.log("🥵 cleanup of previous DOM surgery");
    };
  });

  // TASK 7 - Create a side effect 📲 that runs when a particular variable changes:
  // Whenever props.friendId updates we should trigger a fetch for details of the friend.
  // The URL should end up looking like `http://localhost:4000/friends/1?api_key=xyz`
  // On success, shove the details of the friend in `details` slice of state

  useEffect(() => {
    // this runs after the first render for sure, and then after every second render + DOMSurgery
    // caused by a change in friendID
    axios.get(`${BASE_URL}/friends${friendId}?api_key=${API_KEY}`)
    .
  }, [friendID]);

  return (
    <div className="container">
      <h2>Details (of friend with id {friendId}):</h2>
      {details && (
        <>
          <p>
            {details.name} is {details.age}
          </p>
          <p>email is {details.email}</p>
          {name} likes:
          <ul>
            {details.hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </>
      )}
      <button onClick={close}>Close</button>
    </div>
  );
}
