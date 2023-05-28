export function reAdjustateCoordinates(features) {
    /**
     * lat: 25.725396,
      lng: -100.312890,
     */
      //"coordinates":  [ 77.75659494,12.96821717 ]
      var newObjectArray = [...features];
      newObjectArray = newObjectArray.map((features) => {
        
        return [features.geometry.coordinates[0] + (Math.random() * .001), features.geometry.coordinates[1] + (Math.random() * .001)]
      })
    return newObjectArray;
}