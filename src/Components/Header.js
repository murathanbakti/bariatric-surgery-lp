import React from "react";
import {
    Box,
    Typography,
    Stack,
    Container,
    useMediaQuery,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTheme } from "@mui/material/styles";

const Header = () => {
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            sx={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                transition:
                    "backdrop-filter 0.3s ease, background-color 0.3s ease",
                borderBottom: "20px solid",
                borderColor: "primary.main",
                py: 2,
            }}
        >
            <Container
                maxWidth={"xl"}
                sx={{
                    display: "flex",
                    justifyContent: isTabletOrSmaller
                        ? "center"
                        : "space-between",
                    alignItems: "center",
                }}
            >
                <Stack
                    direction={"column"}
                    alignItems={isTabletOrSmaller ? "center" : "start"}
                    spacing={1}
                >
                    <img
                        src={"/logo-desktop.png"}
                        alt={"logo"}
                        style={{
                            width: isTabletOrSmaller ? "100%" : "90%",
                            objectFit: "cover",
                        }}
                    />
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        mt={isTabletOrSmaller ? 1 : 0}
                    >
                        <PhoneIcon color="secondary" />
                        <Typography
                            variant="h5"
                            fontWeight={700}
                            color="text.primary"
                        >
                            +44 7883 302306
                        </Typography>
                    </Stack>
                </Stack>

                {!isTabletOrSmaller && (
                    <Stack direction="row" spacing={3}>
                        <MenuItem
                            title="Surgery Options"
                            targetId="surgery-options"
                        />
                        <MenuItem
                            title="BMI Calculator"
                            targetId={"bmi-calculator"}
                        />
                        <MenuItem
                            title="Why Medicana"
                            targetId="why-medicana"
                        />
                        <MenuItem title="Doctors" targetId="doctors" />
                        <MenuItem
                            title="Additional Services"
                            targetId="services"
                        />
                        <MenuItem
                            title="Our Facilities"
                            targetId="our-facilities"
                        />
                    </Stack>
                )}
            </Container>
        </Box>
    );
};

const MenuItem = ({ title, targetId }) => {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ cursor: "pointer" }}
            onClick={handleClick}
        >
            <Box
                sx={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "secondary.main",
                    borderRadius: "50%",
                }}
            />
            <Typography variant="body1" color="text.primary">
                {title}
            </Typography>
        </Stack>
    );
};

export default Header;
