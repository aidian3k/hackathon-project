import React from 'react';
import { Paper, Typography } from '@mui/material';

interface PaperButtonProps {
    text: string;
    imgSrc: string;
}

const PaperButton: React.FC<PaperButtonProps> = ({ text, imgSrc }) => {
    return (
        <Paper elevation={4} className="relative p-3 paper-button" style={{ height: "100%", borderRadius: '20px', minHeight: "200px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: 'center' }}>
                <img  src={imgSrc} alt="Icon" />
                <Typography variant="h5" className="absolute bottom-4">{text}</Typography>
        </Paper>
    );
};

export default PaperButton;
