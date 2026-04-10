import { Stack, Slide } from '@revealjs/react';

export const Slide4 = () => (
	<Stack>
		<Slide>
			<h1>System Evaluation</h1>
		</Slide>

		<Slide>
			<h2>System Strengths</h2>
			<ul>
				<li>Real-time architecture using Supabase subscriptions</li>
				<li>Clear separation between customer and staff interfaces</li>
				<li>Structured relational database design</li>
				<li>Modular components for easier maintenance</li>
			</ul>
		</Slide>
		<Slide>
			<h2>Observed Behavior</h2>
			<ul>
				<li>Orders update in near real-time between screens</li>
				<li>UI interactions are responsive during normal usage</li>
				<li>System handles typical ordering workflow smoothly</li>
			</ul>
		</Slide>
		<Slide>
			<h2>Limitations</h2>
			<ul>
				<li>Limited testing with real users</li>
				<li>System behavior under heavy load is unknown</li>
				<li>Dependent on internet connectivity</li>
			</ul>
		</Slide>
		<Slide>
			<h2>Future Work</h2>
			<ul>
				<li>Conduct usability testing with real users</li>
				<li>Perform load and stress testing</li>
				<li>Collect performance metrics (latency, response time)</li>
				<li>Improve system based on feedback</li>
			</ul>
		</Slide>
	</Stack>
);
