import { Deck, Slide, Stack } from '@revealjs/react';
import 'reveal.js/reveal.css';
import './Presentation.css';

import logo from './assets/logo.svg';
import sysarch from './assets/sysarch.png';

const Presentation = () => (
	<Deck config={{ width: 1920, height: 1080, }}>
		<SlideOpening />
		<Slide1 />
		<Slide2 />
		<Slide3 />
		<Slide4 />
		<Slide5 />
	</Deck>
)

const SlideOpening = () => (
	<Slide backgroundColor='var(--theme)'>
		<img src={logo} alt='Logo' className='logo' />
		<div>
			<h1>Point-of-Sale System and<br />Management Suite for F&B SMEs</h1>
			<p>Class COS40006.1 / Containerised</p>
			<p>Presented by: Nguyen Quoc Bao, Nguyen Phu Quang, Nguyen Ta Minh Triet</p>
			<p className='small'>11 April 2026</p>
		</div>
	</Slide>
);

const Slide1 = () => (
	<Stack>
		<Slide backgroundColor='var(--theme)'>
			<h1>Problem Formulation</h1>
		</Slide>

		<Slide>
			<h2>Background</h2>

			<p></p>
		</Slide>
	</Stack>
);

const Slide2 = () => (
	<Stack>
		<Slide backgroundColor='var(--theme)'>
			<h1>System Design and Architecture</h1>
		</Slide>

		<Slide>
			<h2>System Architecture</h2>

			<div className="grid" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'center' }}>
				<img src={sysarch} alt='System Architecture' className='figure' />
				<ul>
					<li>The system follows a simplified three-tier architecture.</li>
					<li>Quisquam, assumenda quasi praesentium facilis cum tenetur eos.</li>
					<li>Explicabo, dolore. Adipisci aliquid unde labore totam ipsam!</li>
				</ul>
			</div>
		</Slide>

		<Slide>
			<h2>DevOps Architecture</h2>

			<div className="grid" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'center' }}>
				<img src={sysarch} alt='System Architecture' className='figure' />
				<ul>
					<li>The system follows a simplified three-tier architecture.</li>
					<li>Quisquam, assumenda quasi praesentium facilis cum tenetur eos.</li>
					<li>Explicabo, dolore. Adipisci aliquid unde labore totam ipsam!</li>
				</ul>
			</div>
		</Slide>
	</Stack>
);

const Slide3 = () => (
	<Stack>
		<Slide backgroundColor='var(--theme)'>
			<h1>System Implementation</h1>
		</Slide>

		<Slide>
			<h2></h2>
		</Slide>
	</Stack>
);

const Slide4 = () => (
	<Stack>
		<Slide backgroundColor='var(--theme)'>
			<h1>System Evaluation</h1>
		</Slide>

		<Slide>
			<h2></h2>
		</Slide>
	</Stack>
);

const Slide5 = () => (
	<Stack>
		<Slide backgroundColor='var(--theme)'>
			<h1>Impact and Applications</h1>
		</Slide>

		<Slide>
			<h2></h2>
		</Slide>
	</Stack>
);

export default Presentation
