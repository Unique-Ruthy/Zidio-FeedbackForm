import styles from "./feedback.module.css";
import { useState } from "react";
import { ReactComponent as Email } from "./../assets/Email.svg";
import { ReactComponent as Avatar } from "./../assets/Icons.svg";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { name, email });
  };

  return (
    <div className={styles.feedbackContainer}>
      <h1 className={styles.heading}>Feedback Form</h1>
      <form className={styles.feedbackContain} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="name">
            <Email className={styles.icon} />
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
            />
          </label>
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">
            <Avatar className={styles.icon} />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
