import Head from "next/head"
import styles from "../styles/profile.module.scss"
import UserForm from "../src/components/profile/user"
import HeaderAuth from "../src/components/common/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import { useEffect, useState } from "react";
import PasswordForm from "../src/components/profile/password";
import Footer from "../src/components/common/footer";
import { useRouter } from "next/router";
import PageSpinner from "../src/components/common/spinner";

const UserInfo = function () {
    const [form, setForm] = useState("userForm")
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!sessionStorage.getItem("onebitflix-token")) {
            router.push("/login");
        } else {
            setLoading(false);
        }
    }, []);

    if(loading) {
        return <PageSpinner />
    }

    return (
        <>
        <Head>
            <title>Onebitflix - Meus dados</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main className={styles.main}>
        <div style={{ backgroundColor: '#151515' }}>
            <HeaderAuth/>
        </div>
            <Container className={styles.gridContainer}>
                <p className={styles.title}>Minha conta</p>
                <Row className="pt-3 pb-5">
                    <Col md={4} className={styles.btnColumn}>
                        <Button 
                            className={styles.renderForm}
                            style={{ color: form === "userForm" ? "#FF0044" : "white" }}
                            onClick={() => {
                                setForm("userForm");
                            }}
                        >
                            Dados pessoais
                        </Button>
                        <Button 
                            className={styles.renderForm}
                            style={{ color: form === "passwordForm" ? "#FF0044" : "white" }}
                            onClick={() => {
                                setForm("passwordForm");
                            }}
                        >
                            Senha
                        </Button>
                    </Col>
                    <Col md>
                        { form === "userForm" ? <UserForm /> : <PasswordForm /> }
                    </Col>
                </Row>
            </Container>
            <div className={styles.footer}>
                <Footer />
            </div>
        </main>
        </>
    );
};

export default UserInfo;