import React from "react";
import { Input, Form, FormGroup, Label } from "reactstrap";
import "../CSS/Main.css";

function ContactForm(args) {
    return (
        <div
            className="maindiv"
        >
            <div
                className="centered align-items-center"
                style={{
                    width: "100%",
                    padding: "3%",

                }}
            >
                <Form
                    style={{
                        width: "50%",
                    }}
                >
                    <FormGroup>
                        <Label for="exampleName" className="Lcolor">
                            İsim
                        </Label>
                        <Input
                            id="exampleName"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleName" className="Lcolor">
                            Soyisim
                        </Label>
                        <Input
                            id="exampleName"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail" className="Lcolor">
                            E-Posta
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleTel" className="Lcolor">
                            Telefon
                        </Label>
                        <Input
                            id="exampleTel"
                            name="tel"
                            placeholder="Enter your Number"
                            type="tel"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText" className="Lcolor">
                            Mesaj
                        </Label>
                        <Input id="exampleText" name="text" type="textarea" />
                    </FormGroup>

                    <div className="text-center w-100">
                        <button className="btnBigger">Send</button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default ContactForm;
