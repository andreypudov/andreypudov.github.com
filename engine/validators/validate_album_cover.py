from models.album import Album


def validate_album_cover(album: Album) -> bool:
    if any(item.path == album.cover for item in album.items):
        return True

    print(
        f"Album cover {album.cover} does not match any item paths "
        "in the album: {album.name}"
    )
    return False
