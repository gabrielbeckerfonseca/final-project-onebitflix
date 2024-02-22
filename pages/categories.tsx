import Head from "next/head"
import ListCategories from "../src/components/homeAuth/listCategories";
import Footer from "../src/components/common/footer";
import styles from "../styles/HomeNoAuth.module.scss";
import FeaturedSection from "../src/components/homeAuth/featuredSection";
import HeaderAuth from "../src/components/common/headerAuth";
import HeaderGeneric from "../src/components/common/headerGeneric";


const Categories = function (){
    return (
        <>
            <Head>
                <title>Onebitflix - Categories</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
            <div style={{ backgroundColor: '#151515' }}>
            <HeaderGeneric 
                logoUrl="/home"
                btnContent={'Voltar'}
                btnUrl={`/home`}
            />
                </div>
                <ListCategories />
                <div style={{ backgroundColor: '#151515' }}>
                    <Footer />
                </div>            
            </main>
        </>
    );
};

export default Categories;