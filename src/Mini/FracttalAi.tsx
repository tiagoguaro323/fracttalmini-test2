/* eslint-disable @typescript-eslint/no-explicit-any */
 
import React, { useState } from 'react'
import { Button, Menu, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import AnimationAI from '@/Components/AnimationAI'

interface FracttalAiProps {
  theme?: any
}

const FracttalAi: React.FC<FracttalAiProps> = ({ theme: externalTheme }) => {
  const defaultTheme = useTheme()
  const theme = externalTheme || defaultTheme
  const [openChat, setOpenChat] = useState(false)

  const CallToAction = () => (
    <Button
      variant="contained"
      className="qa-fracttal-ai"
      startIcon={<AnimationAI variant="ai" />}
      onClick={() => setOpenChat(true)}
      sx={{
        borderRadius: 4.5,
        background: theme?.palette?.ai?.backgroundPrimary ?? theme.palette.primary.main,
        height: 40,
      }}
    >
      <Typography>AI</Typography>
    </Button>
  )

  return (
    <>
      <CallToAction />
      {openChat && (
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
                borderRadius: 2,
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
          test
        </Menu>
      )}
    </>
  )
}

export default FracttalAi
