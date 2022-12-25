import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import classes from "./LiveChat.module.css";

const LiveChat = () => {
  const [showMess, setShowMess] = useState(false);
  const [text, setText] = useState("");
  const [commenttext, setCommentText] = useState([]);

  const toggleMess = () => setShowMess((abc) => !abc);
  const onchangeHandler = (event) => setText(event.target.value);

  const comment = commenttext;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (text !== "") {
      comment.push({ text: text });
    }
    setCommentText(comment);

    // if (text !== "") {
    //   setCommentText(commenttext.push({ text: text }));
    // }

    setText("");

    console.log(comment);

    // console.log(commenttext);
  };

  return (
    <React.Fragment>
      {showMess && (
        <div className={classes.livechat}>
          <div className={classes.livechattitle}>
            <h3>Customer Support</h3>
            <button>Let's Chat App</button>
          </div>

          <div className={classes.livechatmess}>
            {commenttext &&
              commenttext.map((x) => (
                <p className={classes.comment} key={Math.random()}>
                  <span>{x.text}</span>
                  <img src="avatar.png" alt="user" />
                </p>
              ))}
          </div>
          <form onSubmit={onSubmitHandler}>
            <div className={classes.livechat1}>
              <img src="avatar.png" alt="user" />
              <input
                value={text}
                placeholder="Enter Message!"
                onChange={onchangeHandler}
              />
              <p>
                <FontAwesomeIcon
                  icon={faPaperclip}
                  color="rgba(128, 128, 128, 0.685)"
                />
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faFaceSmile}
                  color="rgba(128, 128, 128, 0.685)"
                />
              </p>
              <button>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  color="rgb(70, 173, 229)"
                />
              </button>
            </div>
          </form>
        </div>
      )}

      <div className={classes.livechatshow} onClick={toggleMess}>
        <img src="mess.png" alt="messenger" />
      </div>
    </React.Fragment>
  );
};

export default LiveChat;
