import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Presentation from './Presentation.tsx'

createRoot(document.body).render(
	<StrictMode>
		<Presentation />
	</StrictMode>,
)
