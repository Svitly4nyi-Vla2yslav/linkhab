interface Window {
    gtag: (
      command: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
    dataLayer?: Record<string, any>[];
  }