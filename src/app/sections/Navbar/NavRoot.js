export default function NavRoot({children}){
    return(
        <nav 
            id="navbar-example2" 
            style={{'background-color': 'var(--primary'}}
            className='navbar navbar-expand-lg fixed-top px-5'> 
            {children}
        </nav>
    )
}
