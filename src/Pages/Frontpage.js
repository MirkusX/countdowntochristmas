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
  //current date
  const today = new Date();
  //current date converted to milliseconds for use in countdown function
  const todayCd = today.getTime();
  //gets christmas date
  const cwismas = new Date(`25 dec, ${currentYear} 00:00:00`);
  //christmas date converted to milliseconds for use in countdown function
  const cwismasCd = cwismas.getTime();
  //gets todays date in string
  const todayString = today.toDateString();
  //gets christmas date in string
  const cwismasString = cwismas.toDateString();
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
    setComments([...comments, { text: message, date: todayString }]);
    setMessage("");
  };
  //countdown
  const cunter = setInterval(() => {
    //figures out distance between todays date and countdown date
    const between = cwismasCd - todayCd;
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
    //if the countdown reaches zero displays message
    if (between < 0) {
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
        <p>
          {todayString} - {cwismasString}
        </p>
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
