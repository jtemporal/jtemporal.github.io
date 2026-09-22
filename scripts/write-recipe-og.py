#!/usr/bin/env python3
"""Build a PNG Open Graph image. Messengers ignore SVG og:image."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "images" / "recipe-cards-og.png"


def font(size, bold=False):
    names = (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    )
    for path in names:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def main():
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), "#f7f2f2")
    d = ImageDraw.Draw(img)
    x0, y0, x1, y1 = 90, 70, 1110, 560
    d.rectangle([x0, y0, x1, y1], fill="#fff8fa", outline="#e4bdc2", width=4)
    d.rectangle([x0, y0, x1, y0 + 120], fill="#b80049")
    title, sub, small = font(54, True), font(28, True), font(22, False)
    d.text((w / 2, y0 + 60), "Recipe cards", font=title, fill="white", anchor="mm")
    d.rectangle([x0, y0 + 120, x1, y0 + 180], fill="#fdf2f5", outline="#e4bdc2", width=2)
    d.text((w / 2, y0 + 150), "A one-page recipe you can read while you cook", font=small, fill="#3b2a2e", anchor="mm")
    for x in (x0, 430, 620, 810, x1):
        d.line([(x, y0 + 180), (x, y1)], fill="#e4bdc2", width=2)
    for y in (y0 + 180, 320, 430, y1):
        d.line([(x0, y), (x1, y)], fill="#e4bdc2", width=2)
    d.text((260, 250), "Ingredients", font=sub, fill="#3b2a2e", anchor="mm")
    d.text((260, 375), "on the left", font=small, fill="#8f6f73", anchor="mm")
    d.text((525, 250), "mix", font=sub, fill="#b80049", anchor="mm")
    d.text((715, 375), "fold", font=sub, fill="#b80049", anchor="mm")
    d.rectangle([810, y0 + 180, x1, y1], fill="#b80049")
    d.text((960, 370), "bake", font=title, fill="white", anchor="mm")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print("wrote", OUT)


if __name__ == "__main__":
    main()
