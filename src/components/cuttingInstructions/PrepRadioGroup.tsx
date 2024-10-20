import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import { ReactNode } from "react";

interface PrepRadioGroup {
    children: ReactNode
    onChange: (e: React.ChangeEvent<HTMLInputElement>, primalKey: string, cutKey: string) => void
    primalKey: string
    cutKey: string
}


const PrepRadioGroup = (props: PrepRadioGroup) => {
    return (
        <>
            <FormControl>
                <FormLabel id="radio-buttons-group-label">Cut</FormLabel>
                <RadioGroup onChange={(e) => props.onChange(e, props.primalKey, props.cutKey)}>
                    { props.children }
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default PrepRadioGroup;