
import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

const DataContext = createContext(null);

// API Base URL - Works for both local and production
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllData = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/products`);
      console.log(res);
      const productsData = res.data;
      setData(productsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getUniqueCategory = (data, property) => {
    const categories = data?.map((curElem) => {
      return curElem[property];
    });
    return ["All", ...new Set(categories)];
  };

  const uniqueCategories = getUniqueCategory(data, "category");
  const brandData = getUniqueCategory(data, "brand");

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData, fetchAllData, uniqueCategories, brandData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
