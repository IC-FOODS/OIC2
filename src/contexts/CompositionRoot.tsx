/**
 * CompositionRoot: Initializes and wires up core application services.
 */
import React, { createContext, useContext } from 'react';
import { QuadStore } from '../services/quadStore';

const quadStore = new QuadStore();

export const ServiceContext = createContext({ quadStore });

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ServiceContext.Provider value={{ quadStore }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = () => useContext(ServiceContext);
