import React from "react";
import { Paper, Typography } from "@mui/material";
import { AreaNames, AreaTypes } from "./areas/Areas.types";

interface PaperButtonProps {
  areaType: AreaTypes;
  imgSrc: string;
  onClick: (area: AreaTypes) => void;
}

const PaperButton: React.FC<PaperButtonProps> = ({
  areaType,
  imgSrc,
  onClick,
}) => {
  return (
    <Paper
      elevation={4}
      onClick={() => onClick(areaType)}
      className="relative p-3 paper-button"
      style={{
        height: "100%",
        borderRadius: "20px",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img src={imgSrc} alt="Icon" />
      <Typography variant="h5" className="absolute bottom-4">
        {AreaNames[areaType]}
      </Typography>
    </Paper>
  );
};

export default PaperButton;
