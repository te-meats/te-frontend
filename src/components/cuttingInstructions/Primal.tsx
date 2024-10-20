import { CheckCircle, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";

interface PrimalProps {
    name: string,
    done?: boolean,
    children?: React.ReactNode
}

const Primal = (props: PrimalProps) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
            >
                { props.name } <CheckCircle sx={{ color: props.done ? 'green' : 'red', fontSize: 'small' }}/>
            </AccordionSummary>
            <AccordionDetails>
                { props.children }
            </AccordionDetails>
        </Accordion>
    );
};

export default Primal;