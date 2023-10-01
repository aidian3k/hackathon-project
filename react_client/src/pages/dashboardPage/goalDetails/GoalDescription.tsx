import { FC } from "react";
import { Box, Container, Grid, Link, Paper, Typography } from "@mui/material";

const GoalDescription: FC = () => {
    return (
        <Box bgcolor="#f5f5f5" p={2} sx={{ borderRadius: 2 }}>
            <Container style={{ marginTop: "20px" }}>
                <Paper elevation={4} className="p-3" sx={{ borderRadius: '20px', minHeight: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: 'center' }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <Box p={2}>
                                <Typography variant="h6">My Health in My Hands" signifies personal responsibility for well-being. It emphasizes proactive choices in physical and mental health management. In a complex healthcare environment, it underscores the importance of preventive measures, self-awareness, and daily decisions. Embracing this mindset empowers individuals to take control of their health journey, fostering autonomy and resilience in achieving overall well-being.</Typography>
                                <p>Learn more: <Link href="https://pornhub.com">Best exercises to stay in shape</Link></p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img height="100%" src="https://img.freepik.com/free-vector/tiny-cardiology-doctor-nurse-examining-heart-blood-pressure-prescribing-treatment-medical-cardiovascular-checkup-flat-vector-illustration-anatomy-hospital-heart-diseases-health-care-concept_74855-20963.jpg?w=1380&t=st=1696111863~exp=1696112463~hmac=6b704023cfecb7496e12f3ca6f92e3d8de8cbee2f08407d7703aa1bc1fa8492d" alt="Icon" />
                        </Grid>
                    </Grid>
                </Paper>
            </Container >
        </Box >
    );
};

export default GoalDescription;
