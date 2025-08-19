import { createStyles, makeStyles } from '@mui/material';
import React from 'react'

const Main = () => {
    const useStyles = makeStyles((theme) =>
        createStyles({
            sidebar: {
                height: '100%',
                borderRadius: 8,
                position: 'relative',
                boxShadow: 'none',
                backgroundColor: theme.palette.background.paper,
                backgroundImage: 'none',
            },
            mainContent: {
                padding: 16,
                height: '100%',
                width: '100%',
                borderRadius: 8,
                boxShadow: 'none',
                backgroundColor: theme.palette.background.paper,
                backgroundImage: 'none',
            },
            optionButton: {
                padding: 12,
                textAlign: 'center',
                borderRadius: 12,
                width: '100%',
            },
            drawerPaper: {
                marginTop: 68,
                borderRadius: 8,
                width: '-webkit-fill-available',
                display: 'flex',
                flexDirection: 'column',
                margin: 8,
                overflowY: 'hidden',
            },
        }),
    );
    return (
        <div>Main</div>
    )
}

export default Main