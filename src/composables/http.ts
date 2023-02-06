/*网络请求封装体*/
type IObject = Record<string, any> & Object

function checkError(error: any, data: IObject) {
  if (error.value) return error.value
  return data.value
}

class Http {
  async get(api: string, query?: IObject) {
    if (query) {
      api += '?'
      Object.keys(query).forEach((str, i) => {
        api += `${str}=${query[str]}&`
      })
    }
    const { data, error } = await useFetch(`${api}`, {
      method: 'GET',
    })
    return checkError(error, data)
  }

  async post(api: string, body: IObject) {
    const { data, error } = await useFetch(api, {
      method: 'POST',
      body,
    })
    return checkError(error, data)
  }

  async put(api: string, body: IObject) {
    const { data, error } = await useFetch(api, {
      method: 'PUT',
      body,
    })
    return checkError(error, data)
  }

  async delete(api: string, body: IObject) {
    const { data, error } = await useFetch(api, {
      method: 'DELETE',
      body,
    })
    return checkError(error, data)
  }
}

export default new Http()
