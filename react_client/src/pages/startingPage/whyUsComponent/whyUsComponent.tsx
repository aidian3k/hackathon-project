import { FC } from "react";

import { Grid, Container, Box, Button, Typography } from "@mui/material";
import WhyUsPaper from "./whyUsPaper";

type WhyUsComponentProps = {
  openRegisterModal: () => void;
};

const WhyUsComponent: FC<WhyUsComponentProps> = ({ openRegisterModal }) => {
  return (
    <div>
      <Box bgcolor="#f5f5f5" p={2} m={9} sx={{ borderRadius: 2 }}>
        <Container style={{ marginTop: "20px" }}>
          {/*<h1>Join us if you:</h1>*/}
          <div className={"flex items-center justify-center"}>
            <h1 className="mb-10 md:text-4xl font-extrabold leading-none tracking-tight text-gray-900 mt-2">
              Join us if you:
            </h1>
          </div>
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

          <div className={"flex items-center justify-center"}>
            <h1 className="mt-20 mb-6 md:text-4xl font-bold leading-none tracking-tight text-gray-900 mt-2">
              So, become a part of our satisfied community!
            </h1>
          </div>
          <div className={"flex items-center justify-center"}>
            <Button variant="contained" color="primary" onClick={openRegisterModal}>
              Join Now
            </Button>
          </div>

        </Container>
      </Box>
    </div>
  );
};

export default WhyUsComponent;
