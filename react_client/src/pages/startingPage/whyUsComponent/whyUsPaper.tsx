import { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";

interface WhyUsPaperProps {
  text: string;
  imgSrc: string;
}

export const WhyUsPaper: FC<WhyUsPaperProps> = (props: WhyUsPaperProps) => {
  return (
    <Paper
      elevation={4}
      className={"p-3"}
      sx={{
        borderRadius: "20px",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img height="200px" src={props.imgSrc} alt="Icon" />
      <Box p={2}>
        <Typography variant="h5">{props.text}</Typography>
      </Box>
    </Paper>
  );
};

export default WhyUsPaper;
