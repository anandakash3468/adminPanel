import MDBox from "../../components/MdBox";
import PropTypes from "prop-types";
import { Icon, Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MdTypography from "../../components/MDTypography"
function Breadcrumbs({ icon, title, route, light }) {
    //console.log("routes is", route);
    const routes = route.slice(0, -1);
    //console.log("const routes = route.slice(0, -1);", routes)
    return (
        <MDBox mr={{ xs: 0, xl: 8, mt: 2 }}>
            <MuiBreadcrumbs
                sx={{
                    "& .MuiBreadcrumbs-separator": {
                        color: ({ palette: { white, grey } }) => (light ? white.main : grey[600]),
                    },
                }}
            >
                <Link to="/">
                    <MdTypography
                        component="span"
                        variant="body2"
                        color={light ? "white" : "dark"}
                        opacity={light ? 0.8 : 0.5}
                        sx={{ lineHeight: 0 }}
                    >
                        <Icon><HomeIcon /></Icon>
                    </MdTypography>
                </Link>
                {routes.map((el) => (
                    <Link to={`/${el}`} key={el}>
                        <MdTypography
                            component="span"
                            variant="button"
                            fontWeight="regular"
                            textTransform="capitalize"
                            color={light ? "white" : "dark"}
                            opacity={light ? 0.8 : 0.5}
                            sx={{ lineHeight: 0 }}
                        >
                            {el}
                        </MdTypography>
                    </Link>
                ))}
                <MdTypography
                    variant="button"
                    fontWeight="regular"
                    textTransform="capitalize"
                    color={light ? "white" : "dark"}
                    sx={{ lineHeight: 0 }}
                >
                    {title.replace("-", " ")}
                </MdTypography>
            </MuiBreadcrumbs>
            <MdTypography
                fontWeight="bold"
                textTransform="capitalize"
                variant="h6"
                color={light ? "white" : "dark"}
                noWrap
            >
                {title.replace("-", " ")}
            </MdTypography>
        </MDBox>
    );

}

// Setting default values for the props of Breadcrumbs
Breadcrumbs.defaultProps = {
    light: false,
};

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    route: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    light: PropTypes.bool,
};

export default Breadcrumbs;