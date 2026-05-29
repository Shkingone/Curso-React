
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" >
      <Toolbar style={{ display: "flex",
         justifyContent: "space-between" }}>
        <Typography variant="h6">My App</Typography>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </div>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
