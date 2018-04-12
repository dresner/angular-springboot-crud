import java.util.Collection;
import java.util.Optional;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

@RestController
@EnableAutoConfiguration
public class Controller {

    public Controller () {
        this.db = new Database();
    }

    @RequestMapping("/")
    String home() {
        return "Hello!";
    }

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    Collection<Record> get(@RequestParam("name") Optional<String> name, 
            @RequestParam("artist") Optional<String> artist, 
            @RequestParam("year") Optional<Integer> year) {
       return this.db.getRecords(name, artist, year); 
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    boolean add(@RequestBody Record record) {
        return db.add(record);
    }

    // TODO: DELETE shouldn't have a body
    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    boolean remove(@RequestBody Record record) {
        return db.remove(record);
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Controller.class, args);
    }

    private Database db;
}
