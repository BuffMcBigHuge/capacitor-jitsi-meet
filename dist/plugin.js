var JitsiPlugin = (function (exports, core) {
    'use strict';

    const Jitsi = core.registerPlugin('Jitsi', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.JitsiWeb()),
    });

    class JitsiWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        JitsiWeb: JitsiWeb
    });

    exports.Jitsi = Jitsi;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
