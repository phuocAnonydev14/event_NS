import {createContext, PropsWithChildren, useContext, useState} from "react";

type DeviceContextType = {
	deviceId: string;
	setDeviceId: (deviceId: string) => void;
}

const DeviceContext = createContext<DeviceContextType>({} as DeviceContextType)

export const DeviceProvider = ({children}: PropsWithChildren) => {
	
	const [deviceId, setDeviceId] = useState<string>('');
	
	return <DeviceContext.Provider value={{setDeviceId,deviceId}}>
		{children}
	</DeviceContext.Provider>

}

export const useDeviceContext = () => useContext(DeviceContext)