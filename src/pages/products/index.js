import React from "react"
import CategoriesCard from "./components/CategoriesCard"
import { Col, Row, Stack } from "react-bootstrap"
import { Container } from "react-bootstrap"

export default function Products() {
    return (
        <Container>
            <Stack direction="horizontal" gap={3}>
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
            </Stack>
            <Row md={2}>
                <Col md={3} xs={1}>
                    asdf
                </Col>
                <Col>asdf</Col>
            </Row>
        </Container>
    )
}
