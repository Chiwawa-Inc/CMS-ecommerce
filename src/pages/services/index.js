import React from "react";
import Service from "./components/ourservices"
import ServiceCard from "./components/serviceCard";
import { Container } from "react-bootstrap";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> main

export default function Services() {
    const servicesList = [
        {title: "MEP Contacting Services",
<<<<<<< HEAD
        link: "",
=======
        link: "/serviceDetailPage",
>>>>>>> main
        image: "https://cdn.mos.cms.futurecdn.net/hFxbSeEGgUHd9csPokBUBW-1200-80.jpg",
        description: "jdbckjdbvd"
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
<<<<<<< HEAD
            <ServiceCard details = {element}/>
=======
            <Link to={element.link}>
                <ServiceCard details = {element}/>
            </Link>
>>>>>>> main
        ))}
        
        </Container>

    )

}
