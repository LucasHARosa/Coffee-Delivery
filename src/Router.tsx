import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart'
import { Order } from './pages/Order'


export function Router() {
  return (
    <Routes>
      <Route path="/Coffee_delivery/" element={<DefaultLayout />}>
        <Route path="/Coffee_delivery/" element={<Home />} />
        <Route path="/Coffee_delivery/cart" element={<Cart/>} />
        <Route path="/Coffee_delivery/order" element={<Order/>}/>
      </Route>
    </Routes>
  )
}