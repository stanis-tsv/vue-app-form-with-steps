<template>
  <form id="step1" @submit.prevent="next">
    <div class="container">
      <div class="form-control">
        <label for="name">First Name</label>
        <input type="text" id="name" name="First Name" v-model="name" />
      </div>

      <div class="form-control">
        <label for="surname">Last Name</label>
        <input type="text" id="surname" name="Last Name" v-model="surname" />
      </div>
      
      <div class="form-control">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="Email Address" v-model="email" />
      </div>

      <div class="form-control">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="Phone Number" v-model="phone" />
      </div>

      <div class="form-control">
        <label for="position">Position</label>
        <input type="text" id="position" name="Position" v-model="position" />
      </div>

      <div class="form-control">
        <label for="companies">Avaliable in company</label>
        <select id="companies" name="Avaliable in company" v-model="companies">
          <option value="Precoro">Precoro</option>
          <option value="Google">Google</option>
          <option value="Microsoft">Microsoft</option>
        </select>
      </div>
    </div>

    <footer class="footer">
      <div class="form-control">
        <input type="checkbox" id="activeInAllCompanies" name="Active In All Companies" v-model="activeInAllCompanies">
        <label for="activeInAllCompanies">Active in all companies <span class="info"></span></label>
      </div>
      <div class="btn">
        <small class="danger" v-if="required">All fields is required</small>
        <button type="submit" class="next"></button>
      </div>
    </footer>
  </form>
</template>

<script>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
export default {
setup() {
    const store = useStore()
    const name = ref('')
    const surname = ref('')
    const email = ref('')
    const phone = ref('')
    const position = ref('')
    const companies = ref(null)
    const activeInAllCompanies = ref(false)
    const required = ref(false)

    watch([name, surname, email, phone, position, companies], ([nameVal, surnameVal, emailVal, phoneVal, positionVal, companiesVal]) => {
      if (nameVal && surnameVal && emailVal && phoneVal && positionVal && companiesVal) required.value = false
    })

    const next = () => {
      required.value = false
      if (!name.value || !surname.value || !email.value || !phone.value || !position.value || !companies.value) {
        required.value = true
      } else {
        store.state.step1Data = new FormData(document.querySelector('#step1'))
        store.state.step1Done = true
        store.state.step++
      }
    }

    return {
      name,
      surname,
      email,
      phone,
      position,
      companies,
      next,
      activeInAllCompanies,
      required
    }
  }
}
</script>

<style scoped>
@import url('../style.css');
.container {
  padding: 24px 0 24px 24px;
  display: flex;
  flex-wrap: wrap;
}
.footer {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(0, 0, 0, .1);
} 
.footer .form-control {
  display: flex;
  align-items: center;
}
.footer input {
  width: 44px;
  appearance: none;
  border: none;
  outline: none;
  margin: 0 8px 0 0;
  padding: 0;
}
.footer input:after {
  content: '';
  display: flex;
  width: 44px;
  height: 24px;
  background: url('../assets/toggleOff.svg');
  background-size: 44px 24px;
  cursor: pointer;
}
.footer input:checked:after {
  background: url('../assets/toggleOn.svg');
}
.footer label {
  display: flex;
  align-self: center;
  color: #1D2452;
  font-size: 16px;
  font-weight: 500;
}

@media screen and (max-width: 580px) {
  .footer {
    flex-direction: column;
    align-items: center;
  }
  .footer label {
    font-size: 12px;
    align-items: center;
  }
  .footer .form-control {
    margin-bottom: 20px;
  }
  .btn {
    flex-direction: column-reverse;
    align-items: center;
  }
  .next {
    margin-bottom: 15px;
    padding: 0;
  }
}

</style>