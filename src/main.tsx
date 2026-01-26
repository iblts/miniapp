// import { backButton, init } from '@tma.js/sdk-react'
import '@/styles/index.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from './components/pages/home/home-page'

// init()
// backButton.mount()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HomePage />
	</StrictMode>,
)
