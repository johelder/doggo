import crashlytics from '@react-native-firebase/crashlytics';

export const errorHandler = {
  reportError(error: unknown, calledMethod: string) {
    const formattedError = new Error(
      JSON.stringify({ method: calledMethod, error }),
    );

    crashlytics().recordError(formattedError);
  },
};
