import React from 'react';

const styles = {
  input: {
    padding: '.5rem .75rem'
  }
}

export default function InputField(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      style={styles.input} />
  );
}