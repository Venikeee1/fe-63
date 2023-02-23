import { createContext, useContext, useEffect, useState } from 'react';

export const mouseContext = createContext();

export const MouseProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState('heelloo');

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;

      setMousePosition({ clientX, clientY });
    });
  }, []);

  return (
    <mouseContext.Provider value={{ mousePosition, setMousePosition }}>
      {children}
    </mouseContext.Provider>
  );
};

export const useMouseContext = () => {
  const mouseContextValues = useContext(mouseContext);

  if (!mouseContextValues) {
    throw new Error('Please wrap your component with mouseContext Provider');
  }

  const { mousePosition, setMousePosition } = mouseContextValues;

  return {
    mousePosition,
    setMousePosition,
  };
};
