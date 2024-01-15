import React from "react";
import Service from "./components/ourservices"
import ServiceCard from "./components/serviceCard";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServicesAccordion from "./components/servicesAccordion";


export default function Services() {
    const servicesList = [
        {title: "MEP Contacting Services",
        link: "/serviceDetailPage",
        image: "https://cdn.mos.cms.futurecdn.net/hFxbSeEGgUHd9csPokBUBW-1200-80.jpg",
        description: "jdbckjdbvd"
        },

        {title: "Streamlined Electrical Services",
        link: "",
        image: "https://cdn.mos.cms.futurecdn.net/hFxbSeEGgUHd9csPokBUBW-1200-80.jpg",
        description: "jdbckjdbvd",
        subServices: [
            {
                title: "Electrical Energy Auditing",
                link: "",
            },
            {
                title: "Electrical Installation Testing",
                link: "",
            },
            {
                title: "Protection System Analysis",
                link: "",
            },
            {
                title: "Electrical Protection Retrofitting",
                link: "",
            }
        ],
        },

        {title: "MEP Contacting Services",
        link: "",
        image: "https://cdn.mos.cms.futurecdn.net/hFxbSeEGgUHd9csPokBUBW-1200-80.jpg",
        description: "jdbckjdbvd"
        },

        {title: "MEP Contacting Services",
        link: "",
        image: "https://cdn.mos.cms.futurecdn.net/hFxbSeEGgUHd9csPokBUBW-1200-80.jpg",
        description: "jdbckjdbvd"
        }
    ]
    return(

        <Container>
        <Service/>
        {servicesList.map((element) =>(
            (element.subServices) ?
            <ServicesAccordion props={element}/>
            :
            <Link to={element.link}>
                <ServiceCard details = {element}/>
            </Link>
        ))}
        
        </Container>

    )

}
