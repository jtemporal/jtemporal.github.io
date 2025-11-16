#!/usr/bin/env python3
import os
from pathlib import Path
from PIL import Image
import argparse

def optimize_image(image_path: Path, overwrite: bool, quality: int):
    try:
        img = Image.open(image_path)
        webp_path = image_path.with_suffix(".webp")

        img.save(webp_path, format="WEBP", quality=quality, optimize=True)
        print(f"Processed: {image_path} -> {webp_path}")
        
        # If overwriting, remove the original file
        if overwrite:
            image_path.unlink()
            
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

def process_folder(folder_path: Path, overwrite: bool, quality: int):
    for file_path in folder_path.rglob("*"):
        if file_path.suffix.lower() in [".jpg", ".jpeg", ".png"]:
            optimize_image(file_path, overwrite, quality)

def main():
    parser = argparse.ArgumentParser(description="Optimize images and convert to WebP")
    parser.add_argument(
        "--folder", type=str, default="images", help="Folder containing images"
    )
    parser.add_argument(
        "--overwrite", action="store_true", help="Overwrite original images"
    )
    parser.add_argument(
        "--quality", type=int, default=80, help="WebP compression quality (0-100)"
    )

    args = parser.parse_args()

    folder_path = Path(args.folder)
    if not folder_path.exists():
        print(f"Folder not found: {folder_path}")
        return

    process_folder(folder_path, args.overwrite, args.quality)
    print("Image optimization complete.")

if __name__ == "__main__":
    main()