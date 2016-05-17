import { Map } from 'immutable'

import worldEmptyData, { countryCodes } from '../../data/world-empty-data'
import usaEmptyData, { stateCodes } from '../../data/usa-empty-data'

export default {
  mapType: '',
  regionCodes: Map({
    usa: stateCodes,
    world: countryCodes,
  }),
  regionData: Map({
    usa: usaEmptyData,
    world: worldEmptyData,
  }),
  sortState: Map({ key: 'regionName', direction: 'ASC' }),
  mapUi: Map({
    title: '',
    legendTitle: '',
    dataClassification: 'linear',
    linear: Map({
      startColor: '#f7fbff',
      endColor: '#08519c',
    }),
    equidistant: Map({
      classesCount: 5,
      palleteKey: 'GnBu',
      pallete: ['#f0f9e8', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac'],
      domainStartValue: '',
      domainEndValue: '',
    }),
    noDataColor: '#f5f5f5',
  }),
  topoData: Map({
    isFetching: false,
  }),
}
