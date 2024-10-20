import { CheckCircle, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ReactNode } from "react";

interface CutProps {
    name: string,
    done?: boolean,
    children?: ReactNode
}

const Cut = (props: CutProps) => {
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

export default Cut;