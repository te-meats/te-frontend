import Header from "@components/Header";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const CuttingInstructions = () => {
    return (
        <>
            <Header
                title="Cutting Instructions"
            />
            <FormControl>
                <FormLabel id="radio-buttons-group-label">Shoulder</FormLabel>
                <RadioGroup>
                    <FormControlLabel value="Picnic Roast" control={<Radio />} label="Picnic Roast" />
                    <FormControlLabel value="Roast" control={<Radio />} label="Roast" />
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default CuttingInstructions;