import { initializeApp } from "firebase/app";
import { child, get, getDatabase, onValue, orderByChild, push, ref, set } from "firebase/database";
import { getMessaging } from "firebase/messaging";
import { useEffect, useState } from "react";

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

    const getAllDevices = async () => {
        const deviceRef = ref(db, "/devices");
        const snapshot = await get(deviceRef);
        if (snapshot.exists()) {
            return snapshot.val();
        }
        return null;
    }

    const addDevice = async (deviceId: string) => {
        const devicesRef = ref(db, '/devices');
        try {
            const snapshot = await get(devicesRef);
            const devices = snapshot.val();
            let isIdExist = false;
            for (const deviceKey in devices) {
                if (devices[deviceKey]?.id === deviceId) {
                    isIdExist = true;
                    break;
                }
            }
            if (!isIdExist) {
                const newDeviceRef = push(devicesRef);
                set(newDeviceRef, { id: deviceId });
                console.log(`Device with ID ${deviceId} added successfully`);
            } else {
                console.log(`Device with ID ${deviceId} already exists`);
            }
        } catch (error) {
            console.error('Error adding device:', error);
        }
    }

    const addService = async (service: any, deviceId: string) => {
        const servicesRef = ref(db, '/services');
        try {
            let isIdExist: string = '';
            const snapshot = await get(servicesRef);
            const services = snapshot.val();
            for (const serviceKey in services) {
                if (services[serviceKey]?.id === deviceId) {
                    isIdExist = serviceKey;
                    break;
                }
            }
            if (isIdExist.length === 0) {
                const newServiceRef = push(servicesRef);
                set(newServiceRef, { id: deviceId, service: service });
            } else {
                const serviceRef = ref(db, `/services/${isIdExist}`);
                set(serviceRef, { id: deviceId, service: service });
            }
            console.log(`Service ${service} added successfully`);
        } catch (error) {
            console.error('Error adding service:', error);
        }
    }


    return {
        getAllDevices,
        addDevice,
        addService
    };
}