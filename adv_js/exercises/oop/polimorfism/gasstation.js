class BaseStation {
    fillCar() {    } /* putem lasa metoda goala deocamdata, pentru ca nu stim inca cum va fi implementata de fiecare benzinarie in parte */
}

class ShellStation extends BaseStation {
    fillCar() {
        console.log('Filling car with Shell diesel.');
    }
}

class FakeStation extends BaseStation {
    fillCar() {
        console.log('Filling car with water.');
    }
}

class Driver {
    /**
     * 
     * @param {BaseStation} gasStation 
     */
    goToClosestStation(gasStation) {
        gasStation.fillCar();
    }
}

var myStation = new ShellStation();
var fakeStation = new FakeStation();

var ruxi = new Driver();
ruxi.goToClosestStation(fakeStation); 

/* myStation.fillCar();
fakeStation.fillCar(); */