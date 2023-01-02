import styled from "styled-components";
//stylings
export const CountdownDiv = styled.div`
  background: red;
  color: white;
  width: 70%;
  border-radius: 5px;
  transform: skew(15deg);
  padding: 1em;
  ${(props) => {
    if (props.gwettings) {
      return `
        width: 15%;
        transform: skew(0deg);
        padding: 0;`;
    }
  }};
`;

export const CountdownText = styled.div`
  font-size: 3rem;
  transform: skew(-15deg);
`;

export const Title = styled.h1`
  margin-top: 0;
`;

export const CommentsDiv = styled.div`
  background-color: red;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  font-size: 1.25rem;
`;

export const StyledSection = styled.section`
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: center;
`;

export const CommentContainer = styled.div`
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: 50%;
`;

export const StyledInput = styled.input`
  background-color: green;
  border: none;
  padding: 1em;
  width: 80%;
  font-family: "Sevillana", cursive;
  font-size: 1.5rem;
`;

export const StyledButton = styled.button`
  background-color: green;
  border: none;
  padding: 1em;
  border-radius: 5px;
  font-family: "Sevillana", cursive;
  font-size: 1.5rem;
`;

export const StyledInputDiv = styled.div`
  display: flex;
  gap: 1em;
  width: 30%;
  justify-content: center;
`;

export const GrayText = styled.p`
  color: gray;
`;
