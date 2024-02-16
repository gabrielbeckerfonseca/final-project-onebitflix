import Head from "next/head";
import styles from "../../styles/coursePage.module.scss";
import HeaderAuth from "../../src/components/common/headerAuth";

const CoursePage = function {
    return (
        <>
            <Head>
                <title>Onebitflix - {"nomeDoCurso"}</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <HeaderAuth />
            </main>
        </>
    );
};

export default CoursePage;