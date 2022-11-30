import { FC } from "react";
import { vitamin } from "../../../../assets";
import styles from "./intro.module.scss";

const SectionIntro: FC = () => {
  return (
    <section className={styles["intro"]} id="intro">
      <div className="container">
        <div className={styles["intro__wrap"]}>
          <h1 className={styles["intro__title"]}>АКТИВИРУЙ ИММУНИТЕТ!</h1>
          <p className={styles["intro__desc"]}>
            Всего пять секунд в день помогут укрепить иммунитет и повысить
            защитные силы организма
          </p>
          <h2 className={styles["intro__sub-title"]}>NOOTRIS ПОМОГАЕТ</h2>
          <p>Вашему организму во вемя рпандемии и сезонных простуд</p>
        </div>
        <img className={styles["intro__vitamin"]} src={vitamin} alt="Vitamin" />
      </div>
    </section>
  );
};

export default SectionIntro;
