import React from 'react'
import styled from 'styled-components'

import { format, distanceInWordsStrict } from 'date-fns'
import fr from 'date-fns/locale/fr'
import nl from 'date-fns/locale/nl'
import ru from 'date-fns/locale/ru'

import { Mono, Container } from './styled'

const Date = ({ from, to }) =>
  <Container>
    <div>
      {'From '}
      {format(from, 'YYYY-MM-DD')}
      {' to '}
      {format(to, 'YYYY-MM-DD')}
    </div>

    <Mono>
      <div>
        English:&nbsp;
        {distanceInWordsStrict(from, to)}
      </div>
      <div>
        French:&nbsp;&nbsp;
        {distanceInWordsStrict(from, to, { locale: fr })}
      </div>
      <div>
        Dutch:&nbsp;&nbsp;&nbsp;
        {distanceInWordsStrict(from, to, { locale: nl })}
      </div>
      <div>
        Russian:&nbsp;
        {distanceInWordsStrict(from, to, { locale: ru })}
      </div>
    </Mono>
  </Container>

export default Date
