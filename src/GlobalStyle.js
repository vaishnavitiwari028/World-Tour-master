import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
font-size:10px;
--clr-bg: #e6e6fa;
--clr-bg-rgb: 230, 230, 250;
--clr-primary:#000080;
--clr-primary-rgb:0, 0, 128;
--clr-lightblue:#1b8cfe;
--clr-lightblue-rgb:27, 140, 254;
--clr-secondary:black;
--font-bold:400;
--font-md:300;
--font-light:200;

@media(max-width:700px){
  font-size:9px;
}
@media(max-width:500px){
  font-size:8px;
}
}
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
body{
    overflow-x:hidden;
    position:relative;
    margin:0;
    padding:0;
    min-height:100vh;
    font-family: 'Poppins', sans-serif;
    background-color:var(--clr-bg);
    font-size:2.3rem;
    position:relative;
    ::after {
    content: "";
    height: 200px;
    display: block;
    /* position:absolute; */
  }
}

a{
    text-decoration:none;
    color:black;
}
`;
