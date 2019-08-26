import React from "react"

const PageTemplate = ({ pageContext }) => (
  <div>
    <h1>{pageContext.heading}</h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </div>
)

export default PageTemplate
