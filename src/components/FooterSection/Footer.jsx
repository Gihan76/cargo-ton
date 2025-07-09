import { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Link,
    List,
    ListItem,
    ListItemIcon,
    IconButton,
    TextField,
    Button,
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const customerServices = [
    { text: 'Support Forums', icon: <KeyboardArrowRightIcon /> },
    { text: 'Communication', icon: <KeyboardArrowRightIcon /> },
    { text: 'FAQS', icon: <KeyboardArrowRightIcon /> },
    { text: 'Privacy Policy', icon: <KeyboardArrowRightIcon /> },
    { text: 'Rules & Condition', icon: <KeyboardArrowRightIcon /> },
    { text: 'Contact Us', icon: <KeyboardArrowRightIcon /> }
]

export const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    // Check if scroll position is beyond 300px
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    return (
        <Box
            sx={{
                backgroundColor: "#5d6c83",
                color: "white",
                mt: 3,
                pt: 4,
            }}
        >
            {/* Newsletter Section */}
            <Grid container size={12} sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                        }}
                    >
                        Weekly Newsletter
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 3
                        }}
                    >
                        Nam libero tempore, cum soluta nobis est eligendi
                    </Typography>
                </Grid>
                <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        <TextField
                            variant="outlined"
                            placeholder='Enter Your Mail'
                            type='email'
                            sx={{
                                backgroundColor: "white",
                                width: "400px",
                                mr: "20px",
                                borderRadius: 2,
                            }}
                        />
                        <Button
                            variant='contained'
                            sx={{
                                color: "white",
                                backgroundColor: "#f9bf04",
                                borderRadius: 2,
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container sx={{ display: "flex", justifyContent: "center", textAlign: "center", mx: 8 }}>
                {/* About Us */}
                <Grid size={{xs: 12, md: 3}}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            mb: 3,
                        }}
                    >
                        About Us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: "#8c98b0" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LocalPhoneIcon sx={{ mr: 1, color: "#8c98b0" }} />
                        <Typography variant="body1" sx={{ color: "#8c98b0" }}>
                            | <a href='tel:+94114347575' style={{ textDecoration: "none", color: "#8c98b0"}}>(+94) 11 434 7575</a>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <LocationPinIcon sx={{ mr: 1, color: "#8c98b0" }} />
                        <Typography variant="body1" sx={{ color: "#8c98b0" }}>
                            | 42 Lily Ave, Colombo 00600
                        </Typography>
                    </Box>
                </Grid>

                {/* Latest News */}
                <Grid size={{ xs: 12, md: 3 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            mb: 3,
                        }}
                    >
                        Latest News
                    </Typography>
                    <List>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                                <KeyboardArrowRightIcon sx={{ mr: 1, color: "#8c98b0" }} />
                            </ListItemIcon>
                            <Box>
                                <Typography variant="body1" sx={{color: "#8c98b0"}}>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                </Typography>
                                <Typography variant="caption" sx={{ color: "#8c98b0" }}>
                                    5 Minutes Ago
                                </Typography>
                            </Box>
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                                <KeyboardArrowRightIcon sx={{ mr: 1, color: "#8c98b0" }} />
                            </ListItemIcon>
                            <Box>
                                <Typography variant="body1" sx={{color: "#8c98b0"}}>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                </Typography>
                                <Typography variant="caption" sx={{ color: "#8c98b0" }}>
                                    5 Minutes Ago
                                </Typography>
                            </Box>
                        </ListItem>
                    </List>
                </Grid>

                {/* Customer Service Section */}
                <Grid size={{ xs: 12, md: 3 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            mb: 3,
                        }}
                    >
                        Customer Service
                    </Typography>

                    <List>
                        {customerServices.map((item, index) => (
                            <ListItem key={index} sx={{ px: 8 }}>
                                <ListItemIcon sx={{ minWidth: 30, color: "#8c98b0" }}>
                                    {item.icon}
                                </ListItemIcon>
                                <Link
                                    href="#"
                                    sx={{
                                        color: "#8c98b0",
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: "#f9bf04",
                                        }
                                    }}
                                >
                                    {item.text}
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                
            </Grid>

            {/* Copyright Section */}
            <Grid container size={12} sx={{ display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
                <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <Typography
                        variant="body2"
                    >
                        Copyright&copy; {new Date().getFullYear()} All Rights Reserved. Site By Xiteb&reg;
                    </Typography>
                    <div></div>
                </Grid>
                <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        <IconButton aria-label="Facebook">
                            <FacebookIcon sx={{ color: "white" }} />
                        </IconButton>
                        <IconButton aria-label="X">
                            <XIcon sx={{ color: "white" }} />
                        </IconButton>
                        <IconButton aria-label="Instagram">
                            <InstagramIcon sx={{ color: "white" }} />
                        </IconButton>
                        <IconButton aria-label="Youtube">
                            <YouTubeIcon sx={{ color: "white" }} />
                        </IconButton>
                        <IconButton aria-label="LinkedIn">
                            <LinkedInIcon sx={{ color: "white" }} />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* Scroll to Top */}
            {showScroll && (
                <IconButton
                    onClick={scrollToTop}
                    sx={{
                        position: 'fixed',
                        bottom: 30,
                        right: 30,
                        backgroundColor: "#f9bf04",
                        color: "white",
                        '&:hover': {
                            backgroundColor: "#ff7c46"
                        },
                        zIndex: 1000
                    }}
                >
                    <ArrowUpwardIcon />
                </IconButton>
            )}
        </Box>
    )
}
