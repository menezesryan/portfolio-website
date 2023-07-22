import { Box, Typography } from "@mui/material";
import resource from "../resources/resource_en.json"

const MainContent = (props) => {
    console.log(resource["IDS_DEVELOPER_DESIGNATION"])
    return (
        <Box>
            <Typography variant="h1">{resource["IDS_DEVELOPER_NAME"]}</Typography>
            <Typography dangerouslySetInnerHTML={{ __html: resource["IDS_DEVELOPER_DESIGNATION"] }} />
            <Typography variant="p">{resource["IDS_PROFILE_SUMMARY"]}</Typography>
        </Box>
    )
}

export default MainContent;