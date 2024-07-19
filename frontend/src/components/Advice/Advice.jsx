import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

export default function Advice({ handleSetNewAdvice }) {
  const [advice, setAdvice] = useState('');
  const api_url = "https://api.adviceslip.com/advice";

  useEffect(() => {
    async function getAdvice() {
      try {
        const response = await fetch(api_url);
        const data = await response.json();
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error("Error fetching advice:", error);
      }
    }

    getAdvice();
  }, []); 

  return (
    <>
      <Modal isOpen={true}>
        <ModalHeader>New Advice</ModalHeader>
        <ModalBody>
          <h3>{advice ? advice : "Loading..."}</h3>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleSetNewAdvice}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
