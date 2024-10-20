import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface UnitProps {
    name: string,
    visible?: string,
    handleUnitChange: (e: SelectChangeEvent<string>) => void
}

const Unit = (props: UnitProps) => {
    return (
        <>
            {props.name === props.visible && (
                <>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Preparation</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Preparation"
                            name={props.name}
                            defaultValue={props.name}
                            value={props.name}
                            onChange={props.handleUnitChange}
                        >
                            <MenuItem value={"Roast"}>Roast</MenuItem>
                            <MenuItem value={"Steak"}>Steak</MenuItem>
                            <MenuItem value={"Kebab"}>Kebab</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            value={10}
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </>
            )}
        </>
    );
};

export default Unit;