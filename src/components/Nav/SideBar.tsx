import { useAppDispatch } from "@hooks/hooks"
import { Home, Person, PostAdd, Settings, SettingsAccessibility } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '@assets/Sidebar.scss';

const SideBar = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <Box className="sidebar-header">
            <Box>
                <h2>
                    T&E Meats
                </h2>
            </Box>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText
                            primary="Home"
                            onClick={() => navigate('/home')}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText
                            primary="Customers"
                            onClick={() => navigate('/customers')}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <PostAdd />
                        </ListItemIcon>
                        <ListItemText
                            primary="Cutting Instructions"
                            onClick={() => navigate('/cutting-instructions')}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText
                            primary="User Management"
                            onClick={() => navigate('/users')}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default SideBar;