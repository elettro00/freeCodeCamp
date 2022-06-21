//link => https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

/* challenge description: 

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.

*/

//solution

function union(a, b) {
    let res = []
    for (let i = 0; i < a.length; i++) {
        res.push(a[i])
        res.push(b[i])
    }
    return res
}

function count(a, b) {
    let r = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i][1] == b) {
            r++
        }
    }
    return r
}

function order(a) {
    return a.sort(function (a, b) {
        return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0
    })
}

function updateInventory(arr1, arr2) {

    if (arr2.length == 0) return order(arr1)
    if (arr1.length == 0) return order(arr2)

    let newArr = []
    let temp = union(arr1, arr2)
    let un = order(temp)
    
    for (let i = 0; i < arr1.length + arr2.length; i++) {
        let t = un.shift()
        for (let j = 0; j < un.length; j++) {
            if (t[1] == un[j][1]) {
                newArr.push([un[j][0] + t[0], t[1]])
            }
        }

        if (count(union(arr1, arr2), t[1]) == 1) {
            newArr.push(t)
        }
    }

    return newArr
}