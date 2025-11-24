import React, { useEffect } from 'react';

interface GoogleTagManagerProps {
    gtmId?: string;
}

export const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({ gtmId }) => {
    useEffect(() => {
        if (!gtmId) return;

        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });

        // Inject GTM script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;

        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode?.insertBefore(script, firstScript);
    }, [gtmId]);

    if (!gtmId) return null;

    // Noscript fallback
    return (
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
    );
};

// Extend Window interface for TypeScript
declare global {
    interface Window {
        dataLayer: any[];
    }
}
