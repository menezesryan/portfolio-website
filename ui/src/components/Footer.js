import { Box } from "@mui/material";
import styled from "styled-components";
import resource from "../resources/resource_en.json"

function Footer() {
    return (
        <Container>
            {resource["IDS_COMING_SOON"]}
        </Container>
    )

}

export default Footer;

const Container = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.main
}))