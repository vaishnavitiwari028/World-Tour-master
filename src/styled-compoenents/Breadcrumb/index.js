import React, { createRef, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

export const BreadcrumbItem = styled(Link).attrs(
  ({ selected, to, currentPath }) => {
    if (!selected) return { to };
    else return { to: currentPath };
  }
)`
  text-decoration: none;
  font-size: 2.3rem;
  margin: 0 0.2.5em;
  color: ${({ selected }) => (selected ? `darkviolet` : `var(--clr-primary)`)};
  cursor: ${({ selected }) => (selected ? `default` : `cursor`)};
  :hover {
    color: ${({ selected }) =>
      selected ? `darkviolet` : `rgba(var(--clr-primary-rgb), .7)`};
  }
  &::before {
    content: " > ";
    color: var(--clr-primary);
  }
`;
const BreadcrumbContainer = styled.div`
  margin-right: auto;
  background-color: transparent;
`;
const currentPathRef = createRef();

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const params = useParams();
  useEffect(() => {
    currentPathRef.current = pathname;
  }, [pathname]);

  if (params.region === "region") return null;

  const extracedPath = (paramValue, index) => {
    if (currentPathRef.current) {
      let pathArr = currentPathRef?.current?.split("/");
      let path1 = pathArr.slice(0, pathArr.indexOf(paramValue) + 1).join("/");
      let path2 = pathArr.slice(0, index + 2).join("/");
      return path1 || path2;
    }
    return pathname;
  };

  return (
    <BreadcrumbContainer>
      {Object.values(params).map((paramValue, index) => (
        <BreadcrumbItem
          key={`breadcrumb-${index}`}
          selected={index === Object.values(params).length - 1}
          to={
            index !== Object.values(params).length - 1 &&
            extracedPath(paramValue, index)
          }
          currentPath={pathname}
        >
          {paramValue.replaceAll("_", " ")}
        </BreadcrumbItem>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
