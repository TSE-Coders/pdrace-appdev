// Necessary if using App Router to ensure this file runs on the client
"use client"

import { datadogLogs } from '@datadog/browser-logs';

datadogLogs.init({
  clientToken: 'pubc8d337bfb0680e84fabe3aa8c3bc3fe9',
  service: 'pdclient',
  env: 'monohost',
  version: 'v1.0.0',
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
  forwardReports: "all",
  forwardConsoleLogs: "all",
  silentMultipleInit: true
})

export default function DatadogLogsInit() {
  // Render nothing - this component is only included so that the init code
  // above will run client-side
  return null
}
