import { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import { headerButtons, links } from '../../config/Constants';

export const HeaderComp = () => {
    const [activeLink, setActiveLink] = useState('HOME');
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleLinkClick = (value) => {
        setActiveLink(value);
        setMobileOpen(false);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ width: 250, p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {links?.map((item) => (
                    <ListItem
                        button
                        key={item}
                        onClick={() => handleLinkClick(item)}
                        sx={{
                            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                            backgroundColor: activeLink === item ? theme.palette.action.selected : 'transparent'
                        }}
                    >
                        <ListItemText primary={item} />
                        {['HOME', 'PAGES', 'SERVICES', 'BLOG'].includes(item) && <ArrowDropDownIcon />}
                    </ListItem>
                ))}
                {headerButtons?.map((item) => (
                    <ListItem
                        button
                        key={item}
                        sx={{
                            mt: 1,
                            backgroundColor: item === 'GET A QUOTE' ? '#f9bf04' : '#171717',
                            color: 'white',
                            borderRadius: 1,
                            '&:hover': {
                                backgroundColor: item === 'GET A QUOTE' ? '#e6b405' : '#000000'
                            }
                        }}
                    >
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 'none',
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        component="img"
                        src="/favicon.png"
                        alt="Cargo Logistics"
                        sx={{
                            width: 40,
                            height: 40,
                            objectFit: "contain",
                        }}
                    />
                    {!isMobile && (
                        <Typography
                            variant="subtitle2"
                            sx={{
                                letterSpacing: '0.3em',
                                ml: 1,
                                color: "black"
                            }}
                        >
                            CARGO TON
                        </Typography>
                    )}
                </Box>

                {/* Desktop Navigation */}
                {!isMobile && (
                    <Box sx={{ display: 'flex', gap: '2rem' }}>
                        {links?.map((item) => (
                            <Button
                                key={item}
                                variant='text'
                                endIcon={['HOME', 'PAGES', 'SERVICES', 'BLOG'].includes(item) ? <ArrowDropDownIcon /> : null}
                                size='small'
                                sx={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: 0,
                                        width: activeLink === item ? '100%' : '0',
                                        height: '2px',
                                        backgroundColor: '#f9bf04',
                                        transition: 'width 0.3s ease',
                                    },
                                    '&:hover::after': {
                                        width: '100%',
                                    }
                                }}
                                onClick={() => handleLinkClick(item)}
                            >
                                {item}
                            </Button>
                        ))}
                        {headerButtons?.map((item) => (
                            <Button
                                key={item}
                                variant='contained'
                                size='small'
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    backgroundColor: item === 'GET A QUOTE' ? '#f9bf04' : '#171717',
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                )}

                {/* Mobile Menu Button */}
                {isMobile && (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 280,
                    },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};