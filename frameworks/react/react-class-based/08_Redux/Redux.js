console.clear();

// people dropping off form (Action creators )

const createPolicy = (name, amount) => {
  return {
    //action (a form in our story )
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect,
    },
  };
};

// REDUCERS (DEPARTMENTS)
const claimHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // WE CARE ABOUT THIS ACTION (FORM )
    return [...oldListOfClaims, action.payload];
  }
  // WE DON'T  CARE ABOUT THIS ACTION (FORM )
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.action === "DELETE_POLICY") {
    return listOfPolicies.filter((name) => name !== action.payload.name);
    //will return new array doesn't contain this deleted name
  }
  return listOfPolicies;
};

//making a store
const { createStore, combineReducers } = Redux;
const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies,
});

const store = createStore(ourDepartments);

const action = createPolicy("ahmad", 40); //this is person one
store.dispatch(action); ////this is person one
//this is the form receiver , and it will make copy for every department

store.dispatch(createPolicy("jim", 60));
store.dispatch(createPolicy("bob", 10));
store.dispatch(createPolicy("carl", 20)); //here 100 by default + 60 + 10 + 20 = 190

store.dispatch(createClaim("carl", 90)); // here run again getState , you'll see : 190 - 90 = 100

store.dispatch(createClaim("bob")); // goodbye bob

console.log(store.getState()); //this to get the state of our store
