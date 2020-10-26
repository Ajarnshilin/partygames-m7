import axios from 'axios'

export default function RegisterAPI(values) {
  console.log(values)
    axios ( {
      url: 'http://localhost:3333/posts',
      method: 'post',
      data: {
        "title": values.title,
        "details": values.email,
        "party_size": values.party_size,
        "user_id": values.user_id
      },
      responseType: 'json', 
    }) .then(response => {
      console.log(response)

    })
}