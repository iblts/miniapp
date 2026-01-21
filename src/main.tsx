import { backButton, init } from '@tma.js/sdk-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from './components/pages/home/home-page'
import './index.scss'

init()
backButton.mount()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HomePage />
	</StrictMode>,
)
