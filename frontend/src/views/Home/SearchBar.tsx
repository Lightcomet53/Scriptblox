import { Directions, Menu, Search } from "@mui/icons-material";
import { Divider, IconButton, InputBase, Paper, Stack, Switch, Typography } from "@mui/material";

const SearchBar: React.FC = () => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 15px", display: "flex", alignItems: "center", width: "100%" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        fullWidth
        placeholder={`Try "admin"`}
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <Search />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Stack direction="row" sx={{ alignItems: 'center' }}>
        <Typography>Free</Typography>
        <Switch />
        <Typography>Paid</Typography>
      </Stack>
    </Paper>
  );
};
export default SearchBar;
