import React, {  useEffect} from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';


 const DataContext = createContext(null);

 const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllData = async () => {
    try {
      
      // const res = await axios.get('https://fakestoreapi.com/products');
      const res = await axios.get('http://localhost:5000/api/products');
      // const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      // const res = await axios.get('https://real-time-amazon-data.p.rapidapi.com/search?query=electronics&page=1&country=US')
      // const res = await axios.get('https://github.dev/Kolzsticks/Free-Ecommerce-Products-Api/blob/main/products.json');
      
      console.log(res);
      const productsData = res.data; // API returns array directly
      setData(productsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

const getUniqueCategory =(data, property)=> {
        const categories = data?.map((curElem) =>{
        return curElem[property]
        })
        return ["All" , ...new Set(categories)];
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