import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div>
      <h1>Add a drama</h1>
      <form className={styles.formContainer}>
        <div className={styles.labelContainer}>
          <label>Drama name</label>
          <input type="text" />
        </div>

        <div className={styles.labelContainer}>
          <label>Poster link</label>
          <input type="text" />
        </div>

        <div className={styles.labelContainer}>
          <label>Start Date</label>
          <input type="date" />
          <label>End Date</label>
          <input type="date" />
        </div>

        <label>Genres:</label>
        <div className={styles.checkboxFlex}>
          <label>Comedy</label>
          <input type="checkbox" />
        </div>
        <div className={styles.checkboxFlex}>
          <label>Romance</label>
          <input type="checkbox" />
        </div>
        <div className={styles.checkboxFlex}>
          <label>School</label>
          <input type="checkbox" />
        </div>

        <div className={styles.labelContainer}>
          <label>Episodes</label>
          <input type="number" />
        </div>

        <div className={styles.labelContainer}>
          <label>Plot</label>
          <textarea value="" />
        </div>

        <div className={styles.labelContainer}>
          <label>Main Cast</label>
          <input type="text" />
        </div>

        <div className={styles.labelContainer}>
          <label>Country</label>
          <input type="text" />
        </div>

        <div className={styles.labelContainer}>
          <label>Director</label>
          <input type="text" />
        </div>
        <div className={styles.labelContainer}>
          <label>Screenwriter</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default Form;
