import { Button } from '@/components/ui/button'
import React from 'react'

const ButtonCustom = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center" style={{color: 'red'}}>
      <Button>Remote!</Button>
    </div>
  )
}

export default ButtonCustom