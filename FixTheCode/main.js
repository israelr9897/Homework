import { greetUser } from "./userSystem.js";
import { getPendingTasks } from "./todo.js";
import { addTemperature } from "./tempTracker.js";


greetUser("Alice");
greetUser("Bob");
greetUser("Alice")

console.log(JSON.stringify(getPendingTasks())); // Should only show tasks that are NOT completed


addTemperature(20);
addTemperature(25);
addTemperature(30); // Should log average after each addition
