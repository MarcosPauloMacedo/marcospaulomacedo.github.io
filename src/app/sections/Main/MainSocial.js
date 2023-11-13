import mainStyle from './main.module.css'

export function MainSocial(){
    return(
        <div id="mainSocial" className="d-flex">
            <a className={mainStyle.styleSocial} href="https://github.com/marcospaulomacedo"  target='_blank'><i className="bi bi-github fs-4"></i></a>
            <a className={mainStyle.styleSocial} href="https://www.linkedin.com/in/marcos-paulo-macedo/" target='_blank'><i className="bi bi-linkedin fs-4"></i></a>
            <a className={mainStyle.styleSocial} href="https://wa.me/+5534988464788" target='_blank'><i className="bi bi-whatsapp fs-4"></i></a>
        </div>
    )
}