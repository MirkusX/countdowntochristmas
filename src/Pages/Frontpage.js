import { useEffect, useState } from "react";
import {
  CommentContainer,
  CommentsDiv,
  CountdownDiv,
  CountdownText,
  StyledButton,
  StyledInput,
  StyledInputDiv,
  StyledSection,
  Title,
} from "../Components/StyledComponents";

export const Frontpage = () => {
  //pulls comments from localstorage
  const storedComments = JSON.parse(localStorage.getItem("c0mm3nt$")) || [];
  //state for date
  const [date, setDate] = useState("");
  //date to countdown to
  const cwismas = new Date("24 Dec, 2023 00:00:00").getTime();
  //state for comments array
  const [comments, setComments] = useState(storedComments);
  //state for message
  const [message, setMessage] = useState();
  //sets message state to input value
  const submit = (e) => {
    setMessage(e.target.value);
  };
  //inserts message state and current date in object
  const handleClick = () => {
    const d = new Date();
    const dateTrans = d.toDateString();
    setComments([...comments, { text: message, date: dateTrans }]);
    setMessage("");
  };
  //countdown
  const cunter = setInterval(() => {
    //gets todays date
    const today = new Date().getTime();
    //figures out distance between todays date and countdown date
    const between = cwismas - today;
    //translates to readable format
    const days = Math.floor(between / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((between % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((between % (1000 * 60)) / 1000);
    //sets date state to time remaining between todays date and countdown date every second
    setDate(
      `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`
    );
  }, 1000);
  //sets comments array in local storage
  useEffect(() => {
    localStorage.setItem("c0mm3nt$", JSON.stringify(comments));
  }, [comments]);
  return (
    <StyledSection>
      <Title>Yo, mewwy cwismas</Title>
      <CountdownDiv>
        <CountdownText>{date}</CountdownText>
      </CountdownDiv>
      <StyledInputDiv>
        <StyledInput
          type="text"
          id="inputComments"
          onInput={(e) => submit(e)}
          value={message}
        />
        <StyledButton onClick={() => handleClick()}>Comment</StyledButton>
      </StyledInputDiv>
      <CommentContainer>
        <CountdownDiv>
          <h2>Cwismas Gwettings</h2>
        </CountdownDiv>
        {comments.map((item, index) => {
          return (
            <CommentsDiv key={index}>
              <p>{item.text}</p>
              <p>{item.date}</p>
            </CommentsDiv>
          );
        })}
      </CommentContainer>
    </StyledSection>
  );
};
