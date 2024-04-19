import React from 'react'

export default function Footer() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '50px' }}>
      &copy; <span className="fw-bold">Top Store</span> {new Date().getFullYear()}
    </div>
  );
}
