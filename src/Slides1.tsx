import { Stack, Slide } from '@revealjs/react';

export const Slide1 = () => (
	<Stack>
		<Slide>
			<h1>Problem Formulation</h1>
		</Slide>

		<Slide>
			<h2>Background</h2>

			<p>Existing Point-of-Sale systems require specialized hardware and are limited to specific platforms, making them costly and inflexible for small to medium-sized businesses.</p>
			<p>This restricts accessibility and scalability, especially for businesses that operate across different devices.</p>
		</Slide>

		<Slide>
			<h2>Problem Statement</h2>

			<p>We identify a need for a simple, affordable, multi-platform solution that can run on standard devices without requiring additional hardware.</p>
		</Slide>

		<Slide>
			<h2>Technical Requirements</h2>

			<div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
				<div>
					<h3>Functional Requirements</h3>
					<ol>
						<li>Support basic sales transactions (add items, calculate totals, process payments)</li>
						<li>Allow for inventory management (track stock levels, update quantities)</li>
						<li>Generate sales reports and analytics</li>
					</ol>
				</div>
				<div>
					<h3>Non-Functional Requirements</h3>
					<ol>
						<li>Responsive design for various screen sizes</li>
						<li>Offline functionality for network disruptions</li>
						<li>Easy to use interface for staff training</li>
					</ol>
				</div>
			</div>
		</Slide>
	</Stack>
);
