import React from "react";
import * as Styles from "./DividerWithText.styles";
import * as Types from "./DividerWithText.types";
const DividerWithText = ({ children }: Types.Props) => {
  return (
    <Styles.Container>
      <Styles.DividerContainer>
        <Styles.Divider side="left" />
      </Styles.DividerContainer>
      <Styles.Text>{children}</Styles.Text>
      <Styles.DividerContainer>
        <Styles.Divider side="right" />
      </Styles.DividerContainer>
    </Styles.Container>
  );
};

const MainView = () => {
  return <DividerWithText text="siema"></DividerWithText>;
};

const MainView2 = () => {
  return React.createElement(DividerWithText, { text: "siema" });
};

export default DividerWithText;
