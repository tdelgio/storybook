import React from "react";

export const SpotifyNormal = () => {
  return (
    <div className="max-w-lg border rounded-lg">
      <iframe
        src="https://open.spotify.com/embed/artist/3BHXRZv18jHRR8RDuSq9gK"
        width="100%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export const SpotifyCompact = () => {
  return (
    <div className="max-w-lg border rounded-lg">
      <iframe
        src="https://open.spotify.com/embed/album/65DqMfMYuX0pDKiLFQGer1"
        width="100%"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};
