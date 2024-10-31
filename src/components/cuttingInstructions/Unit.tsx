import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {PrepOption} from "../../interfaces.ts";

interface UnitProps {
    name: string
    visible?: string
    handleUnitChange: (primalIndex: number, cutIndex: number, cutTypeIndex: number, prepTypeIndex: number, unitIndex: number) => void
    options: Array<PrepOption>
    primalIndex: number
    cutIndex: number
    cutTypeIndex: number
    prepTypeIndex: number
    unitIndex: number
}

const Unit = (props: UnitProps) => {
    const handleChange = (e: SelectChangeEvent<number>) => {
        props.handleUnitChange(props.primalIndex, props.cutIndex, props.cutTypeIndex, Number(e.target.value), 0);
    }

    const handleUnitChange = (e: SelectChangeEvent) => {
        props.handleUnitChange(props.primalIndex, props.cutIndex, props.cutTypeIndex, props.prepTypeIndex, Number(e.target.value));
    }

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
                            defaultValue={props.prepTypeIndex}
                            value={props.prepTypeIndex}
                            onChange={handleChange}
                        >
                            {
                                props.options.map((option, i) =>
                                    <MenuItem
                                        key={i}
                                        value={i}
                                    >
                                        {option.value}
                                    </MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Unit"
                            defaultValue={props.unitIndex}
                            value={props.unitIndex}
                            onChange={handleUnitChange}
                        >
                            {
                                props.options[props.prepTypeIndex].units.map((unit, i) =>
                                    <MenuItem
                                        key={i}
                                        value={i}
                                    >
                                        {unit}
                                    </MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </>
            )}
        </>
    );
};

export default Unit;