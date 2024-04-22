import React, { useState } from "react";
import { Row, Col, CardGroup } from "reactstrap";
import ExperienceItem from "./Helpers/ExperienceItem";
import { CategoryList, ExperienceList } from "./Helpers/List";
import "../CSS/Experience.css"
function Experiences() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedButton, setSelectedButton] = useState("all");

    const handleCategoryClick = (category, buttonIndex) => {
        setSelectedCategory(category);
        setSelectedButton(buttonIndex);
    };
    const handleShowAll = () => {
        setSelectedCategory("");
        setSelectedButton("all");

    };
    return (
        <div className="experience maindiv">
            <h1 className="experienceTitle">Deneyimlerim</h1>
            <Row style={{ padding: "5rem" }}>
                <Col md="4" sm="12">
                    <button
                        style={{
                            width: "25rem",
                            height: "2.5rem",
                            backgroundColor: selectedButton === "all" ? "#EFECEC" : "",
                            border: selectedButton === "all" ? "1px solid #81689D" : "1px solid #EFECEC",
                            color: selectedButton === "all" ? "#81689D" : "#EFECEC"
                        }}
                        onClick={handleShowAll}
                    >
                        Tüm Deneyimler
                    </button>
                    {CategoryList.map((menuItem, key) => {
                        return (
                            <button
                                key={key}
                                style={{
                                    width: "25rem",
                                    height: "2.5rem",
                                    backgroundColor: selectedButton === key ? "#EFECEC" : "",
                                    border: selectedButton === key ? "1px solid #81689D" : "1px solid #EFECEC",
                                    color: selectedButton === key ? "#81689D" : "#EFECEC"
                                }}
                                onClick={() => handleCategoryClick(menuItem, key)}
                            >
                                {menuItem}
                            </button>
                        );
                    })}

                </Col>
                <Col md="8" sm="12">
                    <CardGroup className="experienceList centered">
                        {selectedCategory &&
                            ExperienceList.filter(
                                (experience) => experience.category === selectedCategory
                            ).map((experience) => (
                                <ExperienceItem
                                    key={experience.id}
                                    id={experience.id}
                                    Date={experience.Date}
                                    name={experience.name}
                                    Position={experience.Position}
                                />
                            ))}
                        {!selectedCategory &&
                            ExperienceList.map((experience) => (
                                <ExperienceItem
                                    key={experience.id}
                                    id={experience.id}
                                    Date={experience.Date}
                                    name={experience.name}
                                    Position={experience.Position}
                                />
                            ))}
                    </CardGroup>
                </Col>
            </Row>

            <br />
            <br />
        </div>
    );
}

export default Experiences;
