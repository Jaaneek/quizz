import { Link, Paper } from "@mui/material";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  align-self: center;
  width: 100%;
  height: 600px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* width: 520px; */
  h4 {
    font-weight: 800;
  }
  h5 {
    font-weight: 500;
  }
  h6 {
    font-weight: 600;
    a {
      text-decoration: none;
    }
  }
`;

export const ProvidersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
`;

export const Form = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  height: 450px;
  max-width: 400px;
  width: 100%;
`;

export const MyLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`;

export const InfoContaier = styled(Paper)``;
