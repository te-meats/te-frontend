import { useAppDispatch } from "@hooks/hooks"
import { Home, Person, PostAdd } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
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
        </List>
    )
}

export default SideBar;