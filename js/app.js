// three ways to add a property to an object
    // db.alom = 1;
    // db['alom'] = 1;
    // db[item] = 1;

let db = {}

const addtoDb = item => {
    const storedData = localStorage.getItem('ninetees-history');
    if(storedData){
        db = JSON.parse(storedData);
    }
    if(item in db){
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    localStorage.setItem('ninetees-history', JSON.stringify(db));
}

const removeItem = item => {
    const storedItem = localStorage.getItem('ninetees-history');
    
    if(storedItem) {
        const storedObject = JSON.parse(storedItem);
        delete storedObject[item];
        localStorage.setItem('ninetees-history', JSON.stringify(storedObject));
    }
}