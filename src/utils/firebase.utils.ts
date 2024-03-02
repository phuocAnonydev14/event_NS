import { initializeApp } from "firebase/app";
import { get, getDatabase, push, ref, set } from "firebase/database";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_APP_ID,
    measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
    databaseURL: import.meta.env.VITE_APP_DATABASE_URL
};

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export const useRealtimeDB = () => {
    const db = getDatabase(app);

    const checkDatabase = async (name: "devices" | "services", deviceId: string) => {
        const dbRef = ref(db, `/${name}`);
        try {
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                for (const key in data) {
                    if (data[key]?.id === deviceId) {
                        return { dbRef, key };
                    }
                }
            }
            return { dbRef, key: null };
        } catch (error) {
            console.error('Error checking database:', error);
            return { dbRef: dbRef, key: null };
        }
    }

    const addDevice = async (deviceId: string) => {
        const { dbRef, key } = await checkDatabase('devices', deviceId);
        if (!key) {
            const newDeviceRef = push(dbRef);
            set(newDeviceRef, { id: deviceId });
            console.log(`Device with ID ${deviceId} added successfully`);
        } else {
            console.log(`Device with ID ${deviceId} already exists`);
        }
    }

    const addService = async (service: ServiceProps, deviceId: string) => {
        try {
            const { dbRef, key } = await checkDatabase('services', deviceId);
            if (key) {
                const serviceRef = ref(db, `/services/${key}`);
                set(serviceRef, { id: deviceId, value: service });
            } else {
                const newServiceRef = push(dbRef);
                set(newServiceRef, { id: deviceId, value: service });
            }
            console.log(`Service ${service} added successfully`);
        } catch (error) {
            console.error('Error adding service:', error);
        }
    }

    return {
        addDevice,
        addService
    };
}