export default function NavRoot({children}){
    return(
        <nav 
            id="navbar-example2" 
            style={{'background-color': 'var(--primary'}}
            className='navbar navbar-expand-lg fixed-top mx-md-5 px-4'> 
            {children}
        </nav>
    )
}
