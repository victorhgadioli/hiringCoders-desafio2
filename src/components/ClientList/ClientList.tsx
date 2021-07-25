import React from "react";
import {
  ButtonStyled,
  DeleteIconStyled,
  IconButtonStyled,
  Page,
  PaperStyled,
  TableStyled,
  TypographyStyled,
} from "./ClientList.style";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import useClientList from "../../hooks/components/useClientList.component";
import TextFieldMask from "../TextFieldMask/TextFieldMask";
import TextField from "../TextField/TextField";
import { IClient } from "../../utils/types";

const ClientList: React.FC = () => {
  const {
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
  } = useClientList();

  const getClients = () => {
    const clientsString = localStorage.getItem("clients");
    if (clientsString != null) {
      return JSON.parse(clientsString);
    }
    return [];
  };

  const clients = getClients();

  const saveClient = () => {
    const fieldIsEmpty: boolean =
      name === "" ||
      email === "" ||
      phoneNumber === "" ||
      address === "" ||
      complement === "" ||
      cep === "";

    if (fieldIsEmpty === true) {
      setEmptyField(true);
      return;
    } else {
      setEmptyField(false);
    }

    const clientListString = localStorage.getItem("clients");
    if (clientListString != null) {
      const newClient: IClient = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        complement: complement,
        cep: cep,
      };

      const newClientList =
        "[" +
        clientListString.substring(1, clientListString.length - 1) +
        "," +
        JSON.stringify(newClient) +
        "]";
      localStorage.setItem("clients", newClientList);
    } else {
      const newClient: IClient = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        complement: complement,
        cep: cep,
      };
      localStorage.setItem("clients", "[" + JSON.stringify(newClient) + "]");
    }

    setName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    setComplement("");
    setCep("");
  };

  return (
    <Page>
      <TableContainer component={PaperStyled}>
        <TableStyled>
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome Completo</TableCell>
              <TableCell align="center">E-mail</TableCell>
              <TableCell align="center">Telefone</TableCell>
              <TableCell align="center">Endereço</TableCell>
              <TableCell align="center">Complemento</TableCell>
              <TableCell align="center">CEP</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client: IClient) => {
              return (
                <TableRow>
                  <TableCell align="center">{client.name}</TableCell>
                  <TableCell align="center">{client.email}</TableCell>
                  <TableCell align="center">{client.phoneNumber}</TableCell>
                  <TableCell align="center">{client.address}</TableCell>
                  <TableCell align="center">{client.complement}</TableCell>
                  <TableCell align="center">{client.cep}</TableCell>
                  <TableCell align="center">
                    <IconButtonStyled>
                      <DeleteIconStyled fontSize="medium" />
                    </IconButtonStyled>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell>
                <TextField
                  variant="outlined"
                  label="Nome completo"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  label="E-mail"
                  fullWidth
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextFieldMask
                  variant="outlined"
                  label="Telefone"
                  fullWidth
                  mask="(99) 99999-9999"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  label="Endereço"
                  fullWidth
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  label="Complemento do endereço"
                  fullWidth
                  value={complement}
                  onChange={(event) => setComplement(event.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextFieldMask
                  variant="outlined"
                  label="Digite seu CEP"
                  fullWidth
                  mask="99.999-999"
                  value={cep}
                  onChange={(event) => setCep(event.target.value)}
                />
              </TableCell>
              <TableCell>
                <ButtonStyled onClick={saveClient}>Salvar</ButtonStyled>
              </TableCell>
            </TableRow>
          </TableBody>
        </TableStyled>
        {emptyField === true ? (
          <TypographyStyled>Preencha todos os campos</TypographyStyled>
        ) : null}
      </TableContainer>
    </Page>
  );
};

export default ClientList;
