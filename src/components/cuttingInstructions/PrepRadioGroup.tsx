import {FormControl, FormLabel, RadioGroup} from "@mui/material";
import React, {ReactNode} from "react";

interface PrepRadioGroup {
    children: ReactNode
    onChange: (e: React.ChangeEvent<HTMLInputElement>, primalIndex: number, cutIndex: number) => void
    primalIndex: number
    cutIndex: number
}


const PrepRadioGroup = (props: PrepRadioGroup) => {
    return (
        <>
            <FormControl>
                <FormLabel id="radio-buttons-group-label">Cut</FormLabel>
                <RadioGroup onChange={(e) => props.onChange(e, props.primalIndex, props.cutIndex)}>
                    {props.children}
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default PrepRadioGroup;