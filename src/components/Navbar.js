
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
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/about">
            About
          </Button>
          <Button color="inherit" href="/contact">
            Contact
          </Button>
          <Button color="inherit" href="/add">
            Add
          </Button>
        </div>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
