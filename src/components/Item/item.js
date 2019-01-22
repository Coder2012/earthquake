import React from 'react';
import propTypes from 'prop-types';
import ItemStyles from './item.module.scss';

const Item = ({ id, properties }) => {
  const { place, mag, magType } = properties;

  return (
    <section className={ItemStyles.item}>
      <dl>
        <dt className={ItemStyles.item__id}>ID: </dt>
        <dd className={ItemStyles.item__id}>{id}</dd>
      </dl>
      <dl>
        <dt>Location:</dt>
        <dd>{place}</dd>
      </dl>
      <dl>
        <dt>Magnitude:</dt>
        <dd>
          {mag}
          {magType}
        </dd>
      </dl>
    </section>
  );
};

Item.propTypes = {
  id: propTypes.string,
  properties: propTypes.object
};

export default Item;
