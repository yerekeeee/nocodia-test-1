import {TextField, Select, MenuItem, Paper, Typography} from '@mui/material';
import React from "react";

function Configuration({ contentTopic, setContentTopic, methodology, setMethodology }) {
    return (
        <Paper sx={{ padding: 2, backgroundColor: '#5b2196', marginBottom: 2 }}>
            <Typography variant="h4" sx={{color:'white' }} gutterBottom>Configuration</Typography>
            <TextField
                fullWidth
                variant="outlined"
                label="Тематика контента"
                value={contentTopic}
                onChange={(e) => setContentTopic(e.target.value)}
                sx={{ marginBottom: 2, backgroundColor: 'white'}}
            />
            <Select
                fullWidth
                value={methodology}
                onChange={(e) => setMethodology(e.target.value)}
                displayEmpty
                sx={{ marginBottom: 2, backgroundColor: 'white' }}
            >
                <MenuItem value="">Select a methodology</MenuItem>
                <MenuItem value="Method1">Methodology 1</MenuItem>
                <MenuItem value="Method2">Methodology 2</MenuItem>
            </Select>

        </Paper>
    );
}

export default Configuration;
