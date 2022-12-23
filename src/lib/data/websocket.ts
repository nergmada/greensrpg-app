import { io } from "socket.io-client";
import { browser } from "$app/environment";
import { campaign_code } from "./campaign";
if (browser) {
    campaign_code.subscribe((value) => {
        // TODO: generate socket relays
    });
}