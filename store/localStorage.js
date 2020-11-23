export const state = () => ({
    _user: {
       phone: '',
       name: ''
    },    
  })
  
export const mutations = {
    setUser(state, data) {
       state._user = data
    },      
  
}