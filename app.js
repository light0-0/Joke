const joke=document.querySelector('#jokes')
const button=document.querySelector('button')



const addnewJoke=async () =>{
    const jokeText=await getDad();

        const newLi= document.createElement('LI');
        newLi.append(jokeText);  
        joke.append(newLi);

}



const getDad= async () =>  {
    try{
        const config ={headers:{Accept:'application/json'}}
        const res = await axios.get(' https://icanhazdadjoke.com/',config)
        return res.data.joke
    }catch{
        return "NO jokes FOR you"
    }
  
}

button.addEventListener('click',addnewJoke )