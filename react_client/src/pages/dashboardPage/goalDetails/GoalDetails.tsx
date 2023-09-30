import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { FC } from "react";
import GoalDetailsStepper from "./GoalDetailsStepper";
import GoalDescription from "./GoalDescription";

export const GoalDetails: FC = () => {
  return (
    <Box bgcolor="#f5f5f5" p={2} sx={{ borderRadius: 2 }}>
      <Container style={{ marginTop: "20px" }}>
        <Typography variant="h4">My health in my hands</Typography> 
        <GoalDescription></GoalDescription>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <GoalDetailsStepper></GoalDetailsStepper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GoalDetails;
