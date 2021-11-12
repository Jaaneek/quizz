import { Typography } from "@mui/material";
import styled from "styled-components";

export const Text = styled(Typography)`
  color: gray;
`;

export const Divider = styled.hr<{ side: "left" | "right" }>`
  width: 100%;
  height: 1px;
  margin-right: ${({ side }) => (side === "left" ? "6px" : "0px")};
  margin-left: ${({ side }) => (side === "right" ? "6px" : "0px")};
  border-color: rgba(217, 217, 217, 0.3);
`;
export const DividerContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  color: gray;
  text-align: center;
`;
