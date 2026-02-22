# 🚀 My Assignment Answer

### **1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

- **Use getElementByID**: we select an ID & its return a single element.
- **Use getElementByClassName**: we select class using this & its return a HTML Collection.
- **Use querySelector**: we select a CSS & its return a only a single element.
- **Use querySelectorAll**: we select multiple CSS & its return a NodeList.

---

###  **2. How do you create and insert a new element into the DOM?**

- // Create
  const div = document.createElement("div");

- // add any html tag
  div.innerText = "I am a learner";

- // add to div //
  parent.appendChild(div);


### **3. What is Event Bubbling? And how does it work?**

  Event bubbling is a event which goes from child to parent . It works from lower to upper. If a parent has 1 child & if I add event on child I can get first child then parent.


### **4. What is Event Delegation in JavaScript? Why is it useful?**

  Delegation is an event where using a parent to handle events for its children. We use it to get better performance , make element more dynamic and less coding.


### **5. What is the difference between preventDefault() and stopPropagation() methods?**

  when we use preventDefault() means it stops default browser behavior.
  when we use stopPropagation() means it stops event bubbling only get that element not parent or others.



