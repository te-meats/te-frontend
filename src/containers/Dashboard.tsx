import SideBar from '@components/Nav/SideBar';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
import { ReactNode } from 'react';

type Props = {
    component: ReactNode,
}

const Dashboard = ({ component } : Props) => {
    return (
        <Grid container>
            <Grid xs={12} md={2}>
                <SideBar />
            </Grid>
            <Grid xs={12} md={10}>
                <Box>
                    {component}
                </Box>
            </Grid>
        </Grid>
    )
}

export default Dashboard;