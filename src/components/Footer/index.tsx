import "./style.scss";
import React from 'react';

import { ReactComponent as StoreIcon } from '../../assets/svg/loja.svg';
import { ReactComponent as MapIcon } from '../../assets/svg/mapa.svg';
import { ReactComponent as WhatsAppIcon } from '../../assets/svg/whatsapp.svg';
import { ReactComponent as EmailIcon } from '../../assets/svg/email.svg';

const Footer: React.FC = ({ children }) => {
	return (
		<footer>
			{children}
			<section className="company-info">
				<h2>Eva Shop</h2>
				<div className="about-us">
					<div className="info-item">
						<StoreIcon />
						<ul className="info-list">
							<li><a href="#">Quem somos</a></li>
							<li><a href="#">Política de privacidade</a></li>
							<li><a href="#">Feedback de Clientes</a></li>
							<li><a href="#">Trocas e devoluções</a></li>
						</ul>
					</div>
					<div className="info-item">
						<MapIcon />
						<div className="address">
							<p>Rua Av. Rio Negro, 1100</p>
							<p>Jardim Roselandia</p>
							<p>14406-005</p>
							<p>Franca / SP</p>
						</div>
					</div>
					<div className="info-item">
						<StoreIcon />
						<ul className="contact">
							<li><a href="#"><WhatsAppIcon />(16) 9 98179-7325</a></li>
							<li><a href="#"><EmailIcon />contato@evacommerce.com.br</a></li>
						</ul>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;