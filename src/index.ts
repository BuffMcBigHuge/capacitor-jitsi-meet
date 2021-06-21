import { registerPlugin } from '@capacitor/core';
const Jitsi = registerPlugin<Jitsi>('Jitsi', {
    web: () => import('./web').then(m => new m.JitsiWeb()),
});
export * from './definitions';
export { Jitsi };