import SideBar from '@components/Nav/SideBar';
import { Box, Grid } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
    component: ReactNode,
}

const Dashboard = ({ component } : Props) => {
    return (
        <Grid container>
            <Grid >
                <SideBar />
            </Grid>
            <Grid>
                <Box>
                    {component}
                </Box>
            </Grid>
        </Grid>
    )
}

export default Dashboard;