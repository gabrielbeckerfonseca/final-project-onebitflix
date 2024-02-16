import NewestCategory from "../src/components/homeAuth/newestCategory";
import FeaturedSection from "../src/components/homeAuth/featuredSection";
import Head from "next/head"
import FavoriteCategory from "../src/components/homeAuth/favoriteCategory";
import FeaturedCategory from "../src/components/homeAuth/featuredCategory";
import ListCategories from "../src/components/homeAuth/listCategories";
import Footer from "../src/components/common/footer";
import Link from "next/link";
import { Button } from "reactstrap";
import styles from "../styles/HomeNoAuth.module.scss"

const HomeAuth = function (){
    return (
        <>
            <Head>
                <title>Onebitflix - Home</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <FeaturedSection />
                <NewestCategory />
                <FavoriteCategory />
                <FeaturedCategory />
                <Link href="/categories">
                        <Button className={styles.navBtn} outline>
                            ACESSAR TODAS AS CATEGORIAS
                        </Button>
                    </Link> 
                <div style={{ backgroundColor: '#151515' }}>
                    <Footer />
                </div>
            </main>
        </>
    );
};

export default HomeAuth;