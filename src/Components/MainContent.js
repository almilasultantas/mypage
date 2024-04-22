import React from "react";
import { Col, Row, Container } from "reactstrap";
import "../CSS/Main.css";
import photo from "../Media/vesikalık.jpeg"

function MainContent(args) {
    return (
        <div style={{ textAlign: "center" }} className="maindiv">
            <h1>Hoş Geldiniz!</h1>
            <p style={{ padding: "1rem", fontSize: "1.8rem" }}>
                Merhaba ve web siteme hoş geldiniz! Benim adım Almıla Sultan TAŞ ve bu benim portföyüm. Burada, çeşitli projelerim ve çalışmalarım hakkında bilgi bulabilirsiniz.
            </p>
            <Container >
                <Row style={{ padding: "1rem" }}>
                    <Col md="6" sm="12" style={{ textAlign: "center" }}>
                        <img
                            src={photo}
                            className="image"
                            alt=""
                            style={{
                                height: "50vh", borderRadius: "50%", border: "0.3rem solid #1F2544"
                            }}
                        />
                    </Col>
                    <Col md="6" sm="12" style={{ textAlign: "center", fontSize: "1.3rem" }}>
                        <p>
                            Bu web sitesi, sizlere benimle ilgili daha fazla bilgi paylaşmak, çalışmalarımı sergilemek ve potansiyel işbirliklerine olanak tanımak için oluşturulmuştur. Portföyümü gezinirken, yaptığım işler hakkında daha fazla bilgi edinebilir ve benimle iletişime geçebilirsiniz.
                        </p>
                        <p>
                            İşbirliği fırsatları, proje önerileri veya sadece bir merhaba demek için her zaman açığım. Lütfen çekinmeden iletişime geçin ve nasıl yardımcı olabileceğimi bana bildirin. Sizinle çalışmayı ve yeni projeleri hayata geçirmeyi dört gözle bekliyorum.
                        </p>
                        <p>
                            Teşekkür ederim ve ziyaretinizden dolayı memnuniyet duyarım. İyi gezintiler!
                        </p>
                        <button className="btnBigger" >
                            <a href="/contact">Benimle İletişime Geçin</a>
                        </button>

                    </Col>
                </Row>


            </Container>
            <br />
        </div>
    );
}

export default MainContent;
