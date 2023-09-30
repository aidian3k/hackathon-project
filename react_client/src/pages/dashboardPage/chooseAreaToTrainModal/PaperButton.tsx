import React from 'react';
import { Paper, Typography } from '@mui/material';

interface PaperButtonProps {
    text: string;
    imgSrc: string;
}

const PaperButton: React.FC<PaperButtonProps> = ({ text, imgSrc }) => {
    return (
        <Paper elevation={4} className="p-3 paper-button" style={{ borderRadius: '20px', minHeight: "200px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: 'center' }}>
            <img height="200px" src={imgSrc} alt="Icon" />
            <Typography variant="h5">{text}</Typography>
        </Paper>
    );
};

export default PaperButton;
