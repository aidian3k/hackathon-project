import React, { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  CircularProgress,
  Grid,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import {
  physicalQuestions,
  PhysicalQuestionsProps,
  PhysicalQuestionsType,
} from "./Questions.types";

const questionKeys = Object.keys(physicalQuestions);

const PhysicalQuestions: FC<PhysicalQuestionsProps> = ({ onFormSubmit }) => {
  const { handleSubmit, control, formState } = useForm<PhysicalQuestionsType>();
  const { isSubmitting } = formState;
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [weAreClose, setWeAreClose] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (data: PhysicalQuestionsType) => {
    if (activeStep === questionKeys.length - 1) {
      onFormSubmit(data);
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (progress >= 100) {
        setWeAreClose(true);
        setProgress(0);
      } else {
        setProgress((prevProgress) => prevProgress + 10);
      }
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item container xs={8}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Physical Assessment Form
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {questionKeys.map((key, index) => (
              <Step key={index}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {activeStep === questionKeys.length ? (
              <div className={""}>
                <Typography variant="h5">
                  Thank you for submitting the form.
                </Typography>
                <div className={"flex items-center gap-2"}>
                  <Typography variant="h5">
                    {!weAreClose ? (
                      <p>We are generating best courses for you!</p>
                    ) : (
                      <p>We are close!</p>
                    )}
                  </Typography>
                </div>
                <div className={"flex justify-center items-center mt-2"}>
                  <CircularProgress
                    value={progress}
                    variant={"determinate"}
                    size={75}
                  />
                </div>
              </div>
            ) : (
              <>
                <Typography variant="h6">
                  {physicalQuestions[questionKeys[activeStep]]}
                </Typography>
                <Controller
                  name={questionKeys[activeStep] as keyof PhysicalQuestionsType}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="type in your answer"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                    />
                  )}
                />
                <Grid item xs={12} mt={2}>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  {activeStep === questionKeys.length - 1 ? (
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      disabled={isSubmitting}
                      sx={{ ml: 2 }}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      disabled={isSubmitting}
                      sx={{ ml: 2 }}
                    >
                      Next
                    </Button>
                  )}
                </Grid>
              </>
            )}
          </form>
        </Grid>
      </Grid>
      <Grid item xs={4}>
      {/* <a href="https://www.freepik.com/free-vector/smart-training-abstract-concept-vector-illustration-smart-training-online-programs-tools-new-gym-technology-fitness-coaching-application-improve-health-fat-loss-toning-abstract-metaphor_12468739.htm#query=physical%20skill&position=24&from_view=search&track=ais">Image by vectorjuice</a> on Freepik */}
        <img
          src="https://img.freepik.com/free-vector/smart-training-abstract-concept-vector-illustration-smart-training-online-programs-tools-new-gym-technology-fitness-coaching-application-improve-health-fat-loss-toning-abstract-metaphor_335657-4009.jpg?w=826&t=st=1696087870~exp=1696088470~hmac=5d8dbdb47705ca5e80019fd7064605b4ca15abb06b50b5e627a9e124f48843d8"
          alt="Icon"
        />
      </Grid>
    </Grid>
  );
};

export default PhysicalQuestions;
