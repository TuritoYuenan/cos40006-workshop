import { Deck, Slide } from '@revealjs/react';
import 'reveal.js/reveal.css';
import './Presentation.css';

import { Slide1 } from './Slides1';
import { Slide2 } from './Slides2';
import { Slide3 } from './Slides3';
import { Slide4 } from './Slides4';
import { Slide5 } from './Slides5';

import logo from './assets/logo.svg';

const Presentation = () => (
	<Deck config={{ width: 1920, height: 1080, loop: true }}>
		<SlideOpening />
		<Slide1 />
		<Slide2 />
		<Slide3 />
		<Slide4 />
		<Slide5 />
	</Deck>
)

const SlideOpening = () => (
	<Slide
		backgroundImage={`${import.meta.env.BASE_URL}/icon.svg`}
		backgroundPosition='right'
		backgroundOpacity={0.3}
		backgroundSize='contain'
	>
		<img src={logo} alt='Logo' className='logo' />
		<div>
			<h1>Point-of-Sale System and<br />Management Suite for F&B SMEs</h1>
			<p>Presented by: Nguyen Quoc Bao, Nguyen Phu Quang, Nguyen Ta Minh Triet</p>
			<p>COS40006.1 &bull; G5 Containerised &bull; 11 April 2026</p>
		</div>
	</Slide>
);

export default Presentation
