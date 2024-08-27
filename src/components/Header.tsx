import { Box, Button } from "@mui/material";
import '@assets/Header.scss'

type HeaderProps = {
    title: string,
    actions?: Function,
    actionTitle?: string,
}

const Header = ({ title, actionTitle, actions } : HeaderProps) => {
    return (
        <Box className="header">
            <h1>
                {title}
            </h1>
            <div>
                {actionTitle && (
                    <Button
                        variant='contained'
                        onClick={() => actions?.()}
                    >
                        {actionTitle}
                    </Button>
                )}
            </div>
        </Box>
    );
};

export default Header;