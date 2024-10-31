import {FormControlLabel, Radio} from "@mui/material";
import {ReactNode} from "react";
import Unit from "./Unit";
import {PrepOption} from "../../interfaces.ts";

interface PrepType {
    name: string
    children?: ReactNode
    selected?: string
    options: Array<PrepOption>
    onUnitChange: (primalIndex: number, cutIndex: number, prepTypeIndex: number, cutTypeIndex: number, unitIndex: number) => void
    primalIndex: number
    cutIndex: number
    cutTypeIndex: number
    selectedPrepTypeIndex: number
    selectedUnitIndex: number
}

const PrepTypeRadioOption = (props: PrepType) => {
    return (
        <>
            <FormControlLabel value={props.name} control={<Radio/>} label={props.name}/>
            <Unit
                name={props.name}
                visible={props.selected}
                handleUnitChange={props.onUnitChange}
                options={props.options}
                primalIndex={props.primalIndex}
                cutIndex={props.cutIndex}
                cutTypeIndex={props.cutTypeIndex}
                prepTypeIndex={props.selectedPrepTypeIndex}
                unitIndex={props.selectedUnitIndex}
            />
        </>
    );
};

export default PrepTypeRadioOption;