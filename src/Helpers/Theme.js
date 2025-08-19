const theme = {
    "breakpoints": {
        "keys": [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        "values": {
            "xs": 0,
            "sm": 600,
            "md": 900,
            "lg": 1200,
            "xl": 1536
        },
        "unit": "px"
    },
    "direction": "ltr",
    "components": {
        "MuiCssBaseline": {
            "styleOverrides": {
                "::-webkit-scrollbar": {
                    "width": 7,
                    "height": 7
                },
                "::-webkit-scrollbar-track": {
                    "background": "transparent"
                },
                "@media screen and (max-width: 480px)": {
                    "::-webkit-scrollbar": {
                        "width": 5,
                        "height": 5
                    }
                },
                "::-webkit-scrollbar-thumb": {
                    "background": "rgba(0,0,0,0.0)",
                    "borderRadius": 10,
                    "boxShadow": "rgba(256, 256, 256, 0.3) 0 0 0 1px"
                },
                ":hover::-webkit-scrollbar-thumb": {
                    "background": "rgba(0,0,0,0.45)"
                },
                "::-webkit-scrollbar-thumb:hover": {
                    "background": "rgba(0,0,0,0.55)"
                }
            }
        },
        "MuiCheckbox": {
            "styleOverrides": {
                "root": {
                    "padding": "8px 9px",
                    "&:hover > svg.ico path": {
                        "stroke": "#000000"
                    }
                }
            }
        },
        "MuiButtonGroup": {
            "variants": [
                {
                    "props": {
                        "size": "large"
                    },
                    "style": {
                        "& .MuiButtonGroup-grouped": {
                            "minWidth": "56px",
                            "height": "48px"
                        },
                        "& .MuiButtonBase-root.MuiButton-root.icon_button": {
                            "minWidth": "56px",
                            "height": "48px"
                        }
                    }
                },
                {
                    "props": {
                        "size": "medium"
                    },
                    "style": {
                        "& .MuiButtonGroup-grouped": {
                            "minWidth": "56px",
                            "height": "40px"
                        },
                        "& .MuiButtonBase-root.MuiButton-root.icon_button": {
                            "minWidth": "56px",
                            "height": "40px"
                        }
                    }
                },
                {
                    "props": {
                        "variant": "text"
                    },
                    "style": {
                        "& .MuiButtonGroup-middleButton": {
                            "borderColor": "#4687F11A"
                        },
                        "& .MuiButtonGroup-firstButton.Mui-disabled, & .MuiButtonGroup-middleButton.Mui-disabled": {
                            "borderColor": "#FFFFFF"
                        }
                    }
                },
                {
                    "props": {
                        "variant": "contained"
                    },
                    "style": {
                        "& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton": {
                            "borderColor": "#FFFFFF"
                        },
                        "& .MuiButtonGroup-firstButton.Mui-disabled, & .MuiButtonGroup-middleButton.Mui-disabled": {
                            "borderColor": "#FFFFFF"
                        }
                    }
                },
                {
                    "props": {
                        "variant": "outlined"
                    },
                    "style": {
                        "& .MuiButtonGroup-middleButton": {}
                    }
                }
            ]
        },
        "MuiIconButton": {
            "styleOverrides": {
                "root": {
                    "&:hover, &.hoverFocus": {
                        "boxShadow": "none",
                        "backgroundColor": "#4687F11A"
                    }
                }
            },
            "variants": [
                {
                    "props": {
                        "size": "medium"
                    },
                    "style": {
                        "padding": "4px 4px"
                    }
                }
            ]
        },
        "MuiButton": {
            "styleOverrides": {
                "root": {
                    "&.icon_button .MuiButton-startIcon": {
                        "marginRight": "0",
                        "marginLeft": "0"
                    },
                    "&.icon_button .MuiButton-endIcon": {
                        "marginRight": "0",
                        "marginLeft": "0"
                    }
                }
            },
            "variants": [
                {
                    "props": {
                        "size": "small"
                    },
                    "style": {
                        "fontSize": "1rem",
                        "padding": "4px 16px",
                        "lineHeight": "1.5rem",
                        "&.button_full": {
                            "width": "100% !important"
                        },
                        "&.icon_button": {
                            "padding": "4px 4px",
                            "minWidth": "auto",
                            "width": "32px",
                            "height": "32px"
                        }
                    }
                },
                {
                    "props": {
                        "size": "medium"
                    },
                    "style": {
                        "fontSize": "1rem",
                        "padding": "8px 16px",
                        "lineHeight": "1.5rem",
                        "&.button_full": {
                            "width": "100% !important"
                        },
                        "&.icon_button": {
                            "padding": "8px 8px",
                            "minWidth": "auto",
                            "width": "40px",
                            "height": "40px"
                        }
                    }
                },
                {
                    "props": {
                        "size": "large"
                    },
                    "style": {
                        "fontSize": "1rem",
                        "padding": "12px 16px",
                        "lineHeight": "1.5rem",
                        "&.button_full": {
                            "width": "100% !important"
                        },
                        "&.icon_button": {
                            "padding": "12px 12px",
                            "minWidth": "auto",
                            "width": "48px",
                            "height": "48px"
                        }
                    }
                },
                {
                    "props": {
                        "variant": "text"
                    },
                    "style": {
                        "backgroundColor": "#FFFFFF",
                        "borderRadius": 30,
                        "textTransform": "initial",
                        "boxShadow": "none",
                        "&:hover, &.hoverFocus": {
                            "boxShadow": "none",
                            "backgroundColor": "#4687F11A !important",
                            "color": "#105DDB !important"
                        },
                        "&.hoverFocus.icon_button svg.hoverFocus path": {
                            "fill": "#105DDB"
                        },
                        "& .MuiButton-startIcon .hoverFocus path": {
                            "fill": "#105DDB"
                        },
                        "& .MuiButton-endIcon .hoverFocus path": {
                            "fill": "#105DDB"
                        },
                        "&:hover .MuiButton-startIcon svg.ico path": {
                            "fill": "#105DDB"
                        },
                        "&:hover .MuiButton-endIcon svg.ico path": {
                            "fill": "#105DDB"
                        },
                        "&:hover:not(:active) .MuiBadge-root > svg.ico path, &:hover:not(:active) > svg.ico path": {
                            "fill": "#105DDB !important"
                        },
                        "& .MuiButton-startIcon .hoverFocus.disabled path": {
                            "fill": "#A6A6A6"
                        },
                        "&:disabled": {
                            "backgroundColor": "#00000008"
                        }
                    }
                },
                {
                    "props": {
                        "variant": "contained"
                    },
                    "style": {
                        "borderRadius": 30,
                        "textTransform": "initial",
                        "boxShadow": "none",
                        "&:hover, &.hoverFocus": {
                            "boxShadow": "none",
                            "backgroundColor": "#105DDB"
                        },
                        "&:disabled": {
                            "backgroundColor": "#00000008"
                        },
                        "& .MuiButton-startIcon svg.ico path": {
                            "fill": "#FFFFFF"
                        },
                        "& .MuiButton-startIcon svg.ico.disabled path": {
                            "fill": "#B3B3B3"
                        },
                        "& .MuiButton-endIcon svg.ico path": {
                            "fill": "#FFFFFF"
                        },
                        "& .MuiButton-endIcon svg.ico.disabled path": {
                            "fill": "#B3B3B3"
                        },
                        "&:hover .MuiButton-startIcon svg.ico path": {
                            "fill": "#FFFFFF"
                        },
                        "&:hover .MuiButton-endIcon svg.ico path": {
                            "fill": "#FFFFFF"
                        }
                    }
                },
                {
                    "props": {
                        "variant": "outlined"
                    },
                    "style": {
                        "borderRadius": 30,
                        "textTransform": "initial",
                        "boxShadow": "none",
                        "&:hover, &.hoverFocus": {
                            "boxShadow": "none",
                            "backgroundColor": "#4687F11A"
                        },
                        "&:disabled": {
                            "backgroundColor": "#FFFFFF"
                        }
                    }
                },
                {
                    "props": {
                        "variant": "main_ai"
                    },
                    "style": {
                        "borderRadius": 30,
                        "textTransform": "initial",
                        "boxShadow": "none",
                        "position": "relative",
                        "overflow": "hidden",
                        "zIndex": 2,
                        "&::before": {
                            "content": "\"\"",
                            "position": "absolute",
                            "inset": 0,
                            "background": "linear-gradient(70deg, var(--AI-1, #044EC6) 25%, var(--AI-2, #00C7FF) 90%)",
                            "transition": "opacity 0.3s ease",
                            "zIndex": -1
                        },
                        "&:hover::before": {
                            "opacity": 0
                        },
                        "&::after": {
                            "content": "\"\"",
                            "position": "absolute",
                            "inset": 0,
                            "background": "linear-gradient(45deg, var(--AI-1, rgba(4, 78, 198, 0.80)) 25%, var(--AI-2, rgba(0, 199, 255, 0.80)) 90%)",
                            "transition": "opacity 0.3s ease",
                            "zIndex": -2,
                            "opacity": 0
                        },
                        "&:hover::after": {
                            "opacity": 1
                        },
                        "&.hoverFocus.icon_button svg.hoverFocus path": {
                            "fill": "#FFFFFF"
                        },
                        "& .MuiButton-startIcon .hoverFocus path": {
                            "fill": "#FFFFFF"
                        },
                        "& .MuiButton-endIcon .hoverFocus path": {
                            "fill": "#FFFFFF"
                        },
                        "&:hover .MuiButton-startIcon svg.ico path": {
                            "fill": "#FFFFFF"
                        },
                        "&:hover .MuiButton-endIcon svg.ico path": {
                            "fill": "#FFFFFF"
                        },
                        "&:hover:not(:active) .MuiBadge-root > svg.ico path, &:hover:not(:active) > svg.ico path": {
                            "fill": "#FFFFFF !important"
                        },
                        "& .MuiButton-startIcon .hoverFocus.disabled path": {
                            "fill": "#A6A6A6"
                        },
                        "&:disabled::before": {
                            "content": "\"\"",
                            "position": "absolute",
                            "inset": 0,
                            "background": "#00000008",
                            "transition": "opacity 0.3s ease",
                            "zIndex": -1
                        },
                        "&:disabled": {
                            "background": "url(#gradient1)"
                        },
                        "&:disabled svg path ": {
                            "fill": "#A6A6A6"
                        },
                        "& svg path": {
                            "fill": "#FFFFFF"
                        }
                    }
                },
                {
                    "props": {
                        "variant": "secondary_ai"
                    },
                    "style": {
                        "background": "linear-gradient(89deg, var(--AI-1, rgba(4, 78, 198, 0.03)) 25%, var(--AI-2, rgba(0, 199, 255, 0.03)) 90%)",
                        "borderRadius": 30,
                        "textTransform": "initial",
                        "& .MuiButton-label": {
                            "background": "linear-gradient(45deg, #044EC6, #00C7FF)",
                            "WebkitBackgroundClip": "text",
                            "WebkitTextFillColor": "transparent",
                            "fontWeight": "bold"
                        },
                        "&:hover, &.hoverFocus": {
                            "boxShadow": "none",
                            "color": "url(#gradient1) !important"
                        },
                        "&.hoverFocus.icon_button svg.hoverFocus path": {
                            "fill": "url(#gradient1)"
                        },
                        "& .MuiButton-startIcon .hoverFocus path": {
                            "fill": "url(#gradient1)"
                        },
                        "& .MuiButton-endIcon .hoverFocus path": {
                            "fill": "url(#gradient1)"
                        },
                        "&:hover .MuiButton-startIcon svg.ico path": {
                            "fill": "url(#gradient1)"
                        },
                        "&:hover .MuiButton-endIcon svg.ico path": {
                            "fill": "url(#gradient1)"
                        },
                        "&:hover:not(:active) .MuiBadge-root > svg.ico path, &:hover:not(:active) > svg.ico path": {
                            "fill": "url(#gradient1) !important"
                        },
                        "& .MuiButton-startIcon .hoverFocus.disabled path": {
                            "fill": "#A6A6A6"
                        },
                        "&:disabled": {
                            "backgroundColor": "#00000008"
                        }
                    }
                },
                {
                    "props": {
                        "variant": "agent_ai"
                    },
                    "style": {
                        "background": "linear-gradient(89deg, var(--AI-1, rgba(4, 78, 198, 0.03)) 25%, var(--AI-2, rgba(0, 199, 255, 0.03)) 90%)",
                        "borderRadius": 30,
                        "textTransform": "initial",
                        "border": "2px solid transparent",
                        "backgroundOrigin": "border-box",
                        "backgroundClip": "padding-box, border-box",
                        "backgroundImage": "\n              linear-gradient(rgb(237 247 253), rgb(237 247 253)),\n              linear-gradient(83deg, var(--AI-1, rgba(4, 78, 198, 0.25)) 0%, var(--AI-2, rgba(0, 199, 255, 0.25)) 100%)\n            ",
                        "& .MuiBox-root": {
                            "background": "linear-gradient(45deg, #044EC6, #00C7FF)",
                            "WebkitBackgroundClip": "text",
                            "WebkitTextFillColor": "transparent"
                        },
                        "& .MuiButton-label": {
                            "background": "linear-gradient(45deg, #044EC6, #00C7FF)",
                            "WebkitBackgroundClip": "text",
                            "WebkitTextFillColor": "transparent",
                            "fontWeight": "bold"
                        },
                        "&:hover, &.hoverFocus": {
                            "boxShadow": "none",
                            "backgroundColor": "#4687F11A !important",
                            "color": "url(#gradient1) !important",
                            "border": "2px solid transparent",
                            "backgroundOrigin": "border-box",
                            "backgroundClip": "padding-box, border-box",
                            "backgroundImage": "\n              linear-gradient(rgb(237 247 253), rgb(237 247 253)),\n              linear-gradient(45deg, var(--AI-1, rgba(4, 78, 198, 0.80)) 25%, var(--AI-2, rgba(0, 199, 255, 0.80)) 90%)\n            "
                        },
                        "&.hoverFocus.icon_button svg.hoverFocus path": {
                            "fill": "url(#gradient1)"
                        },
                        "& .MuiButton-startIcon .hoverFocus path": {
                            "fill": "url(#gradient1)"
                        },
                        "& .MuiButton-endIcon .hoverFocus path": {
                            "fill": "url(#gradient1)"
                        },
                        "&:hover .MuiButton-startIcon svg.ico path": {
                            "fill": "url(#gradient1)"
                        },
                        "&:hover .MuiButton-endIcon svg.ico path": {
                            "fill": "url(#gradient1)"
                        },
                        "&:hover:not(:active) .MuiBadge-root > svg.ico path, &:hover:not(:active) > svg.ico path": {
                            "fill": "url(#gradient1) !important"
                        },
                        "& .MuiButton-startIcon .hoverFocus.disabled path": {
                            "fill": "#A6A6A6"
                        },
                        "&:disabled": {
                            "backgroundColor": "#00000008"
                        }
                    }
                }
            ]
        },
        "MuiAlert": {
            "styleOverrides": {
                "standardInfo": {
                    "background": "#90B7F7"
                },
                "icon": {
                    "color": "#4687F1 !important"
                }
            }
        },
        "MuiAppBar": {
            "styleOverrides": {
                "colorPrimary": {
                    "backgroundColor": "#FFFFFF"
                }
            }
        }
    },
    "palette": {
        "mode": "light",
        "primary": {
            "main": "#4687F1",
            "light": "#6B9FF4",
            "dark": "#0B4199",
            "contrastText": "#fff"
        },
        "ai": {
            "primary": "url(#gradient1)",
            "secondary": "linear-gradient(45deg, var(--AI-1, rgba(4, 78, 198, 0.07)) 25%, var(--AI-2, rgba(0, 199, 255, 0.07)) 90%)",
            "backgroundPrimary": "linear-gradient(70deg, var(--AI-1, #044EC6) 25%, var(--AI-2, #00C7FF) 90%)",
            "backgroundSecondary": "linear-gradient(89deg, var(--AI-1, rgba(4, 78, 198, 0.03)) 25%, var(--AI-2, rgba(0, 199, 255, 0.03)) 90%)",
            "backgroundTertiary": "linear-gradient(70deg, var(--AI-1, #044EC6) 25%, var(--AI-2, #00C7FF) 90%)",
            "boxShadow": "0px 0px 25px 0px rgba(0, 199, 255, 0.30)"
        },
        "secondary": {
            "main": "#105DDB",
            "light": "#407DE2",
            "dark": "#2652BC",
            "contrastText": "#fff"
        },
        "text": {
            "primary": "#000000",
            "secondary": "#666666",
            "disabled": "#A6A6A6"
        },
        "action": {
            "default": "#666666",
            "hover": "#4687F11A",
            "active": "#4D4D4D",
            "disabled": "#D9D9D9",
            "background": "#00000008",
            "hoverOpacity": 0.04,
            "selected": "rgba(0, 0, 0, 0.08)",
            "selectedOpacity": 0.08,
            "disabledBackground": "rgba(0, 0, 0, 0.12)",
            "disabledOpacity": 0.38,
            "focus": "rgba(0, 0, 0, 0.12)",
            "focusOpacity": 0.12,
            "activatedOpacity": 0.12
        },
        "other": {
            "backdrop": "#00000066",
            "divider": "#E6E6E6",
            "snackbar": "#262626",
            "outline": "#D9D9D9",
            "rating": "#FEB436",
            "blueBackground": "#EDF3FE",
            "circleBackground": "#ffffff80",
            "errorBackground": "#FEF5F5",
            "warningBackground": "#FFFBEE",
            "infoBackground": "#EDF3FE",
            "successBackground": "#E9FAEE",
            "backgroundTransparent": "transparent"
        },
        "error": {
            "main": "#EF5350",
            "light": "#F59896",
            "dark": "#D32F2F",
            "contrastText": "#fff"
        },
        "warning": {
            "main": "#FED54F",
            "light": "#FFE284",
            "dark": "#EF9831",
            "contrastText": "rgba(0, 0, 0, 0.87)"
        },
        "info": {
            "main": "#4687F1",
            "light": "#90B7F7",
            "dark": "#315EA8",
            "contrastText": "#fff"
        },
        "success": {
            "main": "#1CC853",
            "light": "#77DE98",
            "dark": "#009B40",
            "contrastText": "rgba(0, 0, 0, 0.87)"
        },
        "content": {
            "main": "#FFFFFF",
            "primary": "#FFFFFF",
            "secondary": "#FFFFFF",
            "status": "#000000"
        },
        "background": {
            "paper": "#FFFFFF",
            "default": "#E3EDFD",
            "accent": "#D5DEEB"
        },
        "dashboard": {
            "sky1": "#00B8D4",
            "blue1": "#2979FF",
            "blue2": "#64B5F6",
            "green1": "#00C853",
            "red1": "#FF1744",
            "red2": "#FF8A80",
            "aqua1": "#00BFA5",
            "yellow1": "#FFAB00",
            "brown2": "#A1887F",
            "purple1": "#4A148C",
            "purple2": "#9575CD",
            "gray1": "#616161",
            "gray2": "#9E9E9E"
        },
        "divider": "#E6E6E6",
        "bi": {
            "disabled": "#BDBDBD",
            "general": {
                "red1": "#FF1744",
                "red2": "#FF8A80",
                "red3": "#FFCDD2",
                "purple1": "#4A148C",
                "purple2": "#9575CD",
                "purple3": "#B39DDB",
                "blue1": "#2979FF",
                "blue2": "#64B5F6",
                "blue3": "#90CAF9",
                "sky1": "#00B8D4",
                "sky2": "#84FFFF",
                "sky3": "#80DEEA",
                "aqua1": "#00BFA5",
                "aqua2": "#A7FFEB",
                "aqua3": "#80CBC4",
                "green1": "#00C853",
                "green2": "#B9F6CA",
                "green3": "#A5D6A7",
                "yellow1": "#FFAB00",
                "yellow2": "#FFD180",
                "yellow3": "#FFECB3",
                "brown1": "#3E2723",
                "brown2": "#A1887F",
                "brown3": "#D7CCC8",
                "gray1": "#616161",
                "gray2": "#9E9E9E",
                "gray3": "#E0E0E0",
                "blue4": "#AFCBF9",
                "purple4": "#E5D1FF",
                "aqua4": "#C0EEEB"
            }
        },
        "backgroundColor": {
            "primary": "#4687F11A",
            "hover": "#4687F133",
            "marked": "rgb(255, 249, 233)",
            "info": "#00000008",
            "priority": {
                "high": "#ef53500d",
                "medium": "#fed54f1a",
                "low": "#1CC8530D"
            }
        },
        "shadowDown": {
            "xs": "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
            "sm": "0px 3px 8px 0px rgba(0, 0, 0, 0.12)",
            "md": "0px 3px 8px 0px rgba(0, 0, 0, 0.15)"
        },
        "shadowUp": {
            "xs": "0px -3px 4px 0px rgba(0, 0, 0, 0.05)",
            "sm": "0px -3px 8px 0px rgba(0, 0, 0, 0.12)",
            "md": "0px -3px 8px 0px rgba(0, 0, 0, 0.15)"
        },
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        "grey": {
            "50": "#fafafa",
            "100": "#f5f5f5",
            "200": "#eeeeee",
            "300": "#e0e0e0",
            "400": "#bdbdbd",
            "500": "#9e9e9e",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242",
            "900": "#212121",
            "A100": "#f5f5f5",
            "A200": "#eeeeee",
            "A400": "#bdbdbd",
            "A700": "#616161"
        },
        "contrastThreshold": 3,
        "tonalOffset": 0.2
    },
    "shape": {
        "borderRadius": 4
    },
    "typography": {
        "fontFamily": "Heebo ,Arial",
        "fontSize": 12,
        "manrope": {
            "fontFamily": "Manrope"
        },
        "h1": {
            "fontSize": "1.759090909090909rem",
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 300,
            "lineHeight": 1.167,
            "@media (min-width:600px)": {
                "fontSize": "2.1422rem"
            },
            "@media (min-width:900px)": {
                "fontSize": "2.3565rem"
            },
            "@media (min-width:1200px)": {
                "fontSize": "2.5707rem"
            }
        },
        "h2": {
            "fontSize": "1.409090909090909rem",
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 300,
            "lineHeight": 1.2,
            "@media (min-width:600px)": {
                "fontSize": "1.6667rem"
            },
            "@media (min-width:900px)": {
                "fontSize": "1.875rem"
            },
            "@media (min-width:1200px)": {
                "fontSize": "1.875rem"
            }
        },
        "h3": {
            "fontSize": "1.2rem",
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 400,
            "lineHeight": 1.167,
            "@media (min-width:600px)": {
                "fontSize": "1.2853rem"
            },
            "@media (min-width:900px)": {
                "fontSize": "1.2853rem"
            },
            "@media (min-width:1200px)": {
                "fontSize": "1.4996rem"
            }
        },
        "h4": {
            "fontSize": "1.1818181818181817rem",
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 400,
            "lineHeight": 1.235,
            "@media (min-width:600px)": {
                "fontSize": "1.2146rem"
            },
            "@media (min-width:900px)": {
                "fontSize": "1.417rem"
            },
            "@media (min-width:1200px)": {
                "fontSize": "1.417rem"
            }
        },
        "h5": {
            "fontSize": "1.1136363636363635rem",
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 400,
            "lineHeight": 1.334,
            "@media (min-width:600px)": {
                "fontSize": "1.1244rem"
            },
            "@media (min-width:900px)": {
                "fontSize": "1.1244rem"
            },
            "@media (min-width:1200px)": {
                "fontSize": "1.3118rem"
            }
        },
        "h6": {
            "fontSize": "1.0722727272727273rem",
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 500,
            "lineHeight": 1.6,
            "@media (min-width:600px)": {
                "fontSize": "1.0938rem"
            },
            "@media (min-width:900px)": {
                "fontSize": "1.0938rem"
            },
            "@media (min-width:1200px)": {
                "fontSize": "1.0938rem"
            }
        },
        "subtitle1": {
            "fontSize": "1rem",
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 400,
            "lineHeight": 1.75
        },
        "subtitle2": {
            "fontSize": "0.75rem",
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 500,
            "lineHeight": 1.57
        },
        "body1": {
            "fontSize": "1rem",
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 400,
            "lineHeight": 1.5
        },
        "body2": {
            "fontSize": "0.9rem",
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 400,
            "lineHeight": 1.43
        },
        "caption": {
            "fontSize": "0.5999rem",
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 400,
            "lineHeight": 1.66
        },
        "chip": {
            "fontSize": "0.75rem",
            "fontWeight": 700,
            "textTransform": "uppercase"
        },
        "htmlFontSize": 16,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontWeightBold": 700,
        "button": {
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 500,
            "fontSize": "0.75rem",
            "lineHeight": 1.75,
            "textTransform": "uppercase"
        },
        "overline": {
            "fontFamily": "Heebo ,Arial",
            "fontWeight": 400,
            "fontSize": "0.6428571428571428rem",
            "lineHeight": 2.66,
            "textTransform": "uppercase"
        },
        "inherit": {
            "fontFamily": "inherit",
            "fontWeight": "inherit",
            "fontSize": "inherit",
            "lineHeight": "inherit",
            "letterSpacing": "inherit"
        }
    },
    "zIndex": {
        "mobileStepper": 1000,
        "speedDial": 1050,
        "appBar": 1100,
        "drawer": 1300,
        "modal": 1300,
        "snackbar": 1400,
        "tooltip": 1500,
        "fab": 1050
    },
    "unstable_sxConfig": {
        "border": {
            "themeKey": "borders"
        },
        "borderTop": {
            "themeKey": "borders"
        },
        "borderRight": {
            "themeKey": "borders"
        },
        "borderBottom": {
            "themeKey": "borders"
        },
        "borderLeft": {
            "themeKey": "borders"
        },
        "borderColor": {
            "themeKey": "palette"
        },
        "borderTopColor": {
            "themeKey": "palette"
        },
        "borderRightColor": {
            "themeKey": "palette"
        },
        "borderBottomColor": {
            "themeKey": "palette"
        },
        "borderLeftColor": {
            "themeKey": "palette"
        },
        "outline": {
            "themeKey": "borders"
        },
        "outlineColor": {
            "themeKey": "palette"
        },
        "borderRadius": {
            "themeKey": "shape.borderRadius"
        },
        "color": {
            "themeKey": "palette"
        },
        "bgcolor": {
            "themeKey": "palette",
            "cssProperty": "backgroundColor"
        },
        "backgroundColor": {
            "themeKey": "palette"
        },
        "p": {},
        "pt": {},
        "pr": {},
        "pb": {},
        "pl": {},
        "px": {},
        "py": {},
        "padding": {},
        "paddingTop": {},
        "paddingRight": {},
        "paddingBottom": {},
        "paddingLeft": {},
        "paddingX": {},
        "paddingY": {},
        "paddingInline": {},
        "paddingInlineStart": {},
        "paddingInlineEnd": {},
        "paddingBlock": {},
        "paddingBlockStart": {},
        "paddingBlockEnd": {},
        "m": {},
        "mt": {},
        "mr": {},
        "mb": {},
        "ml": {},
        "mx": {},
        "my": {},
        "margin": {},
        "marginTop": {},
        "marginRight": {},
        "marginBottom": {},
        "marginLeft": {},
        "marginX": {},
        "marginY": {},
        "marginInline": {},
        "marginInlineStart": {},
        "marginInlineEnd": {},
        "marginBlock": {},
        "marginBlockStart": {},
        "marginBlockEnd": {},
        "displayPrint": {
            "cssProperty": false
        },
        "display": {},
        "overflow": {},
        "textOverflow": {},
        "visibility": {},
        "whiteSpace": {},
        "flexBasis": {},
        "flexDirection": {},
        "flexWrap": {},
        "justifyContent": {},
        "alignItems": {},
        "alignContent": {},
        "order": {},
        "flex": {},
        "flexGrow": {},
        "flexShrink": {},
        "alignSelf": {},
        "justifyItems": {},
        "justifySelf": {},
        "gap": {},
        "rowGap": {},
        "columnGap": {},
        "gridColumn": {},
        "gridRow": {},
        "gridAutoFlow": {},
        "gridAutoColumns": {},
        "gridAutoRows": {},
        "gridTemplateColumns": {},
        "gridTemplateRows": {},
        "gridTemplateAreas": {},
        "gridArea": {},
        "position": {},
        "zIndex": {
            "themeKey": "zIndex"
        },
        "top": {},
        "right": {},
        "bottom": {},
        "left": {},
        "boxShadow": {
            "themeKey": "shadows"
        },
        "width": {},
        "maxWidth": {},
        "minWidth": {},
        "height": {},
        "maxHeight": {},
        "minHeight": {},
        "boxSizing": {},
        "fontFamily": {
            "themeKey": "typography"
        },
        "fontSize": {
            "themeKey": "typography"
        },
        "fontStyle": {
            "themeKey": "typography"
        },
        "fontWeight": {
            "themeKey": "typography"
        },
        "letterSpacing": {},
        "textTransform": {},
        "lineHeight": {},
        "textAlign": {},
        "typography": {
            "cssProperty": false,
            "themeKey": "typography"
        }
    },
    "mixins": {
        "toolbar": {
            "minHeight": 56,
            "@media (min-width:0px)": {
                "@media (orientation: landscape)": {
                    "minHeight": 48
                }
            },
            "@media (min-width:600px)": {
                "minHeight": 64
            }
        }
    },
    "shadows": [
        "none",
        "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
        "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
        "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
        "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
        "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
        "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
        "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
        "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
        "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
        "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
        "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
        "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
        "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
        "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
        "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
        "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
        "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
        "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
    ],
    "transitions": {
        "easing": {
            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
        },
        "duration": {
            "shortest": 150,
            "shorter": 200,
            "short": 250,
            "standard": 300,
            "complex": 375,
            "enteringScreen": 225,
            "leavingScreen": 195
        }
    },
    "vars": null
};

export default theme;