import { Stack, Slide } from '@revealjs/react';

import fSupabaseTables from "./assets/f_supabase_tables.png";
import fSupabaseFuncs from "./assets/f_supabase_funcs.png";
import fssCustomerPayment from "./assets/f_ss_customer_payment.png";
import fssCustomerCheckout from "./assets/f_ss_customer_checkout.png";
import fssCustomerOrder from "./assets/f_ss_customer_order.png";
import fssKitchenDisplay from "./assets/f_ss_kitchen_display.jpg";
import fssMenuEditor from "./assets/f_ss_menu_edit.jpg";
import fssOderConfirm from "./assets/f_ss_order_confirmation.jpg";
import fssProfile from "./assets/f_ss_profile.jpg";

export const Slide3 = () => (
	<Stack>
		<Slide>
			<h1>System Implementation</h1>
		</Slide>

		{/* Laptop Slides */}
		<Slide>
			<h2>Supabase / PostgreSQL Tables</h2>
			<div className="grid" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'center' }}>
				<img src={fSupabaseTables} alt='Supabase Tables' className='figure' />
				<ul>
					<li>Database schema design for the restaurant system</li>
					<li>Core tables: Customers, Orders, BranchItems</li>
					<li>Relational integrity via foreign keys</li>
					<li>Indexes for performance optimization</li>
				</ul>
			</div>
		</Slide>

		<Slide>
			<h2>Supabase / PostgreSQL Functions</h2>
			<div className="grid" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'center' }}>
				<img src={fSupabaseFuncs} alt='Supabase Functions' className='figure' />
				<ul>
					<li>Custom business logic in database layer</li>
					<li>Stored procedures for complex operations</li>
					<li>Triggers for automation and syncing</li>
				</ul>
			</div>
		</Slide>

		<Slide>
			<h2>Customer Ordering, Checkout, and Payment</h2>

			<div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
				<div>
					<img src={fssCustomerOrder} className="figure" />
					<ul>
						<li>Browse menu and select items</li>
						<li>Real-time cart updates</li>
					</ul>
				</div>

				<div>
					<img src={fssCustomerCheckout} className="figure" />
					<ul>
						<li>Checkout and payment flow</li>
						<li>Clean and simple UI</li>
					</ul>
				</div>

				<div>
					<img src={fssCustomerPayment} className="figure" />
					<ul>
						<li>Self-checkout via VietQR</li>
						<li>Optional pay at counter choice</li>
					</ul>
				</div>
			</div>
		</Slide>

		<Slide>
			<h2>Order Processing</h2>

			<div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
					<img src={fssOderConfirm} className="figure" />
					<ul style={{ margin: 0, paddingLeft: '18px' }}>
						<li>Order confirmation feedback</li>
						<li>Displays summary and status</li>
					</ul>
				</div>

				<div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
					<img src={fssKitchenDisplay} className="figure" />
					<ul style={{ margin: 0, paddingLeft: '18px' }}>
						<li>Kitchen receives orders instantly</li>
						<li>Real-time preparation tracking</li>
					</ul>
				</div>
			</div>
		</Slide>

		<Slide>
			<h2>Management Features</h2>

			<div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
					<img src={fssMenuEditor} className="figure" />
					<ul style={{ margin: 0, paddingLeft: '18px' }}>
						<li>Edit, Create, and Delete menu items, tags, and promotions</li>
						<li>Dynamic updates to system</li>
					</ul>
				</div>

				<div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
					<img src={fssProfile} className="figure" />
					<ul style={{ margin: 0, paddingLeft: '18px' }}>
						<li>Employees can view their personal information</li>
						<li>Managers can update employee details</li>
						<li>Managers can adjust employee working hours</li>
						<li>Managers can track who is on duty and off duty</li>
					</ul>
				</div>
			</div>
		</Slide>
	</Stack>
);
