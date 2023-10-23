import React from "react"
import CategoriesCard from "./components/CategoriesCard"
import { Col, Row, Stack } from "react-bootstrap"
import { Container } from "react-bootstrap"
import FilterSection from "./components/FilterSection"
import ProductCard from "./components/ProductCard"

export default function Products() {
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
            <Row md={2}>
                <Col md={3}>
                    <FilterSection />
                </Col>
                <Col md={9} style={{display:"flex", flexDirection: "row", flexWrap: "wrap", gap: "3em"}}>
                
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </Col>
            </Row>
        </Container>
    )
}
