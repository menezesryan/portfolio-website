import { Box } from "@mui/material";
import styled from "styled-components";

function Footer() {
    return (
        <Container>

        </Container>
    )

}

export default Footer;

const Container = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.main
}))