import { Stack, Slide } from "@revealjs/react";

import archDevOps from './assets/arch_devops.png';
import archSystem from './assets/arch_system.png';

export const Slide2 = () => (
	<Stack>
		<Slide>
			<h1>System Design and Architecture</h1>
		</Slide>

		<Slide>
			<h2>System Architecture</h2>

			<div className="grid" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'center' }}>
				<img src={archSystem} alt='System Architecture' className='figure' />
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
				<img src={archDevOps} alt='DevOps Architecture' className='figure' />
				<ul>
					<li>The system follows a simplified three-tier architecture.</li>
					<li>Quisquam, assumenda quasi praesentium facilis cum tenetur eos.</li>
					<li>Explicabo, dolore. Adipisci aliquid unde labore totam ipsam!</li>
				</ul>
			</div>
		</Slide>
	</Stack>
);
