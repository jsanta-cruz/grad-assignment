import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { nav } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {

        // Get the site title (data from gatsby-config.js)
        const data = useStaticQuery(graphql`
        query {
        site {
            siteMetadata {
                title
            }
        }
        }
    `)
  return (
    <div>
      <header>
        <div>
        <Link to="/"></Link>
        </div>
        <h3>{data.site.siteMetadata.title}</h3>
        <nav className={nav}>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/index_problem/">Problem</Link>
            </li>
            <li>
              <Link to="/index_solution/">Solution</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>{pageTitle}</h2>
        {children}
      </main>
      <footer>
                Example footer developed for CSCI E-114, Spring 2024.
        </footer>
    </div>
  );
};

export default Layout;
