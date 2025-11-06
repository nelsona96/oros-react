import MuxPlayer from "@mux/mux-player-react";
import "../../styles/hero.css";

export default function Hero() {
  const settings = {
    playbackId: "jSWsbaMipVNh8w01jPxVOnRAM38zjd501uKejP1e86dhg",
    streamType: "on-demand",
    autoPlay: "muted",
    startTime: "7",
    thumbnailTime: "7",
    loop: "true",
  };

  return (
    <section id="hero">
      <figure className="hero__video-wrapper">
        <MuxPlayer className="hero__video" {...settings} />
      </figure>
    </section>
  );
}