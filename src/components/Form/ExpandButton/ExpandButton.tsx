import React, { FC, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Props } from './props';
import css from './ExpandButton.module.scss';

import { Typography } from '../../UI';

const ExpandButton: FC<Props> = ({
    expanded, fullWidth, className, onClick, children,
}) => {
    const handleClick = useCallback(() => onClick(!expanded), [expanded, onClick]);

    return (
        <button className={cx(css['expand-button-wrap'], className, fullWidth && css['full-width'])} type="button" onClick={handleClick}>
            <Typography variant="span">{children}</Typography>
            <span className={cx(css.icon, expanded && css.expanded)} />
        </button>
    );
};

ExpandButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    expanded: PropTypes.bool,
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
};

ExpandButton.defaultProps = {
    expanded: false,
    fullWidth: false,
    className: '',
};

export default memo<Props & { children: React.ReactNode }>(ExpandButton);
