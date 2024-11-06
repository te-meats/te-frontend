import { CheckCircle, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { CutFormData, CutType } from "../../interfaces.ts";
import CutRadioGroup from "@components/cuttingInstructions/CutRadioGroup.tsx";
import { useState } from "react";

interface CutProps {
    cut: CutType
    done?: boolean
    onChange: (cutId: string, name: string, value: string) => void
    expanded: boolean
    expandedIndex: number
    setIsExpanded: (expanded: boolean, index: number) => void
    cutFormData: CutFormData
}

const Cut = (props: CutProps) => {
    const [selectedCutType, setSelectedCutType] = useState<string>(props.cutFormData.cutType);

    const handleChange = (name: string, value: string) => {
        if (name === "cutType") {
            setSelectedCutType(value);
        }
        props.onChange(props.cut.id, name, value);
    }

    return (
        <Accordion expanded={props.expanded}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                onClick={() => props.setIsExpanded(!props.expanded, props.expandedIndex)}
            >
                {props.cut.name} <CheckCircle sx={{ color: props.done ? 'green' : 'red', fontSize: 'small' }} />
            </AccordionSummary>
            <AccordionDetails>
                <CutRadioGroup cutTypes={props.cut.cutTypes}
                               key={props.cutFormData.cutType}
                               value={props.cutFormData.cutType}
                               onChange={handleChange}
                               selectedCutType={selectedCutType}
                />
            </AccordionDetails>
        </Accordion>
    );
};

export default Cut;