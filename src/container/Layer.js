/**
 * @fileOverview Layer
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

function Layer(props) {
  const { children, className, id, ...others } = props;
  const layerClass = classNames('recharts-layer', className);

  return (
    <g className={layerClass} {...others} id={id}>
      {children}
    </g>
  );
}

Layer.propTypes = propTypes;

export default Layer;
