import { useState } from "react";

export default function useProductList() {
  const [name, setName] = useState(""),
    [barCode, setBarCode] = useState(""),
    [description, setDescription] = useState(""),
    [category, setCategory] = useState(""),
    [price, setPrice] = useState(0),
    [quantity, setQuantity] = useState(0),
    [emptyField, setEmptyField] = useState(false);
  
  return {
    name,
    setName,
    barCode,
    setBarCode,
    description,
    setDescription,
    category,
    setCategory,
    price,
    setPrice,
    quantity,
    setQuantity,
    emptyField,
    setEmptyField,
  };
}