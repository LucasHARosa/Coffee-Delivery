import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart'
import { Order } from './pages/Order'


export function Router() {
  return (
    <Routes>
      <Route path="/Coffee-Delivery/" element={<DefaultLayout />}>
        <Route path="/Coffee-Delivery/" element={<Home />} />
        <Route path="/Coffee-Delivery/cart" element={<Cart/>} />
        <Route path="/Coffee-Delivery/order" element={<Order/>}/>
      </Route>
    </Routes>
  )
}
