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
  mentalQuestions,
  MentalQuestionsProps,
  MentalQuestionsType,
  PhysicalQuestionsType,
} from "./Questions.types";

const questionKeys = Object.keys(mentalQuestions);

const MentalForm: FC<MentalQuestionsProps> = ({ onFormSubmit }) => {
  const { handleSubmit, control, formState, setValue, getValues } =
    useForm<MentalQuestionsType>();
  const { isSubmitting } = formState;
  const [activeStep, setActiveStep] = React.useState(0);
  const [progress, setProgress] = useState(0);
  const [weAreClose, setWeAreClose] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleNext = () => {
    setValue(
      questionKeys[activeStep] as keyof MentalQuestionsType,
      textFieldValue
    );
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setTextFieldValue("");
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const betterSubmit = () => {
    onFormSubmit(getValues());
    console.log(getValues());
    handleNext();
  };

  const onSubmit = (data: MentalQuestionsType) => {};

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevState) => {
        if (prevState >= 100) {
          setWeAreClose(true);
          return 0;
        }

        return prevState + 10;
      });
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item container xs={4}>
        <img
        // <a href="https://www.freepik.com/free-vector/gaslighting-abstract-concept-vector-illustration-psychological-manipulation-method-mental-destabilization-cognitive-dissonance-creation-changing-beliefs-contradiction-abstract-metaphor_12469757.htm#query=mental%20skill&position=2&from_view=search&track=ais">Image by vectorjuice</a> on Freepik
          src="https://img.freepik.com/free-vector/gaslighting-abstract-concept-vector-illustration-psychological-manipulation-method-mental-destabilization-cognitive-dissonance-creation-changing-beliefs-contradiction-abstract-metaphor_335657-4220.jpg?w=826&t=st=1696087577~exp=1696088177~hmac=7691b35711258c889c23f525041fa00f207c9b941eee33127db737f03f25e88f"
          alt="icon"
        />
      </Grid>
      <Grid item container xs={8}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Mental Assessment Form
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
                  {mentalQuestions[questionKeys[activeStep]]}
                </Typography>
                <Controller
                  name={questionKeys[activeStep] as keyof MentalQuestionsType}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="type in your answer"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      value={textFieldValue}
                      onChange={(e) => {
                        setTextFieldValue(e.target.value);
                      }}
                    />
                  )}
                />
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  {activeStep === questionKeys.length - 1 ? (
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={betterSubmit}
                      disabled={isSubmitting || !textFieldValue}
                      sx={{ ml: 2 }}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      disabled={isSubmitting || !textFieldValue}
                      sx={{ ml: 2 }}
                    >
                      Next
                    </Button>
                  )}
                </div>
              </>
            )}
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MentalForm;
