<template>
    <form id="step3" @submit.prevent="onSubmit">
      <div class="container">
        <div class="tableAside">
          <div class="table">
            <table>
              <thead>
                <tr>
                  <strong class="access">Access to:</strong>
                  <th>View only</th>
                  <th>Create</th>
                  <th>Approve</th>
                  <th>Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <strong class="allBelow">All below</strong>
                  <td><input type="checkbox" v-model="viewAll"></td>
                  <td><input type="checkbox" v-model="createAll"></td>
                  <td><input type="checkbox" v-model="approveAll"></td>
                  <td><input type="checkbox" v-model="payAll"></td>
                </tr>
                <tr>
                  <span class="title">Warehouse requests</span>
                  <td><input type="checkbox" name="Warehouse requests (view only):" v-model="view.warehouseRequest"></td>
                  <td><input type="checkbox" name="Warehouse requests (create):" v-model="create.warehouseRequest"></td>
                  <td><input type="checkbox" name="Warehouse requests (approve):" v-model="approve.warehouseRequest"></td>
                </tr>
                <tr>
                  <span class="title">Purchase requests</span>
                  <td><input type="checkbox" name="Purchase requests (view only):" v-model="view.purchaseRequest"></td>
                  <td><input type="checkbox" name="Purchase requests (create):" v-model="create.purchaseRequest"></td>
                  <td><input type="checkbox" name="Purchase requests (approve):" v-model="approve.purchaseRequest"></td>
                </tr>
                <tr>
                  <span class="title">Requests for proposals</span>
                  <td><input type="checkbox" name="Requests for proposals (view only):" v-model="view.proposalsRequest"></td>
                  <td><input type="checkbox" name="Requests for proposals (create):" v-model="create.proposalsRequest"></td>
                  <td><input type="checkbox" name="Requests for proposals (approve):" v-model="approve.proposalsRequest"></td>
                </tr>
                <tr>
                  <span class="title">Purchase oreders</span>
                  <td><input type="checkbox" name="Purchase oreders (view only):" v-model="view.purchaseOrders"></td>
                  <td><input type="checkbox" name="Purchase oreders (create):" v-model="create.purchaseOrders"></td>
                  <td><input type="checkbox" name="Purchase oreders (approve):" v-model="approve.purchaseOrders"></td>
                </tr>
                <tr>
                  <span class="title">Receipts</span>
                  <td><input type="checkbox" name="Receipts (view only):" v-model="view.receipts"></td>
                  <td><input type="checkbox" name="Receipts (create):" v-model="create.receipts"></td>
                  <td><input type="checkbox" name="Receipts (approve):" v-model="approve.receipts"></td>
                </tr>
                <tr>
                  <span class="title">Invoices</span>
                  <td><input type="checkbox" name="Invoices (view only):" v-model="view.invoices"></td>
                  <td><input type="checkbox" name="Invoices (create):" v-model="create.invoices"></td>
                  <td><input type="checkbox" name="Invoices (approve):" v-model="approve.invoices"></td>
                  <td><input type="checkbox" name="Invoices (pay):" v-model="pay.invoices"></td>
                </tr>
                <tr>
                  <span class="title">Expenses</span>
                  <td><input type="checkbox" name="Expenses (view only):" v-model="view.expenses"></td>
                  <td><input type="checkbox" name="Expenses (create):" v-model="create.expenses"></td>
                  <td><input type="checkbox" name="Expenses (approve):" v-model="approve.expenses"></td>
                  <td><input type="checkbox" name="Expenses (pay):" v-model="pay.expenses"></td>
                </tr>
              </tbody>
            </table>

          </div>
          <aside class="aside">
            <h4>Management: <span class="info"></span></h4>
            <div class="form-control-check">
              <input type="checkbox" id="managementAllBelow" v-model="managementAllBelow">
              <label for="managementAllBelow"><strong>All below</strong></label>
            </div>
            <div class="form-control-check">
              <input type="checkbox" id="configuration" name="Configuration" v-model="management.configuration">
              <label for="configuration">Configuration</label>
            </div>
            <div class="form-control-check">
              <input type="checkbox" id="suppliersItems" name="Suppliers and items" v-model="management.suppliersItems">
              <label for="suppliersItems">Suppliers and items</label>
            </div>
            <div class="form-control-check">
              <input type="checkbox" id="budgets" name="Budgets" v-model="management.budgets">
              <label for="budgets">Budgets</label>
            </div>
            <div class="form-control-check">
              <input type="checkbox" id="warehouseManager" name="Warehouse manager" v-model="management.warehouseManager">
              <label for="warehouseManager">Warehouse manager</label>
            </div>
            <div class="form-control-check">
              <input type="checkbox" id="reports" name="Reports" v-model="management.reports">
              <label for="reports">Reports</label>
            </div>
            <div class="form-control-check">
              <input type="checkbox" id="admin" name="Admin" v-model="management.admin">
              <label for="admin">Admin (Full access) <span class="warning"></span></label>
            </div>
          </aside>
        </div>
        <div class="infoText">
          <span class="info"></span>
          <span>The user becomes a <a href="#">Power user</a> if at least ONE of the following roles is selected: Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.</span>
        </div>
        <footer class="footer">
          <small class="danger" v-if="required">Choose at least one role</small>
          <small class="danger" v-else-if="allStepsRequired">All steps required</small>
          <small class="primary" v-else-if="submited">Submited!</small>
          <button type="submit" class="submit"></button>
        </footer>
        
      </div>
    </form>
</template>

<script>
import { reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
export default {
emits: ['disable'],
setup(_, {emit}) {
  const store = useStore()
  const viewAll = ref(false)
  const createAll = ref(false)
  const approveAll = ref(false)
  const payAll = ref(false)
  const required = ref(false)
  const allStepsRequired = ref(false)
  const isChecked = ref(false)
  const submited = ref(false)

  const view = reactive({
    warehouseRequest: false,
    purchaseRequest: false,
    proposalsRequest: false,
    purchaseOrders: false,
    receipts: false,
    invoices: false,
    expenses: false,
  })
  const create = reactive({
    accessAllBelow: false,
    warehouseRequest: false,
    purchaseRequest: false,
    proposalsRequest: false,
    purchaseOrders: false,
    receipts: false,
    invoices: false,
    expenses: false,
  })
  const approve = reactive({
    accessAllBelow: false,
    warehouseRequest: false,
    purchaseRequest: false,
    proposalsRequest: false,
    purchaseOrders: false,
    receipts: false,
    invoices: false,
    expenses: false,
  })
  const pay = reactive({
    accessAllBelow: false,
    invoices: false,
    expenses: false,
  })
  
  const managementAllBelow = ref(false)
  const management = reactive({
    configuration: false,
    suppliersItems: false,
    budgets: false,
    warehouseManager: false,
    reports: false,
    admin: false
  })

  watch([viewAll, createAll, approveAll, payAll, managementAllBelow, view, create, approve, pay], 
    ([viewAllVal, createAllVal, approveAllVal, payAllVal, managementVal], 
    [viewAllPrev, createAllPrev, approveAllPrev, payAllPrev]) => {
    for (const v in view) {
      if (viewAllVal !== viewAllPrev) view[v] = viewAllVal ? true : false
      if (view[v]) isChecked.value = true 
    }
    for (const c in create) {
      if (createAllVal !== createAllPrev) create[c] = createAllVal ? true : false
      if (create[c]) isChecked.value = true 
    }
    for (const a in approve) {
      if (approveAllVal !== approveAllPrev) approve[a] = approveAllVal ? true : false
      if (approve[a]) isChecked.value = true 
    }
    for (const p in pay) {
      if (payAllVal !== payAllPrev) pay[p] = payAllVal ? true : false
      if (pay[p]) isChecked.value = true 
    }
    for (const m in management) management[m] = managementVal ? true : false
  })

  const onSubmit = () => {
    required.value = false
    allStepsRequired.value = false
    if (!isChecked.value) {
      required.value = true
    }
    if (!store.state.step1Done || !store.state.step2Done) {
      allStepsRequired.value = true
    } else {
      store.state.step3Done = true
      store.state.step3Data = new FormData(document.querySelector('#step3'))
      submited.value = true

      console.group('Main Info')
      for (const [key, value] of store.state.step1Data) {
        console.log(`${key}: ${value}\n`)
      }
      console.groupEnd()

      console.group('Available Locations')
      for (const [key, value] of store.state.step2Data) {
        console.log(`${key}: ${value}\n`)
      }
      console.groupEnd()

      console.group('Roles')
      for (const [key, value] of store.state.step3Data) {
        console.log(`${key}: ${value}\n`)
      }
      console.groupEnd()

      emit('disable')
    }
  }

  return {
    viewAll,
    createAll,
    approveAll,
    payAll,
    view,
    create,
    approve,
    pay,
    managementAllBelow,
    management,
    required,
    allStepsRequired,
    submited,
    onSubmit
  }
}
}
</script>

<style scoped>
@import url('../style.css');
.tableAside {
  display: flex;
  padding: 24px 0 0 24px;
}
.table {
  border-right: 1px solid rgb(0, 0, 0, .1);
  padding-right: 40px;
}
table {
  border-spacing: 0;
}
th {
  text-align: left;
  padding: 0 8px 24px 8px;
  color: #676F8F;
  border-spacing: 0;
}
td {
  text-align: center;
  padding-bottom: 16px;
}
tr:last-child td {
  padding-bottom: 0;
}
.access {
  color: #676F8F;
}
.allBelow {
  color: #1D2452;
}
.title {
  color: #1D2452;
}
.aside {
  padding-left: 31px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.aside h4 {
  color: #676F8F;
  display: flex;
  margin-bottom: 24px;
}
.aside .form-control-check {
  display: flex;
  margin-bottom: 16px;
}
.aside .form-control-check:last-child {
  margin-top: auto;
  margin-bottom: 0;
  flex-direction: row;
}
.aside .form-control-check:last-child label {
  display: flex;
  align-items: center;
}
.warning {
  display: flex;
  width: 24px;
  height: 24px;
  background: url('../assets/warning.svg');
  background-position: center;
  margin-left: 16px;
}
.infoText {
  width: 636px;
  background: rgba(244, 244, 255, 0.5);
  border-radius: 8px;
  margin: 33px 24px;
  padding: 10px 12px 10px 14px;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  color: rgba(29, 36, 82, .5);
  line-height: 130.02%;
}
.infoText .info {
  min-width: 19.5px;
  margin: 0 10px 0 0;
}
.footer {
  justify-content: flex-end;
  border-top: 1px solid rgb(0, 0, 0, .1);
}
.submit {
  width: 115px;
  height: 40px;
  background-color: #fff;
  background-image: url('../assets/submit.svg');
  border: none;
  outline: none;
  cursor: pointer;
  transition: .3s;
}
.submit:hover {
  transition: .3s;
  opacity: .8;
}

@media screen and (max-width: 800px) {
  .tableAside {
    flex-direction: column;
  }
  .table {
    border-right: none;
  }
  .aside {
    padding-left: 0;
    margin-top: 30px;
  }
  .infoText {
    width: auto;
  }
}
@media screen and (max-width: 580px) {
  th {
    text-align: center;
  }
  td {
    padding-bottom: 30px;
  }
  .footer {
    flex-direction: column-reverse;
    align-items: center;
  }
  .submit {
    margin-bottom: 15px;
    padding: 0;
  }
}
</style>