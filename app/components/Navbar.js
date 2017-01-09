import React from 'react';
import { Link } from 'react-router';
import GetCity from './GetCity';

const styles = {
  link: {
    alignItems: 'center',
    color: '#fff',
    display: 'flex',
    height: 50,
    fontSize: 18,
    lineHeight: '20px',
    padding: 15,
    textDecoration: 'none'
  },
  navbar: {
    backgroundColor: 'rgba(252, 90, 44, 0.89)',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 5
  }
}

export default function Navbar(props) {
  return (
    <nav style={styles.navbar}>
      <Link to={'/'} style={styles.link}>Clever Title</Link>
      <GetCity direction='row' hideLabel={true} />
    </nav>
  );
}