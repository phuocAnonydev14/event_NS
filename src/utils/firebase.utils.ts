import { initializeApp } from "firebase/app";
import { get, getDatabase, push, ref, set } from "firebase/database";
import { getMessaging } from "firebase/messaging";
import { getTime } from "./time.utils";

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

const app = initializeApp(firebaseConfig)

export const messaging = getMessaging(app);

export const useMessaging = () => {

	const getAllDevices = async () => {
		const listDevices: string[] = [];
		const dbRef = ref(getDatabase(app), '/devices');
		try {
			const snapshot = await get(dbRef);
			if (snapshot.exists()) {
				const data = snapshot.val();
				for (const key in data) {
					listDevices.push(data[key]?.id);
				}
			}
			return listDevices;
		} catch (error) {
			console.error('Error getting all devices:', error);
			return null;
		}
	}

	const sendNotification = async (params: { type: "noti", title: string, body: string } | {
		type: "chat",
		name: string,
		content: string
	}) => {
		getAllDevices().then((devices) => {
			fetch('https://fcm.googleapis.com/fcm/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'key=' + import.meta.env.VITE_MESSAGE_SERVER_KEY,
				},
				body: JSON.stringify({
					registration_ids: devices,
					notification:
						params.type === 'noti' ? {
							type: params.type,
							title: params.title,
							body: params.body,
						} : {
							type: params.type,
							name: params.name,
							content: params.content,
						},
				}),
			}).then(response => {
				if (response) {
					console.log('Notification sent successfully:', response);
					return response.json();
				}
				console.error('Error sending notification:', response);
				return false;
			});
		});
	}

	return { sendNotification };
}

interface DBProps {
	name: "devices" | "services" | "rating" | string,
	deviceId?: string,
	videoId?: string
}
type ratingValue = {
	veryLow: number,
	low: number,
	medium: number,
	high: number,
	veryHigh: number
}

export const useRealtimeDB = () => {
	const db = getDatabase(app);

	const checkDatabase = async ({ name, deviceId, videoId }: DBProps) => {
		const dbRef = ref(db, `/${name}`);
		try {
			const snapshot = await get(dbRef);
			if (snapshot.exists()) {
				const data = snapshot.val();
				if (deviceId) {
					for (const key in data) {
						if (data[key]?.id === deviceId) {
							return { dbRef, key, data: data[key] };
						}
					}
				} else if (videoId) {
					return { dbRef, key: null, data: data[videoId] };
				} else {
					return { dbRef, key: null, data };
				}
			}
			return { dbRef, key: null, data: null };
		} catch (error) {
			console.error('Error checking database:', error);
			return { dbRef: dbRef, key: null, data: null };
		}
	}

	const updateDevice = async (deviceId: string, username: string) => {
		const { key, data } = await checkDatabase({ name: 'devices', deviceId });
		if (key) {
			const deviceRef = ref(db, `/devices/${key}`);
			set(deviceRef, { ...data, username });
			console.log(`Device with ID ${deviceId} updated successfully`);
		}
	}

	const addDevice = async (deviceId: string) => {
		const { dbRef, key, data } = await checkDatabase({ name: 'devices', deviceId });
		const newDeviceRef = push(dbRef);
		if (!key) {
			set(newDeviceRef, {
				id: deviceId,
				created_at: getTime(),
				last_online: getTime()
			});
			console.log(`Device with ID ${deviceId} added successfully`);
		} else {
			const deviceRef = ref(db, `/devices/${key}`);
			set(deviceRef, { ...data, last_online: getTime() });
			console.log(`Device with ID ${deviceId} updated successfully`);
		}
	}

	const addService = async (service: ServiceProps, deviceId: string) => {
		try {
			const { dbRef, key } = await checkDatabase({ name: 'services', deviceId });
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

	const getAllService = async () => {
		const dbRef = ref(db, `/services`);
		const snapshot = await get(dbRef);
		if (snapshot.exists()) {
			const data = snapshot.val();
			return data
		}
		return []
	}

	const rateVideo = async (deviceId: string, videoId: string, rating: number, username: string) => {
		const { key, dbRef, data } = await checkDatabase({ name: `rating/${videoId}`, deviceId });
		if (rating === -1 && key) {
			const ratingRef = ref(db, `/rating/${videoId}/${key}`);
			set(ratingRef, null);
			return;
		}
		if (key) {
			const ratingRef = ref(db, `/rating/${videoId}/${key}`);
			set(ratingRef, { ...data, rating });
		} else {
			const newRatingRef = push(dbRef);
			set(newRatingRef, { id: deviceId, rating, username });
		}
	}

	const getRating = async (deviceId: string, videoId: string) => {
		const { key, dbRef, data } = await checkDatabase({ name: `rating`, videoId });
		let total = 0;
		let count: ratingValue = {
			veryLow: 0,
			low: 0,
			medium: 0,
			high: 0,
			veryHigh: 0
		}
		if (data) {
			Object.values(data).forEach((item: any) => {
				switch (item?.rating) {
					case 0:
						count.veryLow++;
						break;
					case 1:
						count.low++;
						break;
					case 2:
						count.medium++;
						break;
					case 3:
						count.high++;
						break;
					case 4:
						count.veryHigh++;
						break;
					default:
						break;
				}
			})
			total = Object.values(count).reduce((acc, curr) => acc + curr, 0);
		}
		return { total, count, data };
	}

	return {
		addDevice,
		addService,
		getAllService,
		updateDevice,
		checkDatabase,
		rateVideo,
		getRating
	};
}