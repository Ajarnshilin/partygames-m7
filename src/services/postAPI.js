import React from 'react'

export default function componentDidMount() {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body
  }
  fetch('http://localhost:3333/posts', requestOptions)
      .then(async response => {
          const data = await response.json();
          if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }
          this.setState({ postId: data.id })
      })
    }