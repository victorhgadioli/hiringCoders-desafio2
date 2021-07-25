import React from "react";
import InputMask from "react-input-mask";
import { OutlinedTextFieldProps } from "@material-ui/core";
import TextField from "../TextField/TextField";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
  value: string | number | readonly string[];
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;