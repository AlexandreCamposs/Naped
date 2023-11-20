import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className="bg-black pb-4 text-center">
			<p>
				Copyright &copy;{' '}
				<span className="text-support01">AlexandreCamposs</span>. Todos os
				direitos reservados
			</p>{' '}
		</div>
	);
};

export default Footer;
