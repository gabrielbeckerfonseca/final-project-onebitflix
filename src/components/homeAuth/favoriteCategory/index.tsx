import useSWR from "swr";
import styles from "../../../../styles/slidecategory.module.scss";
import courseService from "../../../services/courseService";
import SlideComponent from "../../../components/common/slideComponent";
import PageSpinner from "../../../components/common/spinner";

const FavoriteCategory = function () {
    const { data, error } = useSWR("/favorites", courseService.getFavCourses);

    if (error) return error;
    if (!data) { 
        return <PageSpinner />;
    }   

    return (
        <>
            <p className={styles.titleCategory}>FAVORITOS</p>
            {data.data.courses.length >= 1 ? (
                <SlideComponent course={data.data.courses} />
            ) : (
                <p className="text-center pt-3 h5">
                    <strong>Sua lista não contêm nenhum favorito.</strong>
                </p>
            )}
        </>
    );
};

export default FavoriteCategory;