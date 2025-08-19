/* eslint-disable @typescript-eslint/no-explicit-any */
 
import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import AnimationAI from '@/Components/AnimationAI'
import Chat from '@/layouts/Chat/Chat'

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
        <Chat theme={theme} setOpenChat={setOpenChat}>
          Contenido del chat 2
        </Chat>
      )}
    </>
  )
}

export default FracttalAi
