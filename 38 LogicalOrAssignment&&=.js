const info = {
  name: "kaushal",
  age: 25,
};

//if infro don't have the age property then automaticallty sets 30
info.age ||= 30;
//simillar to info.age || (info.age= 30);

console.log(info.age);
