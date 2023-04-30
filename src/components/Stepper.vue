<template>
  <div class="steps">
    <div class="step" :class="{active: $store.state.step === steps.id}" @click="disableClick(steps.id)">
      <span v-if="ifStep1Done(steps.id) || ifStep2Done(steps.id) || $store.state.step3Done" class="stepDone"></span>
      <span v-else class="stepNumber">{{ steps.id }}</span>
      <h4>{{ steps.title }}</h4>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  props: ['steps'],
  setup() {
    const store = useStore()
    const disableClick = id => {
      if (!store.state.step3Done) {
        store.commit('changeStep', id)
      }
    }
    return {
      disableClick,
      ifStep1Done: id => id === 1 && store.state.step1Done,
      ifStep2Done: id => id === 2 && store.state.step2Done
    }
  }
}
</script>

<style scoped>
.steps {
  display: flex;
  flex-direction: row;
  margin-right: 24px;
  color: #5E6A75;
}
.step {
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
}
.stepNumber {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(65, 90, 218, 0.05);
  font-size: 14px;
  font-weight: 600;
}
.stepDone {
  display: flex;
  width: 30px;
  height: 30px;
  background: url('../assets/stepDone.svg');
}
.step h4 {
  align-self: center;
  margin-left: 8px;
  font-size: 16px;
}
.active {
  color: #415ADA;
  border-color: #415ADA;
  transition: .3s;
}

@media screen and (max-width: 580px) {
  .step h4,
  .stepNumber {
    font-size: 12px;
  }
  .steps {
    margin-bottom: 10px;
    margin-right: 10px;
  }
}
</style>