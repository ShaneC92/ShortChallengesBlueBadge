import './Navbar.css'

// Function name matches file name
const Navbar = ({ links }) => {
   // return must have one parent element
   return (
      <nav>
         {links.map((link) => (
            <a href={link} target='blank'>{link}</a>
         ))}
      </nav>
   )
}

// Makes it available for import
export default Navbar;