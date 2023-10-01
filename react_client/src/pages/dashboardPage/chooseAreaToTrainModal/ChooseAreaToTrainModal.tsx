import * as React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import "./chooseAreaToTrainModal.css";
import Areas from "./areas/Areas";
import { AreaTypes } from "./areas/Areas.types";
import { Questions } from "./questions/Questions";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

export default function ChooseAreaToTrainModal() {
  const [open, setOpen] = React.useState(false);
  const [activeArea, setActiveArea] = useState<AreaTypes | null>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const openQuestions = (area: AreaTypes | null) => {
    setActiveArea(area);
  };

  const renderActiveArea = () => {
    if (activeArea !== null) {
      return <Questions areaType={activeArea} />;
    } else {
      return <Areas openQuestions={openQuestions} />;
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor="#f5f5f5" p={2} sx={style}>
          {renderActiveArea()}
        </Box>
      </Modal>
    </div>
  );
}
