import Header from "@components/Header";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const CuttingInstructions = () => {
    return (
        <>
            <Header
                title="Cutting Instructions"
            />
            <Box className="container-content">
                <FormControl>
                    <FormLabel id="radio-buttons-group-label">Shoulder</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value="Picnic Roast" control={<Radio />} label="Picnic Roast" />
                        <FormControlLabel value="Roast" control={<Radio />} label="Roast" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </>
    );
};

export default CuttingInstructions;