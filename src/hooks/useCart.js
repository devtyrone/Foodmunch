import { useContext } from 'react'
import { CartContext } from '../context/CartContextCreator'

export const useCart = () => {
  return useContext(CartContext)
}