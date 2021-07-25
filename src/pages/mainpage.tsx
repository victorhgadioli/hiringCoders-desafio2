import React from "react";
import { Route } from "react-router-dom";
import ActionPage from "../components/ActionSpace/ActionSpace";
import Background from "../components/Background/Background";
import ClientList from "../components/ClientList/ClientList";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import Welcome from "../components/Welcome/Welcome";
import Window from "../components/Window/Window";

const MainPage: React.FC = () => {
  return (
    <Background>
      <Window>
        <Header />
        <ActionPage>
          <Route exact path={"/"}>
            <Welcome />
          </Route>
          <Route exact path={"/clients"}>
            <ClientList />
          </Route>
          <Route exact path={"/products"}>
            <ProductList />
          </Route>
        </ActionPage>
        <Footer />
      </Window>
    </Background>
  );
};

export default MainPage;
