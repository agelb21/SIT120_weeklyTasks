<script setup>
//Select Effort
import { ref } from 'vue'
const selected = ref('')

//used to filter lists
const important = ref()
const urgent = ref()
const completed = ref()
const displayToDo = ref(true)
</script>


<script>
//list object and method    
export default {
    name: "Task",
    data() {
        return {
            taskTitle: "",
            selected: "",
            message: "",
            tasks: []
        };
    },
    methods:{
        addTask() {
            this.tasks.push({
                taskTitle: this.taskTitle,
                selected: this.selected,
                message: this.message,
                important: false,
                urgent: false,
                completed: false,
                
            })
        }
    }
}  
   
</script>

<template>
    <!--Add new task form-->
    <div className="newtasksection">
        <!--Task Title-->
        <input
        v-model="taskTitle"
        placeholder="New Task Title"        
        />

        <div className="taskdetails">
            <div>
                <!-- Describe Task -->
                <textarea v-model="message" placeholder="Details for task"></textarea>  
            </div>
            <div>
                <!-- Select Effort -->
                <select v-model="selected">
                    <option disabled value="">Level of effort</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>
        </div>
        <!-- Save Task btn -->
        <button @click="addTask">Add Task</button>   
    </div>

        <!-- btn to toggle display -->
    <div className="listselectbtns">
        <button @click="displayToDo=true" className="todopg">To-Do List</button> 
        <button @click="displayToDo=false" className="completedpg">Completed</button>
    </div>

    <!-- list outputs -->
    <!--v-if applies and the v-for-->
    <div v-if="displayToDo" className="todolistpg">
        <div className="taskq1"><!-- Urgent and Important -->
            <span>Urgent & Important</span>
            <template v-for="task in tasks" >
                <div v-if="task.urgent && task.important && !task.completed" class="taskitemcss">
                    <h2 className="taskrow">{{task.taskTitle}}</h2>
                    <span className="taskrowright"> Effort: {{task.selected}}</span>
                    <div className="taskrowright">
                        <input type="checkbox" id="important" v-model="task.important" />
                        <label for="important">Important </label>
                        <input type="checkbox" id="urgent" v-model="task.urgent" />
                        <label for="urgent">Urgent</label>
                    </div>
                    <div className="taskrow">
                        <span >Description:</span> <br>
                        <textarea >{{task.message}}</textarea>
                    </div>
                    <div className="taskrowright">
                        <input type="checkbox" id="completed" v-model="task.completed" />
                        <label for="completed">completed</label>
                    </div>
                </div>   
            </template>
        </div>
    

        <div className="taskq2"><!-- Urgent and Not Important -->
            <span>Not Urgent & Important</span>
            <div v-for="task in tasks" >
                <div v-if="task.urgent && !task.important && !task.completed" class="taskitemcss">
                    <h2 className="taskrow">{{task.taskTitle}}</h2>
                    <span className="taskrowright"> Effort: {{task.selected}}</span>
                    <div className="taskrowright">
                        <input type="checkbox" id="important" v-model="task.important" />
                        <label for="important">Important </label>
                        <input type="checkbox" id="urgent" v-model="task.urgent" />
                        <label for="urgent">Urgent</label>
                    </div>
                    <div className="taskrow">
                        <span >Description:</span> <br>
                        <textarea >{{task.message}}</textarea>
                    </div>
                    <div className="taskrowright">
                        <input type="checkbox" id="completed" v-model="task.completed" />
                        <label for="completed">completed</label>
                    </div>
                </div>   
            </div>        
        </div>

        <div className="taskq3"><!-- Not Urgent and Important -->
            <span>Urgent & Not Important</span>
            <div v-for="task in tasks" >
                <div v-if="!task.urgent && task.important && !task.completed" class="taskitemcss">
                    <h2 className="taskrow">{{task.taskTitle}}</h2>
                    <span className="taskrowright"> Effort: {{task.selected}}</span>
                    <div className="taskrowright">
                        <input type="checkbox" id="important" v-model="task.important" />
                        <label for="important">Important </label>
                        <input type="checkbox" id="urgent" v-model="task.urgent" />
                        <label for="urgent">Urgent</label>
                    </div>
                    <div className="taskrow">
                        <span >Description:</span> <br>
                        <textarea >{{task.message}}</textarea>
                    </div>
                    <div className="taskrowright">
                        <input type="checkbox" id="completed" v-model="task.completed" />
                        <label for="completed">completed</label>
                    </div>   
                </div>
            </div>
        </div>

        <div className="taskq4"><!-- Not Urgent and Not Important -->
            <span>Not Urgent & Not Important</span>
            <div v-for="task in tasks" >
                <div v-if="!task.urgent && !task.important && !task.completed" class="taskitemcss">
                    <h2 className="taskrow">{{task.taskTitle}}</h2>
                    <span className="taskrowright"> Effort: {{task.selected}}</span>
                    <div className="taskrowright">
                        <input type="checkbox" id="important" v-model="task.important" />
                        <label for="important">Important </label>
                        <input type="checkbox" id="urgent" v-model="task.urgent" />
                        <label for="urgent">Urgent</label>
                    </div>
                    <div className="taskrow">
                        <span >Description:</span><br>
                        <textarea >{{task.message}}</textarea>
                    </div>
                    <div className="taskrowright">
                        <input type="checkbox" id="completed" v-model="task.completed" />
                        <label for="completed">completed</label>
                    </div>   
                </div>  
            </div>
        </div>
    </div>

        <div v-if="!displayToDo" className="complistpg"> <!-- completed -->     
            <h2>Completed</h2>
            <div v-for="task in tasks" >
                <div v-if="task.completed" class="taskitemcss">
                    <h2 className="taskrow">{{task.taskTitle}}</h2>
                    <span className="taskrowright"> Effort: {{task.selected}}</span>
                    <div className="taskrowright">
                        <input type="checkbox" id="important" v-model="task.important" />
                        <label for="important">Important </label>
                        <input type="checkbox" id="urgent" v-model="task.urgent" />
                        <label for="urgent">Urgent</label>
                    </div>
                    <div className="taskrow">
                        <span >Description:</span><br>
                        <textarea >{{task.message}}</textarea>
                    </div>
                    <div className="taskrowright">
                        <input type="checkbox" id="completed" v-model="task.completed" />
                        <label for="completed">completed</label>
                    </div>   
                </div>
            </div>
        </div>
    
</template>
