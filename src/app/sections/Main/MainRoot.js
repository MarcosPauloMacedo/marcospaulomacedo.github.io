import mainStyle from './main.module.css'

export function MainRoot({children}){
    return(
        <section id="main" className={`${mainStyle.styleMain} col-md-6 col-12 d-flex flex-column justify-content-center ms-md-5 ps-md-4 pe-md-5`}>
            {children}
        </section>
    )
}