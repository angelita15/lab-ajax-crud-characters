class APIHandler {
  constructor (baseUrl) {
    this.axiosApp= axios.create({  
   baseURL:'https://minions-api.herokuapp.com/'
  }) 
}

  getFullList () {  return this.axiosApp.get('/characters')

  }

  getOneRegister (characterId) { 
     return this.axiosApp.get(`/characters/${characterId}`)

  }

  createOneRegister ( info) {
    return this.axiosApp.post("characters",info)

  }

  updateOneRegister (id, info) {
    return this.axiosApp.put(`/characters/${charactersid}`,info)

  }

 
 deleteOneRegister (characterId) {
    return this.axiosApp.delete(`/characters/${characterId}`)


    
  }
}
