import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect } from "react";
import GoalDetailsStepper from "./GoalDetailsStepper";
import GoalDescription from "./GoalDescription";
import { sendBuildUserGoalsRequest } from "../../../api/buildUserGoals/sendBuildUserGoalsRequest";
import { Goal } from "./GoalDetails.types";

interface goalDetailsProps {
  goal: Goal;
}

export const GoalDetails: FC<goalDetailsProps> = ({ goal }) => {
  useEffect(() => {
    const data = new Map<string, string>().set("Q1", "A1").set("Q2", "A2");
    sendBuildUserGoalsRequest(data).then((res) => console.log(res));
  }, []);
  return (
    <Box bgcolor="#f5f5f5" p={2} sx={{ borderRadius: 2 }}>
      <Container style={{ marginTop: "20px" }}>
        <Typography variant="h4">{goal.title}</Typography>
        <GoalDescription></GoalDescription>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <GoalDetailsStepper goal={goal}></GoalDetailsStepper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GoalDetails;
