export const filterByMag = (items, magFilter) => {
  return magFilter !== ''
    ? items.filter(
        item => Math.floor(item.properties.mag) >= parseInt(magFilter)
      )
    : items;
};

export const filterByMagFilter = (items, magTypeFilter) => {
  return magTypeFilter !== ''
    ? items.filter(
        item => item.properties.magType === magTypeFilter.toLowerCase()
      )
    : items;
};
