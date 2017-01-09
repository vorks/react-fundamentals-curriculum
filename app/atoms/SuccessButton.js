import React from 'react';
import FormButton from '../atoms/FormButton';

const styles = {
  button: {
    backgroundColor: '#5cb85c',
    borderColor: '#5cb85c',
    color: '#fff'
  }
}

export default function SuccessButton(props) {
  return (
    <FormButton type={props.type} text={props.text} styles={styles} />
  );
}