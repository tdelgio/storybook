import React from "react";

import { SoundCloudNormal, SoundCloudClassic } from "./SoundcloudPlaylist";

export default {
  title: "Playlist",
};

export const Soundcloud = () => (
  <div className="space-y-8">
    <SoundCloudNormal /> <SoundCloudClassic />
  </div>
);
