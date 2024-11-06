import { FormControlLabel, Radio } from "@mui/material";
import PrepTypeOption from "./PrepTypeOption.tsx";
import { CutFormData, CutOption } from "../../interfaces.ts";
import Cut from "@components/cuttingInstructions/Cut.tsx";

interface CutType {
    cutType: CutOption
    onChange: (name: string, value: string) => void
    selectedCutType: string
}

const CutTypeRadioOption = (props: CutType) => {
    const cutFormData: CutFormData = {}
    return (
        <>
            <FormControlLabel value={props.cutType.name} control={<Radio />} label={props.cutType.name} />
            {props.selectedCutType === props.cutType.name && props.cutType.prepTypes.length > 0 && (
                <PrepTypeOption prepTypes={props.cutType.prepTypes}
                                prepOptionIndex={props.cutType.selectedPrepOptionIndex}
                                onChange={props.onChange}
                />
            )}
            {props.cutType.subCuts && (
                props.cutType.subCuts.map(((subCut, index) => {
                        return (
                            <Cut
                                key={`subCut-${subCut.id}`}
                                cut={subCut}
                                onChange={() => {}}
                                expanded={true}
                                expandedIndex={index}
                                setIsExpanded={() => {}}
                                cutFormData={cutFormData}
                            />
                        )
                    })
                ))}
        </>
    );
};

export default CutTypeRadioOption;