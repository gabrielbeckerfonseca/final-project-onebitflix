import Head from "next/head"
import ListCategories from "../src/components/homeAuth/listCategories";
import Footer from "../src/components/common/footer";
import Link from "next/link";
import { Button } from "reactstrap";
import styles from "../styles/HomeNoAuth.module.scss";
import FeaturedSection from "../src/components/homeAuth/featuredSection";
import HeaderAuth from "../src/components/common/headerAuth";

const Categories = function (){
    return (
        <>
            <Head>
                <title>Onebitflix - Categories</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
            <div style={{ backgroundColor: '#151515' }}>
                    <HeaderAuth />
                </div>
                <ListCategories />
                <Link href="/home">
                    <Button className={styles.navBtn} outline>
                            Voltar                   
                    </Button>
                </Link>
                <div style={{ backgroundColor: '#151515' }}>
                    <Footer />
                </div>            
            </main>
        </>
    );
};

export default Categories;