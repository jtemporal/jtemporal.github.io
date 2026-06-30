#!/usr/bin/env python3
"""Download the Cloudinary signature GIF and export a transparent version."""

from __future__ import annotations

from pathlib import Path
from urllib.request import urlopen

from PIL import Image, ImageChops, ImageSequence

ROOT = Path(__file__).resolve().parents[1]
URL = "https://res.cloudinary.com/jesstemporal/image/upload/v1640531276/jess-signature_nhb75h.gif"
SOURCE = Path("/tmp/jess-signature-source.gif")
GIF_OUT = ROOT / "images/jess-signature-transparent.gif"
THRESHOLD = 235
MAX_WIDTH = 440


def knock_out_white(frame: Image.Image) -> Image.Image:
    rgba = frame.convert("RGBA")
    r, g, b, a = rgba.split()
    mr = r.point(lambda value: 255 if value >= THRESHOLD else 0)
    mg = g.point(lambda value: 255 if value >= THRESHOLD else 0)
    mb = b.point(lambda value: 255 if value >= THRESHOLD else 0)
    white = ImageChops.multiply(ImageChops.multiply(mr, mg), mb)
    inv = white.point(lambda value: 0 if value == 255 else 255)
    rgba.putalpha(ImageChops.multiply(a, inv))
    return rgba


def resize_frame(frame: Image.Image) -> Image.Image:
    width, height = frame.size
    if width <= MAX_WIDTH:
        return frame
    new_height = round(height * MAX_WIDTH / width)
    return frame.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)


def rgba_to_palette_frame(frame: Image.Image) -> Image.Image:
    alpha = frame.getchannel("A")
    palette = frame.convert("RGB").quantize(
        colors=255,
        method=Image.Quantize.MEDIANCUT,
        dither=Image.Dither.NONE,
    )
    palette.paste(255, alpha.point(lambda value: 255 if value < 128 else 0))
    palette.info["transparency"] = 255
    return palette


def main() -> None:
    if not SOURCE.exists():
        SOURCE.write_bytes(urlopen(URL, timeout=60).read())

    image = Image.open(SOURCE)
    palette_frames: list[Image.Image] = []
    durations: list[int] = []

    for frame in ImageSequence.Iterator(image):
        processed = resize_frame(knock_out_white(frame))
        palette_frames.append(rgba_to_palette_frame(processed))
        durations.append(frame.info.get("duration", image.info.get("duration", 40)))

    GIF_OUT.parent.mkdir(parents=True, exist_ok=True)
    palette_frames[0].save(
        GIF_OUT,
        save_all=True,
        append_images=palette_frames[1:],
        duration=durations,
        loop=0,
        disposal=2,
        optimize=False,
    )
    print(f"Wrote {GIF_OUT} ({len(palette_frames)} frames, {GIF_OUT.stat().st_size / 1024:.1f} KB)")


if __name__ == "__main__":
    main()