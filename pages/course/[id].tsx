import Head from "next/head";
import styles from "../../styles/coursePage.module.scss";
import HeaderAuth from "../../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "../../src/services/courseService";
import { Button, Container } from "reactstrap";
import Footer from "../../src/components/common/footer";
import PageSpinner from "../../src/components/common/spinner";
import EpisodeList from "../../src/components/episodeList";

const CoursePage = function () {
    const [course, setCourse] = useState<CourseType>();
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if(!sessionStorage.getItem("onebitflix-token")) {
            router.push("/login");
        } else {
            setLoading(false);
        }
    }, []);

    const getCourse = async function () {
        if (typeof id !== "string") return;
    
        const res = await courseService.getEpisodes(id);
    
        if (res.status === 200) {
            setCourse(res.data);
            setLiked(res.data.liked);
            setFavorited(res.data.favorited);
        }
    };    

    useEffect(() => {
            getCourse();
    }, [id]);

    const handleLikeCourse = async () => {
        if (typeof id !== "string") return;

        if (liked === true) {
            await courseService.removeLike(id);
            setLiked(false);
        } else {
            await courseService.like(id);
            setLiked(true);
        };
    };

    const handleFavCourse = async () => {
        if (typeof id !== "string") return;

        if (favorited === true) {
            await courseService.removeFav(id);
            setFavorited(false);
        } else {
            await courseService.addToFav(id);
            setFavorited(true);
        };
    };

    if (course === undefined) return <PageSpinner />;

    if(loading) {
        return <PageSpinner />
    }

    return (
        <>
            <Head>
                <title>Onebitflix - {course?.name}</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <div 
                    style={{
                        backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), 
                        url('${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: '550px'
                    }}
                >
                    <HeaderAuth />
                </div>
                <Container className={styles.courseInfo}>
                    <p className={styles.courseTitle}>{course?.name}</p>
                    <p className={styles.courseDescription}>{course?.synopsis}</p>
                    <Button 
                        outline 
                        className={styles.courseBtn} 
                        disabled={course?.episodes?.length === 0 ? true : false}
                    >
                        ASSISTIR AGORA
                        <img 
                            src="/buttonPlay.svg" 
                            alt="buttonImg" 
                            className={styles.buttonImg}
                        />
                    </Button>
                    <div className={styles.interactions}>
                        {liked === false ? (
                            <img 
                                src="/course/iconLiked.svg" 
                                alt="likeImage" 
                                className={styles.interactionsImages}
                                onClick={handleLikeCourse}
                            />
                        ) : (
                            <img 
                                src="/course/iconLike.svg" 
                                alt="likeImage" 
                                className={styles.interactionsImages}
                                onClick={handleLikeCourse}
                            />
                        )}              
                        {favorited === false ? (
                            <img 
                                src="/course/iconAddFav.svg" 
                                alt="favImage" 
                                className={styles.interactionsImages}
                                onClick={handleFavCourse}
                            />
                        ) : (
                            <img 
                                src="/course/iconFavorited.svg" 
                                alt="favImage" 
                                className={styles.interactionsImages}
                                onClick={handleFavCourse}
                            />
                        )}            
                    </div>
                </Container>
                <Container className={styles.episodeInfo}>
                    <p className={styles.episodeDivision}>EPISÓDIOS</p>
                    <p className={styles.episodeLenght}>
                        {course?.episodes?.length} episódios
                    </p>
                    {course?.episodes?.length === 0 ? (
                        <p>
                            <strong>
                            Neste momento, o curso está preparando novos conteúdos empolgantes para oferecer 
                            a você. Em breve, teremos episódios incríveis que desbloquearão todo o  seu 
                            potencial. Fique ligado para embarcar nessa jornada emocionante do conhecimento!" 
                            &#x1F680;&#x1F604;
                            </strong>
                        </p>
                    ) : ( 
                        course?.episodes?.map((episode) => (
                            <EpisodeList 
                                key={episode.id}  
                                episode={episode} 
                                course={course}/>
                        ))
                    )}
                </Container>
                <div style={{ backgroundColor: '#151515' }}>
                    <Footer />
                </div>
            </main>
        </>
    );
};

export default CoursePage;