import React from "react"
import styles from "./layout.module.scss"
import Header from "./header.js"
import Footer from "./footer.js"

export default ({ children }) => (
  <>
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
    <Footer>My Blog 2020 - Made with Gatsby 🚀 </Footer>
  </>
)
