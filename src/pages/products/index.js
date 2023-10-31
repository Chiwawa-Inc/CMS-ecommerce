import React, { useEffect } from "react"
import CategoriesCard from "./components/CategoriesCard"
import { Col, Row, Stack } from "react-bootstrap"
import { Container } from "react-bootstrap"
import FilterSection from "./components/FilterSection"
import ProductCard from "./components/ProductCard"

export default function Products() {
    useEffect(()=>{
        
    },[])
    const products =  [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    return (
        <Container>
            <Stack
                direction="horizontal"
                gap={3}
                className="mx-auto my-3"
                style={{ justifyContent: "center" }}
            >
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
            </Stack>
            <Row>
                <Col md={3}>
                    <FilterSection />
                </Col>
                <Col md={9} >
                <Row xs={2} md={2} lg={3} xl={4}>
                    {products.map(product => {
                        return(
                            <Col style={{margin: "1em 0"}}>
                                <ProductCard/>
                            </Col> 
                        )
                    })}
                </Row>
                </Col>
            </Row>
        </Container>
    )
}
