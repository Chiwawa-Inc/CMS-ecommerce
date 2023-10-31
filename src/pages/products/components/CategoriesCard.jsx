import React from 'react'
import Card from 'react-bootstrap/Card'
import grey_background from '../../../assets/grey_background.png'


export default function CategoriesCard() {
  return (
        <Card className="bg-dark text-white" style={{maxWidth: "300px", minWidth:"250px"}}>
        <Card.Img src={grey_background} alt="Card image" />
        <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
            <Card.Title >Protective devices and Switchgears</Card.Title>
        </Card.ImgOverlay>
        </Card>
  )
}
