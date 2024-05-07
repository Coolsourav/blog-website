import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../Api/Functions/Queries/login.api";
import { toast } from "react-toastify";

const defaultTheme = createTheme();

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  // const loading = true;
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // toast.success(data.message);
      localStorage.setItem("token", data.token);
       if (data.status === 200) {
         navigate("/home");
       }
    },
    onError: (data) => {
      toast.error(data.message);
    },
   
  });
  const validation = () => {
    let error = {};
    if (!user.email) {
      error.email = "Email is Required";
    }
    if (!user.password) {
      error.password = "Password is Required";
    }

    return error;
  };

  const SubmitInfo = async (e) => {
    e.preventDefault();
    setError(validation());
    const formData = {
      email: user.email,
      password: user.password,
    };
    try {
      await mutation.mutateAsync(formData);
    } catch (error) {
      console.error(error);
    }
    // console.log(status)
   
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is Required" });
        setUser({ ...user, email: "" });
      } else {
        setError({ ...error, email: "" });
        setUser({ ...user, email: value });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "Password name is Required" });
        setUser({ ...user, password: "" });
      } else {
        setError({ ...error, password: "" });
        setUser({ ...user, password: value });
      }
    }
  };

  return (
    <div
      className="hero min-h-[90vh]"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <ThemeProvider theme={defaultTheme}>
            <Container
              component="main"
              sx={{
                bgcolor: "white",
                height: "400px",
                width: "400px",
              }}
            >
              <CssBaseline />
              <Box
                sx={{
                  padding: "10px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "darkgray" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign In
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={SubmitInfo}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={user.email}
                        onChange={postUserData}
                      />
                      <span style={{ color: "red" }}> {error.email} </span>
                    </Grid>
                    <Grid item xs={12} mb={2}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={user.password}
                        onChange={postUserData}
                      />
                      <span style={{ color: "red" }}> {error.password} </span>
                    </Grid>
                  </Grid>

                  {mutation.isPending ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      size="large"
                      type="submit"
                    >
                      Loading.....
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      size="large"
                      type="submit"
                    >
                      SIGN IN
                    </Button>
                  )}

                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/register">
                        <button>Sign Up</button>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
