/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_LOCATION?: string
    readonly VITE_GTM_ID?: string
    readonly VITE_TYPEBOT_ID?: string
    readonly VITE_SITE_OPERATOR_NAME?: string
    readonly VITE_SITE_OPERATOR_CNPJ?: string
    readonly VITE_CONTACT_EMAIL?: string
    readonly VITE_CONTACT_PHONE?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
