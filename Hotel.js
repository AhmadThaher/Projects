class Hotel {
    constructor(address, numberOfRooms, minFloor, maxFloor, rooms) {
        this.address = address;
        this.numberOfRooms = numberOfRooms;
        this.minFloor = minFloor;
        this.maxFloor = maxFloor;
        this.rooms = rooms;
    }

    printAdv() {
        console.log(`Address: ${this.address}`);
        console.log(`Number of Rooms: ${this.numberOfRooms}`);
        console.log(`Floor Range: ${this.minFloor} - ${this.maxFloor}`);
    }

    listBookedRooms() {
        console.log("Booked Rooms:");
        this.rooms.forEach((room) => {
            if (room.isBooked()) {
                console.log(`Room ${room.roomNum}, Floor ${room.floorNum}`);
            }
        });
    }
}

class Room {
    constructor(floorNum, roomNum, price) {
        this.floorNum = floorNum;
        this.roomNum = roomNum;
        this.price = price;
        this._isBooked = false;
    }

    printRoom() {
        console.log(`Room ${this.roomNum}, Floor ${this.floorNum}`);
        console.log(`Price: ${this.price}`);
        console.log(`Status: ${this._isBooked ? "Booked" : "Available"}`);
    }

    book() {
        this._isBooked = true;
    }

    isBooked() {
        return this._isBooked;
    }
}

class RoomWithView extends Room {
    constructor(floorNum, roomNum, price, view, numberOfBeds) {
        super(floorNum, roomNum, price);
        this.view = view;
        this.numberOfBeds = numberOfBeds;
    }
}

class SleepingRoom extends Room {
    constructor(floorNum, roomNum, price, personCapacity) {
        super(floorNum, roomNum, price);
        this.personCapacity = personCapacity;
    }
}



const rooms = [
    new RoomWithView(1, 101, 100, "DownTown", 2),
    new RoomWithView(1, 102, 100, "islands", 2),
    new SleepingRoom(1, 103, 80, 1),
    new SleepingRoom(2, 201, 90, 2),
    new RoomWithView(2, 202, 120, "tow", 4),
    new SleepingRoom(2, 203, 70, 1),
];

const hotel = new Hotel("25 Rafedia St", 6, 1, 2, rooms);
hotel.printAdv();
hotel.listBookedRooms();
rooms[1].printRoom();
rooms[2].book();
rooms[2].printRoom();






