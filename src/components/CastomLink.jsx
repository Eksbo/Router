import { Link, useMatch } from 'react-router-dom'
export const CastomLink = ({ children, to, ...props }) => {

    const mach = useMatch(to)
    console.log({ mach });
    return (
        <Link
            style={{
                color: mach ? 'rgb(96, 92, 92)' : 'white',
                textDecoration: "none",
                marginLeft: "40px",
                fontSize: "32px",
            }}
            to={to}>
            {children}
        </Link>
    )

}
