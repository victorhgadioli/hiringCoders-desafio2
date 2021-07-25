import React from "react";
import {
  ButtonStyled,
  DeleteIconStyled,
  IconButtonStyled,
  Page,
  PaperStyled,
  TableStyled,
  TypographyStyled,
} from "./ProductList.style";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "../TextField/TextField";
import { IProduct } from "../../utils/types";
import useProductList from "../../hooks/components/useProductList.components";

const ProductList: React.FC = () => {
  const {
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
  } = useProductList();

  const getProducts = () => {
    const productsString = localStorage.getItem("products");
    if (productsString != null) {
      return JSON.parse(productsString);
    }
    return [];
  };

  const products = getProducts();

  const saveProduct = () => {
    const fieldIsEmpty: boolean =
      name === "" ||
      barCode === "" ||
      description === "" ||
      category === "";

    if (fieldIsEmpty === true) {
      setEmptyField(true);
      return;
    } else {
      setEmptyField(false);
    }

    const productListString = localStorage.getItem("products");
    if (productListString != null) {
      const newProduct: IProduct = {
        name: name,
        barCode: barCode,
        description: description,
        category: category,
        price: price,
        quantity: quantity,
      };

      const newProductList =
        "[" +
        productListString.substring(1, productListString.length - 1) +
        "," +
        JSON.stringify(newProduct) +
        "]";
      localStorage.setItem("products", newProductList);
    } else {
      const newProduct: IProduct = {
        name: name,
        barCode: barCode,
        description: description,
        category: category,
        price: price,
        quantity: quantity,
      };
      localStorage.setItem("products", "[" + JSON.stringify(newProduct) + "]");
    }

    setName("");
    setBarCode("");
    setDescription("");
    setCategory("");
    setPrice(0);
    setQuantity(0);
  };

  return (
    <Page>
      <TableContainer component={PaperStyled}>
        <TableStyled>
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome do produto</TableCell>
              <TableCell align="center">Código de Barras</TableCell>
              <TableCell align="center">Descrição</TableCell>
              <TableCell align="center">Categoria</TableCell>
              <TableCell align="center">Preço unidade</TableCell>
              <TableCell align="center">Quantidade</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product: IProduct) => {
              return (
                <TableRow>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.barCode}</TableCell>
                  <TableCell align="center">{product.description}</TableCell>
                  <TableCell align="center">{product.category}</TableCell>
                  <TableCell align="center">{product.price}</TableCell>
                  <TableCell align="center">{product.quantity}</TableCell>
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
                  label="Nome do produto"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  label="Código de barras"
                  fullWidth
                  value={barCode}
                  onChange={(event) => setBarCode(event.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  label="Descrição"
                  fullWidth
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  label="Categoria"
                  fullWidth
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  label="Preço da unidade"
                  fullWidth
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={price}
                  onChange={(event) => setPrice(parseFloat(event.target.value))}
                />
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  label="Quantidade"
                  fullWidth
                  type="number"
                  value={quantity}
                  onChange={(event) => {
                    setQuantity(parseInt(event.target.value, 10));
                  }}
                />
              </TableCell>
              <TableCell>
                <ButtonStyled onClick={saveProduct}>Salvar</ButtonStyled>
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

export default ProductList;
