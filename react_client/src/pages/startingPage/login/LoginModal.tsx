import { Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { LoginModalProps, LoginProps } from "./LoginModal.types";
import { Controller, useForm } from "react-hook-form";
import { loginValidationSchema } from "./LoginModal.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendLoginRequest } from "../../../api/login/sendLoginRequest";
import { useNavigate } from "react-router-dom";

const LoginModal: FC<LoginModalProps> = ({ open, onClose }) => {
  const [loginError, setLoginError] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(loginValidationSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: LoginProps) => {
    const success = await sendLoginRequest(data);
    if (success) {
      navigate("/dashboard");
    } else {
      setLoginError("Nie udało się zalogować");
    }
    console.log(data);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex h-screen items-center justify-center">
        <div className="w-1/3 bg-white p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Zaloguj się!</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="login"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="hasło"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
              />
            </div>
            <Grid>
              {loginError && (
                <Typography variant="caption" color="error">
                  {loginError}
                </Typography>
              )}
            </Grid>
            <Button type="submit" variant="contained" color="primary">
              Zaloguj
            </Button>
            <Button variant="contained" color="primary" onClick={onClose}>
              Powrót
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
