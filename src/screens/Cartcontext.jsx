import React, { createContext, useState, useContext } from "react";

const Cartcontext = createContext();

export const Cartprovider = ({ children }) => {
  const [count, setcount] = useState(1); 
  const [amount, setamount] = useState(500); 

  const increasecount = () => {
    setcount(count + 1);
    updateamount(count + 1);
  };

  const decreasecount = () => {
    if (count > 1) {
      setcount(count - 1);
      updateamount(count - 1);
    }
  };

  const updateamount = (newcount) => {
    const newamount = newcount * 500; 
    setamount(newamount);
  };

  return (
    <Cartcontext.Provider
      value={{ count, increasecount, decreasecount, amount }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

export const usecart = () => useContext(Cartcontext);
