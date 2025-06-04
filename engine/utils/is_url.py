from urllib.parse import urlparse


def is_url(path: str) -> bool:
    parsed = urlparse(path)
    return parsed.scheme in ("http", "https") and bool(parsed.netloc)
