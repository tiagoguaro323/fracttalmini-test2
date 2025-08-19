/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { FC, useEffect, useRef, useState } from 'react';
import {
    Typography,
    Box,
    //   Card,
    //   CardContent,
    Stack,
    //   Icon,
} from '@mui/material';
// import { Button, Icon } from 'designSystem';
// import { AnimationAI } from 'components';
// import Markdown from 'react-markdown';
// import { v4 as uuidv4 } from 'uuid';
// import { IMessage } from 'hooks/FracttalAI/useAgentAI';
// import { useTranslation } from 'react-i18next';
import { Player } from '@lottiefiles/react-lottie-player';
// import { useSelector } from 'react-redux';
// import { useMobile } from 'fracttal-core';
// import { agentInfo } from 'constants/FracttalAI';
// import SignedImage from 'view/Ai/SignedImage';
// import Plot from 'react-plotly.js';
import iconIaLight from '@/layouts/Chat/icon-IA-light.json';
import iconIaDark from '@/layouts/Chat/icon-IA-dark.json';

interface IProps {
    theme: any;
    messages?: any;
    loading?: boolean;
    // handleSendButton: any;
    // contextType?: any;
    // agentType?: any;
}

const Messages: FC<IProps> = ({
    messages = [],
    loading = false,
    theme,
    //   handleSendButton = () => {}, // Default function to avoid errors if not provided
    // contextType,
    // agentType,
}) => {
    //   const isMobile = useMobile();
    //   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    //   const { account } = useSelector((state: any) => state.auth);
    // const theme = useTheme();
    //   const { t } = useTranslation();
    const bottomRef = useRef<HTMLDivElement | null>(null);
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: isFirstRender ? 'auto' : 'smooth',
            block: 'end',
        });
        if (isFirstRender) setIsFirstRender(false);
    }, [messages, isFirstRender]);

    const showTitle = true; // This can be set based on your logic

    // const showTitle =
    //     ['WORK_ORDERS', 'METERS', 'ASSETS', 'GENERAL', 'REQUESTS'].includes(
    //         agentType,
    //     ) && contextType === 'list';
    //   const prompts: any = [];

    //   if (contextType === 'detail') {
    //     prompts = [
    //       { prompt: t('QUICK_ACTIONS_AI_1'), icon: 'clipboard_clock' },
    //       { prompt: t('QUICK_ACTIONS_AI_2'), icon: 'clipboard_text' },
    //     ];
    //   } else if (contextType === 'list') {
    //     prompts = agentInfo[agentType]?.cards || [];
    //   }

    const visiblePrompts = [
        {
            prompt: 'GENERAL_PROMPT_1',
            icon: 'map',
        },
        {
            prompt: 'GENERAL_PROMPT_2',
            icon: 'notes',
        },
        {
            prompt: 'GENERAL_PROMPT_3',
            icon: 'calendar',
        },
        {
            prompt: 'GENERAL_PROMPT_4',
            icon: 'clipboard_clock',
        },
    ];

    return (
        <Box
            flexDirection="column"
            p={1}
            gap={1}
            sx={{
                flexGrow: 1,
                minHeight: 0,
                overflowY: 'auto',
                '& .MuiCard-root': {
                    flexShrink: 0,
                },
                justifyContent: messages?.length === 0 ? 'center' : 'flex-start',
            }}
            display="flex"
        >
            {loading ? (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flex={1}
                >
                    <Player
                        autoplay
                        loop
                        src={theme.palette.mode === 'dark' ? iconIaDark : iconIaLight}
                        style={{
                            height: theme.spacing(16),
                            width: theme.spacing(16),
                        }}
                    />
                </Box>
            ) : messages?.length === 0 ? (
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    gap={4}
                    width="100%"
                    paddingBottom={1}
                >
                    <Box>
                        <Player
                            autoplay
                            loop
                            src={theme.palette.mode === 'dark' ? iconIaDark : iconIaLight}
                            style={{
                                height: theme.spacing(16),
                                width: theme.spacing(16),
                            }}
                        />
                        <Typography
                            align="center"
                            variant="h1"
                            gutterBottom
                            sx={{
                                fontFamily: (theme) => (theme.typography as any).manrope,
                                fontWeight: 600,
                                fontSize: '28px!important',
                            }}
                        >
                            {/* {t('HELLO_THERE', { name: account?.name?.split(' ')[0] })}{' '} */}
                            Hola Santiago,
                                <>
                                    {/* {t('I_AM')} */}
                                    Soy
                                    <Typography
                                        align="center"
                                        variant="h1"
                                        gutterBottom
                                        sx={{
                                            fontFamily: (theme) => (theme.typography as any).manrope,
                                            fontWeight: 600,
                                            fontSize: '28px!important',
                                            background:
                                                'linear-gradient(263deg, #044EC6 0%, #00C7FF 100%)',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        {/* {t(agentInfo[agentType].subheader || '')} */}
                                        El asistente general de Fracttal
                                    </Typography>
                                </>
                        </Typography>
                        {showTitle && (
                            <Typography
                                align="center"
                                variant="subtitle1"
                                gutterBottom
                                sx={{
                                    fontFamily: (theme) => (theme.typography as any).manrope,
                                }}
                            >
                                {/* {t(agentInfo[agentType].instructions)} */}
                                Puedo ayudarte con el uso de la plataforma, resolver dudas o buscar información de cualquier módulo.
                            </Typography>
                        )}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            marginBottom: '20px',
                            width: '-webkit-fill-available',
                        }}
                    >
                        {visiblePrompts.map((prompt) => (
                            <Box
                                // key={uuidv4()}
                                component="button"
                                // onClick={(e) => handleSendButton(e, t(prompt.prompt), null)}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '100%',
                                    background: theme.palette?.ai?.backgroundSecondary,
                                    border: 'none',
                                    padding: '12px',
                                    borderRadius: '10px',
                                    color: theme.palette?.content?.status,
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    fontFamily: (theme) => (theme.typography as any).manrope,
                                    textAlign: 'left',
                                    gap: 1,
                                    // justifyContent: 'center',
                                }}
                            >

                                {/* {t(prompt.prompt)} */}
                                Opcion
                            </Box>
                        ))}
                    </Box>
                </Stack>
            ) : null}
        </Box>
    );
};

export default Messages;
