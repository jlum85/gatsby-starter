/* Vendor imports */
import React from "react"
import { Helmet } from "react-helmet"

function SEO() {
  //   const pageUrl = "https://gatsby-dev-blog.netlify.app/";

  const pageUrl =
    typeof window !== "undefined" && window.location.href
      ? typeof window !== "undefined" && window.location.href
      : "https://gatsby-dev-blog.netlify.app/"

  const metaImageUrl =
    "https://res.cloudinary.com/dak4cjfo0/image/upload/v1589443499/gatsby/gatsby-dev-blog_wdgsbi.png"
  const author = "Jerome LUMINEAU"

  const title = "Gatsby dev blog"
  const description = "Gatsby dev blog"
  const keywords = ["gatsby", "blog"]

  const metaKeywords =
    keywords && keywords.length > 0
      ? { name: "keywords", content: keywords.join(", ") }
      : []

  return (
    <Helmet
      title="Gatsby dev blog" // Page title
      titleTemplate="Dev Blog"
      meta={
        [
          { name: "description", content: description }, // Page description
          /* Open Graph */
          { property: "og:title", content: title },
          { property: "og:type", content: "website" },
          { property: "og:url", content: pageUrl },
          { property: "og:description", content: description },
          { property: "og:image", content: metaImageUrl },
          { property: "og:image:alt", content: description },
          { property: "og:site_name", content: "Gatsby Dev Blog " },
          { property: "og:locale", content: "en_US" },
          /* Twitter card */
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: title },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: metaImageUrl },
          { name: "twitter:image:alt", content: description },
          { name: "twitter:site", content: author },
          { name: "twitter:creator", content: author },
        ]
          .concat(metaKeywords) // Keywords
          .concat([]) // Other provided metadata
      }
      link={[
        { rel: "canonical", href: pageUrl }, // Canonical url
      ]}
    />
  )
}

// SEO.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   //   path: PropTypes.string.isRequired,
//   lang: PropTypes.string,
//   contentType: PropTypes.oneOf(["article", "website"]),
//   //   imageUrl: PropTypes.string,
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   translations: PropTypes.arrayOf(
//     PropTypes.shape({
//       hreflang: PropTypes.string.isRequired,
//       path: PropTypes.string.isRequired,
//     })
//   ),
//   meta: PropTypes.arrayOf(
//     PropTypes.shape({
//       property: PropTypes.string.isRequired,
//       content: PropTypes.string.isRequired,
//     })
//   ),
// }

export default SEO
