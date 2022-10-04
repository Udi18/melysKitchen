import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import { Alert, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import { useUser } from "../../atoms/user";
import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter();
  const [_, setUser] = useUser();
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const updateUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const login = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      if (res.status !== 200) {
        throw new Error();
      }
      const data = await res.json();
      setUser((user) => (user = data));
      router.push("/adminDashboard");
    } catch (error) {
      setError("Failed to login");
    }
  };

  const clearError = () => {
    setError("");
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          p: 2,
          lineHeight: 4,
          textAlign: "center",
        }}
        autoComplete="off"
      >
        <EmojiFoodBeverageOutlinedIcon sx={{ my: 15 }} fontSize="large" />
        <TextField
          fullWidth
          id="username-input"
          name="userName"
          label="Username"
          variant="outlined"
          onChange={updateUserInfo}
        />
        <TextField
          fullWidth
          id="password-input"
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          onChange={updateUserInfo}
        />
        <Button
          disabled={!userInfo.userName.length || !userInfo.password.length}
          onClick={login}
          fullWidth
          variant="contained"
        >
          Login
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Need help logging in: Call Udi
        </Typography>
      </Box>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={clearError}>
        <Alert onClose={clearError} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}
