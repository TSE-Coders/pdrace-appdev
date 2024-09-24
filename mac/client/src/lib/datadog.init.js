// Necessary if using App Router to ensure this file runs on the client
"use client"

import { datadogRum } from "@datadog/browser-rum"



export default function DatadogInit() {
  datadogRum.init({
    applicationId: 'e4c2b15d-a784-4052-8daf-695ebf2c5ae3',
    clientToken: 'puba5803efb30588db393932b3dd9ac9773',
    site: 'datadoghq.com',
    service: 'pdclient',
    env: 'monohost',
    version: 'v1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    silentMultipleInit: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input",
    // Specify URLs to propagate trace headers for connection between RUM and backend trace
    allowedTracingUrls: [
      (url) => url.startsWith("https://localhost"), "https://localhost"       // { match: "", propagatorTypes: ["tracecontext"] }""
      ]
  })
  return null
}
