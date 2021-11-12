import {
  Avatar,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useFormik } from "formik";
import withPublicRoute from "hoc/withPublicRoute";
import toast from "react-hot-toast";
import { registerWithEmail } from "services/authService";
import { RoutesEnum } from "shared/enums";
import * as Yup from "yup";
import * as Styles from "./Register.styles";
import * as Types from "./Register.types";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters long")
    .required("Please enter your password"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please repeat your password"),
});

const Register = () => {
  const matches = useMediaQuery("(min-width:980px)");

  const { setFieldValue, errors, validateField, isValid, submitForm } =
    useFormik<Types.RegisterData>({
      initialValues: { email: "", password: "", repeatPassword: "" },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        if (isValid) {
          registerWithEmail(values.email, values.password).catch((err) =>
            toast.error(err.message)
          );
        }
      },
    });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(e.target.id, e.target.value, false).then(() => {
      validateField(e.target.id);
    });
  };

  return (
    <Styles.RegisterContainer>
      <Styles.FormContainer>
        <Styles.HeaderContainer>
          <Typography variant="h5" gutterBottom>
            React Quiz
          </Typography>
          <Typography variant="h4">Welcome to React Quiz</Typography>
          <Typography variant="h6" gutterBottom>
            Enter your info to get started
          </Typography>
        </Styles.HeaderContainer>
        <TextField
          id="email"
          name="email"
          size="small"
          label="Email"
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
          error={!!errors.password}
          helperText={errors.password ? errors.password : " "}
          onChange={onChange}
        />
        <TextField
          id="repeatPassword"
          name="repeatPassword"
          label="Repeat password"
          type="password"
          size="small"
          error={!!errors.repeatPassword}
          helperText={errors.repeatPassword ? errors.repeatPassword : " "}
          onChange={onChange}
        />
        <Button
          disabled={!isValid}
          variant="contained"
          color="primary"
          onClick={submitForm}
        >
          Sign up
        </Button>
        <div>
          Already have an account?{" "}
          <Styles.MyLink href={RoutesEnum.Login}>
            {"Log in to Quizify"}
          </Styles.MyLink>
        </div>
      </Styles.FormContainer>
      {matches && (
        <Styles.InfoContainer>
          <Typography variant="h5">
            If you are getting ready for interview in React.js this quiz might
            be helpfull for you! Play on your own or challenge others. Have fun
            and learn at the same time.
          </Typography>
          <Typography variant="h4">Godspeed!</Typography>
          <Styles.AvatarContainer>
            <Avatar
              alt="Klosiek"
              src="https://avatars.githubusercontent.com/u/46522348?v=4"
              imgProps={{
                style: { height: "40px" },
              }}
            />
            <div style={{ marginLeft: "16px" }}>
              <Typography variant="h6">Sebastian Kłosiński</Typography>
              <div style={{ opacity: 0.6 }}>Frontend Developer</div>
            </div>
          </Styles.AvatarContainer>
          <Styles.AvatarContainer>
            <Avatar
              alt="Jaaneek"
              src="https://avatars.githubusercontent.com/u/25470423?v=4"
              imgProps={{
                style: { height: "40px" },
              }}
            />
            <div style={{ marginLeft: "16px" }}>
              <Typography variant="h6">Miłosz Jankiewicz</Typography>
              <div style={{ opacity: 0.6 }}>Frontend Developer</div>
            </div>
          </Styles.AvatarContainer>
        </Styles.InfoContainer>
      )}
    </Styles.RegisterContainer>
  );
};

export default withPublicRoute(Register);
