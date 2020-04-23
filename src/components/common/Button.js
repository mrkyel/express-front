import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { withRouter } from "react-router-dom";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
`;

const Button = ({ to, history, ...rest }) => {
  const onClick = (e) => {
    // to 가 있다면 to로 페이지 이동
    if (to) {
      history.push(to);
    }
    if (rest.onClick) {
      rest.onClick(e);
    }
  };
  return <StyledButton {...rest} onClick={onClick} />;
};

export default withRouter(Button);
