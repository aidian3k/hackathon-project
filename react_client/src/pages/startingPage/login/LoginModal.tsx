import { Button, Modal, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { LoginModalProps, LoginProps } from "./LoginModal.types";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { loginValidationSchema } from "./LoginModal.validation";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginModal: FC<LoginModalProps> = ({ open, onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data: LoginProps) => {
    // TODO handle login
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
                name="login"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="login"
                    error={!!errors.login}
                    helperText={errors.login?.message}
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
