public class Record {

    public Record(String name, String artist, int year) {
        this.id = ids++; // TODO: Is this the correct way? What about concurrency?
        this.name = name;
        this.artist = artist;
        this.year = year;
    }

    public void update(Record r) {
        this.name = r.name;
        this.artist = r.artist;
        this.year = r.year;
    }

    public int id;
    public String name;
    public String artist;
    public int year;

    private static int ids = 0;
}
