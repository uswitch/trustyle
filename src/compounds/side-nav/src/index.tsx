/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import Accordion from '@uswitch/trustyle.accordion'

interface Props extends React.HTMLAttributes<HTMLDivElement> {

}

const SideNav: React.FC<Props> = ({

}) => {
  const { theme }: any = useThemeUI()

  return <div>
    <Accordion title='In this guide'>
      <ul>
        <li>What do Visa and Mastercard do?</li>
      </ul>
    </Accordion>
  </div>
}

export default SideNav
