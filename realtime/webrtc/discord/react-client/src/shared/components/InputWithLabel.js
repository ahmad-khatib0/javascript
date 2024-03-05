import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "16px",
});

const Input = styled("input")({
  height: "40px",
  flexGrow: 1,
  border: "solid 1px black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393f",
  margin: 0,
  fontSize: "16px",
  padding: "0 5px",
});

const InputWithLabel = (props) => {
  const { value, setValue, label, type, placeholder } = props;

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Wrapper>
      <Label> {label} </Label>
      <Input
        value={value}
        onChange={handleValueChange}
        placeholder={placeholder}
        type={type}
      />
    </Wrapper>
  );
};

export default InputWithLabel;