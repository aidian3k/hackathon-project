import { FC } from "react";
import { Paper, Typography, Box } from '@mui/material';

interface WhyUsPaperProps {
    text: string;
    imgSrc: string;
}

const WhyUsPaper: FC<WhyUsPaperProps> = ({ text, imgSrc }) => {
    return (
        <Paper elevation={4} className="p-3" sx={{ borderRadius: '20px', minHeight: "200px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: 'center' }}>
            <img height="200px" src={imgSrc} alt="Icon" />
            <Box p={2}>
                <Typography variant="h5">{text}</Typography>
            </Box>
        </Paper>
    );
};

export default WhyUsPaper;
