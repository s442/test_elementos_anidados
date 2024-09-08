import json from './elemento_anidado.json' with { type: "json" };


/**
 * Modify the json 
 * @param type_modify delete | modify | insert
 * @param uid
 */
function modify_json(type_modify, uid) {
    switch (type_modify) {
        case 'delete': {
            delete_json(uid, json);
            break;
        }
        case 'modify': {
            modify_part_json();
            break;
        }
        case 'insert': {
            insert_json();
            break;
        }
    }
}

/**
 * Find the element with the specified uid in the json
 * 
 * @param {*} uid 
 * @param {*} element 
 * @returns 
 */
// function findRecursiveElement(uid, element) {
//     return element.elementosAnidados.find((el) => {
//         console.log(el.uid === uid)
//         if (el.uid === uid) {
//             return el.uid === uid;
//         } else {
//             const result = findRecursiveElement(uid, el);

//             if (result)
//                 return result?.uid === uid;
//         }
//     })
// }

function findRecursiveElement(uid, element) {
    // Check if the current element has any nested elements
    if (!element.elementosAnidados || element.elementosAnidados.length === 0) {
        return null;  // If no nested elements, return null (base case)
    }

    // Iterate through the nested elements
    for (let el of element.elementosAnidados) {
        // If the current element's uid matches, return it
        if (el.uid === uid) {
            return el;
        }

        // Otherwise, perform recursion to search within this element's nested elements
        const result = findRecursiveElement(uid, el);

        // If a result is found in the recursion, return it
        if (result) {
            return result;
        }
    }

    // If no matching element is found, return null
    return null;
}

/**
 * Delete a part of the json
 */
// function delete_json(uid) {
//     const element = findRecursiveElement(uid, json)

//     console.log(element)
// }

function delete_json(uid, element) {
    if (!element.elementosAnidados || element.elementosAnidados.length === 0) {
        return false;  // No nested elements to search through
    }

    // Iterate through the nested elements
    for (let i = 0; i < element.elementosAnidados.length; i++) {
        const el = element.elementosAnidados[i];

        // If the current element's uid matches, remove it from the array
        if (el.uid === uid) {
            element.elementosAnidados.splice(i, 1);
            return true;  // Element found and deleted
        }

        // Otherwise, perform recursion to search and delete within this element's nested elements
        const deleted = delete_json(uid, el);
        
        // If an element was deleted in the recursion, stop further search
        if (deleted) {
            return true;
        }
    }

    return false;  // No matching element found
}


/**
 * Modify a part of the json
 */
function modify_part_json() {

}

/**
 * Insert a new part of the json
 */
function insert_json() {

}

modify_json('delete', "e344a921-960a-4491-bd54-cc515789e1b0")
console.log(JSON.stringify(json, null, 4))

// test examples
// console.log('before modify delete')
// console.log(JSON.stringify(json, null, 4))

// modify_part_json('delete');

// console.log('after modify delete')
// console.log(JSON.stringify(json, null, 4))

// console.log('before modify insert')
// console.log(JSON.stringify(json, null, 4))

// modify_part_json('insert');

// console.log('after modify insert')
// console.log(JSON.stringify(json, null, 4))


// console.log('before modify')
// console.log(JSON.stringify(json, null, 4))

// modify_part_json('modify');

// console.log('before modify')
// console.log(JSON.stringify(json, null, 4))