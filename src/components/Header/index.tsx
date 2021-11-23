import React from "react";
import { Cart, Container, Content, Options, Profile, Title } from "./styles";
import { ShoppingCart } from "../../assets/icons";
import { Menu } from "@material-ui/icons";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>OxeFood!</Title>
        <Options>
          <Cart>
            <div className="info">2</div>
            <ShoppingCart />
          </Cart>
          <Profile>
            Olá, <b>Vinicius</b>
          </Profile>
          <Menu fontSize="large" />
        </Options>
      </Content>
    </Container>
  );
};

export default Header;
