import {Box, Typography, Paper, Button} from '@mui/material';
import React from "react";

function Workspace({ generatedText, generateText, updateText, saveToDatabase, copyToClipboard, clearAllFields }) {
    return (
        <Paper sx={{ padding: 2, backgroundColor: '#5b2196' }}>
            <Typography variant="h5" sx={{color:'white' }} gutterBottom>Workspace</Typography>
            <Typography sx={{color:'white' }}>Generated Text:</Typography>
            <Box sx={{ marginTop: 2, marginBottom: 2, padding: 2, backgroundColor: '#5a5a8c', minHeight: '80px' }}>
                {generatedText}
            </Box>
            <Button variant="contained" onClick={generateText} sx={{ marginRight: 1 }}>Generate Text</Button>
            <Button variant="contained" onClick={updateText} sx={{ marginRight: 1 }}>Update</Button>
            <Button variant="contained" onClick={saveToDatabase} sx={{ marginRight: 1 }}>Save</Button>
            <Button variant="contained" onClick={copyToClipboard} sx={{ marginRight: 1 }}>Copy</Button>
            <Button variant="contained" onClick={clearAllFields} color="error">Clear</Button>
        </Paper>
    );
}

export default Workspace;
