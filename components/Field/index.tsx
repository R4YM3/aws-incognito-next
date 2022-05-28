import React from "react";
import Styles from './Field.module.css';

type IInput = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: IInput) => {
  return <input {...props} />;
};

interface IField extends IInput {
  label?: string;
}

function Field({ label, ...restProps }: IField) {
  if (label) {
    return (
      <label className={Styles.field}>
        <span>{label}</span>
        <Input {...restProps} />
      </label>
    );
  }
  return <Input  className={Styles.field} {...restProps} />;
}

export default Field;
