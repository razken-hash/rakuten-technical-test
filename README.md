# Rakuten Technical Test

## Question 1:

```ts
const main = function () {
    console.log("A");
    setTimeout(function () {
    console.log("B");
    }, 1000);
    console.log("C");
};
main();
```

###### Output: **Answer 4: A C B**
More precisely and because ``` console.log() ``` adds a break line at the end, the output is like this:

```
A
C
B
```

---

## Question 2:

```ts
import React, { useState, useEffect } from "react";
export default function App() {
    const [count, setCount] = useState(10);
    useEffect(
        function () {
            setCount(count * 0.5);
        },
        []
    );
    return <div className="hello">Your counter is: {count}</div>
}
```

###### Output: **Answer 3: Your counter is 5**
The execution of the hook ``` useEffect ``` call setCount to update the value of ``` count ``` to ``` count * 0.5 = 10 * 0.5 = 5 ```, and then the new value of ``` count ```  is rendered in the template.

```
Your counter is 5
```