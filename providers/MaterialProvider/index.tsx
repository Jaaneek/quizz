import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ReactElement } from "react";
import { darkTheme } from "../../shared/theme";

const MaterialProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MaterialProvider;
