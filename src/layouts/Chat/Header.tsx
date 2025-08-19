/* eslint-disable @typescript-eslint/no-explicit-any */
import { Paper } from '@mui/material'
import React from 'react'

const Header = ({theme}: any) => {
  return (
    <Paper
      className="boxShadow"
      sx={{
        boxShadow: theme?.palette?.shadowDown?.sm,
        zIndex: 1,
      }}
      square
    >
        t
    </Paper>
  )
}

export default Header