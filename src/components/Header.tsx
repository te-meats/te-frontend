import { Box } from "@mui/material";

type HeaderProps = {
    title: string
}

const Header = ({ title } : HeaderProps) => {
    return (
        <Box>{title}</Box>
    );
};

export default Header;