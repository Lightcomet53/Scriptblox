import { Mail, YouTube } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar
        className="flex flex-wrap justify-between items-center py-6"
        sx={{ padding: "20px 5%!important" }}
      >
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-start">
          <div>
            <Typography variant="h5">© ScriptBlox</Typography>
            <Typography variant="subtitle1">
              2025 All Rights Reserved.
            </Typography>
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center py-8 sm:py-0">
          <Button
            variant="contained"
            color="inherit"
            sx={{
              padding: "10px 20px",
              color: "#3741a9",
              fontWeight: "bolder",
            }}
            startIcon={
              <img
                src="/assets/images/icons/discord.png"
                alt="discord icon"
                className="w-10"
              />
            }
          >
            Join our Discord
          </Button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
          <Stack direction="row" spacing={1}>
            <Tooltip title="Mail">
              <IconButton color="inherit">
                <Mail />
              </IconButton>
            </Tooltip>
            <Tooltip title="YouTube">
              <IconButton color="inherit">
                <YouTube />
              </IconButton>
            </Tooltip>
          </Stack>
        </div>
      </Toolbar>
      <Toolbar className="flex justify-center" sx={{background: "#0f28a3"}} variant="dense">
        <Stack direction="row" spacing={2}>
          <Link to="/privacy">
            <Typography variant="subtitle2">Privacy</Typography>
          </Link>
          <Link to="/terms">
            <Typography variant="subtitle2">Terms and Conditions</Typography>
          </Link>
          <Link to="/rules">
            <Typography variant="subtitle2">Rules</Typography>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
