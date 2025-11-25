/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_LOCATION: string
    readonly VITE_GTM_ID: string
    readonly VITE_TYPEBOT_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
