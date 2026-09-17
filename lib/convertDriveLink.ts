/**
 * Shared utility to convert Google Drive sharing/open links into direct-play streaming URLs.
 * Leaves direct mp4/webm links or non-Drive URLs unmodified.
 */
export function convertDriveLink(url: string | null | undefined): string {
  if (!url) return "";

  const trimmed = url.trim();

  if (trimmed.includes("drive.google.com")) {
    // Check for /d/FILE_ID (handles /file/d/FILE_ID/view, /file/d/FILE_ID, etc.)
    const dMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (dMatch && dMatch[1]) {
      return `https://drive.google.com/uc?export=view&id=${dMatch[1]}`;
    }

    // Check for id=FILE_ID (handles ?id=FILE_ID, &id=FILE_ID, and corrupted paths like /file/uc?export=view&id=FILE_ID)
    const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (idMatch && idMatch[1]) {
      return `https://drive.google.com/uc?export=view&id=${idMatch[1]}`;
    }
  }

  return trimmed;
}

/**
 * Validates if a video URL is in a supported format:
 * - Direct video file (.mp4, .webm, .ogg)
 * - Convertible Google Drive file URL
 * - Relative media path (/uploads/..., /images/...)
 */
export function isSupportedVideoUrl(url: string | null | undefined): { isValid: boolean; warning?: string } {
  if (!url || !url.trim()) return { isValid: true };

  const trimmed = url.trim();

  // Check if it's a recognized Google Drive file URL
  if (trimmed.includes("drive.google.com")) {
    const hasFileId = /\/d\/[a-zA-Z0-9_-]+/.test(trimmed) || /[?&]id=[a-zA-Z0-9_-]+/.test(trimmed);
    if (!hasFileId) {
      return {
        isValid: false,
        warning: "This Google Drive link doesn't contain a recognizable file ID. Use a share link containing '/file/d/<id>' or '?id=<id>'.",
      };
    }
    return { isValid: true };
  }

  // Check if it's a direct video format
  if (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(trimmed)) {
    return { isValid: true };
  }

  // Check if it's a local path
  if (trimmed.startsWith("/") || trimmed.startsWith("./")) {
    return { isValid: true };
  }

  // Suspicious/unrecognized URL
  return {
    isValid: false,
    warning: "Unrecognized video URL format. Expected a Google Drive share link or direct .mp4/.webm URL.",
  };
}
