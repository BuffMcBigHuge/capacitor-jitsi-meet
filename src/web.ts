import { WebPlugin } from '@capacitor/core';
import { JitsiPlugin } from './definitions';

export class JitsiWeb extends WebPlugin implements JitsiPlugin {
  constructor() {
    super({
      name: 'Jitsi',
      platforms: ['web']
    });
  }

  async joinConference(options: {
      roomName: string;
      url: string;
      token: string;
      channelLastN: string;
      displayName: string;
      email: string;
      avatarURL: string;
      startWithAudioMuted: boolean;
      startWithVideoMuted: boolean;
      chatEnabled: boolean;
      inviteEnabled: boolean;
      callIntegrationEnabled: boolean;
  }): Promise<{
      roomName: string;
      url: string;
      token: string;
      channelLastN: string;
      displayName: string;
      email: string;
      avatarURL: string;
      startWithAudioMuted: boolean;
      startWithVideoMuted: boolean;
      chatEnabled: boolean;
      inviteEnabled: boolean;
      callIntegrationEnabled: boolean;
  }> {
      console.log('the web implementation is not available. Please use Jitsi Meet API to implement Jitsi in web app');
      return options;
  };

  async leaveConference(options: {}): Promise<{}> {
      console.log('the web implementation is not available. Please use Jitsi Meet API to implement Jitsi in web app');
      return options;
  };
}