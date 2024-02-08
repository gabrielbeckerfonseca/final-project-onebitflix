import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const PresentationSection = function () {
    return (
        <>
            <Container className="py-4">
                <Row>
                    <Col md className="d-flex flex-column justify-content-center align-items-start">
                        <p className={styles.subTitle}>ACESSO ILIMITADO</p>
                        <p className={styles.title}>Tenha acesso aos melhores <br /> tutoriais de programação.</p>
                        <p className={styles.description}>Estude e evolua como programador de qualquer lugar e a <br /> 
                        qualquer momento, mantendo um aprendizado contínuo.</p>
                        <Link href="/register">
                            <Button outline className={styles.btnCta}>
                                ACESSE AGORA <img src="/buttonPlay.svg" alt="buttonImg" className={styles.btnImg}/>
                            </Button>
                        </Link>                       
                    </Col>
                    <Col md>
                        <img src="/homeNoAuth/imgPresentation.png" alt="imgIndex" className={styles.imgPresentation}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center pt-5">
                    <img src="/homeNoAuth/iconArrowDown.svg" alt="arrowDown" className={styles.arrowDown} />
                    </Col>
                </Row>
            </Container>
        </>
    );    
};

export default PresentationSection;