import Head from "next/head"
import ListCategories from "../src/components/homeAuth/listCategories";
import Footer from "../src/components/common/footer";
import Link from "next/link";
import { Button } from "reactstrap";
import styles from "../styles/HomeNoAuth.module.scss";

const Categories = function (){
    return (
        <>
            <Head>
                <title>Onebitflix - Categories</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <ListCategories />
                <Link href="/home">
                    <Button className={styles.navBtn} outline>
                            Voltar                   
                    </Button>
                </Link>
                <Footer />
            </main>
        </>
    );
};

export default Categories;