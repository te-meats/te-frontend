import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import { CutOption } from "../../interfaces.ts";
import CutTypeRadioOption from "@components/cuttingInstructions/CutTypeRadioOption.tsx";
import React from "react";

interface ICutRadioGroup {
    cutTypes: CutOption[]
    onChange: (name: string, value: string) => void
    value: string
    selectedCutType: string
}

const CutRadioGroup = (props: ICutRadioGroup) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange("cutType", e.target.value);
    }

    return (
        <>
            <FormControl>
                <FormLabel id="radio-buttons-group-label">Cut Type</FormLabel>
                <RadioGroup onChange={handleChange} defaultValue={props.value}>
                    {props.cutTypes.map(cutType => {
                        return (
                            <CutTypeRadioOption
                                cutType={cutType}
                                key={cutType.id}
                                onChange={props.onChange}
                                selectedCutType={props.selectedCutType}
                            />
                        )
                    })}
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default CutRadioGroup;