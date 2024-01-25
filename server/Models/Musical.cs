using System;

namespace MusicalApi.Data;

public class Musical{
    public long id { get; set; }
    public string? name { get; set; }
    public DateTime openDate { get; set; }
    public DateTime? closeDate { get; set; }
    public string? location { get; set; }
    public string? spotifyAlbum { get; set; }
    public string? albumCover { get; set; }

}