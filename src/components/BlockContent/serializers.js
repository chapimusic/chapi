import React from 'react'

const serializers = {
  types: {},
  marks: {
    link: ({mark, children}) => {
      // Read https://css-tricks.com/use-target_blank/
      const {blank, href} = mark
      return blank ? (
        <a href={href} target="_blank" rel="noopener">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    },
  },
}

export default serializers
