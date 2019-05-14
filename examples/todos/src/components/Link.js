import React from 'react'
import PropTypes from 'prop-types'

/**
 * 展示组件，一个电邮callback回调功能的链接
 * @param active
 * @param children
 * @param onClick
 * @returns {*}
 * @constructor
 */
const Link = ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
