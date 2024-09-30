import { useEffect } from 'react';
import axios from 'axios';
import { collection, addDoc, getDocs } from 'firebase/firestore'; // Ensure getDocs is imported
import { db } from '../Firebase';

const getUserIP = async () => {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        return response.data.ip;
    } catch (error) {
        console.error('IP fetch error:', error);
        return null;
    }
};

const getUserBrowserInfo = () => {
    return navigator.appName || 'Unknown';
};

const getUserLocation = () => {
    return new Promise((resolve) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    resolve(`${latitude},${longitude}`);
                },
                () => {
                    resolve('Location unavailable');
                }
            );
        } else {
            resolve('Geolocation unsupported');
        }
    });
};

const getUserOSAndDevice = () => {
    const userAgent = navigator.userAgent;
    let os = "Unknown OS";
    let device = "Unknown Device";

    // Detect OS
    if (userAgent.indexOf("Windows NT 10.0") !== -1) os = "Windows 10";
    else if (userAgent.indexOf("Windows NT 6.3") !== -1) os = "Windows 8.1";
    else if (userAgent.indexOf("Windows NT 6.2") !== -1) os = "Windows 8";
    else if (userAgent.indexOf("Windows NT 6.1") !== -1) os = "Windows 7";
    else if (userAgent.indexOf("Mac") !== -1) os = "MacOS";
    else if (userAgent.indexOf("Linux") !== -1) os = "Linux";
    else if (userAgent.indexOf("Android") !== -1) os = "Android";
    else if (userAgent.indexOf("like Mac") !== -1) os = "iOS"; // iPhone/iPad

    // Detect Device
    if (/Mobile|Android/i.test(userAgent)) {
        device = "Mobile Device";
    } else if (/Tablet|iPad/i.test(userAgent)) {
        device = "Tablet Device";
    } else if (/Win|Mac|Linux/i.test(userAgent)) {
        device = "Desktop Device";
    }

    // Specific Device Detection
    if (/iPhone/i.test(userAgent)) device = "iPhone";
    else if (/iPad/i.test(userAgent)) device = "iPad";
    else if (/iPod/i.test(userAgent)) device = "iPod";
    else if (/Samsung/i.test(userAgent)) device = "Samsung Device";
    else if (/Pixel/i.test(userAgent)) device = "Google Pixel Device";
    else if (/Nokia/i.test(userAgent)) device = "Nokia Device";
    else if (/Motorola/i.test(userAgent)) device = "Motorola Device";
    else if (/oneplus/i.test(userAgent)) device = "OnePlus Device";

    return { os, device };
};

const UserTracker = () => {
    useEffect(() => {
        const storeUserData = async () => {
            try {
                const ip = await getUserIP();
                const browser = getUserBrowserInfo();
                const location = await getUserLocation();
                const { os, device } = getUserOSAndDevice();

                // Fetch visitor count
                const countRef = collection(db, 'UserVisits');
                const countSnapshot = await getDocs(countRef);
                const userCount = countSnapshot.size + 1; // Increment user count
                const visitorName = `Visitor #${userCount}`; // Create visitor name

                const userData = {
                    Name: visitorName, // Use the custom visitor name
                    Browser: browser,
                    IP: ip || 'Unavailable',
                    Location: location,
                    OS: os,
                    Device: device,
                    visitedTime: new Date().toLocaleTimeString(),
                };

                console.log('Attempting to store user data:', userData);

                // Store the data in Firestore
                const docRef = await addDoc(collection(db, 'UserVisits'), userData);
                console.log('User data successfully stored with ID:', docRef.id);
            } catch (error) {
                console.error('Error in storing user data:', error); // to show error in console 
            }
        };

        storeUserData();
    }, []);

    return null;
};

export default UserTracker;



// okay