import ResponsiveContext from './ResponsiveContext';

export default function Storage({children}){

    return (
        <ResponsiveContext>
            {children}
        </ResponsiveContext>
    )
}