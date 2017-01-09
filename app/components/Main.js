import React from 'react';
import GetCity from './GetCity';
import Navbar from './Navbar';

const styles = {
  brand: {
    color: '#fff'
  },
  children: {
    paddingLeft: 0,
    paddingRight: 0,
    height: 'calc(100% - 90px)'
  },
  container: {
    height: '100%',
  },
  navbar: {
    backgroundColor: 'rgba(252, 90, 44, 0.89)',
    border: 0,
    borderRadius: 0,
    marginBottom: 0
  }
}

export default function Main(props) {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.children}>
        {props.children}
      </div>
    </div>
  );
}
