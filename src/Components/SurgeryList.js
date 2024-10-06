import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    Grid,
    Container,
    Collapse,
    Stack,
} from "@mui/material";

const surgeries = [
    {
        title: "Gastric Sleeve Surgery",
        overview:
            "Gastric Sleeve surgery involves removing approximately 80% of the stomach, leaving a tube-shaped stomach about the size of a banana. This not only restricts the amount of food you can eat but also significantly decreases hunger by reducing the hormone ghrelin. Performed laparoscopically, this procedure offers reduced recovery times and less post-operative discomfort.",
        hospitalStay: "2 Nights",
        duration: "5-6 Days",
        image: "/surgery-images/ameliyathane_3_04.png",
    },
    {
        title: "Gastric Sleeve Revision Surgery",
        overview:
            "Gastric Sleeve Revision surgery is intended for patients who have not achieved their desired weight loss goals with an initial Gastric Sleeve procedure, or who have experienced complications. This surgery may involve re-sleeving (reducing the stomach size further), or converting to another type of bariatric surgery such as a Gastric Bypass, depending on individual needs and previous outcomes. The revision is also performed using laparoscopic techniques to ensure minimal discomfort and faster recovery.",
        hospitalStay: "2-3 Nights",
        duration: "5-6 Days",
        image: "/surgery-images/ameliyathaneDavinci_006.png",
    },
    {
        title: "Robotic Gastric Sleeve Surgery",
        overview:
            "Utilizing state-of-the-art robotic technology, this surgery offers enhanced precision, flexibility, and control beyond traditional techniques. The robotic system provides surgeons with a high-definition, three-dimensional view, allowing for more precise and less invasive incisions. The entire procedure is performed laparoscopically, enhancing patient safety and recovery.",
        hospitalStay: "2-3 Nights",
        duration: "5-6 Days",
        image: "/surgery-images/kingSuit_002.png",
    },
    {
        title: "Gastric Bypass Surgery",
        overview:
            "Gastric Bypass, or Roux-en-Y Gastric Bypass, involves creating a small pouch at the top of the stomach. The small intestine is then cut a short distance below the main stomach and connected to the new pouch. Food flows directly from the pouch into this part of the intestine, bypassing most of your stomach. This surgery is performed laparoscopically, ensuring fewer complications and a faster recovery.",
        hospitalStay: "2-3 Nights",
        duration: "5-6 Days",
        image: "/surgery-images/kingSuit_023.png",
    },
    {
        title: "Metabolic Surgery for Type 2 Diabetes",
        overview:
            "Specifically tailored for individuals with Type 2 Diabetes and obesity, this surgery alters parts of the digestive system to affect metabolic regulation. The procedure aims to improve blood sugar control and reduce the need for diabetes medications by enhancing the body's insulin usage. The laparoscopic approach minimizes the surgical impact and speeds up the healing process.",
        hospitalStay: "2-3 Nights",
        duration: "5-7 Days",
        image: "/surgery-images/kingSuit_031.png",
    },
];

export const SurgeryList = () => {
    const [showMore, setShowMore] = useState(false);

    const initialSurgeries = surgeries.slice(0, 3);
    const extraSurgeries = surgeries.slice(3);

    return (
        <Container maxWidth="xl" id="surgery-options">
            <Typography variant="h4" color="primary" fontWeight={700} mb={4}>
                Surgery Options
            </Typography>
            <Grid container spacing={2}>
                {initialSurgeries.map((surgery, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Box
                            sx={{
                                height: "100%",
                                backgroundColor: "primary.main",
                                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                                borderRadius: "8px",
                                overflow: "hidden",
                                textAlign: "center",
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <img
                                src={surgery.image}
                                alt={surgery.title}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            <Box sx={{ padding: "16px", flexGrow: 1 }}>
                                <Typography variant="h6" fontWeight={700}>
                                    {surgery.title}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 1 }}>
                                    {surgery.overview}
                                </Typography>
                            </Box>
                            <Stack
                                direction="column"
                                justifyContent="space-between"
                                sx={{
                                    padding: "8px 16px",
                                    backgroundColor: "#fff2",
                                    color: "white",
                                }}
                            >
                                <Stack
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                >
                                    <Typography variant="subtitle1">
                                        Hospital Stay:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {surgery.hospitalStay}
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                >
                                    <Typography variant="subtitle1">
                                        Total Duration:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {surgery.duration}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Collapse in={showMore}>
                <Grid container spacing={2} mt={1}>
                    {extraSurgeries.map((surgery, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Box
                                sx={{
                                    height: "100%",
                                    backgroundColor: "primary.main",
                                    boxShadow:
                                        "0px 4px 15px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                    color: "white",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                <img
                                    src={surgery.image}
                                    alt={surgery.title}
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        objectFit: "cover",
                                    }}
                                />
                                <Box sx={{ padding: "16px", flexGrow: 1 }}>
                                    <Typography variant="h6" fontWeight={700}>
                                        {surgery.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 1 }}>
                                        {surgery.overview}
                                    </Typography>
                                </Box>
                                <Stack
                                    direction="column"
                                    justifyContent="space-between"
                                    sx={{
                                        padding: "8px 16px",
                                        backgroundColor: "#fff2",
                                        color: "white",
                                    }}
                                >
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                    >
                                        <Typography variant="subtitle1">
                                            Hospital Stay:
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            {surgery.hospitalStay}
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                    >
                                        <Typography variant="subtitle1">
                                            Total Duration:
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            {surgery.duration}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Collapse>

            <Box mt={3} textAlign="center" mb={4}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "50px",
                        textTransform: "none",
                        ":hover": {
                            backgroundColor: "primary.dark",
                        },
                    }}
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? "Show Less" : "Show More"}
                </Button>
            </Box>
        </Container>
    );
};
