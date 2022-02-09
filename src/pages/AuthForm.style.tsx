import styled from "styled-components";

export const FormWrap = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Input = styled.input`
  width: 420px;
  height: 42px;
  margin-bottom: 20px;
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;

  &::placeholder {
    color: #989797;
    opacity: 0.5;
  }

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #989797;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`