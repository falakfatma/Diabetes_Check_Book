const MARRIED ={
  value: "MARRIED",
  color: "green.200",
  options: ["MARRIED","SINGLE"],
}

const SINGLE =  {
  value: "SINGLE",
  color: "pink.200",
  options: ["MARRIED","SINGLE"],
}

export const STATUSES = [
  MARRIED,SINGLE
]
export const DATA = [
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: MARRIED,
    updatedDate:new Date("2020/05/20"),
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: SINGLE,
    updatedDate:new Date("2024/06/25"),
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: MARRIED,
    updatedDate:new Date("2023/02/10"),
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: SINGLE,
    updatedDate:new Date("2024/07/07"),
  },
];
