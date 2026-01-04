// lib/amplitude-server.ts
const AMPLITUDE_API_URL = 'https://api2.amplitude.com/2/httpapi';
const API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

// Type for user properties
interface AmplitudeEvent {
  event_type: string;
  user_id: string;
  event_properties?: Record<string, any>;
  user_properties?: Record<string, any>;  // Add user properties
  time?: number;
}

// Function to send events to Amplitude HTTP API V2
export const sendAmplitudeEvent = async (event: AmplitudeEvent) => {
  if (!API_KEY) {
    console.error('Missing Amplitude API key');
    return;
  }

  try {
    const response = await fetch(AMPLITUDE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: API_KEY,
        events: [
          {
            event_type: event.event_type,
            user_id: event.user_id,
            event_properties: event.event_properties || {},
            user_properties: event.user_properties || {},  // Send user properties here
            time: event.time || Date.now(),
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Failed to send event to Amplitude:', error);
    } else {
      console.log('Event sent to Amplitude successfully.');
    }
  } catch (error) {
    console.error('Error sending event to Amplitude:', error);
  }
};
