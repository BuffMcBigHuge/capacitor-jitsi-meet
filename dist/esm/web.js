import { WebPlugin } from '@capacitor/core';
export class JitsiWeb extends WebPlugin {
    constructor() {
        super({
            name: 'Jitsi',
            platforms: ['web']
        });
    }
    async joinConference(options) {
        console.log('the web implementation is not available. Please use Jitsi Meet API to implement Jitsi in web app');
        return options;
    }
    ;
    async leaveConference(options) {
        console.log('the web implementation is not available. Please use Jitsi Meet API to implement Jitsi in web app');
        return options;
    }
    ;
}
//# sourceMappingURL=web.js.map