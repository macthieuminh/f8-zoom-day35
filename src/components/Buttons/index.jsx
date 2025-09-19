import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./Button.module.scss"

export default function Button({
    primary = false,
    rounded = false,
    bordered = false,
    disabled = false,
    loading = false,
    children,
    size = "medium",
    href,
    onClick,
    className,
    ...passProps
}) {
    const classNames = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
        [styles.disabled]: disabled,
        [styles.loading]: loading,
    })
    let Component = href ? "a" : "button"
    return (
        <Component
            {...passProps}
            href={href}
            className={clsx(classNames)}
            onClick={disabled || loading ? null : onClick}>
            {children}
        </Component>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    href: PropTypes.string,
}

