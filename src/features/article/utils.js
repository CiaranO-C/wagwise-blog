import DOMPurify from 'dompurify';

function timeElapsed(date) {
  const now = new Date();
  const created = new Date(date);
  const diffInSeconds = Math.floor((now - created) / 1000);

  const seconds = diffInSeconds % 60;
  const minutes = Math.floor(diffInSeconds / 60) % 60;
  const hours = Math.floor(diffInSeconds / 3600) % 24;
  const days = Math.floor(diffInSeconds / (3600 * 24));
  const weeks = Math.floor(diffInSeconds / (3600 * 24 * 7));

  if (weeks > 0) return `${weeks}w`;
  if (days > 0) return `${days}d`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes}m`;
  return `${seconds}s`;
}

function sanitize(content) {
  const sanitized = DOMPurify.sanitize(content);
  return sanitized;
}

export { timeElapsed, sanitize };
