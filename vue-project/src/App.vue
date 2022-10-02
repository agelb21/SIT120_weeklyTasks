<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import './index.css'

</script>

<template>
  <div className="row">

    <div className="sides"> <!--side pannel-->
      <nav >
        <br>            
        <RouterLink to="/homepage" className="tab1">Using Task List</RouterLink> 
        <br>
        <br>
        <RouterLink to="/newtask" className="tab2">New Task</RouterLink>
      </nav>
    </div>

    <div className="content"> <!--content in centered-->
      <RouterView />
    </div>

    <div className="sides"> <!--side pannel-->
    </div>

  </div>

</template>

