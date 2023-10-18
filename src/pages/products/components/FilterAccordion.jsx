import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export default function FilterAccordion( {subCategories, brands} ) {
  return (
    <div>
        <Accordion alwaysOpen defaultActiveKey={["0", "1"]}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Types</Accordion.Header>
                <Accordion.Body className='p-0'>
                    <ListGroup variant="flush">
                        {subCategories.map(subCategory =>(
                            <ListGroupItem>{subCategory}</ListGroupItem>
                        ))}
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Categories</Accordion.Header>
                <Accordion.Body className='p-0'>
                <ListGroup variant="flush">
                        {brands.map(brand =>(
                            <ListGroupItem>{brand}</ListGroupItem>
                        ))}
                    </ListGroup>
                </Accordion.Body>
                </Accordion.Item>
        </Accordion>
    </div>
  )
}
