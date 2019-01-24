export const filterByMag = (items, magFilter) => {
  items.filter(item => {
    if (magFilter !== '') {
      return Math.floor(item.properties.mag) === parseInt(magFilter);
    }
    return true;
  });
  return items;
};

export const filterByMagFilter = (items, magTypeFilter) => {
  items.filter(item => {
    if (magTypeFilter !== '') {
      return item.properties.magType === magTypeFilter;
    }
    return true;
  });
  return items;
};
