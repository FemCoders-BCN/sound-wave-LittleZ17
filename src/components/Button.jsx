import React from 'react'
import { Button } from '@mui/material'

const BtnHome = () => {
  return (
    <>
      <Button href='/join'
        variant='contained'
        sx={{
          width:{xs:'40%', sm:'40%', lg:'30%'},
          backgroundColor: '#1762A7',
          textTransform: 'capitalize',
          marginBottom:'5%',
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
