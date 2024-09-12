import { fetchLiveWeight } from "@actions/weightStation";
import Header from "@components/Header";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { Box } from "@mui/material";
import { useEffect } from "react";

const WeightStation = () => {
    const dispatch = useAppDispatch();

    const liveWeight = useAppSelector(state => state.weightStation.weightStation.live_weight);
    // const liveWeightLoading = useAppSelector(state => state.weightStation.pending);

    useEffect(() => {
        dispatch(fetchLiveWeight());
    }, [])

    return (
        <>
            <Header
                title="Weight Station"
            />
            <Box className="container-content">
                Live Weight: {liveWeight}
            </Box>
        </>
    );
}

export default WeightStation;