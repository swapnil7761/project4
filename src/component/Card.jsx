import styles from "./Card.module.css";

const Card = ({ name, image, text, price }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt="food1" />
      </div>
      <div className={styles.cardinfo}>
        <h3>{name}</h3>
        <p>{text.slice(0, 65)}</p>
        <p className={styles.price}>₹{price}</p>
      </div>
    </div>
  );
};

export default Card;
