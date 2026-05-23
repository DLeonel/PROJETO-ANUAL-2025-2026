import style from "./not-foud.module.scss";
import icon_error_mobile from "../../assets/icon/icons8-404-50.png";
import icon_error_desktop from "../../assets/icon/icons8-404-100.png";
import { useNavigate } from "react-router-dom";

function NotFoud() {

    const navigate = useNavigate();
    const mobile = window.innerWidth <= 768;

    return (
        <main className={style.main}>
            <figure className={style.container}>
                <img src={mobile <= 768 ? icon_error_desktop : icon_error_mobile} alt="Page Not Found" className={style.image} />

                <figcaption className={style.infomation}>
                    <h3 className={style.title}>Page Not Found</h3>
                    <legend className={style.description}>The page you are looking for does not exist, or is temporarily unavailable.</legend>
                </figcaption>

            </figure>

            <div className={style.box_buttons}>
                <button className={`${style.btn } ${style['btn-primary' ]}`} onClick={() => navigate("/")}>
                    Go Home
                </button>
                <button className={`${style.btn } ${style['btn-secondary' ]}`} onClick={() => navigate("/contact")}>
                    Contact Support
                </button>
            </div>
        </main>
    )
}

export default NotFoud;