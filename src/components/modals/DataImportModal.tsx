/**
 * DataImportModal.tsx (Merged)
 *
 * Chakra-based modal for pasting or uploading CSV/tabular data.
 * Includes logic to parse with CSVParserService and update state via setParsedTables.
 * This version replaces placeholder with full integration.
 */

import React, { useState } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
  ModalBody, ModalFooter, Button, Textarea, useToast
} from '@chakra-ui/react';
import { CSVParserService } from '../../services/CSVParserService';
import { serviceRegistry } from '../../services/ServiceRegistry';
import { ParsedTable } from '../../utils/CSVParser';

interface DataImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  setParsedTables: (tables: ParsedTable[]) => void;
}

export const DataImportModal: React.FC<DataImportModalProps> = ({ isOpen, onClose, setParsedTables }) => {
  const [csvText, setCsvText] = useState('');
  const toast = useToast();

  /**
   * Parses the pasted CSV string and stores the structured result via workflow context.
   */
  const handleImport = async () => {
    try {
      const parser = serviceRegistry.get<CSVParserService>('csv-parser');
      if (!parser) throw new Error("CSVParserService not registered");
      const parsed = await parser.parse(csvText, 'imported-table');
      setParsedTables([parsed]);

      toast({
        title: "Import success",
        description: `Parsed ${parsed.rows.length} rows.`,
        status: "success",
        duration: 3000
      });

      onClose();
    } catch (err: any) {
      toast({
        title: "Error importing CSV",
        description: err.message,
        status: "error",
        duration: 3000
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Import CSV Dataset</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            placeholder="Paste your CSV data here"
            rows={10}
            value={csvText}
            onChange={e => setCsvText(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleImport}>Import</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
