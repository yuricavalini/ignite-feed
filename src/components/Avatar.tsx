/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({
  hasBorder = true, ...props
}: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}

Avatar.propTypes = {
  hasBorder: PropTypes.bool,
};

Avatar.defaultProps = {
  hasBorder: true,
};
