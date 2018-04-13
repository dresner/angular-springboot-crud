import java.util.ArrayList;
import java.util.Optional;

public class Database {

    public Database() {
        this.records = new ArrayList<Record>();
    }

	ArrayList<Record> getRecords(Optional<String> name, Optional<String> artist, Optional<Integer> year) {
        if((!name.isPresent()) && (!artist.isPresent()) && (!year.isPresent()))
            return records;

        ArrayList<Record> ret = new ArrayList<Record>();
        for(Record r: records) {
            if(name.isPresent() && !(r.name.equals(name.get())))
                continue;
            if(artist.isPresent() && !(r.artist.equals(artist.get())))
                continue;
            if(year.isPresent() && (r.year != year.get()))
                continue;

            ret.add(r);
        }
		return ret;
	}

    boolean add(Record r) {
        return this.records.add(r);
    }

    boolean remove(int recordId) {
        for(Record r: records)
            if(r.id == recordId)
                return records.remove(r);
        return false;
    }

    boolean update(int recordId, Record r) {
        for(Record rr: records)
            if(rr.id == recordId) {
                rr.update(r);
                return true;
            }
        return false;
    }
    
    ArrayList<Record> records;
}
