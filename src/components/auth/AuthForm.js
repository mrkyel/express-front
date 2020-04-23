import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  margin-bottom: 2rem;
`;

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <h3>로그인</h3>
      <form action="/login" method="post">
        <StyledInput
          autoComplete="off"
          name="username"
          placeholder="아이디입력"
        />
        <StyledInput
          autoComplete="off"
          name="password"
          placeholder="비밀번호 입력"
          type="password"
        />
        <Button style={{ marginTop: "1rem", width: "100%" }} type="submit">
          로그인
        </Button>
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
