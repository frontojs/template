import { observable, action } from 'mobx'

const store = observable({
  modal: null,
  setModal: action(node =>
    store.modal = node
  )
})

export default store
