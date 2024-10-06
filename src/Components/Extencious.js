import React, { useState, useEffect } from "react";
import { Box, IconButton, Fab, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CallIcon from "@mui/icons-material/Call";

const Extencious = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Show/Hide the scroll-to-top button when scrolling down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        const targetElement = document.getElementById("footer-form");
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

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
        </Box>
    );
};

export default Extencious;
