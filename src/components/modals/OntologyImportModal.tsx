/**
 * OntologyImportModal.tsx (Merged)
 *
 * UI for uploading or linking to an OWL/SKOS vocabulary file.
 * Can be expanded later to register the vocabulary with the VocabularyService.
 */

import React from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter, Button, Input
} from '@chakra-ui/react';

interface OntologyImportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OntologyImportModal: React.FC<OntologyImportModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Import Ontology or Vocabulary</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Paste OWL/SKOS URL or drag a file here (TODO)" />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
