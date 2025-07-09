import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useWelcomeStyles = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

    return {
        container: {
            py: 2,
            px: isMobile ? 4 : null,
        },
        contentWrapper: {
            maxWidth: '1400px',
            mx: 'auto',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 4 : 8,
        },
        textSection: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            order: isMobile ? 1 : 2,
        },
        imageSection: {
            flex: 1,
            order: isMobile ? 2 : 1,
            position: 'relative',
            height: isMobile ? '300px' : '500px',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: theme.shadows[5],
        },
        statsSection: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        title: {
            fontWeight: 'bold',
            mb: 2,
            fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
        },
        description: {
            mb: 4,
            fontSize: isMobile ? '1rem' : '1.1rem',
        },
        button: {
            alignSelf: 'flex-start',
            px: 4,
            py: 1.5,
            fontWeight: 'bold',
            mt: 2,
            color:'rgb(12, 93, 107)',
            backgroundColor: "#f5f5f5"
        },
        divider: {
            width: '100px',
            height: '4px',
            bgcolor: '#ff7c46',
            mb: 3,
        },
    };
};