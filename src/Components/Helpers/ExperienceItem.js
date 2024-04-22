import React from "react";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "../../CSS/Experience.css"

function ExperienceItem({ id, name, Date, Position }) {
    return (
        <div className="experienceItem centered">
            <Card>
                <CardBody>
                    <CardTitle tag="h4">{name}</CardTitle>
                </CardBody>
                <CardBody>
                    <CardText>{Date}</CardText>
                    <CardText style={{ fontWeight: "bold" }}>{Position}</CardText>

                    {/* <Link to={`/produkte/${id}`} style={{ width: "90%" }} target="_blank">
                        <button>Detayları Gör</button>
                    </Link> */}
                </CardBody>
            </Card>
        </div>
    );
}

export default ExperienceItem;
