import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Button } from "@mui/material";
import { PrimalFormData, PrimalType } from "../../interfaces.ts";
import Cut from "@components/cuttingInstructions/Cut.tsx";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";

interface PrimalProps {
    primalForm: PrimalType
    primalState: PrimalFormData
    onChange: (primal: PrimalFormData) => void
    done?: boolean
}

const Primal = (props: PrimalProps) => {
    const [expandedList, setExpandedList] = useState<boolean[]>(Array(props.primalForm.cuts.length).fill(false));
    const handleChange = (cutId: string, name: string, value: string) => {
        props.onChange({
            id: props.primalState.id,
            primal: props.primalState.primal,
            cuts: props.primalState.cuts.map(cut => {
                if (cut.id === cutId) {
                    return {
                        ...cut,
                        [name]: value,
                    }
                } else {
                    return cut;
                }
            })
        })
    }

    const handleExpandAllChange = (e: boolean) => {
        setExpandedList(Array(props.primalForm.cuts.length).fill(e));
    }

    const handleSingleExpandChange = (expanded: boolean, index: number) => {
        setExpandedList(expandedList.map((originalExpanded, i) => {
            if (i === index) {
                return expanded;
            } else {
                return originalExpanded;
            }
        }));
    }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
            >
                {props.primalForm.name}
            </AccordionSummary>
            <AccordionDetails>
                <Grid container justifyContent="flex-end" spacing={2}>
                    <Button onClick={() => handleExpandAllChange(true)}>Expand All</Button>
                    <Button onClick={() => handleExpandAllChange(false)}>Collapse All</Button>
                </Grid>
                {props.primalState ? (
                    props.primalForm.cuts.map((cut, index) => {
                        return (
                            <Cut key={cut.id}
                                 cut={cut}
                                 onChange={handleChange}
                                 expanded={expandedList[index]}
                                 expandedIndex={index}
                                 setIsExpanded={handleSingleExpandChange}
                                 cutFormData={props.primalState.cuts[index]}
                            />
                        )
                    })
                ) : <></>}
            </AccordionDetails>
        </Accordion>
    );
};

export default Primal;