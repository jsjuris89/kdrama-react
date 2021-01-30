import styles from "./Form.module.css";

const Form = ({ formState, setFormState, dramas }) => {
  console.log("[FORM.JS] running....");

  const handleSubmit = (e) => {
    e.preventDefault();

    dramas.push(formState);
    console.log("dramas:", dramas);
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setFormState((prev) => ({ ...prev, [inputName]: value }));
  };

  const handleCheckboxInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    // if checkbox is checked we add a new genre to genres array
    if (e.currentTarget.checked) {
      setFormState((prev) => ({
        ...prev,
        [inputName]: [...prev[inputName], value],
      }));
    } else {
      setFormState((prev) => ({
        ...prev,
        [inputName]: prev[inputName].filter((genre) => value !== genre), // otherwise we remove that genre from genres array
      }));
    }
  };

  return (
    <div>
      <h1>Add a drama</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.labelContainer}>
          <label>Drama name</label>
          <input
            type="text"
            name="drama"
            value={formState.drama}
            onChange={handleInput}
          />
        </div>

        <div className={styles.labelContainer}>
          <label>Poster link</label>
          <input
            type="text"
            name="poster"
            value={formState.poster}
            onChange={handleInput}
          />
        </div>

        <div className={styles.labelContainer}>
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formState.startDate}
            onChange={handleInput}
          />
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={formState.endDate}
            onChange={handleInput}
          />
        </div>

        <label>Genres:</label>
        <div className={styles.checkboxFlex}>
          <label>Comedy</label>
          <input
            type="checkbox"
            name="genres"
            value="comedy"
            onChange={handleCheckboxInput}
          />
        </div>
        <div className={styles.checkboxFlex}>
          <label>Romance</label>
          <input
            type="checkbox"
            name="genres"
            value="romance"
            onChange={handleCheckboxInput}
          />
        </div>
        <div className={styles.checkboxFlex}>
          <label>School</label>
          <input
            type="checkbox"
            name="genres"
            value="school"
            onChange={handleCheckboxInput}
          />
        </div>

        <div className={styles.labelContainer}>
          <label>Episodes</label>
          <input
            type="number"
            name="episodes"
            value={formState.episodes}
            onChange={handleInput}
          />
        </div>

        <div className={styles.labelContainer}>
          <label>Plot</label>
          <textarea name="plot" value={formState.plot} onChange={handleInput} />
        </div>

        <div className={styles.labelContainer}>
          <label>Main Cast</label>
          <input
            type="text"
            name="mainCast"
            value={formState.mainCast}
            onChange={handleInput}
          />
        </div>

        <div className={styles.labelContainer}>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formState.country}
            onChange={handleInput}
          />
        </div>

        <div className={styles.labelContainer}>
          <label>Director</label>
          <input
            type="text"
            name="director"
            value={formState.director}
            onChange={handleInput}
          />
        </div>
        <div className={styles.labelContainer}>
          <label>Screenwriter</label>
          <input
            type="text"
            name="screenwriter"
            value={formState.screenwriter}
            onChange={handleInput}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
