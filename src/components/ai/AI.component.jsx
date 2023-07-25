import React, { useState, useEffect } from "react";
import axios from "axios";
import icon from "../../assets/svg/send.svg";
import styles from "./AI.module.scss";

const AI = () => {
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("");
  const [toggleTopic, setToggleTopic] = useState(1);
  const [reply, setReply] = useState([{}]);
  const [done, setDone] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    document.title = "Soft-Skills AI";
  }, []);

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const topics = [
    {
      title: "Tell me about yourself 🚀",
      order: 1,
    },

    {
      title: "Leadership Skills 😎",
      order: 2,
    },

    {
      title: "Problem-Solving 🧐",
      order: 3,
    },
  ];

  const handleChangeToggleTopic = (i, text) => {
    let topic;

    switch (i) {
      case 1:
        topic = text;
        break;

      case 2:
        topic = text;
        break;

      case 3:
        topic = text;
        break;

      default:
        topic = text;
    }

    setTopic(topic);
    setToggleTopic(i);
  };

  const activeTopic = (i) => {
    if (toggleTopic === i) {
      return `${styles.topic} ${styles.active}`;
    }

    return `${styles.topic}`;
  };

  async function sendData(e) {
    e.preventDefault();

    setLoad(true);
    setDone(true);

    try {
      const response = await axios.post(
        "https://soft-skils-ai-mvp-server.vercel.app/api/soft-skills-ai",
        {
          message: message,
          topic: topic,
        }
      );

      setLoad(false);
      setReply(response.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <div className={styles.page_wrapper}>
        <form onSubmit={sendData} className={styles.form}>
          <div className={styles.controller_wrapper}>
            <div className={styles.controller}>
              <div className={styles.topics}>
                {topics.map((t, i) => (
                  <div
                    key={i}
                    className={activeTopic(t.order)}
                    onClick={() => handleChangeToggleTopic(t.order, t.title)}>
                    {t.title}
                  </div>
                ))}

                {/* <div
                className={activeTopic(4)}
                onClick={() => handleChangeToggleTopic(4)}>
                Where do you see yourself in the next 5 - years?
              </div> */}
              </div>

              <textarea
                type="text"
                placeholder="Send a message"
                onChange={handleChangeMessage}
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.button}>
              <img src={icon} alt="Icon-SVG" />
            </button>
          </div>

          {done ? (
            <div className={styles.reply_wrapper}>
              {!load ? (
                <div>
                  <div className={styles.text}>
                    <h2 className={styles.title}>
                      Feedback for your answer, <br /> Topic: {topic}
                    </h2>

                    <p className={styles.desc}>
                      <span>DevXAI</span> instantly evaluates the delivery of
                      your interview answers so you can improve
                    </p>
                  </div>

                  <div className={styles.reply_container}>
                    {reply.map((reply, i) => (
                      <div
                        key={i}
                        className={styles.reply}
                        style={{ borderColor: reply.score_color }}>
                        <h3 className={styles.title}>
                          {reply.title}
                          <span style={{ backgroundColor: reply.score_color }}>
                            {reply.score}
                          </span>
                        </h3>

                        <p className={styles.desc}>{reply.description}</p>

                        <ul>
                          {reply.improve
                            ? reply.improve.map((text, i) => (
                                <li key={i}>{text}</li>
                              ))
                            : null}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <span className={styles.load}>Loading...</span>
              )}
            </div>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default AI;
