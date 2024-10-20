import { Box, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, Select, SelectChangeEvent } from "@mui/material";
import { ReactNode, useState } from "react";
import Unit from "./Unit";

interface PrepType {
    name: string
    children?: ReactNode
    selected?: string
    unit: string
    onUnitChange: (e: SelectChangeEvent<string>) => void
}

const PrepTypeRadioOption = (props: PrepType) => {
    return (
        <>
            <FormControlLabel value={props.name} control={<Radio />} label={props.name} />
            <Unit name={props.name} visible={props.selected} handleUnitChange={props.onUnitChange} />
        </>
    );
};

export default PrepTypeRadioOption;