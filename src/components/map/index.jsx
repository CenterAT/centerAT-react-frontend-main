import React from 'react'
import { YMaps, Map, ZoomControl, GeolocationControl, Placemark } from '@pbe/react-yandex-maps';

export const MapWrapper = () => {
  return (
  <YMaps>
        <Map defaultState={{ 
            center: [55.83, 37.42], 
            zoom: 10
            }} width='100%' height='100%'>
                <Placemark geometry={[55.835169, 37.426438]} />
            <ZoomControl />
            <GeolocationControl />
        </Map>
  </YMaps>
  )
}
