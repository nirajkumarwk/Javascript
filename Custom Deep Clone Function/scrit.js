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
  if (typeof args !== "object") return args;

  for (const [key, value] of Object.entries(args)) {
    if (typeof value === "object") {
      newObj[key] = deepClone(value);
    } else {
      newObj[key] = value;
    }
  }

  return newObj;
}

const newObj = deepClone(obj);
newObj.details.social.x = "Account";
console.log("original object", obj);
console.log("new object", newObj);
