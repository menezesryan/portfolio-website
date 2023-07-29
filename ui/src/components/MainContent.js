import { Grid, Typography } from "@mui/material";
import resource from "../resources/resource_en.json"

const MainContent = (props) => {
    console.log(resource["IDS_DEVELOPER_DESIGNATION"])
    return (
        <Grid container p={4} justifyContent={"center"} alignItems={"center"}>
            <Grid mt={5} md={8}>
                <Typography variant="h4" textAlign={"center"} color={"#a8b2d1"} >{resource["IDS_DEVELOPER_NAME"]}</Typography>
                <Typography color={"#ccd6f6"} textAlign={"center"} dangerouslySetInnerHTML={{ __html: resource["IDS_DEVELOPER_DESIGNATION"] }} />
                <Typography color={"#ccd6f6"} textAlign={"center"}>{resource["IDS_PROFILE_SUMMARY"]}</Typography>
            </Grid>
        </Grid >
    )
}

export default MainContent;

// const Container = styled(Box)`
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
// `