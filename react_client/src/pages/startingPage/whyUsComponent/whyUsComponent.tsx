import { FC } from "react";
import { Paper, Typography, Grid, Container, Box, Button } from "@mui/material";
import WhyUsPaper from "./whyUsPaper";

type WhyUsComponentProps = {
  openRegisterModal: () => void;
};

const WhyUsComponent: FC<WhyUsComponentProps> = ({ openRegisterModal }) => {
  return (
    <Box bgcolor="#f5f5f5" p={2} sx={{ borderRadius: 2 }}>
      <Container style={{ marginTop: "20px" }}>
        {/*<h1>Join us if you:</h1>*/}
        <Typography variant="h4">Join us if you:</Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <WhyUsPaper
              text="Want to improve your physical skills"
              imgSrc="https://img.freepik.com/free-vector/smart-training-abstract-concept-vector-illustration-smart-training-online-programs-tools-new-gym-technology-fitness-coaching-application-improve-health-fat-loss-toning-abstract-metaphor_335657-4009.jpg?w=826&t=st=1696087870~exp=1696088470~hmac=5d8dbdb47705ca5e80019fd7064605b4ca15abb06b50b5e627a9e124f48843d8"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <WhyUsPaper
              text="Desire effective mental development"
              imgSrc="https://img.freepik.com/free-vector/gaslighting-abstract-concept-vector-illustration-psychological-manipulation-method-mental-destabilization-cognitive-dissonance-creation-changing-beliefs-contradiction-abstract-metaphor_335657-4220.jpg?w=826&t=st=1696087577~exp=1696088177~hmac=7691b35711258c889c23f525041fa00f207c9b941eee33127db737f03f25e88f"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <WhyUsPaper
              text="Wish to extract the most from life"
              imgSrc="https://img.freepik.com/free-vector/responsibility-abstract-illustration_335657-4977.jpg?w=826&t=st=1696087674~exp=1696088274~hmac=3ae88427f0d4410f59b8c6f3114503c0b01d0df7e3bdeefa3489b339eef283da"
            />
          </Grid>
        </Grid>
        <h2> So, become a part of our satisfied community!</h2>
        <Button variant="contained" color="primary" onClick={openRegisterModal}>
          Join Now
        </Button>
      </Container>
    </Box>
  );
};

export default WhyUsComponent;
