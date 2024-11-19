# Bluetooth Toggle

A React Native application that provides a user-friendly interface to manage Bluetooth settings on Android devices. The app works within Android's security constraints to help users manage their Bluetooth state.

## Features

- Request Bluetooth activation with system dialog
- Quick access to Bluetooth settings for deactivation
- Real-time display of current Bluetooth state
- Handles permission requests gracefully

## Implementation Notes

Due to Android's security model, apps cannot directly toggle Bluetooth programmatically. Instead, this app:

- Uses system intent to prompt user for Bluetooth activation
- Provides direct navigation to system Bluetooth settings for deactivation
- Monitors and displays Bluetooth state changes in real-time

## Screenshots

[Place screenshots here]

## Prerequisites

- Node.js >= 18
- React Native CLI
- Android Studio
- Physical Android device for testing (Bluetooth features may not work properly on emulators)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/abdulrehmansk97/assignment-bluetooth-helper.git
cd assignment-bluetooth-helper
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the application:

```bash
npx react-native run-android
```

## Required Permissions

The app requires the following Android permissions:

```xml
<uses-permission android:name="android.permission.BLUETOOTH"/>
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT"/>
<uses-permission android:name="android.permission.BLUETOOTH_SCAN"/>
```

Note: For Android 12 and above, additional runtime permissions might be required.

## Known Limitations

1. Cannot directly toggle Bluetooth off (Android security restriction)
2. Requires manual user interaction for both on/off actions
3. Some features might work differently across various Android versions

## Troubleshooting

Common issues and solutions:

1. Bluetooth permissions not granted:
   - Check app permissions in system settings
   - Reinstall app if necessary
