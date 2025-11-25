export interface Plan {
    id: number;
    name: string;
    badge: string;
    priceDesc: string;
    description: string;
    area: string;
    highlight: boolean;
}

export interface NetworkItem {
    name: string;
}

export interface NetworkCategory {
    title: string;
    icon: 'hospital' | 'lab' | 'own';
    items?: NetworkItem[];
    description?: string;
    address?: string;
    district?: string;
    features?: string[];
    image?: string;
}

export interface LocationData {
    name: string;
    slug: string;
    typebotId?: string;
    hero: {
        title: string;
        subtitle: string;
        image: string;
        badge?: string;
        description?: string;
        differential?: {
            title: string;
            text: string;
        }
    };
    plans: Plan[];
    network: NetworkCategory[];
    ansCode?: string;
    carenciaText?: string;
    networkDescription?: string;
}
