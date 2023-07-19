import { Outlet, Link } from "react-router-dom"

const CountryDetailLayout = () => {
  return (
    <div className="detail-container">
      <Link to='..' className="back-link">
        <ion-icon name="arrow-back-outline"></ion-icon>Back
      </Link>
      <Outlet />
    </div>
  )
}
export default CountryDetailLayout