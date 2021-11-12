import { Link, Paper } from "@mui/material";
import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 300px;
`;

export const FormContainer = styled(Paper)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 80px;
  padding: 60px;
  a {
    text-decoration: none;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const MyLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;
