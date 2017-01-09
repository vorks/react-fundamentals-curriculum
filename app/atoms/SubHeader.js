import React from 'react';

const styles = {
  subheader: {
    color: '#333',
    fontSize: 30,
    fontWeight: 100
  }
}

export default function SubHeader(props) {
  return (
    <h2 style={styles.subheader}>{props.text}</h2>
  );
}