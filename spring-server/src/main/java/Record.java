public class Record {

    public Record(int id, String name, String artist, int year) {
        this.id = id;
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
}
