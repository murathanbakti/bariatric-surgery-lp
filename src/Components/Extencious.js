import React, { useState, useEffect, useCallback } from "react";
import {
    Box,
    IconButton,
    Fab,
    Button,
    Modal,
    Typography,
    TextField,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CallIcon from "@mui/icons-material/Call";
import CloseIcon from "@mui/icons-material/Close";

const Extencious = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [openModal, setOpenModal] = useState(true);

    const handleScroll = useCallback(() => {
        setShowScrollTop(window.scrollY > 300);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const handleModalClose = useCallback(() => {
        setOpenModal(false);
        setTimeout(() => setOpenModal(true), 45000);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleClick = useCallback(() => {
        const targetElement = document.getElementById("footer-form");
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, []);

    return (
        <Box>
            {/* WhatsApp Button */}
            <IconButton
                href="https://api.whatsapp.com/send/?phone=447883302306&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    position: "fixed",
                    bottom: "20px",
                    left: "20px",
                    zIndex: 99,
                    backgroundColor: "#25D366",
                    color: "white",
                    "&:hover": {
                        backgroundColor: "#128C7E",
                    },
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                }}
            >
                <WhatsAppIcon fontSize="large" />
            </IconButton>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <Fab
                    color="primary"
                    aria-label="scroll back to top"
                    onClick={scrollToTop}
                    sx={{
                        position: "fixed",
                        bottom: "80px",
                        right: "20px",
                        zIndex: 1000,
                        backgroundColor: "secondary.main",
                        "&:hover": {
                            backgroundColor: "#007C91",
                        },
                    }}
                >
                    <ArrowUpwardIcon />
                </Fab>
            )}

            {/* "Get a Consultation" Button */}
            <Button
                onClick={handleClick}
                variant="contained"
                sx={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 1000,
                    backgroundColor: "primary.main",
                    "&:hover": {
                        backgroundColor: "#002244",
                    },
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                    borderRadius: 2,
                    fontSize: 16,
                    fontWeight: 700,
                }}
                startIcon={<CallIcon />}
            >
                Get a Consultation
            </Button>

            {/* Modal for the Form */}
            <Modal
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="patient-form-modal"
                aria-describedby="patient-form-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        borderRadius: "8px",
                        boxShadow: 24,
                        p: 4,
                        maxWidth: "90%",
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{ position: "absolute", top: 5, right: 10 }}
                        onClick={handleModalClose}
                        color="error"
                    >
                        <CloseIcon />
                    </Button>
                    <Typography
                        variant="h6"
                        color="primary"
                        sx={{ marginBottom: "20px" }}
                    >
                        If you are a patient, please fill out the form
                    </Typography>
                    <form>
                        <TextField
                            fullWidth
                            label="Full Name"
                            required
                            variant="standard"
                            sx={{ marginBottom: "16px" }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            required
                            variant="standard"
                            sx={{ marginBottom: "16px" }}
                        />
                        <TextField
                            fullWidth
                            label="Mobile No"
                            required
                            variant="standard"
                            sx={{ marginBottom: "16px" }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Modal>
        </Box>
    );
};

export default Extencious;
