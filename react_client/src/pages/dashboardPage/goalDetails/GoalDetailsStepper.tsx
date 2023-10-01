import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { GoalDetailsStepperProps } from "./GoalDetails.types";

const GoalDetailsStepper: FC<GoalDetailsStepperProps> = ({ goal }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 1200 }}>
      goal.
      <Stepper activeStep={activeStep} orientation="vertical">
        {goal.path.map((step, index) => (
          <Step key={step.title}>
            <StepLabel
              optional={
                index === goal.path.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.title}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {step.practicalSteps && step.practicalSteps.length > 0 && (
                <div>
                  <Typography variant="h6">Practical Steps:</Typography>
                  <ul>
                    {step.practicalSteps.map((practicalStep, idx) => (
                      <li key={idx}>
                        {idx + 1}. {practicalStep}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === goal.path.length - 1 ? "Finish" : "Done"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === goal.path.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default GoalDetailsStepper;
