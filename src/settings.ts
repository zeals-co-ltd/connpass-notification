interface _Settings {
  appName: string
  searchWord: string
  registerWebHookURL: string
  registerNotificationChannel: string
  cancelWebHookURL: string
  cancelNotificationChannel: string
  contactWebHookURL: string
  contactNotificationChannel: string
}

export function settings(): _Settings {
  return {
    'appName': 'connpass',
    'searchWord': 'from: no-reply@connpass.com',
    'registerWebHookURL': 'https://hooks.slack.com/services/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',
    'registerNotificationChannel': '#connpass_notification',
    'cancelWebHookURL': 'https://hooks.slack.com/services/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',
    'cancelNotificationChannel': '#connpass_notification',
    'contactWebHookURL': 'https://hooks.slack.com/services/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',
    'contactNotificationChannel': '#connpass_notification'
  }
}
