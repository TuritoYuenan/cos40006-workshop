import { Stack, Slide } from '@revealjs/react';

import fSupabaseTables from "./assets/f_supabase_tables.png";
import fSupabaseFuncs from "./assets/f_supabase_funcs.png";

export const Slide3 = () => (
	<Stack>
		<Slide>
			<h1>System Implementation</h1>
		</Slide>

		<Slide>
			<h2>Supabase / PostgreSQL Tables</h2>

			<div className="grid" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'center' }}>
				<img src={fSupabaseTables} alt='Supabase Tables' className='figure' />
				<ul>
					<li>Database schema design for the restaurant reservation system.</li>
					<li>Key tables include Customers, Orders, and BranchItems (menu items).</li>
					<li>Use of foreign keys to maintain relationships between tables.</li>
					<li>Indexes implemented for performance optimization.</li>
				</ul>
			</div>
		</Slide>

		<Slide>
			<h2>Supabase / PostgreSQL Functions</h2>

			<div className="grid" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'center' }}>
				<img src={fSupabaseFuncs} alt='Supabase Functions' className='figure' />
				<ul>
					<li>Custom functions for data validation and business logic.</li>
					<li>Stored procedures for complex database operations.</li>
					<li>Triggers for automatic data updates and notifications.</li>
				</ul>
			</div>
		</Slide>
	</Stack>
);
