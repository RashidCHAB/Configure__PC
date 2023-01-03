import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addAssemblytoCart } from "../../../features/usersSlice";
import Parts from "./Parts";
import styles from "./Product.module.css";

const Product = ({
  id,
  ssd,
  hdd,
  name,
  processor,
  motherboard,
  ram,
  power,
  compCase,
  graphics,
  description,
  cost,
  image,
}) => {
  const dispatch = useDispatch();
  const handleAdd = async () => {
    dispatch(
      await addAssemblytoCart({ userId: localStorage.getItem("id"), assemblyId: id })
    );
  
  }

  return (
    <div className={styles.productContainer}>
      <img
        className={styles.poster}
        src={`/assets/images/assembly/${image}`}
        alt=""
      />
     <Link to={`/assembly/${id}`}> <div className={styles.title}>{name}</div></Link>
      <div className={styles.price}>{cost} ₽</div>

      <button  onClick={handleAdd} className={styles.buyButton}>
            Купить
          </button>
      <Link to={`/assembly/${id}`}><button className={styles.buttonMore}>Подробнее</button></Link>
      <p className={styles.description}>{description}</p>
      <div className={styles.line}></div>
      <div className={styles.catalog}>
        <Parts
          ssd={ssd}
          graphics={graphics}
          processor={processor}
          ram={ram}
          hdd={hdd}
          motherboard={motherboard}
          power={power}
          compCase={compCase}
        />
      </div>
    </div>
  );
};

export default Product;
