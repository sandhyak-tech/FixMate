# FixMate

FixMate is a mobile application designed to provide home maintenance and repair services, including AC maintenance, electrical work, plumbing, handyman services, and more. The app is built using React Native and integrates Firebase for backend services.

## Features

- **User Authentication**: Phone number-based authentication with OTP verification.
- **Service Booking**: Schedule services instantly or for a later time.
- **Service Categories**: Browse and select from various service categories.
- **Profile Management**: Manage user profiles and access terms, privacy policies, and support.
- **Firebase Integration**: Firestore for data storage and Firebase Authentication for user management.
- **Responsive Design**: Optimized for both Android and iOS platforms.
- **Happiness Guarantee**: Features like fast service, live support, predefined pricing, and verified professionals.

## Demo

Watch the demo video below to see the app in action:

<img src="./FixMateDemo.gif" alt="Demo" width="500"  height="300">

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FixMate/fixmate.git
   cd fixmate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run start
   ```

4. Run the app on your desired platform:
   - Android: `npm run android`
   - iOS: `npm run ios`
   - Web: `npm run web`

## Firebase Setup

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Update the Firebase configuration in `Services/FireBaseService.tsx` with your project's credentials.
3. Enable Firebase Authentication and Firestore in your Firebase project.
4. Use the `firebase.json` file to configure Firebase emulators for local development.

## Project Structure

```
.
├── Components/          # React Native components
├── Services/            # Firebase and navigation services
├── assets/              # Images and other static assets
├── App.tsx              # Main app entry point
├── firebase.json        # Firebase emulator configuration
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: For development and testing.
- **Firebase**: For authentication and Firestore database.
- **React Navigation**: For navigation between screens.
- **React Native Paper**: For UI components.
- **Moment.js**: For date and time manipulation.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
