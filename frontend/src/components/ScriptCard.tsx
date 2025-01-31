import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Stack } from "@mui/material";
import { Paid } from "@mui/icons-material";

export default function ScriptCard() {
  return (
    <Card sx={{ width: "100%", transition: "0.3s", position: "relative" }} className="hover:scale-105">
      <CardActionArea>
        <CardMedia
          component="img"
          className="h-[170px]"
          image="/assets/images/cards/3.jpg"
          alt="Script Card"
        />
        <CardContent>
          <div className="flex justify-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Sonic speed simulator
            </Typography>
            <Stack direction="row" spacing={0.5}>
              <Paid fontSize="small" />
              <Typography variant="subtitle2">Paid</Typography>
            </Stack>
          </div>
          <Typography textAlign="left" variant="h5" component="div">
            Inf coins inf exp
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
