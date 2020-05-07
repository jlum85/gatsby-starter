import React from "react"
import styles from "./layout.module.scss"
// import Header from './header.js'
// import Footer from './footer.js'

export default ({ children }) => (
  <div className={styles.container}>{children}</div>
)
