/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import AnimationAI from '@/Components/AnimationAI'
import Chat from '@/layouts/Chat/Chat'

interface FracttalAiProps {
  theme?: any
}

const FracttalAi: React.FC<FracttalAiProps> = ({ theme }) => {
  console.log(theme)
  const [openChat, setOpenChat] = useState(false)

  const CallToAction = () => (
    <Button
      variant="contained"
      className="qa-fracttal-ai"
      onClick={() => setOpenChat(true)}
      startIcon={!theme?.isMobile ? <AnimationAI variant="ai" /> : undefined}
      sx={{
        borderRadius: theme?.isMobile ? 5 : 4.5,
        background: theme?.palette?.ai?.backgroundPrimary ?? theme.palette.primary.main,
        height: 40,
        width: theme?.isMobile ? 40 : undefined,
        minWidth: theme?.isMobile ? 40 : undefined,
      }}
    >
      {
        !theme?.isMobile ? <Typography>AI</Typography> : <AnimationAI variant="ai" />
      }
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
