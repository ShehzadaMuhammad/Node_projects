//43

function show_albums(albums: any[]): void {
    for (let album of albums) {
        console.log(album);
    }
}

function make_album(artist: string, title: string, tracks?: number): any {
    let album: any = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }

    return album;
}

let album1 = make_album("Artist1", "Album Title 1", 10);
let album2 = make_album("Artist2", "Album Title 2");
let album3 = make_album("Artist3", "Album Title 3", 15);

let albums = [album1, album2, album3];

// Create a copy of the albums array
let albums_copy: any[] = albums.slice();

// Call show_albums() to show the original and copied arrays
console.log("Original Albums:");
show_albums(albums);

console.log("\nCopied Albums:");
show_albums(albums_copy);
