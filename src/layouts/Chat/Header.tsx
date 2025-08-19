/* eslint-disable @typescript-eslint/no-explicit-any */

import AnimationAI from '@/Components/AnimationAI'
import {
    Avatar,
    Box,
    FormControl,
    MenuItem,
    Paper,
    Select,
    Toolbar,
    Typography,
} from '@mui/material'
import React from 'react'

interface HeaderProps {
    theme?: any
}

const Header: React.FC<HeaderProps> = ({ theme }) => {

    return (
        <Paper
            className="boxShadow"
            sx={{
                boxShadow: theme?.palette?.shadowDown?.sm ?? theme.shadows[1],
                zIndex: 1,
                borderRadius: 4,
            }}
            square
        >
            <Toolbar
                sx={{
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    minHeight: 56,
                    px: '8px!important',
                    //   px: 1, // equivale a paddingLeft/right: theme.spacing(1)
                      background: theme.palette.background.paper,
                }}
            >
                <Box display="flex" alignItems="center" flexGrow={1}>
                    <Avatar
                        sx={{
                            width: 32,
                            height: 32,
                            mr: 1,
                            background: theme?.palette?.ai?.primary ?? theme.palette.primary.main,
                        }}
                    >
                        <AnimationAI color="fracttal" />
                    </Avatar>

                    <Box pt={1}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                flexGrow: 1,
                                fontWeight: 400,
                                lineHeight: '22px',
                                color: theme.palette.text.secondary,
                            }}
                        >
                            Fracttal AI
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                defaultValue="Asistente General"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="standard"
                                sx={{
                                    '&::before': { borderBottom: 'none' },
                                    '&::after': { borderBottom: 'none' },
                                    '&:hover::before': { borderBottom: 'none' },
                                    '&:hover::after': { borderBottom: 'none' },
                                    '&.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before':
                                    {
                                        borderBottom: 'none !important',
                                    },
                                    '& .MuiSelect-select:focus': {
                                        backgroundColor: 'transparent !important',
                                        borderRadius: 'inherit !important',
                                    },
                                    background:
                                        'linear-gradient(263deg, #044EC6 0%, #00C7FF 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                <MenuItem value="Asistente General">Asistente General</MenuItem>
                                {/* Aquí irían tus <MenuItem> */}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Toolbar>
        </Paper>
    )
}

export default Header
