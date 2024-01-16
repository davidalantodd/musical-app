using System;

namespace MusicalApi.Data;

public class Musical{
    public long Id { get; set; }
    public string? Name { get; set; }
    public DateTime OpenDate { get; set; }
    public DateTime? CloseDate { get; set; }
    public string? Location { get; set; }
    public string? SpotifyAlbum { get; set; }
    public string? AlbumCover { get; set; }

}