import { Button, TextField } from "@mui/material";
import { FC } from "react";
import WhyUsComponent from "../startingPage/whyUsComponent/whyUsComponent";


export const LoginPage: FC = () => {
  return (
    <div>
      <TextField label="login" />
      <TextField label="hasło" />
      <Button>Zaloguj się</Button>
      <WhyUsComponent/>
    </div>
  );
};

export default LoginPage;
