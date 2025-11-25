/**
 * LocalStorage utility functions for city selection persistence
 */

const STORAGE_KEY = 'selectedCity';

export const getSelectedCity = (): string | null => {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
        console.warn('Failed to read from localStorage:', error);
        return null;
    }
};

export const setSelectedCity = (city: string): void => {
    try {
        localStorage.setItem(STORAGE_KEY, city);
    } catch (error) {
        console.error('Failed to write to localStorage:', error);
    }
};

export const clearSelectedCity = (): void => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Failed to clear from localStorage:', error);
    }
};
