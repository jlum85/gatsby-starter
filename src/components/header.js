import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"
import SEO from "./SEO"

// HeaderLink component
const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>
    {props.text}
  </Link>
)

// HomeButton component
const HomeButton = props => (
  <Link to={props.to}>
    <div className={styles.button}>{props.text}</div>
  </Link>
)

// SocialButton component
const SocialButton = props => {
  let style = ""

  if (props.site === "twitter") {
    style = styles.buttonTwitter
  } else if (props.site === "linkedin") {
    style = styles.buttonLinkedin
  } else if (props.site === "github") {
    style = styles.buttonGithub
  }

  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className={styles.container}>
        <SEO />

        <div className={styles.row}>
          <HomeButton to="/" text={data.site.siteMetadata.title} />
          <SocialButton
            site="github"
            url="https://github.com/jlum85"
          ></SocialButton>
          <SocialButton
            site="linkedin"
            url="https://www.linkedin.com/in/jerome-lumineau/"
          ></SocialButton>
        </div>

        <div className={styles.row}>
          <HeaderLink to="/" text="ARTICLES" />
          <HeaderLink to="/about" text="ABOUT" />
        </div>
      </header>
    )}
  />
)
