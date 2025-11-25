

export const loadTypebot = (): Promise<any> => {
    return new Promise((resolve) => {
        if ((window as any).Typebot) {
            resolve((window as any).Typebot);
            return;
        }

        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
      import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2.22/dist/web.js';
      window.Typebot = Typebot;
      window.dispatchEvent(new Event('typebot-ready'));
    `;
        document.body.appendChild(script);

        const handleReady = () => {
            resolve((window as any).Typebot);
        };

        window.addEventListener('typebot-ready', handleReady, { once: true });

        // Safety timeout
        setTimeout(() => {
            if ((window as any).Typebot) {
                resolve((window as any).Typebot);
            } else {
                console.warn('Typebot load timeout');
                resolve(null);
            }
        }, 5000);
    });
};
