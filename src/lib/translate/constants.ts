import type { Locales } from './types';

export const languages: Record<Locales, { name: string; icon: string; dayjs: string }> = {
  'en-US': { name: 'English', icon: 'circle-flags:gb', dayjs: 'en' },
  'es-ES': { name: 'Español', icon: 'circle-flags:es', dayjs: 'es' },
};
