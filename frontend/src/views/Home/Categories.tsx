import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, Checkbox, IconButton } from "@mui/material";
import { Tune } from "@mui/icons-material";

const options = [
  { label: "Hot", value: "hot" },
  { label: "Verified", value: "verified" },
  { label: "Unverified", value: "unverified" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Most viewed", value: "most_viewed" },
  { label: "Least viewed", value: "least_viewed" },
  { label: "Free", value: "free" },
  { label: "Paid", value: "paid" },
];

export default function Categories() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="contained" color="primary" id="demo-positioned-button" onClick={handleClick}>
        <Tune />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {options.map((item) => (
          <MenuItem key={item.value} onClick={handleClose}>
            <Checkbox value={item.value} />
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
