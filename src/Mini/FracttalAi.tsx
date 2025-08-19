/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { Button } from '@mui/material';
import AnimationAI from '@/Components/AnimationAI';

const FracttalAi = ({theme}: any) => {

    useEffect(() => {
        //   console.log(isMobile)
        console.log(theme?.palette)
    }, [theme])


    return (
        <>
            {/* <Button
                variant="contained"
                className="qa-fracttal-ai"
                startIcon={<AnimationAI variant="ai" />}
                sx={{
                    borderRadius: 4.5,
                    background: theme?.palette?.ai?.backgroundPrimary
                }}
            >
                Remoto
            </Button> */}
            {/* <Button
        className="qa-fracttal-ai"
        variant="contained"
        // onClick={() => handleOpenAI((prev) => !prev)}
        title={hasTitle && !isMobile ? title : undefined}
        sx={{
          '& span': {
            margin: hasTitle && !isMobile ? undefined : 0,
          },
          minWidth: isMobile ? 40 : undefined,
          width: isMobile ? 40 : undefined,
          height: 40,
        //   color: theme.palette.content.main,
          marginRight: 1,
          color: 'red'
        }}
        // startIcon={
        //   agentType === 'GENERAL' ? (
        //     <AnimationAI />
        //   ) : (
        //     <Icon
        //       variantName="wand_ai"
        //       color={theme.palette.ai.primary}
        //       size="medium"
        //     />
        //   )
        // }
      /> */}
        </>
    )
}

export default FracttalAi