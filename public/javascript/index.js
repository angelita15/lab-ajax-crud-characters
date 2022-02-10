const charactersAPI = new APIHandler();


//traer todos
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then(response => { 
       let text = ''  
       response.data.forEach( elem => text += 
        ` <div class="character-info">
        <div class="name">${elem.name}</div>
        <div class="occupation"> ${elem.occupation}</div>
        <div class="cartoon"> ${elem.cartoon}</div>
        <div class="weapon">  ${elem.weapon}</div>
      </div>`)
       document.querySelector('.characters-container').innerHTML= text
       })
       .catch(err=>console.log(err))
    }
  );


  //traer uno 
  document.getElementById('fetch-one').addEventListener('click', function (event) {
     const id = document.getElementById("character-id").value
    charactersAPI.getOneRegister(id)
    .then(tal => {

     const character = tal.data
     let text = ' '
     text += 
     ` <div class="character-info">
        <div class="name">${tal.data.name}</div>
        <div class="occupation"> ${tal.data.occupation}</div>
        <div class="cartoon"> ${tal.data.cartoon}</div>
        <div class="weapon">  ${tal.data.weapon}</div>
      </div>`
        document.querySelector('.characters-container').innerHTML= text
       })
    .catch(err => console.log(err))
    })

  });
  

  //borrar uno! AYER FUNCIONO NSEE QUE PASA 

  document.getElementById('delete-one').addEventListener('click', function (event) {
     
    //  const id = document.querySelector('#delete-character').value

    // // const button = document.querySelector('#delete-one')

    // // function deleteOne(characterId) {
    // //   charactersAPI
    // //     .deleteOneRegister(characterId)
    // //     .then( responser  => {
    // //       button.setAttribute('class', 'green')
    // //     })
    // //     .catch(err => {
    // //       button.setAttribute('class', 'red')
    // //       console.log(err)
    // //     })
    // // }
    // // deleteOne(id)
})




  //editar personaje y aqui igual
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  //   const inputs = document.querySelectorAll('#edit-character-form')

  //  const id = inputs[0].value

  //   const createCharacter = {
  //     name: inputs[1].value,
  //     occupation: inputs[2].value,
  //     weapon: inputs[3].value,
  //     cartoon: inputs[4].checked
  //   }

  //   charactersAPI
  //     .updateOneRegister(id, createCharacter)
  //     .then()
  //     .catch(err => console.log(err))
  });




  // crear nuevo
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
       

    event.preventDefault();
    const input= document.querySelectorAll('#new-character-form input')

    const characterInfo = {
    name: input[0].value,
    occupation: input[1].value,
    weapon: input[2].value,
    cartoon: input[3].checked
  }
      charactersAPI
        .createOneRegister(characterInfo)
        .then((createcharacter) => {
          console.log(createcharacter)
          document.querySelector("#send-create").style.backgroundColor = "green";
        })
        .catch((err) => {
          document.querySelector("#send-create").style.backgroundColor = "red";
          console.log(err);
        }) 
  })
      
     