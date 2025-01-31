import { Stack, TextField, Typography } from "@mui/material";
import { MIN_HEIGHT } from "contants/common";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import List from "./List";
import Categories from "./Categories";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const style = {
    backgroundImage: "url(/assets/images/backgrounds/7.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: MIN_HEIGHT,
    paddingTop: "70vh",
  };
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className={`text-center h-full`}>
      <div style={style}>
        <div className="px-[10%]">
          <Typography variant="h5" textAlign="left" gutterBottom className="text-white">Search the best Lua scripts available in the community uploaded by users!</Typography>
          <SearchBar />
        </div>
      </div>
      <div className="px-[5%]">
        <div className="flex justify-between pt-10">
          <Stack direction="row" spacing={3} className="items-center">
            <Typography variant="h4">Recent Scripts</Typography>
            <Categories />
          </Stack>
        </div>
        <List />
      </div>
    </div>
  );
};
export default Home;
