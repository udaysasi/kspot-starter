import { RxStompService } from './rx-stomp.service';
import { API_BASE_HREF } from '../services/base-url.service';
import { getStompConfig } from './stomp.config';

export function rxStompServiceFactory() {
    const rxStomp = new RxStompService();
    rxStomp.configure(getStompConfig(API_BASE_HREF));
    rxStomp.activate();
    return rxStomp;
}
