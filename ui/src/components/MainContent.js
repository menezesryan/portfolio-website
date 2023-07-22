import { Box, Typography } from "@mui/material";
import resource from "../resources/resource_en.json"
import styled from "styled-components";

const MainContent = (props) => {
    console.log(resource["IDS_DEVELOPER_DESIGNATION"])
    return (
        <Container>
            <Typography variant="h3" color={"#a8b2d1"}>{resource["IDS_DEVELOPER_NAME"]}</Typography>
            <Typography color={"#ccd6f6"} dangerouslySetInnerHTML={{ __html: resource["IDS_DEVELOPER_DESIGNATION"] }} />
            <Typography color={"#ccd6f6"} variant="p">{resource["IDS_PROFILE_SUMMARY"]}</Typography>
        </Container>
    )
}

export default MainContent;

const Container = styled(Box)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    // align-items:center;
`