import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, Container, Box, Button } from '@mui/material';
import PaperButton from './PaperButton';
import "./chooseAreaToTrainModal.css";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px',
};

export default function ChooseAreaToTrainModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box bgcolor="#f5f5f5" p={2} sx={style}>
                    <h1>What skills do you want to improve?</h1>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={4}>
                            <PaperButton text="Physical" imgSrc="https://img.freepik.com/free-vector/smart-training-abstract-concept-vector-illustration-smart-training-online-programs-tools-new-gym-technology-fitness-coaching-application-improve-health-fat-loss-toning-abstract-metaphor_335657-4009.jpg?w=826&t=st=1696087870~exp=1696088470~hmac=5d8dbdb47705ca5e80019fd7064605b4ca15abb06b50b5e627a9e124f48843d8" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <PaperButton text="Mental" imgSrc="https://img.freepik.com/free-vector/gaslighting-abstract-concept-vector-illustration-psychological-manipulation-method-mental-destabilization-cognitive-dissonance-creation-changing-beliefs-contradiction-abstract-metaphor_335657-4220.jpg?w=826&t=st=1696087577~exp=1696088177~hmac=7691b35711258c889c23f525041fa00f207c9b941eee33127db737f03f25e88f" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <PaperButton text="Physical & Mental" imgSrc="https://img.freepik.com/free-vector/businessman-working-flying-like-superhero-with-briefcase-start-up-launch-start-up-venture-entrepreneurship-concept_335657-157.jpg?w=1380&t=st=1696095437~exp=1696096037~hmac=a374db3b9573a18e6cbd4ef89292016e6893a22d2ea419ac4e10debaefa3032c" />
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
