// eslint-disable-next-line react/prop-types
const Button = ({size, color, disabled, children}) => {
    const style = {
        fontSize: size === 'large' ? '24px' : '16px',
        backgroundColor: color,
        opacity: disabled ? 0.5 : 1,
    }
    return (
        <button style={style} color={color} disabled={disabled}>
            {children}
        </button>
    )
}
export default Button
