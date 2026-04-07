import { Deck, Slide, Stack } from '@revealjs/react';
import RevealZoom from 'reveal.js/plugin/zoom';
import 'reveal.js/reveal.css';
import './Presentation.css';

import { Slide1 } from './Slides1';
import { Slide2 } from './Slides2';
import { Slide3 } from './Slides3';
import { Slide4 } from './Slides4';
import { Slide5 } from './Slides5';

import logo from './assets/logo.svg';
import swinLogo from './assets/logo_swin.svg';

const Presentation = () => (
	<Deck config={{ width: 1920, height: 1080, loop: true, slideNumber: 'c/t', controlsLayout: 'edges' }} plugins={[RevealZoom]}>
		<SlideOpening />
		<Slide1 />
		<Slide2 />
		<Slide3 />
		<Slide4 />
		<Slide5 />
	</Deck>
)

const SlideOpening = () => (
	<Stack>
		<Slide
			backgroundImage={`${import.meta.env.BASE_URL}/icon.svg`}
			backgroundPosition='right'
			backgroundOpacity={0.3}
			backgroundSize='contain'
		>
			<div style={{ display: 'flex', gap: '1rem' }}>
				<img src={swinLogo} alt='Swinburne Logo' style={{ width: 'auto', height: '120px' }} />
				<img src={logo} alt='Logo' />
			</div>
			<div>
				<h1>Point-of-Sale System and<br />Management Suite for F&B SMEs</h1>
				<p>COS40006.1 &bull; G5 Containerised &bull; 11 April 2026</p>
				<p>Presenters: Quoc Bao, Phu Quang, Minh Triet</p>
			</div>
		</Slide>

		<Slide
			backgroundImage={`${import.meta.env.BASE_URL}/icon.svg`}
			backgroundPosition='right'
			backgroundOpacity={0.3}
			backgroundSize='contain'
		>
			<h1>Agenda</h1>
			<dl>
				<dt>Problem Formulation</dt>
				<dd>Identifying the project scope, stakeholders, and requirements.</dd>
				<dt>System Design and Architecture</dt>
				<dd>Designing the overall structure and components of the system.</dd>
				<dt>Implementation Details</dt>
				<dd>Exploring the technical aspects and development approaches.</dd>
				<dt>System Evaluation</dt>
				<dd>Assessing the system's performance and effectiveness.</dd>
				<dt>Impact and Application</dt>
				<dd>Discussing the real-world applications and potential impact.</dd>
			</dl>
		</Slide>
	</Stack>
);

export default Presentation
