// const obj = {
//   name: "Niraj Kumar",
//   details : {
//     age: 24,    
//   }
// };


// function deepClone(args) {
//   let newObj = {};
//   if(!args) return newObj;

//   const keys = Object.keys(args);
//   const values = Object.values(args);
//   for(let i=0; i<keys.length; i++){
//     newObj[keys[i]] = values[i];
//   }
//   return newObj
  
// }

// let obj2 =[67890, "tyuio", "ghjkl","tyuio"]

const obj = {
  name: "Niraj Kumar",
  details: {
    age: 24,
    social: {
      x: "MyAccount",
      Instagram: "Instagram",
    },
  },
};

function deepClone(args) {
  let newObj = {};
  if (!args) return newObj;

  const keys = Object.keys(args);
  const values = Object.values(args);

  for (let i = 0; i < keys.length; i++) {
    if (typeof values[i] === "object") {
      
      newObj[keys[i]] = deepClone(values[i]);
    } else {
      newObj[keys[i]] = values[i];
    }
  }
  return newObj;
}

const newObj = deepClone(obj);
newObj.details.social.Instagram = "My Instagram";
console.log("deepClone", newObj);
console.log("original", obj);


