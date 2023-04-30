<template>
  <div class="pageContainer">

    <header class="header">
      <h1>Invite User <span class="close"></span></h1>
      <div class="stepper">
        <Stepper v-for="s in steps" :key="s.title" :steps="s" />
      </div>
    </header>

    <KeepAlive>
      <Step1 v-if="$store.state.step === 1" />
    </KeepAlive>
    
    <KeepAlive>
      <Step2 v-if="$store.state.step === 2" />
    </KeepAlive>
  
    <KeepAlive>
      <Step3 v-if="$store.state.step === 3" @disable="disable" />
    </KeepAlive>

  </div>
</template>

<script>
import Stepper from '@/components/Stepper'
import Step1 from '@/views/Step1'
import Step2 from '@/views/Step2'
import Step3 from '@/views/Step3'
import { ref } from 'vue'
export default {
	components: { Stepper, Step1, Step2, Step3 },
  setup() {
    const steps = ref([
      {id: 1, title: 'Main Info'},
      {id: 2, title: 'Avaliable Locations'},
      {id: 3, title: 'Roles'}
    ])

    const disable = () => {
      document.querySelectorAll('input').forEach(i => i.disabled = true)
      document.querySelector('button').disabled = true
    }
    
    return {
      steps,
      disable
    }
  }
}
</script>

<style scoped>
.pageContainer {
  background-color: #fff;
  border-radius: 16px;
}
.header {
  padding: 24px 24px 0 24px;
  border-bottom: 1px solid rgb(0, 0, 0, .1);
}
.header h1 {
  display: flex;
  justify-content: space-between;
  margin: 0 0 18px 0;
  padding: 0;
  font-size: 24px;
  color: #1D2452;
}
.close {
  display: flex;
  align-self: center;
  background-image: url('../assets/close.svg');
  width: 26px;
  height: 26px;
  transition: .3s;
}
.close:hover {
  transition: .3s;
  opacity: .8;
  cursor: pointer;
}
.stepper {
  display: flex;
}
.footer {
  padding: 30px 20px;
}

@media screen and (max-width: 580px) {
  .stepper {
    justify-content: flex-start;
  }
}
</style>