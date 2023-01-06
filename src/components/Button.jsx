import React from 'react'
import { Button } from '@mui/material'

const BtnHome = () => {
  return (
    <>
      <Button href='/join'
        variant='contained'
        sx={{
          backgroundColor: '#1762A7',
          textTransform: 'capitalize',
          margin: '10% 0',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1rem',
          fontWeight: '300',
          alignSelf: 'start'
        }}>Join Now
      </Button>
    </>
  )
}

export default BtnHome
