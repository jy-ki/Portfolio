export type Ratio = "16:9" | "4:3" | "1:1" | "3:4" | "9:16";

export const ratioLabel: Record<Ratio, string> = {
  "16:9": "가로 16:9",
  "4:3": "가로 4:3",
  "1:1": "정사각 1:1",
  "3:4": "세로 3:4",
  "9:16": "세로 9:16",
};

export type ImageAsset =
  | {
      kind: "photo";
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  | {
      kind: "placeholder";
      label: string;
      note?: string;
      ratio: Ratio;
    };

export function photo(
  src: string,
  alt: string,
  width: number,
  height: number
): ImageAsset {
  return { kind: "photo", src, alt, width, height };
}

export function placeholder(
  label: string,
  ratio: Ratio,
  note?: string
): ImageAsset {
  return { kind: "placeholder", label, ratio, note };
}

export function aspectOf(asset: ImageAsset): string {
  if (asset.kind === "photo") return `${asset.width} / ${asset.height}`;
  const [w, h] = asset.ratio.split(":");
  return `${w} / ${h}`;
}
