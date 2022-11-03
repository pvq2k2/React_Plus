import React, { createContext, useEffect, useState } from "react";
import { getAllUser } from "../services/users";
import { getAllDataFooter } from "../services/footer";

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    Promise.all([getAllUser(), getAllDataFooter()]).then(
      ([userData, footerData]) => {
        setUserData(userData);
        setFooterData(footerData);
      }
    );
  }, []);

  return (
    <HomeContext.Provider value={{ userData, footerData }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
