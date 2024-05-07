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
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../../Api/Functions/Queries/register.api";
import { toast } from "react-toastify";

const defaultTheme = createTheme();

export default function Registration() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [error, setError] = useState("");
  const [img, setimg] = useState("");
  // const loading = true;
  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      toast.success(data.message);
      localStorage.setItem("profile", data.data.profile_pic);
    },
  });
  // const dispatch = useDispatch();
  // const { status } = useSelector((state) => state?.Auth);

  const validation = () => {
    let error = {};

    if (!user.name) {
      error.name = " Name is Required";
    }
    if (!user.mobile) {
      error.mobile = "Mobile is Required";
    }
    if (!user.email) {
      error.email = "Email is Required";
    }
    if (!user.password) {
      error.password = "Password is Required";
    }
    // if (!img) {
    //   error.img = "Image  is required";
    // }

    return error;
  };
  const image_change = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setError({ ...error, img: "Image is required" });
      setimg(null);
    } else {
      setError({ ...error, img: "" });

      setimg(file);
      // console.log(file);
    }
  };

  const SubmitInfo = async (e) => {
    e.preventDefault();
    setError(validation());
    const formData = {
      name: user.name,
      email: user.email,
      password: user.password,
      mobile: user.mobile,
    };
    try {
      mutate(formData);
    } catch (error) {
      console.error(error);
    }
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "Name is Required" });
        setUser({ ...user, name: "" });
      } else {
        setError({ ...error, name: "" });
        setUser({ ...user, name: value });
      }
    }
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

    if (name === "mobile") {
      if (value.length === 0) {
        setError({ ...error, mobile: "Mobile is Required" });
        setUser({ ...user, mobile: "" });
      } else {
        setError({ ...error, mobile: "" });
        setUser({ ...user, mobile: value });
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
              sx={{ bgcolor: "white", width: "450px" }}
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
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={SubmitInfo}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="name"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        value={user.name}
                        onChange={postUserData}
                        autoFocus
                      />
                      <span style={{ color: "red" }}> {error.name} </span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="mobile"
                        label="Mobile Number"
                        name="mobile"
                        autoComplete="family-name"
                        value={user.mobile}
                        onChange={postUserData}
                      />
                      <span style={{ color: "red" }}> {error.mobile} </span>
                    </Grid>
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
                    <Grid item xs={12}>
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
                        sx={{ mb: "10px" }}
                      />
                      <span style={{ color: "red" }}> {error.password} </span>
                    </Grid>

                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Image
                      </label>
                      <input
                        type="file"
                        // onChange={(e) => setimg(e.target.files[0])}
                        onChange={image_change}
                        name="img"
                        accept="image/*"
                        className="form-control"
                      />
                      {img !== "" && img !== undefined && img !== null ? (
                        <img
                          style={{ height: "180px" }}
                          src={URL.createObjectURL(img)}
                          alt=""
                          className="upload-img"
                        />
                      ) : (
                        <>{img === "" && <p>Drag or drop content here</p>}</>
                      )}
                    </div>
                    <span style={{ color: "red" }}>
                      {""}
                      {error.img}
                      {""}
                    </span>
                  </Grid>

                  {isPending ? (
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
                      SIGN Up
                    </Button>
                  )}

                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/" variant="body2">
                        <button>Sign In</button>
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
