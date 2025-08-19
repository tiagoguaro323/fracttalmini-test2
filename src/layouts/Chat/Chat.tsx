/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Menu, Paper } from '@mui/material'
import Header from '@/layouts/Chat/Header'
import InputAI from '@/layouts/Chat/InputAI'
import Messages from '@/layouts/Chat/Messages'

const Chat = ({ theme, setOpenChat }: any) => {
    return (
        <Menu
            className="qa-insight-ai"
            anchorReference="anchorPosition"
            anchorPosition={{ top: 80, left: window.innerWidth - 520 }}
            open
            onClose={() => setOpenChat(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: 4,
                        width: `calc(100vw - ${theme.spacing(2)})`,
                        maxWidth: 500,
                        height: '100%',
                        left: 'unset !important',
                        right: theme.spacing(1),
                        top: `${theme.spacing(9)} !important`,
                        maxHeight: `calc(100vh - ${theme.spacing(10)})`,
                        display: 'flex',
                        flexDirection: 'column',
                        ['@media (max-width:450px)']: {
                            height: '90%',
                        },
                        '& .MuiMenu-list': {
                            padding: 0,
                            height: '100%',
                            display: 'flex',
                        },
                    },
                },
            }}
        >
            <Paper
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    height: '100%',
                    minHeight: 0,
                    border: '2px solid transparent',
                    borderRadius: 4,
                    backgroundImage: `
            linear-gradient(45deg, ${theme.palette.mode === 'dark' ? '#2d2f34' : '#ffffff'}, ${theme.palette.mode === 'dark' ? '#2d2f34' : '#ffffff'}),
            linear-gradient(45deg, #044EC6, #00C7FF)
          `,
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                }}
            >
                <Header theme={theme} />
                <Messages theme={theme} />
                <InputAI theme={theme} />
            </Paper>
        </Menu>
    )
}

export default Chat