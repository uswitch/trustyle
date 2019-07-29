/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { LoadingSpinner } from '../../elements/loading-spinner'

import * as st from './styles'

interface WithLoading {
  loading: boolean
}

export const withLoader = <P extends {}>(C: React.ComponentType<P>) => (
  props: P & WithLoading
) =>
  props.loading ? (
    <div aria-busy={props.loading} css={st.wrapper}>
      <LoadingSpinner />
    </div>
  ) : (
    <C {...props} />
  )
