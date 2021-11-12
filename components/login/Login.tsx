import { Button, TextField, Typography } from "@mui/material";
import DividerWithText from "components/DividerWithText";
import { useFormik } from "formik";
import withPublicRoute from "hoc/withPublicRoute";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react-transition-group/node_modules/@types/react";
import { loginWithEmail } from "services/authService";
import { RoutesEnum } from "shared/enums";
import parseErrorMessage from "shared/errorMessages";
import * as SharedStyles from "shared/styles";
import { isApiError } from "shared/typeguards";
import { supabase } from "utils/supabaseClient";
import * as Yup from "yup";
import * as Styles from "./Login.styles";
import * as Types from "./Login.types";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { setFieldValue, errors, validateField, isValid, submitForm } =
    useFormik<Types.LoginData>({
      initialValues: { email: "", password: "" },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        loginWithEmail(auth, values.email, values.password).catch((err) =>
          toast.error(parseErrorMessage(err))
        );

        try {
          setLoading(true);
          const { error } = await supabase.auth.signIn({ email });
          if (error) throw error;
          alert("Check your email for the login link!");
        } catch (error) {
          if (isApiError(error)) {
            toast.error(error.message);
          } else throw error;
        } finally {
          setLoading(false);
        }
      },
    });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(e.target.id, e.target.value, false).then(() => {
      validateField(e.target.id);
    });
  };

  return (
    <SharedStyles.PageContainer>
      <Styles.LoginContainer>
        <Styles.HeaderContainer>
          <Typography variant="h4">{"Sign in to your account"}</Typography>
          <Typography variant="h6" gutterBottom>
            {"Don't have an account? "}
            <Styles.MyLink href={RoutesEnum.Register}>
              {"Start free here!"}
            </Styles.MyLink>
          </Typography>
        </Styles.HeaderContainer>
        <Styles.FormContainer elevation={3}>
          <Styles.ProvidersContainer>
            <SharedStyles.ProviderButton
              startIcon={<FaGithub size={20} />}
              variant="outlined"
              // onClick={() => loginWithGithub(auth)}
            >
              {"Sign in with Github"}
            </SharedStyles.ProviderButton>
            <SharedStyles.ProviderButton
              startIcon={<FcGoogle size={20} />}
              variant="outlined"
              // onClick={() => loginWithGoogle(auth)}
            >
              {"Sign in with Google"}
            </SharedStyles.ProviderButton>
          </Styles.ProvidersContainer>
          <DividerWithText>{"OR"}</DividerWithText>
          <Styles.Form>
            <TextField
              id="email"
              name="email"
              label="Email adress"
              size="small"
              required
              autoFocus
              error={!!errors.email}
              helperText={errors.email ? errors.email : " "}
              onChange={onChange}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              size="small"
              required
              error={!!errors.password}
              helperText={errors.password ? errors.password : " "}
              onChange={onChange}
            />
            <Button
              disabled={!isValid}
              variant="contained"
              color="primary"
              onClick={submitForm}
            >
              {"Login"}
            </Button>
          </Styles.Form>
        </Styles.FormContainer>
      </Styles.LoginContainer>
    </SharedStyles.PageContainer>
  );
};

export default withPublicRoute(Login);
