import { useState, useEffect, useRef } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

export const CounterItem = ({ target = 0, suffix = "", label = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (hasAnimated) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    animateCount();
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (observer) observer.disconnect();
        };
    }, [hasAnimated]);

    const animateCount = () => {
        const startTime = Date.now();
        const updateCount = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentCount = Math.floor(progress * target);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(target);
            }
        };
        requestAnimationFrame(updateCount);
    };


    return (
        <Box
            ref={ref}
            sx={{
                textAlign: 'center',
                py: 4,
            }}
        >
            <Typography
                variant="h2"
                component="div"
                sx={{
                    fontWeight: 'bold',
                    color: '#101f50',
                    fontSize: isMobile ? '2.5rem' : '3.5rem',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.30)',
                    },
                }}
            >
                {count.toLocaleString()}{suffix}
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    color: '#101f50',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}
            >
                {label}
            </Typography>
        </Box>
    )
}
