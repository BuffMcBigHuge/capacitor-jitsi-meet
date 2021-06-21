import { registerPlugin } from '@capacitor/core';
const Jitsi = registerPlugin('Jitsi', {
    web: () => import('./web').then(m => new m.JitsiWeb()),
});
export { Jitsi };
//# sourceMappingURL=index.js.map