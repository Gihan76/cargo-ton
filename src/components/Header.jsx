import { useState } from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const links = ['HOME', 'PAGES', 'TRACKING', 'SERVICES', 'BLOG'];
const headerButtons = ['GET A QUOTE', 'SIGN IN'];

export const HeaderComp = () => {
    const [activeLink, setActiveLink] = useState('HOME');

    const handleLinkClick = (value) => {
        setActiveLink(value);
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 'none',
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo Section */}
                <Box>
                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        Cargo
                    </Typography>
                    <Typography variant="subtitle2" sx={{ letterSpacing: '0.3em' }}>
                        L O G I S T I C
                    </Typography>
                </Box>

                {/* Navigation Links */}
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
                                    backgroundColor: '#f0b928',
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
            </Toolbar>
        </AppBar>
    )
}