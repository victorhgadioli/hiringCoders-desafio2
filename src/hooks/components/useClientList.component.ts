import { useState } from "react";

export default function useClientList() {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [phoneNumber, setPhoneNumber] = useState(""),
    [address, setAddress] = useState(""),
    [complement, setComplement] = useState(""),
    [cep, setCep] = useState(""),
    [emptyField, setEmptyField] = useState(false);

  return {
    name,
    setName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    complement,
    setComplement,
    cep,
    setCep,
    emptyField,
    setEmptyField,
  };
}
