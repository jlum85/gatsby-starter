# JavaScript Arrays: Arrays are objects
#array    #executeprogram

Most programming languages have an array data type that's separate from the language's other data types. JavaScript is unusual here: in JavaScript, arrays are a special type of object. We can see this by looking at typeof someArray, which will return 'object', just like it does for regular objects.
typeof ['a', 'b', 'c']
'object' 

However, there are some weird effects if we look closely. Most notably, we can assign to arbitary properties of the array.
```javascript
var arr = ['a', 'b', 'c']
arr['five'] = 5
arr.five    // 5 
 
var arr = ['a', 'b', 'c']
arr.six = 6
arr['six']   // 6 

// Extra properties assigned to an array don't change its length. 
var arr = ['a', 'b', 'c']
arr['five'] = 5
arr.length
```

In most cases, adding extra properties to arrays in this way is a mistake. When other programmers read the code and see an array, they'll expect it to act as a normal array. They won't expect it to have these extra properties.
Here's an example. Imagine that we're building a service where one account can have multiple team members. The more team members a customer has, the more money we charge them, so we need to keep track of both the members and the limit.
Somewhere in our application, we have a teamMembers array. We could store a limit number directly on the array, indicating how many team members are allowed in this account.
```javascript
const teamMembers = ['ebony@example.com',  'fang@example.com']
teamMembers.limit = 3
teamMembers.length < teamMembers.limit      //   true 
```

This works, but it's not a good idea because it's surprising. 999 out of 1,000 arrays are just arrays. When 1 in 1,000 of them also has extra properties like this, other programmers won't expect it, which can lead them to make mistakes. For example, they might build a new array and pass it to a function, not realizing that the function expects the array to have this unusual limit property. It's better to use an object in this case.
```javascript
const team = {
  members: [ 'ebony@example.com', 'fang@example.com'],
  memberLimit: 2,
}
team.members.length < team.memberLimit     //  false 
```
Now we have two nicely separate concepts: there's a list of team members, and there's a numerical limit on the number of members. Together, the members and the member limit form a team object. If a function needs the full team, we can pass that object; but if it only needs the members, we can pass only the array. Nothing about this is surprising or unusual.

A couple more details about extra properties on arrays. First, looping with forEach will ignore extra array properties.
```javascript
var arr1 = ['a', 'b']
var arr2 = []
arr1.five = 5
arr1.forEach(i => arr2.push(i))
arr2       // ['a', 'b'] 
```
Second, extra properties will show up if we treat the array like an object. For example, we can use Object.keys to list the properties in an object. We'll get all of the array indexes (not the values), plus any extra properties that we added.
```javascript
var arr1 = ['a', 'b']
var arr2 = []
arr1.five = 5
Object.keys(arr1)
// ['0', '1', 'five']
``` 
