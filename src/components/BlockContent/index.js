import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import clientConfig from '../../../client-config'
import serializers from './serializers'

export const BlockContent = ({blocks}) => {
  return (
    <BaseBlockContent
      blocks={blocks}
      serializers={serializers}
      {...clientConfig.sanity}
    />
  )
}
