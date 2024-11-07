import React from "react";
import { fetchLiveWeight } from "@actions/weightStation";
import Header from "@components/Header";
import CustomerSearchOverlay from "@components/CustomerSearchOverlay";
import { useAppDispatch } from "@hooks/hooks";
import { Box, Button, TextField, FormControl, Stepper, Step, StepLabel, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";


const WeightStation = () => {
    const dispatch = useAppDispatch();

    // const liveWeight = useAppSelector(state => state.weightStation.weightStation.live_weight);
    const [activeStep, setActiveStep] = useState(0);
    interface FormData {
        customer?: string | number;
        [key: string]: string | number | undefined;
    }

    const [formData, setFormData] = useState<FormData>({});

    const steps = ['Select Customer', 'Enter Details', 'Weight Scale'];

    useEffect(() => {
        dispatch(fetchLiveWeight());
    }, [dispatch]);

    const handleNextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBackStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onSelectCustomer = (event: SelectChangeEvent<string | number>) => {
        setFormData({ ...formData, customer: event.target.value as string | number });
    };
    // unused
    const onDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const onScaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Ensuring the input matches the format: only digits, max length of 8
        const { value } = event.target;
        const normalizedValue = value.replace(/[^0-9]/g, '').slice(0, 8);
        setFormData({ ...formData, weightScale: normalizedValue });
    };

    const getStepContent = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return (
                    <FormControl fullWidth>
                        <CustomerSearchOverlay />
                    </FormControl>
                );
            case 1:
                return (
                    <Box>
                        {["Age", "Sex", "Gender", "30mos", "Field5"].map((field, index) => (
                            <TextField
                                key={index}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                label={field}
                                value={formData[field] || ''}
                                onChange={onDetailsChange}
                                name={field}
                            />
                        ))}
                    </Box>
                );
            case 2:
                return (
                    <TextField
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        label="Weight Scale"
                        value={formData['weightScale'] || ''}
                        onChange={onScaleChange}
                        name="weightScale"
                        inputProps={{
                            maxLength: 8,
                            style: { fontSize: '2rem' }  // Increase font size for better visibility
                        }}
                    />
                );
            default:
                return 'Unknown step';
        }
    };

    return (
        <>
            <Header title="Weight Station" />
            <Box className="container-content">
                <Stepper activeStep={activeStep} alternativeLabel sx={{ pt: 3 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{ my: 2 }}>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBackStep}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNextStep}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default WeightStation;
