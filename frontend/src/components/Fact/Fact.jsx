import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

export default function Fact({ handleSetNewFact }) {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);
  const api_url = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"; 

  useEffect(() => {
    async function getFact() {
      setLoading(true);
      try {
        const response = await fetch(api_url, {
          headers: {
            'Accept': 'application/json'
          }
        });
        const data = await response.json();
        setFact(data.text);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching fact:", error);
        setLoading(false);
      }
    }

    getFact()
  }, []);

  return (
    <>
      <Modal isOpen={true}>
        <ModalHeader>New Fact</ModalHeader>
        <ModalBody>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <h3>{fact ? fact : "No fact found"}</h3>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleSetNewFact}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
