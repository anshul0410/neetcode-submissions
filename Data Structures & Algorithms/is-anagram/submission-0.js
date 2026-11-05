class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        let hashForS = {}
        let hashForT = {}
        let flag = true
        for (let i=0; i<s.length; i++) {
            if (!hashForS[s[i]]) hashForS[s[i]] = 1
            hashForS[s[i]]++
        }
        console.log(hashForS, 'hashForS')
        for (let j=0; j<t.length; j++) {
            if (!hashForT[t[j]]) hashForT[t[j]] = 1
            hashForT[t[j]]++
        }
        console.log(hashForT, 'hashForT')
        for (const [key, value] of Object.entries(hashForS)) {
            if (!hashForT[key] || !(hashForT[key] === hashForS[key])) {
                flag = false
                break;
            }
        }
        return flag
    }
}
