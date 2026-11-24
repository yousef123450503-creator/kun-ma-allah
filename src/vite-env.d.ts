/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare module '*.svg' {
  import React from 'react'
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.mp3' {
  const src: string
  export default src
}

declare module '*.json' {
  const value: any
  export default value
}

interface Navigator {
  standalone?: boolean
}

interface Window {
  __PWA_REGISTERED__: boolean
  __PWA_UPDATE_AVAILABLE__: boolean
  workbox: any
}
