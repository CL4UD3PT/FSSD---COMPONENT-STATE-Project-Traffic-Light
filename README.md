<!--hide-->
# 🚦 Traffic Light with React
<!--endhide-->

<p align="center">
  <img height="500px" src="./src/img/traffic-light-anim.gif?raw=true" />
</p>

Sometimes we want to create components with an internal state that changes over time, imagine a traffic light that changes color every 3 seconds, for that we normally will make a variable color and set it to a default color:

```js
let color = "blue";
```

But we want our component to re-render and change the website HTML every time the variable color changes, that's why we use hooks:

```js
//        ↓ variable name             ↓ default value
const [ color, setColor] = useState("red");
//               ⬆ function to change the color
```

From now on, every time we use the function `setColor` to change the variable color, the component will re-render and the entire traffic light HTML will be updated with the new color. 

## 📝 Features
- When any light is clicked (selected) it glows. The other lights stop glowing.

### 🔥 Bonus features
+ A button that when you click on it, cycles the traffic light selected color between red, green, yellow and other colors that might be added.  
+ A button that when clicked it ads an extra color "purple" to the traffic light.

### 🎨 Design feature
+ The lights z-index are updated so that the glowing one is at a hight level index than the others.


### 👥 Contributors
This and many other projects are built by students as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).