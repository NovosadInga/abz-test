import React from 'react';
import { Link } from 'react-scroll'
import bg_jpg from "./../../assets/img/bg.jpg"
import bg_webp from "./../../assets/img/bg.webp"
import bg_avif from "./../../assets/img/bg.avif"
export interface IPrimaryProps {

}

const Primary: React.FC<IPrimaryProps> = () => {
	return (
		<section className='primary'>
			<div className="container">
				<div className='primary-wrap'>
					<div className="primary-content">
						<h1 className='primary__title title'>Test assignment for front-end developer</h1>
						<p className='primary__text'>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
						<Link className="primary__button button" to="signup" spy={true} smooth={true} duration={700} >Sign up</Link>
					</div>
					<picture className='primary__bg'>
						<source type="image/avif" srcSet={bg_avif} />
						<source type="image/webp" srcSet={bg_webp} />
						<source type="image/jpg" srcSet={bg_jpg} />
						<img src={bg_webp} alt="" width="1170px" height="650" />
					</picture>
				</div>
			</div>
		</section>
	);
}
export default Primary
