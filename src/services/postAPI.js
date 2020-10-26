import axios from 'axios'

export default function RegisterAPI(values) {
  console.log(values)
    axios ( {
      url: 'http://localhost:3333/posts',
      method: 'post',
      data: {
        "title": values.title,
        "details": values.email,
        "party_size": values.party_size
      },
      responseType: 'json', 
    }) .then(response => {
      console.log(response)

    })
}