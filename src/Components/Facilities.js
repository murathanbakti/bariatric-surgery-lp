import React, { useState } from "react";
import { Box, Typography, Grid, Modal, Container, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const images = [
    { src: "/Facilities/atakoy-hastanesi.jpg", desc: "Ataköy / Istanbul" },
    {
        src: "/Facilities/medicana-atasehir-hospital.jpg",
        desc: "Ataşehir / Istanbul",
    },
    {
        src: "/Facilities/medicana-beylikduzu-hospital.jpg",
        desc: "Beylikdüzü / Istanbul",
    },
    { src: "/Facilities/medicana-bursa-hospital.jpg", desc: "Bursa" },
    { src: "/Facilities/medicana-izmir-hospital.jpg", desc: "Izmir" },
    {
        src: "/Facilities/medicana-zincirlikuyu-hospital.jpg",
        desc: "Zincirlikuyu / Istanbul",
    },
];

const Facilities = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <Box sx={{ py: 4 }} id="our-facilities">
            <Container maxWidth={"xl"}>
                <Typography variant="h4" fontWeight={700} mb={3}>
                    Our Facilities
                </Typography>

                <Grid container spacing={2}>
                    {images.map((image, index) => (
                        <Grid item xs={6} md={4} key={index}>
                            <Box
                                component="img"
                                src={image.src}
                                alt={`Gallery image ${index + 1}`}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    cursor: "pointer",
                                    borderRadius: "8px",
                                    boxShadow:
                                        "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                }}
                                onClick={() => handleOpen(image)}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Modal open={open} onClose={handleClose}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 7,
                            borderRadius: "8px",
                            maxWidth: "80%",
                            maxHeight: "80%",
                            overflow: "auto",
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{ position: "absolute", top: 10, right: 10 }}
                            onClick={handleClose}
                            color="error"
                        >
                            <CloseIcon />
                        </Button>
                        {selectedImage && (
                            <>
                                <Box
                                    component="img"
                                    src={selectedImage.src}
                                    alt="Selected gallery image"
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "8px",
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mt: 2,
                                        textAlign: "center",
                                        fontWeight: 600,
                                    }}
                                >
                                    {selectedImage.desc}
                                </Typography>
                            </>
                        )}
                    </Box>
                </Modal>
            </Container>
        </Box>
    );
};

export default Facilities;
