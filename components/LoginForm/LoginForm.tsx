import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function LoginForm() {
  return (
    <Box
      sx={{
        p: 2,
        lineHeight: 4,
        textAlign: "center",
      }}
    >
      <EmojiFoodBeverageOutlinedIcon sx={{ my: 15 }} fontSize="large" />
      <TextField
        fullWidth
        id="username-input"
        label="Username"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="password-input"
        label="Password"
        variant="outlined"
        type="password"
      />
      <Link href="/adminDashboard" passHref>
        <Button fullWidth variant="contained">
          Login
        </Button>
      </Link>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Need help logging in: Call Udi
      </Typography>
    </Box>
  );
}
