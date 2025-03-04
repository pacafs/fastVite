interface ButtonProps {
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'warning' | 'info' | 'neutral';
    children: string;
}

const Button = ({ children, onClick, color}: ButtonProps) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>{children}</button>
  )
}



export default Button