import axios from 'axios'

type bodyRequest = {
  email: string
  password: string
  username?: string
}

export type Product = {
  name: string
  price: number
  id?: number
  model: string
  color: string
  brand: string
}
export type ProductStructure3 = {
  name: string
  brand: string
  model: string
  data: {
    price: number
    color: string
  }[]
}

const api = axios.create({
  baseURL: 'http://localhost:3001',
})

export const saveTokenToLocalStorage = (token: string) => {
  localStorage.setItem('token', token)
}

// Função para obter o token do localStorage
export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token')
}

// Função para remover o token do localStorage
export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('token')
}

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint)

  return data
}

export const requestLogin = async (endpoint: string, body: bodyRequest) => {
  const { data } = await api.post(endpoint, body)
  const token = data.token
  saveTokenToLocalStorage(token) // Salvar o token no localStorage
  setToken(token) // Definir o token nos cabeçalhos do Axios
  return data
}

export const requestProductUpdate = async (endpoint: string, body: Product) => {
  const { data } = await api.put(endpoint, body)
  return data
}

export const requestNewProduct = async (
  endpoint: string,
  body: Product | ProductStructure3[],
) => {
  const { data } = await api.post(endpoint, body)
  return data
}

const token = getTokenFromLocalStorage()
if (token) {
  setToken(token) // Definir o token nos cabeçalhos do Axios
}

export const requestRemoveProduct = async (endpoint: string) => {
  const { data } = await api.delete(endpoint)
  return data
}

export default api
