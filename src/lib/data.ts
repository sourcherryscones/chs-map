import type { ID, Room, Data } from "./types";
import { RoomType, Subject } from "./types";

// object to map function to make my life easier
const o2m = (o: Object): Map<ID, Room> => new Map(Object.entries(o));
const b100 = {
    "101": {
        type: RoomType.ClassRoom
    },
    "102": {
        type: RoomType.ClassRoom
    },
    "103": {
        type: RoomType.ClassRoom
    },
    "104": {
        type: RoomType.ClassRoom
    },
    "105": {
        type: RoomType.ClassRoom
    },
    "106": {
        type: RoomType.ClassRoom
    },
    "107": {
        type: RoomType.ClassRoom
    },
    "108": {
        type: RoomType.ClassRoom
    },
    "109": {
        type: RoomType.ClassRoom
    },
    "110": {
        type: RoomType.ClassRoom
    },
    "114": {
        type: RoomType.ClassRoom
    },
    "115": {
        type: RoomType.ClassRoom
    },
    "116": {
        type: RoomType.ClassRoom
    },
};
const b200 = {

};
const b300 = {

};
const b400 = {
    "413": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Woo"],
        subjects: [Subject.Math],
    }

};
const b500 = {

};
const b700 = {

};
const b800 = {

};
const b900 = {
    "916": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Canton"],
        subjects: [Subject.Language],
    }

};
const b6000 = {

};
const b7000 = {

};
const bMain = {

};
const bMisc = {
    "staff_lounge": {
        nickname: "Teachers' Lounge",
        type: RoomType.AdminRoom,
        teachers: [],
    },
    "dance_studio": {
        nickname: "Dance Studio",
        type: RoomType.MultiPurposeRoom,
        subjects: [Subject.PE],
    },
    "mat_room": {
        nickname: "Mat Room",
        type: RoomType.MultiPurposeRoom,
        subjects: [Subject.PE],
    },
    "brr_6000_1": {
        nickname: "Boys' Restroom",
        type: RoomType.BoyRestRoom,
    },
    "grr_6000_1": {
        nickname: "Girls' Restroom",
        type: RoomType.GirlRestRoom,
    },
    "arr_6000_1": {
        nickname: "Staff Restroom",
        type: RoomType.AdminRestRoom,
    },
};


const data: Data = {
    last_update_year: 2023,
    github_link: "https://github.com/solunian/chs-map",
    rooms: new Map([
        ...o2m(b100),
        ...o2m(b200),
        ...o2m(b300),
        ...o2m(b400),
        ...o2m(b500),
        ...o2m(b700),
        ...o2m(b800),
        ...o2m(b900),
        ...o2m(b6000),
        ...o2m(b7000),
        ...o2m(bMain),
        ...o2m(bMisc),
    ]),
}


export default data;