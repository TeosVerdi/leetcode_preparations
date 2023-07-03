/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const interSet = {}
    for (let i = 0; i < nums1.length; i++) {
        if (!interSet.hasOwnProperty(nums1[i].toString())) {
            interSet[nums1[i].toString()] = 1;
        } else {
            interSet[nums1[i].toString()] += 1;
        }
    }
    const intersectionArray = [];
    for (let i = 0; i < nums2.length; i++) {
        if (interSet.hasOwnProperty(nums2[i].toString()) && interSet[nums2[i].toString()] > 0) {
            intersectionArray.push(nums2[i]);
            interSet[nums2[i].toString()] -= 1;
        }
    }

    return intersectionArray;
};

// another solution involves sorting both arrays