import React from 'react'
import './Footer.css'

export const Footer = () => {
    return ( 
        <div className="footer container-fluid">
            <footer className="row pt-5 justify-content-center">
                <div className="contact col-10 col-sm-4 col-md-4 col-lg-3 justify-content-center">
                    <h3 className="contact__title text-center mr-5">Contact us</h3>
                    <div className="contact__container row d-flex justify-content-center">
                        <ul>
                            <li><a className="contact__link" href="mailto:info@panditasco.com"><i className="fas fa-envelope"></i> info@minishop.com</a></li>
                            <li><a className="contact__link" href="https://api.whatsapp.com/send?phone=+573175819487"><i className="fab fa-whatsapp"></i> +57 317 5819487</a></li>
                            <li><a className="contact__link" href="https://www.facebook.com/PanditasCo"><i className="fab fa-facebook-square"></i> MiniShop</a></li>
                            <li><a className="contact__link" href="https://www.instagram.com/panditasco/?hl=es-la"><i className="fab fa-instagram"></i> MiniShop</a></li>
                        </ul>
                    </div>
                </div>
                <div className="envios col-10 col-sm-4 col-md-3 d-block d-sm-block d-md-block text-center">
                    <p className="envios__text"><i className="fas fa-truck"></i> Free delivery on all orders over $25</p>
                    <p className="envios__text"><i className="far fa-clock"></i> We are always open online, delivering to you safely</p>
                    <p className="envios__text"><i className="fas fa-feather-alt"></i> Made in Colombia</p>                   
                </div>
                <div className="rights col-12 row pt-2 align-items-center">
                    <p className="rights__text col-12 col-sm-12 text-center">&copy; MiniShop 2021. All Rights Reserved.</p>
                </div>
                </footer>
        </div>
     );
}
 