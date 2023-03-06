import Typography from "../typography/Typography"

interface Props {
    children: React.ReactNode,
    className?: string
}

const ErrorText = ({ children, className }: Props) => {
    return(
        <div className={className}>
            <Typography className="text-red-400">
                {children || 'error happens'}
            </Typography>
        </div>
    )
}

export default ErrorText
