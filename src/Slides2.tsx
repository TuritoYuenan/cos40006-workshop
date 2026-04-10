import { Stack, Slide } from "@revealjs/react";

import archDevOps from './assets/arch_devops.png';
import archSystem from './assets/arch_system.png';
import figmaUI from './assets/f_figma_ui.png';

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
					<li>Simplified three-tier architecture.</li>
					<li>Supabase BaaS providing both database and backend.</li>
					<li>Scheduled task to generate periodic sales reports.</li>
					<li>Kotlin/Compose Multiplatform (K/CMP) for cross-platform frontend applications.</li>
					<li>K/CMP codebase provides two different applications for staff and customers.</li>
				</ul>
			</div>
		</Slide>

		<Slide>
			<h2>DevOps Architecture</h2>

			<div className="grid" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'center' }}>
				<img src={archDevOps} alt='DevOps Architecture' className='figure' />
				<ul>
					<li>Employing GitHub, GitHub Actions, SonarQube Cloud, and SonarQube Server.</li>
					<li>Automatically deploy customer app and package staff app on new releases.</li>
					<li>Analyse and test on new pushes and pull requests.</li>
				</ul>
			</div>
		</Slide>

		<Slide>
			<h2>User Interface Design</h2>

			<div className="grid" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'center' }}>
				<img src={figmaUI} alt='Figma UI Design' className='figure' />
				<ul>
					<li>Follows Material Design 3 design.</li>
					<li>Supports light/dark mode and accessibility features.</li>
				</ul>
			</div>
		</Slide>
	</Stack>
);
