import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterModalProps, RegisterProps } from "./RegisterModal.types";
import { registerValidationSchema } from "./RegisterModal.validation";
import { sendRegisterRequest } from "../../../api/register/sendRegisterRequest";
import { NavigateFunction, useNavigate } from "react-router-dom";

const LoginModal: FC<RegisterModalProps> = ({ open, onClose }) => {
  const [registerError, setRegisterError] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    resolver: yupResolver(registerValidationSchema),
  });
  const navigate: NavigateFunction = useNavigate();

  const onSubmit = async (data: RegisterProps) => {
    const success = await sendRegisterRequest(data);
    if (success) {
      navigate("/dashboard");
    } else {
      setRegisterError("Wystąpił błąd rejestracji");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex h-screen items-center justify-center">
        <div className="w-1/3 bg-white p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Register!</h4>
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
                    label="Email"
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
                    label="Password"
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Name"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <Controller
                name="age"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Age"
                    type="number"
                    error={!!errors.age}
                    helperText={errors.age?.message}
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl component="fieldset" error={!!errors.gender}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup {...field} row>
                      <FormControlLabel
                        value="MALE"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="FEMALE"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                    {errors.gender && (
                      <Typography variant="caption" color="error">
                        {errors.gender.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </div>
            <Grid>
              {registerError && (
                <Typography variant="caption" color="error">
                  {registerError}
                </Typography>
              )}
            </Grid>
            <div className="flex justify-between">
              <Button variant="contained" color="warning" onClick={onClose}>
                Back
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
