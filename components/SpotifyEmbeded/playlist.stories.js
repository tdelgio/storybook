import React from "react";

import { SpotifyNormal, SpotifyCompact } from "./SpotifyPlaylist";

export default {
  title: "Playlist",
};

export const Spotify = () => (
  <div className="space-y-8">
    <SpotifyNormal /> <SpotifyCompact />
  </div>
);
