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

# Coding Exercise:

The project is deployed online and available at:

[https://rakuten-technical-test.netlify.app/](https://rakuten-technical-test.netlify.app/)

## ✅ Features Implemented

1. **Visual Component Implemented**  
   - User interface built using reusable React components.
   - **MUI (Material UI)** is used for styling and layout.

2. **Responsiveness**  
   - The UI adapts to different screen sizes.

3. **Conditional Rendering**  
   - Components do **not render** if required data is `null`.

4. **Mocked Data Integration**  
   - Data is fetched from an external mocked source located inside the **`ProductsRepository`**.

5. **Testing Included**  
   - Written using **React Testing Library**.
   - **5/5 tests successfully passed**.

---

## 🚀 How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/razken-hash/rakuten-technical-test.git
cd rakuten-technical-test
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run in development mode
```bash
npm run dev
```

---

## 🧪 Testing
Run all tests using:
```bash
npx jest --runTestsByPath src/components/ProductCard/ProductCard.test.tsx
```

---

Made With ♥ By ABDERRAZAK KENNICHE

