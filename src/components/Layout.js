import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <header></header>
      <main>{children}</main>
      <footer>My Footer</footer>
    </div>
  );
}

export default Layout;
