<template>
  <form id="step2" @submit.prevent="next">
    <div class="container">
      <div class="form-control">
        <label for="mainLocation">Main Location <span class="danger">*</span></label>
        <select name="Main Location" id="mainLocation" v-model="mainLocation">
          <option value="Main Precoro US">Main Precoro US</option>
          <option value="Precoro EU">Precoro EU</option>
          <option value="Precoro UA">Precoro UA</option>
        </select>
      </div>

      <div class="form-control-check">
        <input type="checkbox" id="selectAllLocations" v-model="selectAllLocations">
        <label for="selectAllLocations">Select All Locations</label>
      </div>

      <h4>Avaliable Locations</h4>
      
      <div class="availableLocations">
        <div class="form-control-check">
          <input type="checkbox" id="berlin" name="Berlin" v-model="avaliableLocations.berlin">
          <label for="berlin">Berlin</label>
        </div>
        <div class="form-control-check">
          <input type="checkbox" id="poland" name="Poland" v-model="avaliableLocations.poland">
          <label for="poland">Poland Office</label>
        </div>
        <div class="form-control-check">
          <input type="checkbox" id="venice" name="Venice" v-model="avaliableLocations.venice">
          <label for="venice">Venice Office</label>
        </div>
        <div class="form-control-check">
          <input type="checkbox" id="mexico" name="Mexico" v-model="avaliableLocations.mexico">
          <label for="mexico">Mexico</label>
        </div>
        <div class="form-control-check">
          <input type="checkbox" id="usa" name="USA" v-model="avaliableLocations.usa">
          <label for="usa">USA Office</label>
        </div>
        <div class="form-control-check">
          <input type="checkbox" id="ukraine" name="Ukraine" v-model="avaliableLocations.ukraine">
          <label for="ukraine">Ukraine Kyiv Lukivska 7 Main Office</label>
        </div>
        <div class="form-control-check">
          <input type="checkbox" id="canada" name="Canada" v-model="avaliableLocations.canada">
          <label for="canada">Canada</label>
        </div>
      </div>
    </div>

    <footer class="footer">
      <small class="danger" v-if="required">Choose at least one location</small>
      <button type="submit" class="next"></button>
    </footer>
  </form>
</template>

<script>
import { reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
export default {
setup() {
  const store = useStore()
  const mainLocation = ref(null)
  const selectAllLocations = ref(false)
  const required = ref(false)
  const isChecked = ref(false)
  const avaliableLocations = reactive({
    berlin: false,
    poland: false,
    venice: false,
    mexico: false,
    usa: false,
    ukraine: false,
    canada: false
  })

  watch(selectAllLocations, val => {
    for (const l in avaliableLocations) avaliableLocations[l] = val ? true : false
  })

  const next = () => {
    required.value = false
    isChecked.value = false
    for (const l in avaliableLocations) {
      if (avaliableLocations[l]) isChecked.value = true
    }
    if (!selectAllLocations.value && !isChecked.value) {
      required.value = true
    } else {
      store.state.step2Data = new FormData(document.querySelector('#step2'))
      store.state.step2Done = true
      store.state.step++
    }
  }

  return {
    avaliableLocations,
    mainLocation,
    selectAllLocations,
    next,
    required
  }
}
}
</script>

<style scoped>
@import url('../style.css');
.container {
  padding: 24px 0 10px 24px;
}
.form-control-check {
  display: flex;
}
#mainLocation {
  margin-bottom: 24px;
}
h4 {
  font-weight: 500;
  font-size: 16px;
  color: #1D2452;
  opacity: 0.6;
  margin: 16px 0 10px;
}
.container .availableLocations {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
}
.availableLocations .form-control-check {
  flex: 50%;
  margin-bottom: 17px;
}
.line {
  display: flex;
  width: 100%;
}
.footer {
  justify-content: flex-end;
  border-top: 1px solid rgb(0, 0, 0, .1);
}

@media screen and (max-width: 666px) {
  .container .availableLocations {
    flex-direction: column;
    flex-wrap: nowrap;
    width: auto;
  }
}
@media screen and (max-width: 580px) {
  .footer {
    flex-direction: column-reverse;
    align-items: center;
  }
}
</style>