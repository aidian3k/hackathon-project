import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import "../../index.css";
import { useState } from "react";
import LoginModal from "./login/LoginModal";
import RegisterModal from "./register/RegisterModal";
import WhyUsComponent from "./whyUsComponent/whyUsComponent";

export const StartingPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  return (
    <div className="h-screen">
      <AppBar
        position="sticky"
        className="shadow-md"
        sx={{ backgroundColor: "#87CEEB" }}
      >
        <Toolbar className="shadow-lg">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            jakiś button
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jakiś tam tytuł tego typu benc
          </Typography>
          <Button variant="contained" color="primary" onClick={openLoginModal}>
            Zaloguj
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={openRegisterModal}
          >
            Zarejestruj
          </Button>
        </Toolbar>
      </AppBar>
      <div
        className="bg-no-repeat bg-cover bg-center h-full overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: 'url("/assets/background.jpg")' }}
      >
        <WhyUsComponent openRegisterModal={openRegisterModal} />
      </div>
      <LoginModal open={showLoginModal} onClose={closeLoginModal} />
      <RegisterModal open={showRegisterModal} onClose={closeRegisterModal} />
    </div>
  );
};
