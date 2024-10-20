import Header from "@components/Header";
import { Box } from "@mui/material";
import Pork from "./cuttingInstructions/Pork";

const CuttingInstructions = () => {
    return (
        <>
            <Header
                title="Cutting Instructions"
            />
            <Box className="container-content">
                <Pork />
            </Box>
        </>
    );
};

export default CuttingInstructions;