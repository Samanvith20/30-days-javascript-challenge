class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummyNode = new ListNode();
    let current = dummyNode;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        // Move the current pointer forward
        current = current.next;
    }
    
    // Attach the remaining part of l1 or l2
    current.next = l1 !== null ? l1 : l2;
    
    return dummyNode.next;
}

function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array for easy printing
function listToArray(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    return result;
}

// Test cases for Merge Two Sorted Lists
const l1 = arrayToList([1, 2, 4]);
const l2 = arrayToList([1, 3, 4]);
console.log(listToArray(mergeTwoLists(l1, l2))); // [1, 1, 2, 3, 4, 4]
