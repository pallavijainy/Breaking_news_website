  export default function getEmbedUrl(url) {
    if (!url) return null;

    if (url.includes("youtube.com/watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }

    if (url.includes("youtube.com/shorts/")) {
      return url
        .replace("youtube.com/shorts/", "youtube.com/embed/")
        .split("?")[0];
    }

    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    if (url.includes("drive.google.com/file/d/")) {
      const id = url.split("/d/")[1].split("/")[0];
      return `https://drive.google.com/file/d/${id}/preview`;
    }

    if (url.endsWith(".mp4") || url.endsWith(".webm")) {
      return url;
    }

    return url;
  }