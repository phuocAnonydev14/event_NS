import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {DeviceProvider} from "./providers/deviceProvider.tsx";
(window as any).global = window;
ReactDOM.createRoot(document.getElementById('root')!).render(
	<DeviceProvider><App /></DeviceProvider>
)
