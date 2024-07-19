import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

export default function Joke({ handleSetNewJoke }) {
  const [joke, setJoke] = useState('');
  const api_url = "https://icanhazdadjoke.com/";

  useEffect(() => {
    async function getJoke() {
      try {
        const response = await fetch(api_url, {
          headers: {
            'Accept': 'application/json'
          }
        });
        const data = await response.json();
        setJoke(data.joke);
      } catch (error) {
        console.error("Error fetching joke:", error);
      }
    }

    getJoke();
  }, []);

  return (
    <>
      <Modal isOpen={true}>
        <ModalHeader>New Joke</ModalHeader>
        <ModalBody>
          <h3>{joke ? joke : "Loading..."}</h3>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleSetNewJoke}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
