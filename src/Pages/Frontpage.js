import { useEffect, useState } from "react";
import {
  CommentContainer,
  CommentsDiv,
  CountdownDiv,
  CountdownText,
  GrayText,
  StyledButton,
  StyledInput,
  StyledInputDiv,
  StyledSection,
  Title,
} from "../Components/StyledComponents";

export const Frontpage = () => {
  //gets current year
  let currentYear = new Date().getFullYear();
  //pulls comments from localstorage
  const storedComments = JSON.parse(localStorage.getItem("c0mm3nt$")) || [];
  //state for date
  const [date, setDate] = useState("");
  //date to countdown to
  const cwismas = new Date(`2 dec, ${currentYear} 00:00:00`).getTime();
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
      `Days: ${days} | Hours: ${hours} | Minutes: ${minutes} | Seconds: ${seconds}`
    );
    if (between <= 0) {
      setDate("Merry Christmas!");
    }
  }, 1000);
  //sets comments array in local storage
  useEffect(() => {
    localStorage.setItem("c0mm3nt$", JSON.stringify(comments));
  }, [comments]);
  return (
    <StyledSection>
      <Title>Countdown to Christmas</Title>
      <CountdownDiv>
        <CountdownText>{date}</CountdownText>
      </CountdownDiv>
      <StyledInputDiv>
        <StyledInput
          type="text"
          id="inputComments"
          onInput={(e) => submit(e)}
          value={message}
          placeholder="Write your greeting here!"
        />
        <StyledButton onClick={() => handleClick()}>Post</StyledButton>
      </StyledInputDiv>
      <CountdownDiv gwettings>
        <h2>Christmas Greetings!</h2>
      </CountdownDiv>
      <CommentContainer>
        {comments.reverse().map((item, index) => {
          return (
            <CommentsDiv key={index}>
              <p>{item.text}</p>
              <GrayText>{item.date}</GrayText>
            </CommentsDiv>
          );
        })}
      </CommentContainer>
    </StyledSection>
  );
};
