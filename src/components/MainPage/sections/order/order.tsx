import { FC } from "react";
import { ginger, notrisPackage, virus } from "../../../../assets";
import styles from "./order.module.scss";

const SectionOrder: FC = () => {
  return (
    <section className={styles["order"]} id="order">
      <div className="container">
        <h2 className={styles["order__title"]}>
          ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
          <br />
          <span className={styles["order__title_orange"]}>
            СО СКИДКОЙ -15% ПЕРВЫМ!
          </span>
        </h2>
        <p className={styles["price"]}>
          <span className={styles["price_old"]}>750₽</span> <span> 690₽</span>
        </p>
        <div className={styles["order__wrap"]}>
          <div className={styles["order__item"]}>
            <img src={ginger} alt="Ginger" />
            <p>
              Содержит <br /> <span className="text-orange">имбирь</span>
            </p>
          </div>
          <div className={styles["buy"]}>
            <img src={notrisPackage} alt="Nootris" />
            <h4 className={styles["buy__text_free"]}>+ Бесплатная доставка</h4>
            <p className={styles["buy__text_special"]}>Специальная цена</p>
            <button className={styles["buy__btn"]}>Оформить заказ!</button>
          </div>
          <div className={styles["order__item"]}>
            <img src={virus} alt="Virus" />
            <p>
              Нейтрализует <br />
              <span className="text-orange">вирусы</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOrder;
